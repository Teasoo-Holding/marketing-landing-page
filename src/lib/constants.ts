export const CONTACT_EMAIL = "support@esghorizon.africa";

/** Conversion pages that hide site navigation to keep visitors focused */
export const isFocusedPage = (pathname: string) => pathname.startsWith("/contact");
