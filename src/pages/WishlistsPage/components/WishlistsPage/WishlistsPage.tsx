import {
    Button,
    Card,
    CardBody,
    CardHeader,
    Chip,
    Divider,
} from '@nextui-org/react';
import { PlusIcon } from '../../../../shared/components/icons/PlusIcon/PlusIcon.tsx';
import { UnlockIcon } from '../../../../shared/components/icons/UnlockIcon/UnlockIcon.tsx';
import { LockIcon } from '../../../../shared/components/icons/LockIcon/LockIcon.tsx';

const MOCK_WISHLISTS_LIST = [
    {
        id: 1,
        title: 'Wishlist 1',
        description: 'Для работы',
        status: 'OPENED',
        visibility: 'PUBLIC',
        createdAt: '2007-12-03T10:15:30',
        allowedUsers: ['test@test.ru', 'asd@test.ru', 'qwe@mail.ru'],
    },
    {
        id: 2,
        title: 'Wishlist 2',
        description: 'Для учебы',
        status: 'OPENED',
        visibility: 'PRIVATE',
        createdAt: '2007-12-03T10:15:30',
        allowedUsers: ['test@test.ru', 'asd@test.ru', 'qwe@mail.ru'],
    },
    {
        id: 3,
        title: 'Wishlist 3',
        description: 'Для коллег',
        status: 'CLOSED',
        visibility: 'PUBLIC',
        createdAt: '2007-12-03T10:15:30',
        allowedUsers: ['test@test.ru', 'asd@test.ru', 'qwe@mail.ru'],
    },
];

export const WishlistsPage = () => {
    const wishlists = MOCK_WISHLISTS_LIST;

    return (
        <>
            <div className="flex flex-row px-10 py-5 justify-end">
                <Button isIconOnly variant="bordered">
                    {' '}
                    <PlusIcon width="20px" />{' '}
                </Button>
            </div>
            <div className="grid grid-cols-2 gap-10 px-10">
                {wishlists.map((wishlist) => (
                    <Card className="p-3">
                        <CardHeader>
                            <p className="text-2xl flex items-center w-full justify-between">
                                {wishlist.title}
                                <div className="flex items-center">
                                    {wishlist.visibility === 'PUBLIC' ? (
                                        <UnlockIcon width="35px" />
                                    ) : (
                                        <LockIcon width="35px" />
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
                                    {wishlist.allowedUsers.map((email) => (
                                        <p>{email}</p>
                                    ))}
                                </p>
                            </p>
                        </CardBody>
                    </Card>
                ))}
            </div>
        </>
    );
};
