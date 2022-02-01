import { Button, Center, Image, Stack, Text, View } from "native-base";
import React, { FC } from "react";
import useComponents from "../../components";
import useControllers from "../../controllers";
import { IGeneralProps } from "../../models/interfaces/general";
import InstructionsStyles from './instructions.styles';

const Instructions: FC<IGeneralProps> = (props) => {
        const { navigation } = props;

    // Components
    const { Navigation } = useComponents();

    // Controller
    const { useScreenHooks } = useControllers();
    const { useWelcome } = useScreenHooks();
    const { user } = useWelcome();

    return (
        <React.Fragment>
            <Image
                source={require('../../assets/images/politicas.png')}
                alt="Welcome's Background"
                style={{ width: "100%", flex: 1, resizeMode: 'stretch' }}
            />
            <View style={InstructionsStyles.view}>
                <View style={InstructionsStyles.subContent}>
                    <Image
                        source={require('../../assets/images/subContent.png')}
                        alt="Welcome's Background"
                        style={{}}
                    />
                    <Center style={InstructionsStyles.title}>
                        <Text style={InstructionsStyles.title_text}>¡Hola {user.fullname}!</Text>
                        <Text style={InstructionsStyles.description}>Nos alegra mucho tu llegada, pues gracias a tu destreza y habilidad, juntos podremos vencer el dolor. </Text>
                        <Button style={InstructionsStyles.button} variant="unstyled" onPress={() => navigation.navigate('Instructions2')}>
                            <Text style={InstructionsStyles.buttonText}>{"Continuar >"}</Text>
                        </Button>
                    </Center>
                </View>
            </View>
            <Navigation page="instructions" />
        </React.Fragment>
    );
}

export default Instructions;