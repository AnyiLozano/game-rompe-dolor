import useRegisterServices from './register';
import useLoginServices from './login';
import useSettingsServices from './settings';
import useGameServices from './game';

const useServices = () => {
    return {
        useRegisterServices,
        useLoginServices,
        useSettingsServices,
        useGameServices
    };
};

export default useServices;