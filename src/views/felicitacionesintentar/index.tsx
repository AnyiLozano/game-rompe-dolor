import {Button, Image, View} from 'native-base';
import React, {FC, useEffect} from 'react';
import useComponents from '../../components';
import useControllers from '../../controllers';
import {IGeneralProps} from '../../models/interfaces/general';
import FelicitacionesintentarStyles from './felicitacionesintentar.styles';

const Felicitacionesintentar: FC<IGeneralProps> = props => {
  /** Controllers */
  const {useScreenHooks} = useControllers();
  const {useCongratulations} = useScreenHooks();
  const {useCongratulationsLevel1} = useCongratulations();
  const {setLevel, navigation, level} = useCongratulationsLevel1();

  console.log(level);

  /** Components */
  const {Navigation} = useComponents();

  /** Effects */
  useEffect(() => {
    setLevel();
  }, [setLevel]);

  return (
    <React.Fragment>
      <Image
        source={require('../../assets/images/politicas.png')}
        alt="Welcome's Background"
        style={{width: '100%', flex: 1, resizeMode: 'stretch'}}
      />
      <View style={FelicitacionesintentarStyles.view}>
        <View style={FelicitacionesintentarStyles.subContent}>
          <Button
            variant="unstyled"
            onPress={() => navigation.navigate('Welcome')}>
            <Image
              source={require('../../assets/images/intentar.png')}
              alt="Intructions' Image"
            />
            <Button
              variant="unstyled"
              style={{
                position: 'absolute',
                width: 150,
                height: 33,
                bottom: '27.3%',
                left: '36.3%',
                backgroundColor: 'blue',
              }}
              onPress={() =>
                navigation.navigate(
                  level === 1 ? 'Levels' : level === 2 ? 'Levels2' : 'Levels3',
                )
              }></Button>
            <Button
              variant="unstyled"
              style={{
                position: 'absolute',
                width: 150,
                backgroundColor: 'blue',
                height: 33,
                bottom: '17.3%',
                left: '36.3%',
              }}
              onPress={() =>
                navigation.navigate(
                  level === 1
                    ? 'Levels2'
                    : level === 2
                    ? 'Levels3'
                    : 'Calificanos',
                )
              }></Button>
          </Button>
        </View>
      </View>
      <Navigation />
    </React.Fragment>
  );
};

export default Felicitacionesintentar;
