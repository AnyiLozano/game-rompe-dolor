import useRegisterProviders from './register';
import useLoginProviders from './login';
import axios from 'axios';
import useSettingsProviders from './settings';
import useGameProviders from './game';

const useProviders = () => {
    axios.defaults.baseURL = "http://192.168.10.14:8000/api";
    
    return {
        useRegisterProviders,
        useLoginProviders,
        useSettingsProviders,
        useGameProviders,
    };
};

export default useProviders;