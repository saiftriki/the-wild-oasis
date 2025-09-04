import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://otwsqknjxebqmtohmppa.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im90d3Nxa25qeGVicW10b2htcHBhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTY0NjA4NTEsImV4cCI6MjA3MjAzNjg1MX0.zGGAjDkLbljgMpeNDPYiF1wcR9DABnb_-SzkM7Ey-qQ";

const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
