import useRegisterServices from './register';
import useLoginServices from './login';
import useSettingsServices from './settings';
import useGameServices from './game';
import useGeneralServices from './general';

const useServices = () => {
    return {
        useRegisterServices,
        useLoginServices,
        useSettingsServices,
        useGameServices,
        useGeneralServices
    };
};

export default useServices;