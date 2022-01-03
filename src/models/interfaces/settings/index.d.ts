import { ICallback } from "../general";

export interface IEditUser {
    id: number;
    fullname: string;
    pharmacy: string;
    email: string;
    phone: string;
}

export interface IActionEditUser extends ICallback {
    req: IEditUser;
}