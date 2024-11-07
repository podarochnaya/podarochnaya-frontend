import { createContext, ReactNode, useContext, useEffect, useState } from 'react';
import { LoginDTO, User } from '../../entities/user/model/types.ts';
import { useUser } from '../../entities/user/hooks/useUser.ts';
import { useLocalStorage } from '../../entities/user/hooks/useLocalStorage.ts';
import { AUTH_TOKEN_LOCAL_STORAGE_KEY } from '../../entities/user/constants.ts';
import { useNavigate } from 'react-router-dom';
import { getUser, loginUser, registerUser, updateUserBack } from '../../entities/user';

interface AuthContext {
    token: string | null;
    user: User | null;
    setToken: (token: string) => void;
    setUser: (user: User) => void;
    login: (login: LoginDTO) => Promise<void>;
    register: (user: User) => Promise<void>;
    logout: () => void;
    fetchUser: () => Promise<void>;
}

const AuthContext = createContext<AuthContext>({
    token: null,
    user: null,
    setToken: () => {},
    setUser: () => {},
    login: () => (Promise.reject()),
    register: () => (Promise.reject()),
    logout: () => {},
    fetchUser: () => (Promise.reject()),
});

const AuthProvider = ({ children }: { children?: ReactNode }) => {
    const { user, token, setUser, removeUser, setToken, removeToken } =
        useUser();
    const { getItem } = useLocalStorage();
    const [error, setError] = useState<string | null>(null);



    useEffect(() => {
        const token = getItem(AUTH_TOKEN_LOCAL_STORAGE_KEY);

        if (token) setToken(token);
    }, [setToken, getItem]);
    const navigate = useNavigate();

    const login = async (data: LoginDTO) => {
        try {
            const response = await loginUser(data);

            if (response.data) {
                setToken(response.data.token);
                navigate("/dashboard")
                return;
            }
            throw new Error(response.statusText);
        } catch (err) {
            console.error(err);
        }
    };

    const logout = () => {
        removeToken();
        removeUser();
        navigate("/login");
    };

    const register = async (data: User) => {
        try {
            const response = await registerUser(data);

            if (response.data) {
                setToken(response.data.token);
                navigate('/dashboard');

                return;
            }
            throw new Error(response.statusText);
        } catch (err) {
            console.error(err);
        }
    };


const updateUser = async (userId: number, userData: User, token: string) => {
    console.log(userData);
        const response = await updateUserBack(userId, userData, token);  // Вызов API для обновления
        if (response.data) {
            setUser(response.data); // Обновляем данные пользователя
        } else {
            throw new Error('Failed to update user');
}
};

    const fetchUser = async () => {
        try {
            if (!token) {
                throw new Error('No token found');
            }
            const response = await getUser(token);

            if (response.data) {
                setUser(response.data);
                return;
            }
            throw new Error(response.statusText);
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <AuthContext.Provider
            value={{
                user,
                token,
                login,
                logout,
                fetchUser,
                setToken,
                setUser,
                register,
                updateUser
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    return useContext(AuthContext);
};

export default AuthProvider;
