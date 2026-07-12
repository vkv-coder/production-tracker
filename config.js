// ============================================================
// PRODUCTION TRACKER - Shared Config
// Supabase Project: Dhobi-digital
// ============================================================

const SUPABASE_URL = "https://jqqnnkzozjskziaizajg.supabase.co";
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImpxcW5ua3pvempza3ppYWl6YWpnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzI5Mjk1ODAsImV4cCI6MjA4ODUwNTU4MH0.sEYeWnm0dvuw8bLSVnQhqmgV8LB-pELjpuVIa3Us1Gg";

const supabaseClient = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

// ============================================================
// Session Helper (simple localStorage based session)
// ============================================================
function getSession() {
    const raw = localStorage.getItem("pr_session");
    return raw ? JSON.parse(raw) : null;
}

function setSession(userObj) {
    localStorage.setItem("pr_session", JSON.stringify(userObj));
}

function clearSession() {
    localStorage.removeItem("pr_session");
}

function requireLogin() {
    const session = getSession();
    if (!session) {
        window.location.href = "index.html";
        return null;
    }
    return session;
}
