import { ColumnStaticSize } from '@react-types/table';

export const columns: {
    name: string,
    uid: string,
    width: ColumnStaticSize,
    align: 'start' | 'end' | 'center',
}[] = [
    {
        name: 'Название',
        uid: 'title',
        width: '30%',
        align: 'start'
    },
    {
        name: 'Описание',
        uid: 'description',
        width: '40%',
        align: 'start'
    },
    {
        name: 'Ссылка',
        uid: 'url',
        width: '15%',
        align: 'center'
    },
    {
        name: 'Цена',
        uid: 'price',
        width: '15%',
        align: 'center'
    },
];
