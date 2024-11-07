import api from '../../../shared/api';
import { AuthToken, LoginDTO, User } from '../../user/model/types.ts';

const BASE_GIFT_URL = '/api/v1/gifts';

export const getUser = () => {
    return api.get<User>(BASE_GIFT_URL); // todo
}

export const registerUser = (user: User) => {
    return api.post<AuthToken>('/api/v1/gifts', {
        user
    });
}

export const loginUser = (login: LoginDTO) => {
    return api.post<AuthToken>('/auth/sign-in', {
        ...login
    });
}