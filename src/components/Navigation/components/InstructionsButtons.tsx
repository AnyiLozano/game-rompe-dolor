import { useNavigation } from '@react-navigation/native';
import { Button, Image } from 'native-base';
import React, { FC } from 'react';
import { ISettingsButtons } from '../../../models/interfaces/components/Navigation';
import { IUseNavigation } from '../../../models/interfaces/routes';

const InstructionsButtons : FC<ISettingsButtons> = (props) => {
    /** Props */
    const { isSelected } = props;

    /** Navigation */
    const navigation = useNavigation<IUseNavigation>();

    return (
        <React.Fragment>
            {
                isSelected
                    ? (
                        <Button onPress={() => navigation.navigate('Instructions')} variant="unstyled">
                            <Image
                                source={require('../../../assets/images/SelectedIntructions.png')}
                                alt="Instructions's Icon"
                            />
                        </Button>
                    )
                    : (
                        <Button onPress={() => navigation.navigate('Instructions')} variant="unstyled">
                            <Image
                                source={require('../../../assets/images/instructions.png')}
                                alt="Instructions's Icon"
                            />
                        </Button>
                    )
            }
        </React.Fragment>
    );
};

export default InstructionsButtons;
