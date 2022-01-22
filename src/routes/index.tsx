import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import _ from "lodash";
import React from "react";
import useViews from "../views";
import useControllers from '../controllers';

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
        Nivel1
        
    } = useViews();

    const { useScreenHooks } = useControllers();
    const { useWelcome } = useScreenHooks();
    const { login } = useWelcome();
    const { user } = login;

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
            name: "Referencias",
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
            name: "Nivel1",
            component: Nivel1
        },
    ]

    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName={ login.token !== "" ? "Instructions" : "Home" }>
                {
                    _.map(routes, (item: any, index: number) => {
                        return (
                            <Stack.Screen
                                key={index}
                                name={item.name}
                                component={item.component}
                            />
                        )
                    })
                }
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default Routes;