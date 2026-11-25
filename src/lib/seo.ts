import type { Metadata } from "next";

const OG_IMAGE = { url: "/og-image.png", width: 1200, height: 630, alt: "ESG Horizon — ESG reporting software for Africa" };

/**
 * Page metadata from the SEO brief: the title is used exactly as written (no template suffix),
 * and the share cards repeat the same title and description. Next.js replaces a parent's
 * openGraph object rather than merging it, so the image is repeated here.
 */
export function pageMeta({ title, description, path }: { title: string; description: string; path: string }): Metadata {
	return {
		title: { absolute: title },
		description,
		alternates: { canonical: path },
		openGraph: { type: "website", siteName: "ESG Horizon", title, description, url: path, images: [OG_IMAGE], locale: "en_US" },
		twitter: { card: "summary_large_image", site: "@esghorizon", title, description, images: [{ url: OG_IMAGE.url, alt: OG_IMAGE.alt }] },
	};
}
