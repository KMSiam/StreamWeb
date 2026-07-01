// 🛠️ Supabase Configuration
// This file initializes the Supabase client for StreamWeb.

// Use window.env for dynamic configuration (see config.js.example)
const SUPABASE_URL = window.env?.SUPABASE_URL;
const SUPABASE_ANON_KEY = window.env?.SUPABASE_ANON_KEY;

if (!SUPABASE_URL || !SUPABASE_ANON_KEY) {
    console.error('Supabase configuration missing! Please ensure config.js is loaded and window.env is defined.');
}

// Initialize the Supabase Client
const supabaseClient = (SUPABASE_URL && SUPABASE_ANON_KEY)
    ? supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY)
    : undefined;
