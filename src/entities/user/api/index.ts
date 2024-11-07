import api from '../../../shared/api';
import { LoginDTO, User, AuthToken, UserResponse } from '../model/types.ts';

export const getUser = (token: string) => {
  return api.get<UserResponse>('api/v1/users/me', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export const updateUserBack = (userId: number, userData: User, token: string) => {
  return api.put<UserResponse>(`api/v1/users/${userId}`, userData, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
  .catch((error) => {
    // Если ошибка от сервера
    if (error.response) {
      // Проверим, есть ли ошибка и извлечем ее
      const errorMessage = error.response.data?.error || 'Произошла ошибка при обновлении данных';
      const errorCode = error.response.data?.code || 'UNKNOWN_ERROR';

      // Выбрасываем ошибку с нужным сообщением
      throw new Error(`${errorCode}: ${errorMessage}`);
    } else {
      // Если ошибка не от сервера (например, проблемы с сетью)
      throw new Error('Неизвестная ошибка');
    }
  });
};

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
