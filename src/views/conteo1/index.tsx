import useControllers from "../../controllers";
import { Button, Center, HStack, Image, Stack, Text, View } from "native-base";
import React, { FC, useCallback, useEffect, useState } from "react";
import useComponents from '../../components/index';
import Conteo1Styles from "./conteo1.style";

const Conteo1: FC<{ navigation: any }> = ({ navigation }) => {
    // States
    const [showTree, setShowTree] = useState<boolean>(false);
    const [showTwo, setShowTwo] = useState<boolean>(false);
    const [showOne, setShowOne] = useState<boolean>(false);

    // Lets
    let step: number = 1;

    // Constants
    const changeSteps = useCallback(() => {
        const i = setInterval(() => {
            if (step === 1) {
                setShowTree(true);
                step++;
            } else if (step === 2) {
                step++;
                setShowTwo(true);
            } else if (step === 3) {
                step++;
                setShowOne(true);
            } else {
                clearInterval(i);
                navigation.navigate("Vamos1");    
            }
        }, 1000)
    }, [step]);

    // Effects
    useEffect(() => {
        changeSteps();
    }, [changeSteps]);

    // Components
    const { Navigation } = useComponents();

    return (
        <React.Fragment>
            <Image
                source={require('../../assets/images/politicas.png')}
                alt="Welcome's Background"
                style={{ width: "100%", flex: 1, resizeMode: 'stretch' }}
            />
            <View style={Conteo1Styles.view}>
                <Stack style={Conteo1Styles.tabsContent}>
                    <HStack display="flex" justifyContent="center">
                        <View>
                            {
                                showTree && (
                                    <Button variant="unstyled">
                                        <Image
                                            source={require('../../assets/images/tres.png')}
                                            alt="Welcome's Image"   
                                            style={{ marginTop: '44%' }}
                                        />
                                    </Button>
                                )
                            }
                        </View>
                        <View>
                            {
                                showTwo && (
                                    <Button variant="unstyled">
                                        <Image
                                            source={require('../../assets/images/dos.png')}
                                            alt="Welcome's Image"
                                            style={{ marginTop: '44%' }}
                                        />
                                    </Button>
                                )
                            }
                        </View>
                        <View>
                            {
                                showOne && (
                                    <Button variant="unstyled">
                                        <Image
                                            source={require('../../assets/images/uno.png')}
                                            alt="Welcome's Image"
                                            style={{ marginTop: '44%' }}
                                        />
                                    </Button>
                                )
                            }
                        </View>
                    </HStack>
                </Stack>
            </View>
            <Navigation navigation={navigation}/>
        </React.Fragment>
    );
}

export default Conteo1;