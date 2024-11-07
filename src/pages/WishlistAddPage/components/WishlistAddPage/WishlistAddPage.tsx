import { Button, Input, Select, SelectItem } from '@nextui-org/react';
import { useState } from 'react';
import { WishlistVisibility } from '../../../../entities/wishlist/model/types.ts';
import { TrashIcon } from '../../../../shared/components/icons/TrashIcon/TrashIcon.tsx';

export const WishlistAddPage = () => {
    const [title, setTitle] = useState<string>();
    const [description, setDescription] = useState<string>();
    const [visibility, setVisibility] = useState<string>();
    const [userEmails, setUserEmails] = useState(['']);

    const handleUserChange = (value: string, index: number) => {
        let data = [...userEmails];
        data[index] = value;

        setUserEmails(data);
    };

    const addUserEmail = () => {
        setUserEmails([...userEmails, '']);
    };

    const removeUserEmail = (index: number) => {
        let data = [...userEmails];
        data.splice(index, 1);

        setUserEmails(data);
    };

    return (
        <>
            <div className="flex items-center w-full justify-center">
                <form className="flex-col gap-6 py-6 w-auto">
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
                            onChange={(e) => setVisibility(e.target.value)}
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
                                            inputWrapper: Boolean(
                                                userEmails.length > 1,
                                            )
                                                ? 'max-w-80 w-80'
                                                : 'max-w-96 w-96',
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
                                    {Boolean(userEmails.length > 1) && (
                                        <Button
                                            onClick={() =>
                                                removeUserEmail(index)
                                            }
                                            isIconOnly
                                            className="w-12 ml-4"
                                            variant="bordered"
                                        >
                                            <TrashIcon width="25px" />
                                        </Button>
                                    )}
                                </div>
                            ))}
                            <Button onClick={() => addUserEmail()}>
                                Добавить
                            </Button>
                        </div>
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
