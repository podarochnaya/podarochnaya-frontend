import {
    Button,
    Card,
    CardBody,
    CardHeader,
    Chip,
    Divider,
    Link,
} from '@nextui-org/react';
import { PlusIcon } from '../../../../shared/components/icons/PlusIcon/PlusIcon.tsx';
import { LockIcon } from '../../../../shared/components/icons/UnlockIcon/LockIcon.tsx';
import { UnlockIcon } from '../../../../shared/components/icons/LockIcon/UnlockIcon.tsx';
import { useEffect, useState } from 'react';
import api from '../../../../shared/api';
import { WishlistDashboard } from '../../../../entities/wishlist/model/types.ts';

export const WishlistsPage = () => {
    const [wishlists, setWishlists] = useState<WishlistDashboard[]>([]);

    useEffect(() => {
        api.get<WishlistDashboard[]>('api/v1/wishlists').then((res) => {
            if (res.data)
                setWishlists(res.data);
        });
    }, [])

    return (
        <>
            <div className="flex flex-row px-10 py-5 justify-end">
                <Button
                    isIconOnly
                    variant="bordered"
                    as={Link}
                    href="/wishlists/add"
                >
                    {' '}
                    <PlusIcon width="20px" />{' '}
                </Button>
            </div>
            <div className="grid grid-cols-2 gap-10 px-10">
                {wishlists.map((wishlist) => (
                    <Card className="p-3" key={wishlist.id}>
                        <CardHeader>
                            <p className="text-2xl flex items-center w-full justify-between">
                                {wishlist.title}
                                <div className="flex items-center">
                                    {wishlist.visibility !== 'PUBLIC' ? (
                                        <LockIcon width="35px" />
                                    ) : (
                                        <UnlockIcon width="35px" />
                                    )}
                                </div>
                            </p>
                        </CardHeader>
                        <Divider className="mx-3 w-auto"></Divider>
                        <CardBody className="flex-col gap-4">
                            <p className="flex gap-2">
                                Описание:{' '}
                                <p className="text-medium text-neutral-500">
                                    {wishlist.description}
                                </p>
                            </p>
                            <p className="flex gap-2">
                                Статус:{' '}
                                <Chip
                                    size="sm"
                                    color={
                                        wishlist.status === 'OPENED'
                                            ? 'success'
                                            : 'default'
                                    }
                                    className="text-medium font-mono"
                                >
                                    {wishlist.status === 'OPENED'
                                        ? 'Открыт'
                                        : 'Закрыт'}
                                </Chip>
                            </p>
                            <p className="flex gap-2">
                                Дата создания:
                                <p className="text-medium text-neutral-500">
                                    {wishlist.createdAt}
                                </p>
                            </p>
                            <p className="flex gap-2">
                                Пользователи:
                                <p className="text-medium text-neutral-500">
                                    {wishlist.allowedUsers.map(
                                        (email, index) => (
                                            <p key={index}>{email}</p>
                                        ),
                                    )}
                                </p>
                            </p>
                        </CardBody>
                    </Card>
                ))}
            </div>
        </>
    );
};
