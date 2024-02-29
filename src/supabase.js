import { createClient } from '@supabase/supabase-js';

// Replace 'YOUR_SUPABASE_URL' and 'YOUR_SUPABASE_API_KEY' with your Supabase project details
const supabaseUrl = 'https://etzanmnsohnoaquqajaj.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImV0emFubW5zb2hub2FxdXFhamFqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDA0OTY4NzYsImV4cCI6MjAxNjA3Mjg3Nn0.eXyRCihjUzfy8ayq6lOblKI8nCBGdl8WB1OndZqljJs';

export const supabase = createClient(supabaseUrl, supabaseKey);
