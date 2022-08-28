import { request } from '@/utils/request';

export const apiUserSignUp = data => request.post('/users', data);