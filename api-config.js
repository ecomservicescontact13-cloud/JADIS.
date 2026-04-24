// ═══════════════════════════════════════════════════════════════
//  JADIS — Configuration API (remplace firebase-config.js)
//  Après avoir déployé le Worker Cloudflare, remplace
//  VOTRE_WORKER_URL par l'URL affichée dans le dashboard Cloudflare
//  ex: https://jadis-api.issamboussalah.workers.dev
// ═══════════════════════════════════════════════════════════════

const JADIS_API_URL = 'https://jadis.pages.dev';

// ── Admins ────────────────────────────────────────────────────
const ADMIN_EMAILS = ['issamboussalah131@gmail.com', 'shanedarren42@gmail.com'];

function isAdminEmail(email) {
  if (!email) return false;
  return ADMIN_EMAILS.includes(email.toLowerCase().trim());
}
