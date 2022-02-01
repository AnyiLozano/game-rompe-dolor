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
const Vamos1 = lazy(() => import('./vamos1')); 
const Vamos3 = lazy(() => import('./vamos3')); 
const Nivel1 = lazy(() => import('./nivel1')); 
const Level1 = lazy(() => import('./Level1')); 
const Calificanos = lazy(() => import('./calificanos')); 
const AlertCalificacion = lazy(() => import('./alertCalificacion')); 
const AlertCalificacion2 = lazy(() => import('./alertCalificacion2')); 
const AlertCalificacion3 = lazy(() => import('./alertCalificacion3')); 
const Felicitaciones = lazy(() => import('./felicitaciones')); 
const Felicitacionesintentar = lazy(() => import('./felicitacionesintentar')); 
const Gameover = lazy(() => import('./gameover')); 
const Levels2 = lazy(() => import('./Levels2')); 
const Level2 = lazy(() => import('./Level2')); 
const Levels3 = lazy(() => import('./Levels3')); 
const Level3 = lazy(() => import('./Level3')); 
const Conteo1 = lazy(() => import('./conteo1')); 
const Conteo3 = lazy(() => import('./conteo3')); 

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
        Vamos1,
        Vamos3,
        Nivel1,
        Level1,
        Calificanos,
        AlertCalificacion,
        AlertCalificacion2,
        AlertCalificacion3,
        Felicitaciones,
        Felicitacionesintentar,
        Gameover,
        Levels2,
        Level2,
        Level3,
        Conteo1,
        Conteo3,
        Levels3
    };
};

export default useViews;