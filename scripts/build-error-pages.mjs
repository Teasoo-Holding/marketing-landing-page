/**
 * Builds the standalone error pages nginx serves for server-level errors (public/errors/<code>.html).
 *
 * They are plain HTML with inline styles and no JavaScript bundle, so they still work when the
 * Next.js app, the blog or the API is down. The 404 page the site itself shows comes from
 * src/app/not-found.tsx; errors/404.html is the same message for nginx to use elsewhere.
 *
 *   node scripts/build-error-pages.mjs
 */
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const OUT = join(dirname(fileURLToPath(import.meta.url)), "..", "public", "errors");
const EMAIL = "digital@teasooconsulting.com";
const HELP_LINKS = [
	["Home", "/"],
	["Features", "/features/"],
	["Pricing", "/pricing/"],
	["Blog", "/blog"],
	["Contact", "/contact/"],
];

// kind: "client" = something about the request; "server" = our fault, worth retrying.
const PAGES = {
	400: { kind: "client", title: "Bad request", text: "Your browser sent a request we could not understand. Check the address, or go back and try again." },
	401: { kind: "client", title: "Sign-in required", text: "You need to be signed in to view this page. Sign in and try again." },
	403: { kind: "client", title: "Access denied", text: "You do not have permission to view this page. If you think you should, contact us and we will help." },
	404: { kind: "client", title: "Page not found", text: "We could not find the page you were looking for. It may have moved, or the address may be mistyped." },
	405: { kind: "client", title: "Action not allowed", text: "This page does not support that kind of request. Go back and try again from the page you were on." },
	408: { kind: "client", title: "Request timed out", text: "Your request took too long to reach us, often because of a slow connection. Please try again." },
	410: { kind: "client", title: "Page removed", text: "This page has been permanently removed and is no longer available." },
	413: { kind: "client", title: "File too large", text: "What you tried to send is larger than we accept. Try a smaller file." },
	414: { kind: "client", title: "Address too long", text: "The web address is too long for us to process. Check the link, or start again from the home page." },
	429: { kind: "client", title: "Too many requests", text: "You have sent a lot of requests in a short time. Please wait a minute, then try again." },
	500: { kind: "server", title: "Something went wrong", text: "We hit an unexpected problem on our side. Our team has been notified. Please try again in a moment." },
	501: { kind: "server", title: "Not supported", text: "This feature is not available yet. Please go back and try something else." },
	502: { kind: "server", title: "Temporarily unavailable", text: "This part of ESG Horizon is not responding right now. It is usually back within a few minutes, so please try again shortly." },
	503: { kind: "server", title: "Down for maintenance", text: "We are making some improvements and will be back shortly. Thank you for your patience." },
	504: { kind: "server", title: "Taking too long", text: "Our service took too long to respond. Please try again in a moment." },
};

const esc = (s) => s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

function page(code, { kind, title, text }) {
	const retry = kind === "server" || code === 408 || code === 429;
	const primary = retry
		? `<a class="btn" href="" onclick="location.reload();return false">Try again</a>`
		: code === 401
			? `<a class="btn" href="https://app.esghorizon.africa/login">Sign in</a>`
			: `<a class="btn" href="/">Go to the home page</a>`;
	const secondary = retry || code === 401 ? `<a class="btn btn-ghost" href="/">Go to the home page</a>` : `<a class="btn btn-ghost" href="/contact/">Contact us</a>`;
	const links = HELP_LINKS.map(([label, href]) => `<li><a href="${href}">${label}</a></li>`).join("");
	return `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="robots" content="noindex">
<title>${code} ${esc(title)} | ESG Horizon</title>
<link rel="icon" href="/favicon.ico" sizes="32x32">
<style>
*{box-sizing:border-box}
html,body{margin:0}
body{min-height:100vh;display:flex;flex-direction:column;font-family:Inter,system-ui,-apple-system,"Segoe UI",Roboto,Arial,sans-serif;color:#1f2633;background:linear-gradient(180deg,#f7fdfb 0%,#f0faf7 55%,#e8f6f2 100%);line-height:1.6}
header,footer{padding:20px 20px}
header{max-width:1100px;width:100%;margin:0 auto}
header img{height:72px;width:auto;display:block}
main{flex:1;display:flex;align-items:center;justify-content:center;padding:24px 20px 56px}
.card{max-width:560px;width:100%;text-align:center}
.code{font-size:13px;font-weight:800;letter-spacing:.2em;text-transform:uppercase;color:#0c7c72;margin:0}
.big{font-family:Georgia,"Playfair Display",serif;font-style:italic;font-weight:700;color:#0c7c72;font-size:clamp(72px,18vw,132px);line-height:1;margin:8px 0 4px}
h1{font-size:clamp(26px,5vw,36px);line-height:1.2;margin:8px 0 12px;letter-spacing:-.01em}
p.text{font-size:17px;color:#465062;margin:0 auto 28px;max-width:46ch}
.actions{display:flex;flex-wrap:wrap;gap:12px;justify-content:center}
.btn{display:inline-block;padding:12px 22px;border-radius:8px;background:#0c7c72;color:#fff;font-weight:600;text-decoration:none;border:2px solid #0c7c72}
.btn:hover{background:#0a6a61;border-color:#0a6a61}
.btn-ghost{background:#fff;color:#0c7c72}
.btn-ghost:hover{background:#eef8f6;color:#0a6a61}
a:focus-visible{outline:3px solid #0c7c72;outline-offset:3px}
nav{margin-top:36px}
nav ul{list-style:none;padding:0;margin:0;display:flex;flex-wrap:wrap;gap:8px 20px;justify-content:center;font-size:15px}
nav a{color:#0c7c72;text-decoration:none;font-weight:500}
nav a:hover{text-decoration:underline}
.help{margin-top:28px;font-size:14px;color:#5b6472}
.help a{color:#0c7c72}
footer{text-align:center;font-size:13px;color:#5b6472}
</style>
</head>
<body>
<header><a href="/" aria-label="ESG Horizon home"><img src="/logo-full.png" alt="ESG Horizon" width="72" height="72"></a></header>
<main>
<div class="card">
<p class="code">Error ${code}</p>
<p class="big" aria-hidden="true">${code}</p>
<h1>${esc(title)}</h1>
<p class="text">${esc(text)}</p>
<div class="actions">${primary}${secondary}</div>
<nav aria-label="Helpful links"><ul>${links}</ul></nav>
<p class="help">Need help? Email <a href="mailto:${EMAIL}">${EMAIL}</a></p>
</div>
</main>
<footer>&copy; ESG Horizon</footer>
</body>
</html>
`;
}

mkdirSync(OUT, { recursive: true });
for (const [code, info] of Object.entries(PAGES)) {
	writeFileSync(join(OUT, `${code}.html`), page(Number(code), info));
}
console.log(`Wrote ${Object.keys(PAGES).length} error pages to public/errors/`);
