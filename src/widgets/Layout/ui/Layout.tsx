import { Outlet } from 'react-router-dom';
import Header from '../../Header/ui/header.tsx';

export const Layout = () => {
    return (
        <>
            <Header></Header>
            <main>
                <Outlet></Outlet>
            </main>
        </>
    );
};
