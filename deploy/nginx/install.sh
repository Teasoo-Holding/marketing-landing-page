#!/usr/bin/env bash
# Installs the ESG Horizon error pages and maintenance switch into nginx.
# Run on the server as root from this folder:  bash install.sh
# Safe to run twice. Keeps a backup and restores it if the new config fails nginx -t.
set -euo pipefail
CONF=/etc/nginx/sites-enabled/esghorizon
HERE="$(cd "$(dirname "$0")" && pwd)"

install -m 644 "$HERE/esghorizon-error-pages.conf" /etc/nginx/snippets/esghorizon-error-pages.conf
install -m 644 "$HERE/esghorizon-maintenance.conf" /etc/nginx/snippets/esghorizon-maintenance.conf
mkdir -p /var/www/esghorizon/maintenance
cp "$CONF" /root/esghorizon.nginx.before-error-pages

python3 - "$CONF" <<'PY'
import re, sys
path = sys.argv[1]
text = open(path).read()
HOSTS = ("server_name esghorizon.africa", "server_name staging-marketing.esghorizon.africa")
INCLUDES = "    include snippets/esghorizon-error-pages.conf;\n    include snippets/esghorizon-maintenance.conf;\n"

out, i, changed = [], 0, 0
for m in re.finditer(r"server\s*\{", text):
    if m.start() < i:
        continue
    depth, j = 0, m.end() - 1
    while True:  # find the matching closing brace
        if text[j] == "{": depth += 1
        elif text[j] == "}":
            depth -= 1
            if depth == 0: break
        j += 1
    block = text[m.start():j + 1]
    out.append(text[i:m.start()])
    if "listen 443" in block and any(h in block for h in HOSTS) and "esghorizon-error-pages.conf" not in block:
        block = re.sub(r"(\n[ \t]*server_name [^\n]*;\n)", lambda x: x.group(1) + INCLUDES, block, count=1)
        block = re.sub(r"[ \t]*error_page 404 /404\.html;", "        include snippets/esghorizon-error-pages.conf;", block)
        changed += 1
    out.append(block)
    i = j + 1
out.append(text[i:])
open(path, "w").write("".join(out))
print(f"Updated {changed} server block(s)")
PY

if nginx -t; then
  systemctl reload nginx
  echo "Done. Error pages and maintenance switch are active."
else
  cp /root/esghorizon.nginx.before-error-pages "$CONF"
  echo "nginx -t failed, so the previous config was restored. Nothing changed."
  exit 1
fi
