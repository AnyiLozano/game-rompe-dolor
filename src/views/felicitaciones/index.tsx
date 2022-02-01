import { Button, Center, Image, Stack, Text, View } from "native-base";
import React, { FC } from "react";
import useComponents from "../../components";
import useControllers from "../../controllers";
import { IGeneralProps } from "../../models/interfaces/general";
import FelicitacionesStyles from './felicitaciones.styles';

const Felicitaciones: FC<IGeneralProps> = (props) => {
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
            <View style={FelicitacionesStyles.view}>
                <View style={FelicitacionesStyles.subContent}>
                    <Button variant="unstyled">
                        <Image
                            source={require('../../assets/images/felicicalificacion.png')}
                            alt="Intructions' Image"
                        />
                        <Button
              variant="unstyled"
              style={{
                position: 'absolute',
                width: 150,
                height: 33,
                bottom: '27.3%',
                left: '36.3%',
              }}
              onPress={() =>
                navigation.navigate(
                 'Levels3'
                )
              }></Button>
            <Button
              variant="unstyled"
              style={{
                position: 'absolute',
                width: 150,
                height: 33,
                bottom: '17.3%',
                left: '36.3%',
              }}
              onPress={() =>
                navigation.navigate(
                     'Calificanos'
                )
              }></Button>
                    </Button>
                </View>
            </View>
            <Navigation page="Referencias" />
        </React.Fragment>
    );
}

export default Felicitaciones;