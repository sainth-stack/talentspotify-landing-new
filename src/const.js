/** Vihanga API base (no trailing path) — same host/path prefix as legacy `API_BASE_URL` usage */
export const API_BASE_URL =
  import.meta.env.VITE_API_BASE_URL || "https://vihanga.talentspotifyapp.com/api";

/**
 * Full URL for request-demo POST — same as old `utilities/cons.js` `baseURL`
 * (legacy: https://vihanga.talentspotifyapp.com/api/landing/requestDemo)
 */
export const baseURL =
  import.meta.env.VITE_REQUEST_DEMO_URL || `${API_BASE_URL}/landing/requestDemo`;

/** Landing careers/jobs API base — same as old `landingApiBase` */
export const landingApiBase =
  import.meta.env.VITE_LANDING_API_BASE || "https://ai.talentspotifyapp.com/api/landing";

/** Company ID for candidates from career-page applications — same as old `companyIdForLanding` */
export const companyIdForLanding =
  import.meta.env.VITE_COMPANY_ID_FOR_LANDING || "6396f7d703546500086f0200";

/** App login URL — same as old `utilities/cons.js` `loginPage` */
export const loginPage =
  import.meta.env.VITE_LOGIN_PAGE || "https://ai.talentspotifyapp.com";
