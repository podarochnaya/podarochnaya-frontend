import {
    Button,
    Card,
    CardBody,
    CardHeader,
    DateInput,
    Input,
    Spinner,
} from '@nextui-org/react';
import { FormEvent, useEffect, useState } from 'react';
import { DateValue } from '@internationalized/date';
import { useAuth } from '../../../../app/providers/AuthProvider'; // Импортируем useAuth для доступа к контексту

// Страница для редактирования данных пользователя
export const UserSettingsPage = () => {
    const { user, token, fetchUser, updateUser, logout } = useAuth(); // Получаем данные пользователя и функцию для обновления
    const [birthday, setBirthday] = useState<DateValue | undefined>(undefined);
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [fullName, setFullName] = useState<string>('');
    const [loading, setLoading] = useState(false); // Стейт для обработки загрузки
    const [error, setError] = useState<string | null>(null); // Стейт для ошибок

useEffect(() => {
    if (!user) {
        fetchUser();
    } else {
        setEmail(user.email);
        setFullName(user.fullname);

        // Преобразуем `user.birthday` в формат YYYY-MM-DD и сохраняем как строку
        setBirthday(user.birthday ? new Date(user.birthday).toISOString().split('T')[0] : '');
    }
}, [user, fetchUser]);

const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    setLoading(true); // Начало загрузки

    try {
        const updatedData: Partial<User> = {};

        let shouldLogout = false;

        // Добавляем только измененные поля
        if (email !== user?.email) {
            updatedData.email = email;
            shouldLogout = true; // Если изменили почту, нужно выйти
        }
        if (fullName !== user?.fullname) updatedData.fullName = fullName;
        if (password) {
            updatedData.password = password;
            shouldLogout = true; // Если изменили пароль, нужно выйти
        }

        // Сравнение даты рождения как строки
        if (birthday && birthday !== user?.birthday) {
            updatedData.birthday = birthday; // `birthday` уже в формате `YYYY-MM-DD`
        }

        // Если есть изменения, обновляем данные пользователя
        if (Object.keys(updatedData).length > 0) {
            console.log(updatedData);
            await updateUser(user.id, updatedData, token);  // Вызов API для обновления

            if (shouldLogout) {
                logout();  // Если изменили пароль или почту, вызываем logout
            }
        } else {
            setError('Нечего обновлять');
        }
    } catch (err) {
        console.error('Error during submission:', err);
        setError(err.message);
    } finally {
        setLoading(false); // Завершаем загрузку
    }
};





    return (
        <div className="flex flex-col h-full items-center p-24">
            <Card className="w-96 p-3">
                <CardHeader>
                    <div className="flex flex-col">
                        <p className="text-2xl">Настройки пользователя</p>
                    </div>
                </CardHeader>
                <CardBody className="flex gap-5">
                    <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
                        {/* Форма для ФИО */}
                        <Input
                            isRequired
                            value={fullName}
                            onChange={(e) => setFullName(e.target.value)}
                            label="ФИО"
                            type="text"
                            placeholder="Введите ваше ФИО"
                        />

                        {/* Форма для даты рождения */}
        <Input
            label="Дата рождения"
            isRequired
            value={birthday} // значение в формате YYYY-MM-DD
            onChange={(e) => setBirthday(e.target.value)} // принимает строку и обновляет `birthday`
            fullWidth
        />

                        {/* Форма для почты */}
                        <Input
                            isRequired
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            label="Почта"
                            type="email"
                            placeholder="Введите почту"
                        />

                        {/* Форма для пароля */}
                        <Input
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            label="Новый пароль"
                            type="password"
                            placeholder="Введите новый пароль"
                        />

                        {/* Если ошибка есть, показываем ее */}
                        {error && <p className="text-red-500 text-sm">{error}</p>}

                        {/* Кнопка для сохранения изменений */}
                        <div className="flex gap-2 justify-end pt-4">
                            <Button fullWidth type="submit" color="primary">
                                {loading ? <Spinner /> : 'Сохранить изменения'}
                            </Button>
                        </div>
                    </form>
                </CardBody>
            </Card>
        </div>
    );
};
