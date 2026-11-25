"use client";

/**
 * Last-resort page if the root layout itself fails. It replaces the whole document, so it
 * carries its own <html>, <body> and inline styles.
 */
export default function GlobalError({ reset }: { error: Error & { digest?: string }; reset: () => void }) {
  return (
    <html lang="en">
      <body style={{ margin: 0, minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif", color: "#1f2633", background: "#f0faf7", textAlign: "center", padding: "24px" }}>
        <main style={{ maxWidth: 520 }}>
          <p style={{ fontSize: 13, fontWeight: 800, letterSpacing: ".2em", color: "#0c7c72", margin: 0 }}>ERROR 500</p>
          <h1 style={{ fontSize: 32, margin: "12px 0" }}>Something went wrong</h1>
          <p style={{ fontSize: 17, color: "#465062", marginBottom: 28 }}>
            We hit an unexpected problem. Please try again, or email digital@teasooconsulting.com if it keeps happening.
          </p>
          <button onClick={() => reset()} style={{ padding: "12px 22px", borderRadius: 8, border: 0, background: "#0c7c72", color: "#fff", fontWeight: 600, fontSize: 16, cursor: "pointer", marginRight: 12 }}>
            Try again
          </button>
          <a href="/" style={{ color: "#0c7c72", fontWeight: 600 }}>Go to the home page</a>
        </main>
      </body>
    </html>
  );
}
