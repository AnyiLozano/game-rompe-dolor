import useApi from "../../../api";
import { useSelector } from "react-redux";
import useModels from "../../../models";
import { ICallback } from '../../../models/interfaces/general';
import { useEffect } from "react";

const useWelcome = (redirect?: any, redirectLogin? : any) => {
    const { useSelectors } = useModels();
    const { useLoginSelectors } = useSelectors();
    const { loginSelector } = useLoginSelectors();
    const login = useSelector(loginSelector);

    const { useActions } = useApi();
    const { dispatch, useLoginActions } = useActions();
    const { actLogout } = useLoginActions();
    
    const logout = () => {
        const request : ICallback = {
            onSuccess: () => {
                redirect && redirect()
            },
            onError: () => {},
        }

        dispatch(actLogout(request));
    }

    useEffect(() => {
        if(login.token === ""){
            redirectLogin && redirectLogin()
        }
    }, [login, redirect])
    return {
        login,
        logout
    };
}

export default useWelcome;