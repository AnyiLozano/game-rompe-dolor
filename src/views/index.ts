import { lazy } from "react";


const Home = lazy(() => import('./Home'));
const Register = lazy(() => import('./Register'));
const Login = lazy(() => import('./Login'));
const Politica = lazy(() => import('./Politica')); 
const Welcome = lazy(() => import('./Welcome')); 
const Instructions = lazy(() => import('./Instructions')); 
const Instructions2 = lazy(() => import('./Instructions2')); 
const Instructions3 = lazy(() => import('./Instructions3')); 
const Instructions4 = lazy(() => import('./Instructions4')); 
const Instructions5 = lazy(() => import('./Instructions5')); 
const Levels = lazy(() => import('./Levels')); 
const Settings = lazy(() => import('./settings')); 
const Referencias = lazy(() => import('./referencias')); 
const Conteo = lazy(() => import('./conteo')); 
const Vamos = lazy(() => import('./vamos')); 
const Nivel1 = lazy(() => import('./nivel1')); 

const useViews = () => {
    return {
        Home,
        Register,
        Login,
        Politica,
        Welcome,
        Instructions,
        Instructions2,
        Instructions3,
        Instructions4,
        Instructions5,
        Levels,
        Settings,
        Referencias,
        Conteo,
        Vamos,
        Nivel1
    };
};

export default useViews;