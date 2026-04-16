/** Vihanga API base (no trailing path) — same host/path prefix as legacy `API_BASE_URL` usage */
export const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_BASE_URL || "https://vihanga.talentspotifyapp.com/api";

/**
 * Full URL for request-demo POST — same as old `utilities/cons.js` `baseURL`
 * (legacy: https://vihanga.talentspotifyapp.com/api/landing/requestDemo)
 */
export const baseURL =
  process.env.NEXT_PUBLIC_REQUEST_DEMO_URL || `${API_BASE_URL}/landing/requestDemo`;

/** Landing careers/jobs API base — same as old `landingApiBase` */
export const landingApiBase =
  process.env.NEXT_PUBLIC_LANDING_API_BASE || "https://ai.talentspotifyapp.com/api/landing";

/** Company ID for candidates from career-page applications — same as old `companyIdForLanding` */
export const companyIdForLanding =
  process.env.NEXT_PUBLIC_COMPANY_ID_FOR_LANDING || "6396f7d703546500086f0200";

/** App login URL — same as old `utilities/cons.js` `loginPage` */
export const loginPage =
  process.env.NEXT_PUBLIC_LOGIN_PAGE || "https://ai.talentspotifyapp.com";

/** Cloudinary unsigned upload (same as legacy `BrowseFilesNormal`) — resume → `cvURL` */
export const cloudinaryUploadUrl =
  process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_URL ||
  "https://api.cloudinary.com/v1_1/dbqm9svvp/raw/upload";
export const cloudinaryUploadPreset =
  process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET || "ma7nge92";
