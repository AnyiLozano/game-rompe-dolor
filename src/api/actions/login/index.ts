import { Dispatch } from "redux";
import { IActionLogin, ILogout } from "../../../models/interfaces/login";
import useServices from "../../services";
import { LOGIN } from '../../../types';
import { ICallback } from "../../../models/interfaces/general";

const useLoginActions = () => {
    // Services
    const { useLoginServices } = useServices();
    const { loginServices } = useLoginServices();

    /** Actions */
    /**
     * This function is used for login the end user.
     * @param IActionLogin request, with the data from login the end user
     * @returns void.
     */
    const actLogin = (request: IActionLogin) => async(dispatch: Dispatch) => {
        const { user, onSuccess, onError } = request;
        try {
            const res = await loginServices(user);
            const { transaction, data, message } = res.data;
            
            if(transaction.status === true){
                data.fullname = user.fullname;

                dispatch({
                    type: LOGIN,
                    payload: data
                });

                onSuccess && onSuccess();
            }else{
                onError && onError(message.content);
            }
        } catch (error) {
            onError && onError(error);
        }
    }

    const actLogout = (request: ILogout) => async(dispatch: Dispatch) => {
        const { onError, onSuccess, fullname } = request;
        try {
            dispatch({
                type: LOGIN,
                payload: {
                    token: "",
                    user: {},
                    fullname: fullname
                }
            });

            onSuccess && onSuccess();
        } catch (error) {
            onError && onError();
        }
    }

    return {
        actLogin,
        actLogout
    }
};

export default useLoginActions;