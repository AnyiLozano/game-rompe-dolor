import useApi from "../../../api";
import { useSelector } from "react-redux";
import useModels from "../../../models";
import { ICallback } from '../../../models/interfaces/general';
import { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { IUseNavigation } from "../../../models/interfaces/routes";
import { ILogout } from "../../../models/interfaces/login";

const useWelcome = () => {
    /** Navigation */
    const navigation = useNavigation<IUseNavigation>();

    /** Selectors */
    const { useSelectors } = useModels();
    const { useLoginSelectors } = useSelectors();
    const { loginSelector } = useLoginSelectors();
    const login = useSelector(loginSelector);
    const { user, token, fullname } = login;

    /** Actions */
    const { useActions } = useApi();
    const { dispatch, useLoginActions, useGameActions } = useActions();
    const { actGetLevel } = useGameActions();
    const { actLogout } = useLoginActions();

    /** States */
    const [level2, setLevel2] = useState<boolean>(false);
    const [level3, setLevel3] = useState<boolean>(false);
    
    /** Handlers */
    const logout = () => {
        const request : ILogout = {
            onSuccess: () => {
                navigation.navigate("Login");
            },
            onError: (error: any) => console.log(error),
            fullname: fullname
        }

        dispatch(actLogout(request));
    }

    useEffect(() => {
        const request : ICallback = {
            onSuccess: (data: any) => {
                if(data.length === 3){
                    setLevel2(true);
                    setLevel3(true);
                }else{
                    setLevel2(true);
                }
            },
            onError: (error: any) => {
                console.log(error);
            }
        }
        dispatch(actGetLevel(request))
    }, [dispatch])

    return {
        user,
        token,
        logout,
        navigation,
        level2,
        level3
    };
}

export default useWelcome;