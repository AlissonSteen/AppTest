import { createClient } from '@supabase/supabase-js'

const supabaseService = createClient(
    process.env['SUPABASE_URL'],
    process.env['SUPABASE_KEY']
)

export default supabaseService;