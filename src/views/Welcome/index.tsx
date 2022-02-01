import useControllers from '../../controllers';
import {Button, Center, HStack, Image, Stack, Text, View} from 'native-base';
import React, {FC} from 'react';
import WelcomeStyles from './welcome.style';
import useComponents from '../../components/index';
import { useNavigation } from '@react-navigation/native';
import { IUseNavigation } from '../../models/interfaces/routes';

const Welcome: FC = () => {
  /** Navigation */
  const navigation = useNavigation<IUseNavigation>();

  /** Controllers */
  const {useScreenHooks} = useControllers();
  const {useWelcome} = useScreenHooks();
  const { level2, level3} = useWelcome();

  /** Components */
  const {Navigation} = useComponents();

  return (
    <React.Fragment>
      <Image
        source={require('../../assets/images/politicas.png')}
        alt="Welcome's Background"
        style={{width: '100%', flex: 1, resizeMode: 'stretch'}}
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
              <Button
                variant="unstyled"
                onPress={() => navigation.navigate('Instructions')}>
                <Image
                  source={require('../../assets/images/Level1.png')}
                  alt="Welcome's Image"
                />
              </Button>
            </View>
            <View>
              <Button variant="unstyled" onPress={() => level2 && navigation.navigate("Levels2")}>
                {level2 ? (
                  <Image
                    source={require('../../assets/images/UnlockedLevel2.png')}
                    alt="Welcome's Image"
                  />
                ) : (
                  <Image
                    source={require('../../assets/images/Level2.png')}
                    alt="Welcome's Image"
                  />
                )}
              </Button>
            </View>
            <View>
              <Button variant="unstyled" onPress={() => level2 && navigation.navigate("Levels3")}>
                {level3 ? (
                  <Image
                    source={require('../../assets/images/UnlockedLevel3.png')}
                    alt="Welcome's Image"
                  />
                ) : (
                  <Image
                    source={require('../../assets/images/Level3.png')}
                    alt="Welcome's Image"
                  />
                )}
              </Button>
            </View>
          </HStack>
        </Stack>
      </View>
      <Navigation page="home" />
    </React.Fragment>
  );
};

export default Welcome;
