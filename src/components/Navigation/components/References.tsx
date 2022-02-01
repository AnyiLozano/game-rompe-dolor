import { useNavigation } from '@react-navigation/native';
import { Button, Image } from 'native-base';
import React, { FC } from 'react';
import { ISettingsButtons } from '../../../models/interfaces/components/Navigation';
import { IUseNavigation } from '../../../models/interfaces/routes';

const ReferencesButtons : FC<ISettingsButtons> = (props) => {
    /** Props */
    const { isSelected } = props;

    /** Navigation */
    const navigation = useNavigation<IUseNavigation>();

    return (
        <React.Fragment>
            {
                isSelected
                    ? (
                        <Button onPress={() => navigation.navigate('References')} variant="unstyled">
                            <Image
                                source={require('../../../assets/images/refe1.png')}
                                alt="References' Icon"
                            />
                        </Button>
                    )
                    : (
                        <Button onPress={() => navigation.navigate('References')} variant="unstyled">
                            <Image
                                source={require('../../../assets/images/referencia.png')}
                                alt="References' Icon"
                            />
                        </Button>
                    )
            }
        </React.Fragment>
    );
};

export default ReferencesButtons;
