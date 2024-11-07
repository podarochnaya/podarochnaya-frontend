export interface User {
    email: string;
    password: string;
    fullName: string;
    birthday: string;
}

export interface LoginDTO {
    email: string;
    password: string;
}

export interface AuthToken {
    token: string;
}