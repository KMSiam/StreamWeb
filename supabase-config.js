// 🛠️ Supabase Configuration
// This file initializes the Supabase client for StreamWeb.

const SUPABASE_URL = 'https://fpmthljpzedswkyvtuue.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZwbXRobGpwemVkc3dreXZ0dXVlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzUyMjQ2MDksImV4cCI6MjA5MDgwMDYwOX0.jZ94J-6FMGFWHRRoE8aVXBFwtKRGR6bgo7ks6dsuIaw';

// Initialize the Supabase Client
const supabaseClient = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
