import {
    Button,
    Card,
    CardBody,
    CardHeader,
    Input,
    Select,
    SelectItem,
} from '@nextui-org/react';
import { FormEvent, useState } from 'react';
import { TrashIcon } from '../../../../shared/components/icons/TrashIcon/TrashIcon.tsx';
import { WishlistVisibility } from '../../../../entities/wishlist/constants.ts';
import { ImageControl } from '../ImageControl/ImageControl.tsx';
import api from '../../../../shared/api';

export const WishlistAddPage = () => {
    const [title, setTitle] = useState<string>();
    const [description, setDescription] = useState<string>();
    const [visibility, setVisibility] = useState<string>();
    const [userEmails, setUserEmails] = useState(['']);
    const [gifts, setGifts] = useState<
        {
            title?: string;
            description?: string;
            file?: {
                fileName: string | null;
                fileContent: string | null;
                contentType: string | null;
            };
            url?: string;
            price?: number;
        }[]
    >([]);

    const addGift = () => {
        setGifts([
            ...gifts,
            {
                title: undefined,
                description: undefined,
                file: undefined,
                url: undefined,
                price: undefined,
            },
        ]);
    };

    const removeGift = (index: number) => {
        const data = [...gifts];
        data.splice(index, 1);

        setGifts(data);
    };

    const handleGiftsChange = (
        value: string | number,
        name: keyof (typeof gifts)[number],
        index: number,
    ) => {
        const data = [...gifts];
        if (!data.length) return;

        // @ts-ignore
        data[index][name] = value;

        setGifts(data);
    };

    const handleGiftsImageChange = (index: number) => {
        return (
            fileName: string | null,
            fileContent: string | null,
            contentType: string | null,
        ) => {
            const data = [...gifts];
            if (!data.length) return;

            // @ts-ignore
            data[index]['file'] = {
                fileName,
                fileContent,
                contentType,
            };

            setGifts(data);
        };
    };

    const handleUserChange = (value: string, index: number) => {
        const data = [...userEmails];
        data[index] = value;

        setUserEmails(data);
    };

    const addUserEmail = () => {
        setUserEmails([...userEmails, '']);
    };

    const removeUserEmail = (index: number) => {
        const data = [...userEmails];
        data.splice(index, 1);

        setUserEmails(data);
    };

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        const response = await api.post('api/v1/wishlists', {
            title,
            description,
            visibility,
            allowedUserEmails: userEmails,
            gifts: gifts,
        });

        console.log(response);
    };

    return (
        <>
            <div className="flex items-center w-full justify-center">
                <form
                    className="flex-col gap-6 py-6 w-auto"
                    onSubmit={handleSubmit}
                >
                    <p className="text-2xl pb-6">Создание вишлиста</p>
                    <div className="pb-8">
                        <Input
                            classNames={{
                                base: 'flex flex-row justify-between items-between',
                                inputWrapper: 'max-w-96 w-96',
                            }}
                            label="Название"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            type="text"
                            placeholder="Название"
                            labelPlacement="outside-left"
                        />
                    </div>
                    <div className="pb-8">
                        <Input
                            classNames={{
                                base: 'flex flex-row justify-between items-between',
                                inputWrapper: 'max-w-96 w-96',
                            }}
                            label="Описание"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            type="text"
                            placeholder="Описание"
                            labelPlacement="outside-left"
                        />
                    </div>
                    <div className="pb-8">
                        <Select
                            label="Тип видимости"
                            placeholder="Тип видимости"
                            classNames={{
                                base: 'flex flex-row justify-between items-center pl-2',
                                mainWrapper: 'max-w-96 w-96',
                            }}
                            labelPlacement="outside-left"
                            value={visibility}
                            onChange={(e) => setVisibility(WishlistVisibility[e.target.value as keyof typeof WishlistVisibility])}
                        >
                            {Object.entries(WishlistVisibility).map(
                                ([key, value]) => (
                                    <SelectItem key={key} value={value}>
                                        {key}
                                    </SelectItem>
                                ),
                            )}
                        </Select>
                    </div>
                    <div className="flex pl-2 justify-between gap-24 pb-8">
                        <p className="text-small">Пользователи</p>
                        <div className="flex flex-col w-full items-end">
                            {userEmails.map((email, index) => (
                                <div key={index} className="flex pb-4">
                                    <Input
                                        isRequired
                                        classNames={{
                                            base: 'flex flex-row justify-between items-between',
                                            inputWrapper: 'max-w-80 w-80',
                                        }}
                                        value={email}
                                        onChange={(e) =>
                                            handleUserChange(
                                                e.target.value,
                                                index,
                                            )
                                        }
                                        type="text"
                                        placeholder="Почта"
                                    />
                                    <Button
                                        onClick={() => removeUserEmail(index)}
                                        isIconOnly
                                        className="w-12 ml-4"
                                        variant="bordered"
                                    >
                                        <TrashIcon width="25px" />
                                    </Button>
                                </div>
                            ))}
                            <Button onClick={() => addUserEmail()}>
                                Добавить
                            </Button>
                        </div>
                    </div>
                    <div className="flex flex-col w-full items-end pb-6">
                        {gifts.map((gift, index) => (
                            <Card className="pb-6 pt-3 mb-6 w-full" key={index}>
                                <CardHeader className="flex justify-between pl-5">
                                    <p>
                                        Подарок {index + 1}
                                    </p>
                                    <Button isIconOnly onClick={() => removeGift(index)}><TrashIcon width="25px" /></Button>
                                    </CardHeader>
                                <CardBody>
                                    <div className="flex pl-2 justify-between pb-6">
                                        <p className="text-small">Название</p>
                                        <Input
                                            isRequired
                                            classNames={{
                                                base: 'flex flex-row justify-end items-end',
                                                inputWrapper: 'max-w-96 w-96',
                                            }}
                                            value={gift.title}
                                            onChange={(e) =>
                                                handleGiftsChange(
                                                    e.target.value,
                                                    'title',
                                                    index,
                                                )
                                            }
                                            type="text"
                                            placeholder="Название"
                                        />
                                    </div>

                                    <div className="flex pl-2 justify-between pb-6">
                                        <p className="text-small">Описание</p>
                                        <Input
                                            isRequired
                                            classNames={{
                                                base: 'flex flex-row justify-end items-end',
                                                inputWrapper: 'max-w-96 w-96',
                                            }}
                                            value={gift.description}
                                            onChange={(e) =>
                                                handleGiftsChange(
                                                    e.target.value,
                                                    'description',
                                                    index,
                                                )
                                            }
                                            type="text"
                                            placeholder="Описание"
                                        />
                                    </div>

                                    <div className="flex pl-2 justify-between pb-6">
                                        <p className="text-small">Ссылка</p>
                                        <Input
                                            isRequired
                                            classNames={{
                                                base: 'flex flex-row justify-end items-end',
                                                inputWrapper: 'max-w-96 w-96',
                                            }}
                                            value={gift.url}
                                            onChange={(e) =>
                                                handleGiftsChange(
                                                    e.target.value,
                                                    'url',
                                                    index,
                                                )
                                            }
                                            type="text"
                                            placeholder="Ссылка"
                                        />
                                    </div>

                                    <div className="flex pl-2 justify-between pb-6">
                                        <p className="text-small">Цена</p>
                                        <Input
                                            isRequired
                                            classNames={{
                                                base: 'flex flex-row justify-end items-end',
                                                inputWrapper: 'max-w-96 w-96',
                                            }}
                                            type="number"
                                            value={`${gift.price}`}
                                            onChange={(e) =>
                                                handleGiftsChange(
                                                    Number(e.target.value),
                                                    'price',
                                                    index,
                                                )
                                            }
                                            placeholder="Цена"
                                        />
                                    </div>
                                    <ImageControl
                                        onChange={handleGiftsImageChange(index)}
                                    ></ImageControl>
                                </CardBody>
                            </Card>
                        ))}

                        <Button onClick={() => addGift()}>
                            Добавить подарок
                        </Button>
                    </div>
                    <div className="flex gap-2 justify-end">
                        <Button fullWidth color="primary" type="submit">
                            Создать
                        </Button>
                    </div>
                </form>
            </div>
        </>
    );
};
