const supabase = require('../config/supabase');


exports.createUser = (data) => supabase.from('users').insert(data).select().single();
exports.getUserById = (id) => supabase.from('users').select('*').eq('id', id).single();
exports.deleteUser = (id) => supabase.from('users').delete().eq('id', id);
