import useControllers from "../../controllers";
import { Button, Center, HStack, Image, Stack, Text, View } from "native-base";
import React, { FC } from "react";
import WelcomeStyles from './welcome.style'
import useComponents from '../../components/index';

const Welcome: FC<{ navigation: any }> = ({ navigation }) => {
    const redirect = (): void => {
        navigation.navigate('Home');
    }

    const redirectLogin = (): void => {
        navigation.navigate('Login');
    }

    // Controller
    const { useScreenHooks } = useControllers();
    const { useWelcome } = useScreenHooks();
    const { login } = useWelcome(redirect, redirectLogin);
    const { user } = login;

    // Components
    const { Navigation } = useComponents();

    return (
        <React.Fragment>
            <Image
                source={require('../../assets/images/politicas.png')}
                alt="Welcome's Background"
                style={{ width: "100%", flex: 1, resizeMode: 'stretch' }}
            />
            <View style={WelcomeStyles.view}>
                <Stack style={WelcomeStyles.titleContent}>
                    <HStack display="flex" justifyContent="space-between">
                        <Image
                            source={require('../../assets/images/¡BIENVENIDO!.png')}
                            alt="Welcome's Image"
                        />
                        <Image
                            source={require('../../assets/images/Logo.png')}
                            alt="Welcome's Image"
                        />
                    </HStack>
                </Stack>
                <Stack style={WelcomeStyles.tabsContent}>
                    <HStack display="flex" justifyContent="center">
                        <View>
                            <Button variant="unstyled" onPress={() => { }}>
                                <Image
                                    source={require('../../assets/images/Level1.png')}
                                    alt="Welcome's Image"
                                />
                            </Button>
                        </View>
                        <View>
                            <Button variant="unstyled" onPress={() => { }}>
                                <Image
                                    source={require('../../assets/images/Level2.png')}
                                    alt="Welcome's Image"
                                />
                            </Button>
                        </View>
                        <View>
                            <Button variant="unstyled" onPress={() => { }}>
                                <Image
                                    source={require('../../assets/images/Level3.png')}
                                    alt="Welcome's Image"
                                />
                            </Button>
                        </View>
                    </HStack>
                </Stack>
            </View>
            <Navigation navigation={navigation} page="home" />
        </React.Fragment>
    );
}

export default Welcome;
