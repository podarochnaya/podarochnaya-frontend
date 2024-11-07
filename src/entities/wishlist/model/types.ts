import { UserRef } from '../../user/model/types.ts';

export interface WishlistDashboard {
    id: number;
    title: string;
    description: string;
    status: 'OPENED' | 'CLOSED';
    visibility: keyof typeof WishlistVisibility;
    ownerUser: UserRef;
    createdAt: string;
    allowedUsers: UserRef[];
}
export const WishlistVisibility = {
    public: 'PUBLIC',
    private: 'PRIVATE',
};

export interface WishlistRef {
    id: number;
    title: string;
}
