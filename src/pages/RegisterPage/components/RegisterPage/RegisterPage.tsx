import {
    Button,
    Card,
    CardBody,
    CardHeader,
    DateInput,
    Input,
    Link,
} from '@nextui-org/react';
import { FormEvent, useState } from 'react';
import { DateValue } from '@internationalized/date';
import { useAuth } from '../../../../app/providers/AuthProvider.tsx';

export const RegisterPage = () => {
    const [birthday, setBirthday] = useState<DateValue>();
    const [email, setEmail] = useState<string>();
    const [password, setPassword] = useState<string>();
    const [fullName, setFullName] = useState<string>();
    const { register } = useAuth();
    const handleSubmit = async (event: FormEvent) => {
        event.preventDefault();

        if (!email || !password || !fullName || !birthday) return;

        await register({
            email,
            password,
            fullName,
            birthday: birthday.toString(),
        });
    };
    return (
        <div className="flex flex-col h-100 items-center p-24">
            <Card className="w-96 p-3">
                <CardHeader>
                    <div className="flex flex-col">
                        <p className="text-2xl">Регистрация</p>
                    </div>
                </CardHeader>
                <CardBody className="flex gap-5 ">
                    <form
                        className="flex flex-col gap-4"
                        onSubmit={handleSubmit}
                    >
                        <Input
                            isRequired
                            classNames={{
                                base: 'flex flex-row justify-between items-between',
                                inputWrapper: 'max-w-52 w-52',
                            }}
                            label="ФИО"
                            value={fullName}
                            onChange={(e) => setFullName(e.target.value)}
                            type="text"
                            placeholder="ФИО"
                            labelPlacement="outside-left"
                        />
                        <DateInput
                            label="Дата рождения"
                            classNames={{
                                base: 'flex flex-row justify-between items-between ps-2',
                                inputWrapper: 'max-w-52 w-52',
                            }}
                            isRequired
                            fullWidth
                            value={birthday}
                            onChange={setBirthday}
                            labelPlacement="outside-left"
                        ></DateInput>

                        <Input
                            isRequired
                            classNames={{
                                base: 'flex flex-row justify-between items-between',
                                inputWrapper: 'max-w-52 w-52',
                            }}
                            label="Почта"
                            placeholder="Почта"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            type="email"
                            labelPlacement="outside-left"
                        />
                        <Input
                            isRequired
                            classNames={{
                                base: 'flex flex-row justify-between items-between',
                                inputWrapper: 'max-w-52 w-52',
                            }}
                            label="Пароль"
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Пароль"
                            labelPlacement="outside-left"
                        />
                        <div className="flex gap-2 justify-end pt-4">
                            <Button fullWidth color="primary" type="submit">
                                Регистрация
                            </Button>
                        </div>
                    </form>
                </CardBody>
            </Card>
            <p className="text-center pt-5">
                Уже есть аккаунт? <Link href="/login">Войти</Link>
            </p>
        </div>
    );
};
