import { Button, Center, Image, Stack, Text, View } from "native-base";
import React, { FC } from "react";
import useComponents from "../../components";
import useControllers from "../../controllers";
import { IGeneralProps } from "../../models/interfaces/general";
import AlertCalificacion3Styles from './AlertCalificacion3.styles';

const AlertCalificacion3: FC<IGeneralProps> = (props) => {
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
    // const { useScreenHooks } = useControllers();
    // const { useWelcome } = useScreenHooks();
    // const { login,  } = useWelcome(redirect, redirectLogin);
    // const { user } = login;

    return (
        <React.Fragment>
            <Image
                source={require('../../assets/images/politicas.png')}
                alt="Welcome's Background"
                style={{ width: "100%", flex: 1, resizeMode: 'stretch' }}
            />
            <View style={AlertCalificacion3Styles.view}>
                <View style={AlertCalificacion3Styles.subContent}>
                    <Button variant="unstyled" onPress={() => navigation.navigate('Welcome')}>
                        <Image
                            source={require('../../assets/images/razon.png')}
                            alt="Intructions' Image"
                        />
                    </Button>
                </View>
            </View>
            <Navigation navigation={navigation} page="Referencias" />
        </React.Fragment>
    );
}

export default AlertCalificacion3;