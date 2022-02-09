import { useDispatch } from "react-redux";
import useRegisterActions from './register';
import useLoginActions from './login';
import useSettingsActions from './settings';
import useGameActions from "./game";
import useGeneralActions from "./general";

const useActions = () => {
    const dispatch = useDispatch();

    return {
        dispatch,
        useRegisterActions,
        useLoginActions,
        useSettingsActions,
        useGameActions,
        useGeneralActions,
    };
};

export default useActions;