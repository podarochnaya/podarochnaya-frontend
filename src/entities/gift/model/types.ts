import { UserRef } from '../../user/model/types.ts';
import { WishlistRef } from '../../wishlist/model/types.ts';

export interface Gift {
    id: number;
    title: string;
    description: string;
    url: string;
    price: string;
    reserved: boolean;
    wishlist: WishlistRef;
    reserver?: UserRef;
    status: GiftStatus;
    createdAt: string;
    allowedUsers: UserRef[];
    visibility: GiftVisibility;
}

export enum GiftStatus {
    OPEN = 'OPEN',
    BOUGHT = 'BOUGHT',
    PRESENTED = 'PRESENTED'
}

export enum GiftVisibility {
    PUBLIC = 'PUBLIC',
    PRIVATE = 'PRIVATE'
}

export interface GiftWithImageResponse {
    gift: Gift;
    image: Uint8Array;
}
