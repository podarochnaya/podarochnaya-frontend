import { Outlet } from 'react-router-dom';
import Header from '../../Header/ui/header.tsx';
import { Toaster } from 'react-hot-toast';

export const Layout = () => {
    return (
        <>
            <Toaster ></Toaster>
            <Header></Header>
            <main>
                <Outlet></Outlet>
            </main>
        </>
    );
};
