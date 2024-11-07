import {
    Avatar,
    Button,
    Dropdown,
    DropdownItem,
    DropdownMenu,
    DropdownTrigger,
    Image,
    Link,
    Navbar,
    NavbarBrand,
    NavbarContent,
    NavbarItem,
} from '@nextui-org/react';
import { useAuth } from '../../../app/providers/AuthProvider.tsx';
import { useLocation } from 'react-router-dom';

const NAVBAR_LINKS = [
    {
        href: '/dashboard',
        title: 'Dashboard',
    },
    {
        href: '/wishlists',
        title: 'Wishlists',
    },
    { href: '/santa', title: 'Santa' },
];

export const Header = () => {
    const { token, logout } = useAuth();
    const location = useLocation();

    return (
        <Navbar isBordered maxWidth="full">
            <NavbarBrand className="gap-5">
                <Image src="assets/logo.jpg" radius="lg" width="50px"></Image>
                <p className="text-2xl tracking-widest font-sans">
                    PODAROCHNAYA
                </p>
            </NavbarBrand>
            <NavbarContent className="gap-4" justify="center">
                {NAVBAR_LINKS.map((link) => (
                    <NavbarItem isActive={location.pathname === link.href}>
                        <Link color="foreground" href={link.href}>
                            {link.title}
                        </Link>
                    </NavbarItem>
                ))}
            </NavbarContent>
            <NavbarContent justify="end">
                {!token ? (
                    <>
                        <NavbarItem className="hidden lg:flex">
                            <Link href="/login">Login</Link>
                        </NavbarItem>
                        <NavbarItem>
                            <Button
                                as={Link}
                                color="primary"
                                href="#"
                                variant="flat"
                            >
                                Sign Up
                            </Button>
                        </NavbarItem>
                    </>
                ) : (
                    <Dropdown placement="bottom-end">
                        <DropdownTrigger>
                            <Avatar
                                isBordered
                                as="button"
                                className="transition-transform"
                                color="secondary"
                                // todo user
                                name="Jason Hughes"
                                size="sm"
                                src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
                            />
                        </DropdownTrigger>
                        <DropdownMenu
                            aria-label="Profile Actions"
                            variant="flat"
                        >
                            <DropdownItem
                                key="logout"
                                color="danger"
                                onClick={logout}
                            >
                                Log Out
                            </DropdownItem>
                        </DropdownMenu>
                    </Dropdown>
                )}
            </NavbarContent>
        </Navbar>
    );
};

export default Header;
