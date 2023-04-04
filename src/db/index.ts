import { createClient } from '@supabase/supabase-js'
require('dotenv').config()
const client = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_KEY)

export default client;

