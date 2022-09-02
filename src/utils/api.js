import { request } from '@/utils/request';

// Users
export const apiUserSignUp = data => request.post('/users', data);
export const apiUserSignIn = data => request.post('/users/sign_in', data);
export const apiUserSignOut = data => request.delete('/users/sign_out', data);

// Todos
export const apiGetTodos = data => request.get('/todos', data);
export const apiPostTodos = data => request.post('/todos', data);
export const apiDeleteTodos = id => request.delete(`/todos/${id}`);
export const apiToggleTodos = id => request.patch(`/todos/${id}/toggle`);