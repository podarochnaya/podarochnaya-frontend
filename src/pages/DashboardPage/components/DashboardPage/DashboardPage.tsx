import React, { useCallback } from 'react';
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
import { columns, giftsMock } from '../../lib/constants.ts';
import { ColumnStaticSize } from '@react-types/table';
import { SearchIcon } from './SearchIcon.tsx';

export const DashboardPage = () => {
    const gifts = giftsMock;
    const [filterValue, setFilterValue] = React.useState('');
    const [rowsPerPage, setRowsPerPage] = React.useState(5);
    const [page, setPage] = React.useState(1);
    const renderCell = useCallback((gift, columnKey: string) => {
        const cellValue = gift[columnKey];

        switch (columnKey) {
            case 'title':
                return (
                    <div className="flex flex-row items-center gap-5">
                        <Avatar src={gift.image} size="lg" />
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
            default:
                return cellValue;
        }
    }, []);

    const onClear = React.useCallback(() => {
        setFilterValue('');
        setPage(1);
    }, []);

    const onSearchChange = React.useCallback((value: string) => {
        if (value) {
            setFilterValue(value);
            setPage(1);
        } else {
            setFilterValue('');
        }
    }, []);

    const onRowsPerPageChange = React.useCallback((e) => {
        setRowsPerPage(Number(e.target.value));
        setPage(1);
    }, []);

    const topContent = React.useMemo(() => {
        return (
            <div className="flex flex-col gap-4">
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
                gift.title.toLowerCase().includes(filterValue.toLowerCase()),
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
                    <TableRow key={item.id}>
                        {(columnKey) => (
                            <TableCell>{renderCell(item, columnKey)}</TableCell>
                        )}
                    </TableRow>
                )}
            </TableBody>
        </Table>
    );
};
