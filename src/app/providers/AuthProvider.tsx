import { createContext, ReactNode, useContext, useEffect } from 'react';
import { LoginDTO, User } from '../../entities/user/model/types.ts';
import { useUser } from '../../entities/user/hooks/useUser.ts';
import { useLocalStorage } from '../../entities/user/hooks/useLocalStorage.ts';
import { AUTH_TOKEN_LOCAL_STORAGE_KEY } from '../../entities/user/constants.ts';
import { useNavigate } from 'react-router-dom';
import { getUser, loginUser, registerUser } from '../../entities/user';

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
                navigate('/dashboard');

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

    const fetchUser = async () => {
        try {
            const response = await getUser();

            if (response.data) {
                setUser(response.data);
                navigate('/dashboard');

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
