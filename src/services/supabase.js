import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://jwhkakovwugecdfcwjpu.supabase.co";
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imp3aGtha292d3VnZWNkZmN3anB1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzkwMzI5MjQsImV4cCI6MjA5NDYwODkyNH0.u_dC-Qha8Pfy3WTinrkjbmN9rC3x799UdpETASlXdoY";

const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
