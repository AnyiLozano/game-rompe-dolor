import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import _ from "lodash";
import React from "react";
import useViews from "../views";
import useControllers from '../controllers';
import useSelectors from "../models/selectors";
import { useSelector } from "react-redux";

const Stack = createNativeStackNavigator();

const Routes = () => {
    const {
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
        Vamos1,
        Vamos3,
        Levels3
    } = useViews();

    const { useLoginSelectors } = useSelectors();
    const { loginSelector } = useLoginSelectors();
    const login = useSelector(loginSelector);
    const { token } = login;

    const routes = [
        {
            name: "Home",
            component: Home
        },
        {
            name: "Register",
            component: Register
        },
        {
            name: "Login",
            component: Login
        },
        {
            name: "Politica",
            component: Politica
        },
        {
            name: "Welcome",
            component: Welcome
        },
        {
            name: "Instructions",
            component: Instructions
        },
        {
            name: "Instructions2",
            component: Instructions2
        },
        {
            name: "Instructions3",
            component: Instructions3
        },
        {
            name: "Instructions4",
            component: Instructions4
        },
        {
            name: "Instructions5",
            component: Instructions5
        },
        {
            name: "Levels",
            component: Levels
        },
        {
            name: "Settings",
            component: Settings
        },
        {
            name: "References",
            component: Referencias
        },
        {
            name: "Conteo",
            component: Conteo
        },
        {
            name: "Vamos",
            component: Vamos
        },
        {
            name: "Vamos1",
            component: Vamos1
        },
        {
            name: "Vamos3",
            component: Vamos3
        },
        {
            name: "Nivel1",
            component: Nivel1
        },
        {
            name: "Level1",
            component: Level1
        },
        {
            name: "Calificanos",
            component: Calificanos
        },
        {
            name: "AlertCalificacion",
            component: AlertCalificacion
        },
        {
            name: "AlertCalificacion2",
            component: AlertCalificacion2
        },
        {
            name: "AlertCalificacion3",
            component: AlertCalificacion3
        },
        {
            name: "Felicitaciones",
            component: Felicitaciones
        },
        {
            name: "Felicitacionesintentar",
            component: Felicitacionesintentar,
            param: { level: 1 }
        },
        {
            name: "Gameover",
            component: Gameover,
            param: { level: 0 }
        },
        {
            name: "Levels2",
            component: Levels2
        },
        {
            name: "Level2",
            component: Level2
        },
        {
            name: "Level3",
            component: Level3
        },
        {
            name: "Conteo1",
            component: Conteo1
        },
        {
            name: "Conteo3",
            component: Conteo3
        },
        {
            name: "Levels3",
            component: Levels3
        },
    ]

    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName={token ? "Levels3" : "Login"}>
                {
                    _.map(routes, (item: any, index: number) => {
                        return (
                            <Stack.Screen
                                key={index}
                                name={item.name}
                                component={item.component}
                                initialParams={item.param}
                            />
                        )
                    })
                }
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default Routes;