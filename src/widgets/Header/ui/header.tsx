import {
    Navbar,
    NavbarBrand,
    Image,
    NavbarItem,
    NavbarContent,
    Link,
    Button,
    Avatar,
    Dropdown,
    DropdownTrigger,
    DropdownMenu,
    DropdownItem,
} from '@nextui-org/react';
import { useAuth } from '../../../app/providers/AuthProvider.tsx';

export const Header = () => {
    const { token, logout } = useAuth();

    return (
        <Navbar isBordered maxWidth="full">
            <NavbarBrand className="gap-5">
                <Image src="assets/logo.jpg" radius="lg" width="50px"></Image>
                <p className="text-2xl tracking-widest font-sans">
                    PODAROCHNAYA
                </p>
            </NavbarBrand>
            <NavbarContent className="gap-4" justify="center">
                <NavbarItem>
                    <Link color="foreground" href="/dashboard">
                        Dashboard
                    </Link>
                </NavbarItem>
                <NavbarItem>
                    <Link color="foreground" href="/wishlists">
                        Wishlists
                    </Link>
                </NavbarItem>
                <NavbarItem>
                    <Link color="foreground" href="/santa">
                        Santa
                    </Link>
                </NavbarItem>
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
                            <DropdownItem key="logout" color="danger" onClick={logout}>
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
