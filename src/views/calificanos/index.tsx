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

  // Lets
  // let step: number = 1;

  // Constants
  // const changeSteps = useCallback(() => {
  //     const i = setInterval(() => {
  //         if (step === 1) {
  //             setShowTree(true);
  //             step++;
  //         } else if (step === 2) {
  //             step++;
  //             setShowTwo(true);
  //         } else if (step === 3) {
  //             step++;
  //             setShowOne(true);
  //         } else {
  //             clearInterval(i);
  //             navigation.navigate("Vamos");
  //         }
  //     }, 1000)
  // }, [step]);

  // Effects
  // useEffect(() => {
  //     changeSteps();
  // }, [changeSteps]);

  // // Components
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
              onResponderStart={() => navigation.navigate('AlertCalificacion')}
            >
              <Image
                source={require('../../assets/images/califica2.png')}
                alt="Welcome's Image"
                style={{marginTop: '0%', left: '95%'}}
              />
            </View>
            <View 
             onStartShouldSetResponder={() => true}
             onResponderStart={() => navigation.navigate('AlertCalificacion2')}
            >
              <Image
                source={require('../../assets/images/califica3.png')}
                alt="Welcome's Image"
                style={{marginTop: '44%', right: '2%', }}
              />
            </View>
            <View
            
            onStartShouldSetResponder={() => true}
            onResponderStart={() => navigation.navigate('AlertCalificacion3')}>
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
