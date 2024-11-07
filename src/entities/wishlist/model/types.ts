export interface WishlistDashboard {
    id: number;
    title: string;
    description: string;
    status: 'OPENED' | 'CLOSED';
    visibility: keyof typeof WishlistVisibility;
    ownerUser: {
        id: number;
        email: string;
    };
    createdAt: string;
    allowedUsers: string[];
}
export const WishlistVisibility = {
    public: 'PUBLIC',
    private: 'PRIVATE',
};

export interface WishlistRef {
    id: number;
    title: string;
}
