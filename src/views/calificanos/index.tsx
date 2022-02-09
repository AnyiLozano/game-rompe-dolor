import useControllers from '../../controllers';
import {Button, Center, HStack, Image, Stack, Text, View} from 'native-base';
import React, {FC, useCallback, useEffect, useState} from 'react';
import useComponents from '../../components/index';
import CalificanosStyles from './calificanos.style';

const Calificanos: FC<{navigation: any}> = ({navigation}) => {
  // States
  const [showTree, setShowTree] = useState<boolean>(false);
  const [showTwo, setShowTwo] = useState<boolean>(false);
  const [showOne, setShowOne] = useState<boolean>(false);

  /** Controllers */
  const { useScreenHooks } = useControllers();
  const { useWelcome } = useScreenHooks();
  const { setSatisfaction } = useWelcome();
  /** Components */
  const {Navigation} = useComponents();

  return (
    <React.Fragment>
      <Image
        source={require('../../assets/images/politicas.png')}
        alt="Welcome's Background"
        style={{width: '100%', flex: 1, resizeMode: 'stretch'}}
      />
      <View style={CalificanosStyles.view}>
        <Stack style={[CalificanosStyles.tabsContent, {top: '30%', position: 'absolute', left: '10%'} ]}>
          <HStack display="flex">
            <View>
              <Image
                source={require('../../assets/images/calification1.png')}
                alt="Welcome's Image"
              />
            </View>
          </HStack>
        </Stack>

        {/* Bottom Segunda fila */}
        <Stack style={[CalificanosStyles.tabsContent, {top: '20%', position: 'absolute', left: '8%'} ]}>
          <HStack display="flex">
            <View 
              onStartShouldSetResponder={() => true}
              onResponderStart={() => setSatisfaction(1)}
            >
              <Image
                source={require('../../assets/images/califica2.png')}
                alt="Welcome's Image"
                style={{marginTop: '0%', left: '95%'}}
              />
            </View>
            <View 
             onStartShouldSetResponder={() => true}
             onResponderStart={() => setSatisfaction(2)}
            >
              <Image
                source={require('../../assets/images/califica3.png')}
                alt="Welcome's Image"
                style={{marginTop: '44%', right: '2%', }}
              />
            </View>
            <View
            
            onStartShouldSetResponder={() => true}
            onResponderStart={() => setSatisfaction(3)}>
              <Image
                source={require('../../assets/images/califica4.png')}
                alt="Welcome's Image"
                style={{marginTop: '70%', right: '101%',}}
              />
            </View>
          </HStack>
        </Stack>
      </View>
      <Navigation />
    </React.Fragment>
  );
};

export default Calificanos;
