import { request } from '@/utils/request';

export const apiUserSignUp = data => request.post('/users', data);
export const apiUserSignIn = data => request.post('/users/sign_in', data);
export const apiUserSignOut = data => request.delete('/users/sign_out', data);