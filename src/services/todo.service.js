const supabase = require('../config/supabase');


exports.createTodo = (data) => supabase.from('todos').insert(data).select().single();
exports.getTodosByUser = (userId) => supabase.from('todos').select('*').eq('user_id', userId);
exports.updateTodo = (id, data) => supabase.from('todos').update(data).eq('id', id).select().single();
exports.deleteTodo = (id) => supabase.from('todos').delete().eq('id', id);
exports.getTodoById = (id) => supabase.from('todos').select('*').eq('id', id).single();
