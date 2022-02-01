import { Button, HStack, Image, Stack, View } from "native-base";
import React, { FC, useCallback, useEffect } from "react";
import useComponents from '../../components/index';
import Vamos1Styles from "./vamos3.style";

const Vamos3: FC<{ navigation: any }> = ({ navigation }) => {
    // useEffect
    const handleConteo = useCallback(() => {
        setTimeout(() => {
            console.log("Hola Como Estan?")
            navigation.navigate("Level3");
        }, 1000);
    }, []);
 
    useEffect(() => {
        handleConteo();
    }, [handleConteo]);

    // Components
    const { Navigation } = useComponents();

    return (
        <React.Fragment>
            <Image
                source={require('../../assets/images/politicas.png')}
                alt="Welcome's Background"
                style={{ width: "100%", flex: 1, resizeMode: 'stretch' }}
            />
            <View style={Vamos1Styles.view}>
                <Stack style={Vamos1Styles.tabsContent}>
                    <HStack display="flex" justifyContent="center">
                        <View>
                            <Button variant="unstyled">
                                <Image
                                    source={require('../../assets/images/iniciar.png')}
                                    alt="Welcome's Image"
                                    style={{ marginTop: '18%' }}
                                />
                            </Button>
                        </View>
                    </HStack>
                </Stack>
            </View>
            <Navigation/>
        </React.Fragment>
    );
}

export default Vamos3;



