
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://lxkqdbdnwhpaenhfcfci.supabase.co'; // Reemplaza con tu URL de Supabase
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imx4a3FkYmRud2hwYWVuaGZjZmNpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzcyMjEwMTcsImV4cCI6MjA1Mjc5NzAxN30.7E2uzFru2hkJTL4tKKaTY5-rC47LEFU85I5cmMVYuw4';


export const supabase = createClient(supabaseUrl, supabaseKey);