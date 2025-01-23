import { createClient } from '@supabase/supabase-js';

// Reemplaza con tu URL y clave pública de acceso
const supabase = createClient(
  'https://lxkqdbdnwhpaenhfcfci.supabase.co',  // URL de tu proyecto
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imx4a3FkYmRud2hwYWVuaGZjZmNpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzcyMjEwMTcsImV4cCI6MjA1Mjc5NzAxN30.7E2uzFru2hkJTL4tKKaTY5-rC47LEFU85I5cmMVYuw4'  // Clave pública
);

export default supabase;