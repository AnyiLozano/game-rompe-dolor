import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import { Button, Image, View } from "native-base";
import React, { FC } from "react";
import useComponents from "../../components";
import { IGeneralProps } from "../../models/interfaces/general";
import { IUseNavigation } from "../../models/interfaces/routes";
import GameoverStyles from './gameover.styles';

type ParamsList = {
    param: {
        level: number
    }
}

const Gameover: FC<IGeneralProps> = (props) => {
    const { navigation } = props;
    const route = useRoute<RouteProp<ParamsList, 'param'>>();
    const level = route.params.level

    // Components
    const { Navigation } = useComponents();

    return (
        <React.Fragment>
            <Image
                source={require('../../assets/images/politicas.png')}
                alt="Welcome's Background"
                style={{ width: "100%", flex: 1, resizeMode: 'stretch' }}
            />
            <View style={GameoverStyles.view}>
                <View style={GameoverStyles.subContent}>
                    <Button variant="unstyled" onPress={() => navigation.navigate(level === 1 
                                                                                    ? "Levels" 
                                                                                    : level === 2 
                                                                                        ? "Levels2"
                                                                                        : "Levels3")}>
                        <Image
                            source={require('../../assets/images/perdio.png')}
                            alt="Intructions' Image"
                        />
                    </Button>
                </View>
            </View>
            <Navigation page="Referencias" />
        </React.Fragment>
    );
}

export default Gameover;