import axios, { AxiosResponse } from "axios";
import { ILoginData } from "../../../models/interfaces/login";

const useLoginProviders = () => {
    const login = (data: ILoginData) : Promise<AxiosResponse> => axios.post('/auth/login', data);

    return {
        login
    };
}

export default useLoginProviders;