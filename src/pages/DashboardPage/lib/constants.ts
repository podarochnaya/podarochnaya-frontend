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

export const giftsMock = [
    {
        id: 1,
        title: 'Xiaomi Microhoo Personal Air Conditioning MH01R',
        description: 'Бренд Microhoo является суббрендом экосистемы Xiaomi. Жаркое лето в офисе не повод унывать',
        url: 'https://market.yandex.ru/product--uvlazhnitel-vozdukha-s-funktsiei-aromatizatsii-xiaomi-microhoo-personal-air-conditioning-mh01r-cn-belyi/1733350154?sku=101635445729&offerid=2y8tW7PWal5okNwXCS0cbA&cpc=tOaV7ZLAfikWDvNv2rQ_Wh3a_s4P8fIcku1Uisev_y1METv-xSfp8K-IAOwwldAb3i5ydZXaLg7obwcpa4lMawCe60VGZvry__cAkeaR1nMHzVZj5ae0qXMhf_0I9Yj-_DZaHbkVhiXVfDdHx7Sc_PjvhH1-MOUMKPMN03-QQVDKOqcJp6sbjdT3N6e90jjZ7t01DTMGC54u5k2k_D6POcdfQwqbJh3aF22l9Xmr22X-PZO2l-Q5Fqze-m9Oe0alVRo1V7yHQc8Os2ZSHYZi58ls0VB5sEdUKC546pQk_fJyUggm2tBc_RYlMq8ORKmrStkNDJ4F3ItkPhqelfgGVlrjDquejJeYQmHSIAddR_QBKxee1TNa2T9YK8gW2wdJvaf2t0l5zufJRF35ZuDna1yqGRR1WYjNt84inxjUIhj8rSX6SE_th5hHNyO5xE_Hp1ZdkYTSSlA,&show-uid=17309694194714352158106002&uniqueId=119246227&lr=2',
        price: 1865,
        image: 'https://avatars.mds.yandex.net/get-mpic/5234219/img_id1903343413827436694.png/optimize',
    },
    {
        id: 2,
        title: 'Xiaomi Microhoo Personal Air Conditioning MH01R',
        description: 'Бренд Microhoo является суббрендом экосистемы Xiaomi. Жаркое лето в офисе не повод унывать',
        url: 'https://market.yandex.ru/product--uvlazhnitel-vozdukha-s-funktsiei-aromatizatsii-xiaomi-microhoo-personal-air-conditioning-mh01r-cn-belyi/1733350154?sku=101635445729&offerid=2y8tW7PWal5okNwXCS0cbA&cpc=tOaV7ZLAfikWDvNv2rQ_Wh3a_s4P8fIcku1Uisev_y1METv-xSfp8K-IAOwwldAb3i5ydZXaLg7obwcpa4lMawCe60VGZvry__cAkeaR1nMHzVZj5ae0qXMhf_0I9Yj-_DZaHbkVhiXVfDdHx7Sc_PjvhH1-MOUMKPMN03-QQVDKOqcJp6sbjdT3N6e90jjZ7t01DTMGC54u5k2k_D6POcdfQwqbJh3aF22l9Xmr22X-PZO2l-Q5Fqze-m9Oe0alVRo1V7yHQc8Os2ZSHYZi58ls0VB5sEdUKC546pQk_fJyUggm2tBc_RYlMq8ORKmrStkNDJ4F3ItkPhqelfgGVlrjDquejJeYQmHSIAddR_QBKxee1TNa2T9YK8gW2wdJvaf2t0l5zufJRF35ZuDna1yqGRR1WYjNt84inxjUIhj8rSX6SE_th5hHNyO5xE_Hp1ZdkYTSSlA,&show-uid=17309694194714352158106002&uniqueId=119246227&lr=2',
        price: 1865,
        image: 'https://avatars.mds.yandex.net/get-mpic/5234219/img_id1903343413827436694.png/optimize',
    },
    {
        id: 3,
        title: 'Xiaomi Microhoo Personal Air Conditioning MH01R',
        description: 'Бренд Microhoo является суббрендом экосистемы Xiaomi. Жаркое лето в офисе не повод унывать',
        url: 'https://market.yandex.ru/product--uvlazhnitel-vozdukha-s-funktsiei-aromatizatsii-xiaomi-microhoo-personal-air-conditioning-mh01r-cn-belyi/1733350154?sku=101635445729&offerid=2y8tW7PWal5okNwXCS0cbA&cpc=tOaV7ZLAfikWDvNv2rQ_Wh3a_s4P8fIcku1Uisev_y1METv-xSfp8K-IAOwwldAb3i5ydZXaLg7obwcpa4lMawCe60VGZvry__cAkeaR1nMHzVZj5ae0qXMhf_0I9Yj-_DZaHbkVhiXVfDdHx7Sc_PjvhH1-MOUMKPMN03-QQVDKOqcJp6sbjdT3N6e90jjZ7t01DTMGC54u5k2k_D6POcdfQwqbJh3aF22l9Xmr22X-PZO2l-Q5Fqze-m9Oe0alVRo1V7yHQc8Os2ZSHYZi58ls0VB5sEdUKC546pQk_fJyUggm2tBc_RYlMq8ORKmrStkNDJ4F3ItkPhqelfgGVlrjDquejJeYQmHSIAddR_QBKxee1TNa2T9YK8gW2wdJvaf2t0l5zufJRF35ZuDna1yqGRR1WYjNt84inxjUIhj8rSX6SE_th5hHNyO5xE_Hp1ZdkYTSSlA,&show-uid=17309694194714352158106002&uniqueId=119246227&lr=2',
        price: 1865,
        image: 'https://avatars.mds.yandex.net/get-mpic/5234219/img_id1903343413827436694.png/optimize',
    },
    {
        id: 4,
        title: 'Xiaomi Microhoo Personal Air Conditioning MH01R',
        description: 'Бренд Microhoo является суббрендом экосистемы Xiaomi. Жаркое лето в офисе не повод унывать',
        url: 'https://market.yandex.ru/product--uvlazhnitel-vozdukha-s-funktsiei-aromatizatsii-xiaomi-microhoo-personal-air-conditioning-mh01r-cn-belyi/1733350154?sku=101635445729&offerid=2y8tW7PWal5okNwXCS0cbA&cpc=tOaV7ZLAfikWDvNv2rQ_Wh3a_s4P8fIcku1Uisev_y1METv-xSfp8K-IAOwwldAb3i5ydZXaLg7obwcpa4lMawCe60VGZvry__cAkeaR1nMHzVZj5ae0qXMhf_0I9Yj-_DZaHbkVhiXVfDdHx7Sc_PjvhH1-MOUMKPMN03-QQVDKOqcJp6sbjdT3N6e90jjZ7t01DTMGC54u5k2k_D6POcdfQwqbJh3aF22l9Xmr22X-PZO2l-Q5Fqze-m9Oe0alVRo1V7yHQc8Os2ZSHYZi58ls0VB5sEdUKC546pQk_fJyUggm2tBc_RYlMq8ORKmrStkNDJ4F3ItkPhqelfgGVlrjDquejJeYQmHSIAddR_QBKxee1TNa2T9YK8gW2wdJvaf2t0l5zufJRF35ZuDna1yqGRR1WYjNt84inxjUIhj8rSX6SE_th5hHNyO5xE_Hp1ZdkYTSSlA,&show-uid=17309694194714352158106002&uniqueId=119246227&lr=2',
        price: 1865,
        image: 'https://avatars.mds.yandex.net/get-mpic/5234219/img_id1903343413827436694.png/optimize',
    },
    {
        id: 5,
        title: 'Xiaomi Microhoo Personal Air Conditioning MH01R',
        description: 'Бренд Microhoo является суббрендом экосистемы Xiaomi. Жаркое лето в офисе не повод унывать',
        url: 'https://market.yandex.ru/product--uvlazhnitel-vozdukha-s-funktsiei-aromatizatsii-xiaomi-microhoo-personal-air-conditioning-mh01r-cn-belyi/1733350154?sku=101635445729&offerid=2y8tW7PWal5okNwXCS0cbA&cpc=tOaV7ZLAfikWDvNv2rQ_Wh3a_s4P8fIcku1Uisev_y1METv-xSfp8K-IAOwwldAb3i5ydZXaLg7obwcpa4lMawCe60VGZvry__cAkeaR1nMHzVZj5ae0qXMhf_0I9Yj-_DZaHbkVhiXVfDdHx7Sc_PjvhH1-MOUMKPMN03-QQVDKOqcJp6sbjdT3N6e90jjZ7t01DTMGC54u5k2k_D6POcdfQwqbJh3aF22l9Xmr22X-PZO2l-Q5Fqze-m9Oe0alVRo1V7yHQc8Os2ZSHYZi58ls0VB5sEdUKC546pQk_fJyUggm2tBc_RYlMq8ORKmrStkNDJ4F3ItkPhqelfgGVlrjDquejJeYQmHSIAddR_QBKxee1TNa2T9YK8gW2wdJvaf2t0l5zufJRF35ZuDna1yqGRR1WYjNt84inxjUIhj8rSX6SE_th5hHNyO5xE_Hp1ZdkYTSSlA,&show-uid=17309694194714352158106002&uniqueId=119246227&lr=2',
        price: 1865,
        image: 'https://avatars.mds.yandex.net/get-mpic/5234219/img_id1903343413827436694.png/optimize',
    },
    {
        id: 6,
        title: 'fgg',
        description: 'Бренд Microhoo является суббрендом экосистемы Xiaomi. Жаркое лето в офисе не повод унывать',
        url: 'https://market.yandex.ru/product--uvlazhnitel-vozdukha-s-funktsiei-aromatizatsii-xiaomi-microhoo-personal-air-conditioning-mh01r-cn-belyi/1733350154?sku=101635445729&offerid=2y8tW7PWal5okNwXCS0cbA&cpc=tOaV7ZLAfikWDvNv2rQ_Wh3a_s4P8fIcku1Uisev_y1METv-xSfp8K-IAOwwldAb3i5ydZXaLg7obwcpa4lMawCe60VGZvry__cAkeaR1nMHzVZj5ae0qXMhf_0I9Yj-_DZaHbkVhiXVfDdHx7Sc_PjvhH1-MOUMKPMN03-QQVDKOqcJp6sbjdT3N6e90jjZ7t01DTMGC54u5k2k_D6POcdfQwqbJh3aF22l9Xmr22X-PZO2l-Q5Fqze-m9Oe0alVRo1V7yHQc8Os2ZSHYZi58ls0VB5sEdUKC546pQk_fJyUggm2tBc_RYlMq8ORKmrStkNDJ4F3ItkPhqelfgGVlrjDquejJeYQmHSIAddR_QBKxee1TNa2T9YK8gW2wdJvaf2t0l5zufJRF35ZuDna1yqGRR1WYjNt84inxjUIhj8rSX6SE_th5hHNyO5xE_Hp1ZdkYTSSlA,&show-uid=17309694194714352158106002&uniqueId=119246227&lr=2',
        price: 1865,
        image: 'https://avatars.mds.yandex.net/get-mpic/5234219/img_id1903343413827436694.png/optimize',
    },
    {
        id: 7,
        title: 'asd',
        description: 'Бренд Microhoo является суббрендом экосистемы Xiaomi. Жаркое лето в офисе не повод унывать',
        url: 'https://market.yandex.ru/product--uvlazhnitel-vozdukha-s-funktsiei-aromatizatsii-xiaomi-microhoo-personal-air-conditioning-mh01r-cn-belyi/1733350154?sku=101635445729&offerid=2y8tW7PWal5okNwXCS0cbA&cpc=tOaV7ZLAfikWDvNv2rQ_Wh3a_s4P8fIcku1Uisev_y1METv-xSfp8K-IAOwwldAb3i5ydZXaLg7obwcpa4lMawCe60VGZvry__cAkeaR1nMHzVZj5ae0qXMhf_0I9Yj-_DZaHbkVhiXVfDdHx7Sc_PjvhH1-MOUMKPMN03-QQVDKOqcJp6sbjdT3N6e90jjZ7t01DTMGC54u5k2k_D6POcdfQwqbJh3aF22l9Xmr22X-PZO2l-Q5Fqze-m9Oe0alVRo1V7yHQc8Os2ZSHYZi58ls0VB5sEdUKC546pQk_fJyUggm2tBc_RYlMq8ORKmrStkNDJ4F3ItkPhqelfgGVlrjDquejJeYQmHSIAddR_QBKxee1TNa2T9YK8gW2wdJvaf2t0l5zufJRF35ZuDna1yqGRR1WYjNt84inxjUIhj8rSX6SE_th5hHNyO5xE_Hp1ZdkYTSSlA,&show-uid=17309694194714352158106002&uniqueId=119246227&lr=2',
        price: 1865,
        image: 'https://avatars.mds.yandex.net/get-mpic/5234219/img_id1903343413827436694.png/optimize',
    },
    {
        id: 8,
        title: 'asd',
        description: 'Бренд Microhoo является суббрендом экосистемы Xiaomi. Жаркое лето в офисе не повод унывать',
        url: 'https://market.yandex.ru/product--uvlazhnitel-vozdukha-s-funktsiei-aromatizatsii-xiaomi-microhoo-personal-air-conditioning-mh01r-cn-belyi/1733350154?sku=101635445729&offerid=2y8tW7PWal5okNwXCS0cbA&cpc=tOaV7ZLAfikWDvNv2rQ_Wh3a_s4P8fIcku1Uisev_y1METv-xSfp8K-IAOwwldAb3i5ydZXaLg7obwcpa4lMawCe60VGZvry__cAkeaR1nMHzVZj5ae0qXMhf_0I9Yj-_DZaHbkVhiXVfDdHx7Sc_PjvhH1-MOUMKPMN03-QQVDKOqcJp6sbjdT3N6e90jjZ7t01DTMGC54u5k2k_D6POcdfQwqbJh3aF22l9Xmr22X-PZO2l-Q5Fqze-m9Oe0alVRo1V7yHQc8Os2ZSHYZi58ls0VB5sEdUKC546pQk_fJyUggm2tBc_RYlMq8ORKmrStkNDJ4F3ItkPhqelfgGVlrjDquejJeYQmHSIAddR_QBKxee1TNa2T9YK8gW2wdJvaf2t0l5zufJRF35ZuDna1yqGRR1WYjNt84inxjUIhj8rSX6SE_th5hHNyO5xE_Hp1ZdkYTSSlA,&show-uid=17309694194714352158106002&uniqueId=119246227&lr=2',
        price: 1865,
        image: 'https://avatars.mds.yandex.net/get-mpic/5234219/img_id1903343413827436694.png/optimize',
    },
    {
        id: 9,
        title: 'zxc',
        description: 'Бренд Microhoo является суббрендом экосистемы Xiaomi. Жаркое лето в офисе не повод унывать',
        url: 'https://market.yandex.ru/product--uvlazhnitel-vozdukha-s-funktsiei-aromatizatsii-xiaomi-microhoo-personal-air-conditioning-mh01r-cn-belyi/1733350154?sku=101635445729&offerid=2y8tW7PWal5okNwXCS0cbA&cpc=tOaV7ZLAfikWDvNv2rQ_Wh3a_s4P8fIcku1Uisev_y1METv-xSfp8K-IAOwwldAb3i5ydZXaLg7obwcpa4lMawCe60VGZvry__cAkeaR1nMHzVZj5ae0qXMhf_0I9Yj-_DZaHbkVhiXVfDdHx7Sc_PjvhH1-MOUMKPMN03-QQVDKOqcJp6sbjdT3N6e90jjZ7t01DTMGC54u5k2k_D6POcdfQwqbJh3aF22l9Xmr22X-PZO2l-Q5Fqze-m9Oe0alVRo1V7yHQc8Os2ZSHYZi58ls0VB5sEdUKC546pQk_fJyUggm2tBc_RYlMq8ORKmrStkNDJ4F3ItkPhqelfgGVlrjDquejJeYQmHSIAddR_QBKxee1TNa2T9YK8gW2wdJvaf2t0l5zufJRF35ZuDna1yqGRR1WYjNt84inxjUIhj8rSX6SE_th5hHNyO5xE_Hp1ZdkYTSSlA,&show-uid=17309694194714352158106002&uniqueId=119246227&lr=2',
        price: 1865,
        image: 'https://avatars.mds.yandex.net/get-mpic/5234219/img_id1903343413827436694.png/optimize',
    },
    {
        id: 10,
        title: 'zxc',
        description: 'Бренд Microhoo является суббрендом экосистемы Xiaomi. Жаркое лето в офисе не повод унывать',
        url: 'https://market.yandex.ru/product--uvlazhnitel-vozdukha-s-funktsiei-aromatizatsii-xiaomi-microhoo-personal-air-conditioning-mh01r-cn-belyi/1733350154?sku=101635445729&offerid=2y8tW7PWal5okNwXCS0cbA&cpc=tOaV7ZLAfikWDvNv2rQ_Wh3a_s4P8fIcku1Uisev_y1METv-xSfp8K-IAOwwldAb3i5ydZXaLg7obwcpa4lMawCe60VGZvry__cAkeaR1nMHzVZj5ae0qXMhf_0I9Yj-_DZaHbkVhiXVfDdHx7Sc_PjvhH1-MOUMKPMN03-QQVDKOqcJp6sbjdT3N6e90jjZ7t01DTMGC54u5k2k_D6POcdfQwqbJh3aF22l9Xmr22X-PZO2l-Q5Fqze-m9Oe0alVRo1V7yHQc8Os2ZSHYZi58ls0VB5sEdUKC546pQk_fJyUggm2tBc_RYlMq8ORKmrStkNDJ4F3ItkPhqelfgGVlrjDquejJeYQmHSIAddR_QBKxee1TNa2T9YK8gW2wdJvaf2t0l5zufJRF35ZuDna1yqGRR1WYjNt84inxjUIhj8rSX6SE_th5hHNyO5xE_Hp1ZdkYTSSlA,&show-uid=17309694194714352158106002&uniqueId=119246227&lr=2',
        price: 1865,
        image: 'https://avatars.mds.yandex.net/get-mpic/5234219/img_id1903343413827436694.png/optimize',
    },
]