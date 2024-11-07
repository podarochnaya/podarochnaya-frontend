export interface GiftDTO {
    title: string;
    description: string;
    url: string;
    price: number;
    reserved: boolean;
    photoId: string;
    wishlistId: number;
    reserverUserId: number;
    status: number;
}