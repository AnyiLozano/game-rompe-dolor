import { trackPromise } from 'react-promise-tracker';
import { ILoginData } from '../../../models/interfaces/login';
import useProviders from '../../providers';
const useLoginServices = () => {
    const { useLoginProviders } = useProviders();
    const { login } = useLoginProviders();

    /** Services */
    /**
     * This function is used from log in the end user.
     * @param ILoginData data, with the full name and the password of the end user.
     * @returns void.
     */
    const loginServices = (data: ILoginData) : Promise<any> => {
        return new Promise(async(resolve, reject) => {
            try {
                resolve(await trackPromise(login(data)));
            } catch (error) {
                reject(error);
            }
        });
    };

    return {
        loginServices,
    }
}

export default useLoginServices;