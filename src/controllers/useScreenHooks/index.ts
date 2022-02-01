import useRegister from './register';
import useLogin from './login';
import useWelcome from './welcome';
import useSettings from './settings';
import useGame from './game';
import useCongratulations from './congratulations';
import useGame1 from './game1';
import useGame2 from './game2';

const useScreenHooks = () => {
    return {
        useRegister,
        useLogin,
        useWelcome,
        useSettings,
        useGame,
        useCongratulations,
        useGame1,
        useGame2
    };
};

export default useScreenHooks;