import { Button, Center, Image, Stack, Text, View } from "native-base";
import React, { FC } from "react";
import useComponents from "../../components";
import useControllers from "../../controllers";
import { IGeneralProps } from "../../models/interfaces/general";
import Nivel1Styles from './nivel1.style';

const Nivel1: FC<IGeneralProps> = (props) => {
    const redirect = (): void => {
        navigation.navigate('Home');
    }

    const redirectLogin = (): void => {
        navigation.navigate('Login');
    }

    const { navigation } = props;

    // Components
    const { Navigation } = useComponents();

    // Controller
    const { useScreenHooks } = useControllers();
    const { useWelcome } = useScreenHooks();
    const { login,  } = useWelcome(redirect, redirectLogin);
    const { user } = login;

    return (
        <React.Fragment>
            <Image
                source={require('../../assets/images/juego.png')}
                alt="Welcome's Background"
                style={{ width: "100%", flex: 1, resizeMode: 'stretch' }}
            />
            {/* <View style={Nivel1Styles.view}>
                <View style={Nivel1Styles.subContent}>
                    <Button variant="unstyled" onPress={() => navigation.navigate('Instructions3')}>
                        <Image
                            source={require('../../assets/images/Instructions2.png')}
                            alt="Intructions' Image"
                        />
                    </Button>
                </View>
            </View> */}
            <Navigation navigation={navigation}  />
        </React.Fragment>
    );
}

export default Nivel1;