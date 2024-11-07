import React, { Key, useCallback, useEffect, useState } from 'react';
import {
    Avatar,
    Button,
    Input,
    Link,
    Pagination,
    Table,
    TableBody,
    TableCell,
    TableColumn,
    TableHeader,
    TableRow,
} from '@nextui-org/react';
import { columns } from '../../lib/constants.ts';
import { ColumnStaticSize } from '@react-types/table';
import { SearchIcon } from '../../../../shared/components/icons/SearchIcon/SearchIcon.tsx';
import { getAllGifts, reserveGift } from '../../../../entities/gift/api';
import { GiftWithImageResponse } from '../../../../entities/gift/model/types.ts';
import {
  BrowserRouter as Router,
  generatePath,
  Switch,
  Route,
  useHistory,
  useParams
} from "react-router-dom";

export const WishlistGiftsPage = () => {
    const { wishlistId } = useParams<{ wishlistId: string }>();
    const [gifts, setGifts] = useState<GiftWithImageResponse[]>([]);
    const [filterValue, setFilterValue] = useState('');
    const [rowsPerPage, setRowsPerPage] = useState(5);
    const [page, setPage] = useState(1);
    const [wishlistTitle, setWishlistTitle] = useState<string>('');

    useEffect(() => {
        getAllGifts()
            .then((response) => {
                const filteredGifts = response.filter(item => item.gift.wishlist.id === parseInt(wishlistId));
                setGifts(filteredGifts);
            })
            .catch((err) => {
                console.error('Error loading gifts:', err);
            });
    }, []);

    const renderCell = useCallback((gift, image, columnKey: Key) => {
        const cellValue = gift[columnKey.toString()];

const handleReservedChange = (giftId: number, checked: boolean) => {
    // Преобразуем значение в true/false для запроса на сервер
    const status = checked; // если checked == true, значит подарок забронирован

    // Вызываем функцию для обновления статуса подарка на сервере
    reserveGift(giftId, status).then((updatedGift) => {
        // Если запрос успешен, обновляем локальное состояние подарков
        setGifts(prevGifts =>
            prevGifts.map(gift =>
                gift.id === giftId ? { ...gift, reserved: status } : gift // обновляем статус только для этого подарка
            )
        );
    window.location.reload();
    }).catch((error) => {
        console.error('Error updating gift status:', error);
    });
};


        switch (columnKey) {
            case 'title':
                return (
                    <div className="flex flex-row items-center gap-5">
                        <Avatar
                            src={`data:image/png;base64,${image}`}
                            size="lg"
                            className="min-w-14"
                        />
                        <p className="text-medium">{cellValue}</p>
                    </div>
                );
            case 'description':
                return (
                    <div className="flex flex-col">
                        <p className="text-bold text-medium capitalize">
                            {cellValue}
                        </p>
                    </div>
                );
            case 'url':
                return (
                    <div className="flex flex-col">
                        <Button
                            href={cellValue}
                            target="_blank"
                            as={Link}
                            showAnchorIcon
                            variant="light"
                        >
                            Ссылка
                        </Button>
                    </div>
                );
            case 'price':
                return (
                    <div className="flex flex-col">
                        <p className="text-bold text-medium capitalize">
                            {cellValue}
                        </p>
                    </div>
                );
                        case 'reserved':
                                    return (
                                        <div className="flex flex-col items-center">
                                            <input
                                                type="checkbox"
                                                checked={cellValue === true} // Проверяем, если 'reserved' true, чекбокс будет отмечен
                                                onChange={(e) => handleReservedChange(gift.id, e.target.checked)} // Обработчик изменения
                                                className="w-5 h-5" // Размер чекбокса
                                            />
                                            <p className="text-bold text-medium capitalize">
                                                {cellValue ? 'Reserved' : 'Not Reserved'}
                                            </p>
                                        </div>
                                    );
            default:
                return cellValue;
        }
    }, []);

    const onClear = useCallback(() => {
        setFilterValue('');
        setPage(1);
    }, []);

    const onSearchChange = useCallback((value: string) => {
        if (value) {
            setFilterValue(value);
            setPage(1);
        } else {
            setFilterValue('');
        }
    }, []);

    const onRowsPerPageChange = useCallback((e) => {
        setRowsPerPage(Number(e.target.value));
        setPage(1);
    }, []);

    const topContent = React.useMemo(() => {
        return (
            <div className="flex flex-col gap-4">
            {/* Header с названием вишлиста */}
                            <div className="w-full py-6 bg-blue-500 text-white text-center rounded-t-lg">
                                <h2 className="text-2xl font-bold">Wishlist: {wishlistId}</h2> {/* Заголовок с названием вишлиста */}
                            </div>

                            {/* Поле поиска */}
                <div className="flex justify-between gap-3 items-end">
                    <Input
                        isClearable
                        className="w-full"
                        placeholder="Поиск по имени..."
                        startContent={<SearchIcon />}
                        value={filterValue}
                        onClear={() => onClear()}
                        onValueChange={onSearchChange}
                    />
                </div>
                {/*<div className="flex justify-between items-center">*/}
                {/*    <span className="text-default-400 text-small">Total {gifts.length} users</span>*/}
                {/*    <label className="flex items-center text-default-400 text-small">*/}
                {/*        Rows per page:*/}
                {/*        <select*/}
                {/*            className="bg-transparent outline-none text-default-400 text-small"*/}
                {/*            onChange={onRowsPerPageChange}*/}
                {/*        >*/}
                {/*            <option value="5">5</option>*/}
                {/*            <option value="10">10</option>*/}
                {/*            <option value="15">15</option>*/}
                {/*        </select>*/}
                {/*    </label>*/}
                {/*</div>*/}
            </div>
        );
    }, [filterValue, onRowsPerPageChange, gifts.length, onSearchChange]);

    const filteredItems = React.useMemo(() => {
        let filteredUsers = [...gifts];

        if (Boolean(filterValue)) {
            filteredUsers = filteredUsers.filter((gift) =>
                gift.gift.title
                    .toLowerCase()
                    .includes(filterValue.toLowerCase()),
            );
        }

        return filteredUsers;
    }, [gifts, filterValue]);

    const pages = Math.ceil(filteredItems.length / rowsPerPage);

    const onNextPage = React.useCallback(() => {
        if (page < pages) {
            setPage(page + 1);
        }
    }, [page, pages]);

    const onPreviousPage = React.useCallback(() => {
        if (page > 1) {
            setPage(page - 1);
        }
    }, [page]);

    const items = React.useMemo(() => {
        const start = (page - 1) * rowsPerPage;
        const end = start + rowsPerPage;

        return filteredItems.slice(start, end);
    }, [page, filteredItems, rowsPerPage]);

    const bottomContent = React.useMemo(() => {
        return (
            <div className="py-2 px-2 flex justify-between items-center">
                <Pagination
                    isCompact
                    showControls
                    showShadow
                    color="primary"
                    page={page}
                    total={pages}
                    onChange={setPage}
                />
                <div className="hidden sm:flex w-[30%] justify-end gap-2">
                    <Button
                        isDisabled={pages === 1}
                        size="sm"
                        variant="flat"
                        onPress={onPreviousPage}
                    >
                        Previous
                    </Button>
                    <Button
                        isDisabled={pages === 1}
                        size="sm"
                        variant="flat"
                        onPress={onNextPage}
                    >
                        Next
                    </Button>
                </div>
            </div>
        );
    }, [items.length, page, pages]);

    return (
        <Table
            bottomContent={bottomContent}
            bottomContentPlacement="outside"
            topContent={topContent}
        >
            <TableHeader columns={columns}>
                {(column) => (
                    <TableColumn
                        key={column.uid}
                        align={column.align}
                        width={column.width as ColumnStaticSize}
                    >
                        {column.name}
                    </TableColumn>
                )}
            </TableHeader>
            <TableBody items={items}>
                {(item) => (
                    <TableRow key={item.gift.id}>
                        {(columnKey) => (
                            <TableCell>
                               {renderCell(item.gift, item.image, columnKey)}
                            </TableCell>
                        )}
                    </TableRow>
                )}
            </TableBody>
        </Table>
    );
};
