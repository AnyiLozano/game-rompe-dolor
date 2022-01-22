import { Button, HStack, Image, Stack, Text, View } from "native-base";
import React, { FC } from "react";
import useControllers from "../../controllers";
import { INavigationProps } from "../../models/interfaces/components/Navigation";
import NavigationStyles from './navigation.style';

const Navigation: FC<INavigationProps> = (props) => {
    const { navigation, page } = props;

    const redirect = (): void => {
        navigation.navigate('Home');
    }

    const redirectLogin = (): void => {
        navigation.navigate('Login');
    }

    // Controller
    const { useScreenHooks } = useControllers();
    const { useWelcome } = useScreenHooks();
    const { login, logout } = useWelcome(redirect, redirectLogin);
    const { user } = login;

    return (
        <Stack style={NavigationStyles.View2}>
            <HStack space={3} justifyContent="center">
                <HStack style={[NavigationStyles.center, NavigationStyles.col]}>
                    <Image
                        source={require('../../assets/images/iconUser.png')}
                        alt="User's Icon"
                    />
                    <Text style={{ color: "white" }}>{user?.fullname}</Text>
                </HStack>
                <HStack style={[NavigationStyles.center, NavigationStyles.col2, { paddingLeft: '8%' }]} justifyContent="center">
                    <View style={{ paddingHorizontal: '5%' }}>
                        {
                            page && page === "settings" ? (
                                <Button onPress={() => navigation.navigate('Settings')} variant="unstyled">
                                    <Image
                                        source={require('../../assets/images/SelectedSettings.png')}
                                        alt="Instructions's Icon"
                                    />
                                </Button>
                            ) : (
                                <Button onPress={() => navigation.navigate('Settings')} variant="unstyled">
                                    <Image
                                        source={require('../../assets/images/settings.png')}
                                        alt="Instructions's Icon"
                                    />
                                </Button>
                            )
                        }
                    </View>
                    <View style={{ paddingHorizontal: '5%' }}>
                        {
                            page && page === "home" ? (
                                <Button onPress={() => navigation.navigate('Welcome')} variant="unstyled">
                                    <Image
                                        source={require('../../assets/images/SelectedHome.png')}
                                        alt="Instructions's Icon"
                                    />
                                </Button>
                            ) : (
                                <Button onPress={() => navigation.navigate('Welcome')} variant="unstyled">
                                    <Image
                                        source={require('../../assets/images/HomeIcon.png')}
                                        alt="Instructions's Icon"
                                    />
                                </Button>
                            )
                        }
                    </View>
                    <View style={{ paddingHorizontal: '5%' }}>
                        {
                            page && page === "instructions" ? (
                                <Button onPress={() => navigation.navigate('Instructions')} variant="unstyled">
                                    <Image
                                        source={require('../../assets/images/SelectedIntructions.png')}
                                        alt="Instructions's Icon"
                                    />
                                </Button>
                            ) : (
                                <Button onPress={() => navigation.navigate('Instructions')} variant="unstyled">
                                    <Image
                                        source={require('../../assets/images/instructions.png')}
                                        alt="Instructions's Icon"
                                    />
                                </Button>
                                
                            )
                        }

                    </View>
                    <View style={{ paddingHorizontal: '3%' }}>
                        {
                            page && page === "Referencias" ? (
                                <Button onPress={() => navigation.navigate('Referencias')} variant="unstyled">
                                    <Image
                                        source={require('../../assets/images/refe1.png')}
                                        alt="Referencias's Icon"
                                    />
                                </Button>
                            ) : (
                                <Button onPress={() => navigation.navigate('Referencias')} variant="unstyled">
                                    <Image
                                        source={require('../../assets/images/referencia.png')}
                                        alt="Referencias's Icon"
                                    />
                                </Button>
                                
                            )
                        }

                    </View>


                </HStack>
                <HStack style={[NavigationStyles.center, NavigationStyles.col3]} justifyContent="center">
                    <Button onPress={logout} variant="unstyled">
                        <Image
                            source={require('../../assets/images/exit.png')}
                            alt="User's Icon"
                        />
                    </Button>
                </HStack>
            </HStack>

        </Stack>
    );
}

export default Navigation;