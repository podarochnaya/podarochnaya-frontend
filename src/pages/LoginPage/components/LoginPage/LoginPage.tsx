import {
    Button,
    Card,
    CardBody,
    CardHeader,
    Input,
    Link,
} from '@nextui-org/react';
import { FormEvent, useState } from 'react';
import { useAuth } from '../../../../app/providers/AuthProvider.tsx';

export const LoginPage = () => {
    const [email, setEmail] = useState<string>();
    const [password, setPassword] = useState<string>();
    const { login } = useAuth();
    const handleSubmit = async (event: FormEvent) => {
        event.preventDefault();

        if (!email || !password) return;

        await login({
            email,
            password,
        });
    };

    return (
        <div className="flex flex-col h-100 items-center p-24">
            <Card className="w-96 p-3">
                <CardHeader>
                    <div className="flex flex-col">
                        <p className="text-2xl">Вход</p>
                    </div>
                </CardHeader>
                <CardBody className="flex gap-5">
                    <form
                        className="flex flex-col gap-4"
                        onSubmit={handleSubmit}
                    >
                        <Input
                            isRequired
                            label="Почта"
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <Input
                            isRequired
                            label="Пароль"
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <div className="flex gap-2 justify-end pt-4">
                            <Button fullWidth color="primary" type="submit">
                                Войти
                            </Button>
                        </div>
                    </form>
                </CardBody>
            </Card>
            <p className="text-center pt-5">
                Новый пользователь?{' '}
                <Link href="/sign-up">Зарегистрироваться</Link>
            </p>
        </div>
    );
};
