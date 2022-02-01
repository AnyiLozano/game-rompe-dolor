import useApi from '../../../api';
import { SubmitHandler, useForm } from 'react-hook-form';
import { IActionLogin, ILoginForm } from '../../../models/interfaces/login';
import { useNavigation } from '@react-navigation/native';
import { IUseNavigation } from '../../../models/interfaces/routes';
import { useEffect } from 'react';
import useSelectors from '../../../models/selectors';
import { useSelector } from 'react-redux';

const useLogin = () => {
    /** Navigation */
    const navigation = useNavigation<IUseNavigation>();

    /** Use Form */
    const { control, handleSubmit, reset } = useForm({ mode: "onChange" });

    /** Actions */
    const { useActions } = useApi();
    const { dispatch, useLoginActions } = useActions();
    const { actLogin } = useLoginActions();

    /** Selectors */
    const { useLoginSelectors } = useSelectors();
    const { loginSelector } = useLoginSelectors();
    const login = useSelector(loginSelector);
    const { fullname } = login;

    /** Handlers */
    const handleLogin : SubmitHandler<ILoginForm> = (data) => {
        const request : IActionLogin = {
            user: { fullname: data.fullname, password: "password" },
            onSuccess: () => {
                navigation.navigate("Welcome");
            },
            onError: (error: any) => {
                console.log(error);
            }
        };

        dispatch(actLogin(request));
    };

    useEffect(() => {
        reset({
            fullname: fullname
        })
    }, []);

    return {
        control,
        handleSubmit,
        handleLogin
    }
}

export default useLogin;