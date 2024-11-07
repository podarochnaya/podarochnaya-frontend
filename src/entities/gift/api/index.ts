import api from '../../../shared/api';
import { GiftWithImageResponse } from '../model/types';

const BASE_GIFT_URL = '/api/v1/gifts';

export const getGift = (giftId: number) => {
    return api.get<GiftWithImageResponse>(`${BASE_GIFT_URL}/${giftId}`)
        .then(response => {
            return response.data;
        })
        .catch(error => {
            console.error('Error fetching gift:', error);
            throw error;
        });
};

export const getAllGifts = () => {
    return api.get<GiftWithImageResponse[]>(BASE_GIFT_URL)
        .then(response => {
            return response.data;
        })
        .catch(error => {
            console.error('Error fetching all gifts:', error);
            throw error;
        });
};

export const reserveGift = (giftId: number) => {
                               return api.put<Gift>(`${BASE_GIFT_URL}/reserve/${giftId}`)
                                   .then(response => {
                                       return response.data;
                                   })
                                   .catch(error => {
                                       console.error('Error fetching gift:', error);
                                       throw error;
                                   });
                           };