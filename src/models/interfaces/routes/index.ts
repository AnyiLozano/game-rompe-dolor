import { NativeStackNavigationProp } from "@react-navigation/native-stack";

type IScreens = {
    Welcome: undefined;
    Login: undefined;
    Settings: undefined;
    Instructions: undefined;
    References: undefined;
    Felicitacionesintentar: {
        level: number
    };
    Gameover: {
        level: number
    };
    Levels: undefined;
    Levels2: undefined;
    Levels3: undefined;
    Calificanos: undefined;
}

export type IUseNavigation = NativeStackNavigationProp<IScreens, "Welcome">