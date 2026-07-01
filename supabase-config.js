// 🛠️ Supabase Configuration
// This file initializes the Supabase client for StreamWeb.
// It retrieves credentials from window.env defined in config.js.

const SUPABASE_URL = window.env?.SUPABASE_URL || '';
const SUPABASE_ANON_KEY = window.env?.SUPABASE_ANON_KEY || '';

if (!SUPABASE_URL || !SUPABASE_ANON_KEY) {
    console.error('Supabase credentials are missing! Please check config.js');
}

// Initialize the Supabase Client
const supabaseClient = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
