import { Route, Routes, useHref, useNavigate } from 'react-router-dom';
import { NextUIProvider } from '@nextui-org/react';
import { Layout } from '../../widgets/Layout/ui/Layout.tsx';
import { LoginPage } from '../../pages/LoginPage/components/LoginPage/LoginPage.tsx';
import { RegisterPage } from '../../pages/RegisterPage/components/RegisterPage/RegisterPage.tsx';
import NotFoundPage from '../../pages/NotFoundPage/components/NotFoundPage.tsx';
import { DashboardPage } from '../../pages/DashboardPage/components/DashboardPage/DashboardPage.tsx';
import { WishlistsPage } from '../../pages/WishlistsPage/components/WishlistsPage/WishlistsPage.tsx';

export const Router = () => {
    const navigate = useNavigate();

    return (
        <NextUIProvider navigate={navigate} useHref={useHref}>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route path="login" element={<LoginPage />}></Route>
                    <Route path="sign-up" element={<RegisterPage />}></Route>
                    <Route path="dashboard" element={<DashboardPage />}></Route>
                    <Route path="wishlists" element={<WishlistsPage />}></Route>
                    <Route path="*" element={<NotFoundPage />} ></Route>
                    {/*<Route path="register"></Route>*/}
                </Route>
            </Routes>
        </NextUIProvider>
    );
};

export default Router;