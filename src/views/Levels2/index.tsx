import { Button, Center, Image, Stack, Text, View } from "native-base";
import React, { FC } from "react";
import useComponents from "../../components";
import useControllers from "../../controllers";
import { IGeneralProps } from "../../models/interfaces/general";
import Leves2Styles from './leves2.styles';

const Levels: FC<IGeneralProps> = (props) => {
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
            <View style={Leves2Styles.view}>
                <View style={Leves2Styles.subContent}>
                    <Button variant="unstyled" onPress={() => navigation.navigate('Conteo1')}>
                        <Image
                            source={require('../../assets/images/second.png')}
                            alt="Welcome's Background"
                            style={{}}
                        />
                    </Button>
                    <Center style={Leves2Styles.title}>
                        <Text>Soy Levels</Text>
                    </Center>
                </View>
            </View>
            <Navigation navigation={navigation} />
        </React.Fragment>
    );
}

export default Levels;