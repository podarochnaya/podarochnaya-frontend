import api from '../../../shared/api';
import { LoginDTO, User, AuthToken } from '../model/types.ts';

export const getUser = () => {
    return api.get<User>('/me'); // todo
}

export const registerUser = (user: User) => {
    return api.post<AuthToken>('/auth/sign-up', {
        user
    });
}

export const loginUser = (login: LoginDTO) => {
    return api.post<AuthToken>('/auth/sign-in', {
        ...login
    });
}