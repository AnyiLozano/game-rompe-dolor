import { ICallback } from "../general";

export interface ILoginData {
    fullname: string;
    password: string;
}

export interface IActionLogin extends ICallback {
    user: ILoginData;
}

export interface ILoginForm {
    fullname: string;
}

export interface ILogout extends ICallback {
    fullname: string;
}