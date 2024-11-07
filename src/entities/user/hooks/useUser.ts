import { useState } from 'react';
import { useLocalStorage } from './useLocalStorage.ts';
import { User } from '../model/types.ts';
import { AUTH_TOKEN_LOCAL_STORAGE_KEY } from '../constants.ts';

export const useUser = () => {
    const [user, _setUser] = useState<User | null>(null);
    const [token, _setToken] = useState<string | null>(null);
    const { setItem, removeItem } = useLocalStorage();

    const setUser = (user: User) => {
        _setUser(user);
    };

    const removeUser = () => {
        _setUser(null);
    };

    const setToken = (token: string) => {
        _setToken(token);
        setItem(AUTH_TOKEN_LOCAL_STORAGE_KEY, token);
    };

    const removeToken = () => {
        _setToken(null);
        removeItem(AUTH_TOKEN_LOCAL_STORAGE_KEY);
    };

    return { user, token, setUser, setToken, removeUser, removeToken };
};
