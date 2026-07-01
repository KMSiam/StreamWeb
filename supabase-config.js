// 🛠️ Supabase Configuration
// This file initializes the Supabase client for StreamWeb.
// It uses environment variables defined in config.js (window.env).

const SUPABASE_URL = window.env?.SUPABASE_URL;
const SUPABASE_ANON_KEY = window.env?.SUPABASE_ANON_KEY;

if (!SUPABASE_URL || !SUPABASE_ANON_KEY) {
    console.error('Supabase configuration missing! Please ensure config.js is loaded and contains SUPABASE_URL and SUPABASE_ANON_KEY.');
}

// Initialize the Supabase Client
const supabaseClient = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
