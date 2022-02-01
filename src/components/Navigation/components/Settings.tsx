import { useNavigation } from '@react-navigation/native';
import { Button, Image } from 'native-base';
import React, { FC } from 'react';
import { ISettingsButtons } from '../../../models/interfaces/components/Navigation';
import { IUseNavigation } from '../../../models/interfaces/routes';

const SettingsButtons : FC<ISettingsButtons> = (props) => {
    /** Props */
    const { isSelected } = props;

    /** Navigation */
    const navigation = useNavigation<IUseNavigation>();

    return (
        <React.Fragment>
            {
                isSelected
                    ? (
                        <Button onPress={() => navigation.navigate('Settings')} variant="unstyled">
                            <Image
                                source={require('../../../assets/images/SelectedSettings.png')}
                                alt="Instructions's Icon"
                            />
                        </Button>
                    )
                    : (
                        <Button onPress={() => navigation.navigate('Settings')} variant="unstyled">
                            <Image
                                source={require('../../../assets/images/settings.png')}
                                alt="Instructions's Icon"
                            />
                        </Button>
                    )
            }
        </React.Fragment>
    );
};

export default SettingsButtons;
