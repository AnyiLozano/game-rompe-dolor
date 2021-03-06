import {Button, Image, View} from 'native-base';
import React, {FC, useEffect} from 'react';
import useComponents from '../../components';
import useControllers from '../../controllers';
import {IGeneralProps} from '../../models/interfaces/general';
import FelicitacionesintentarStyles from './felicitacionesintentar.styles';

const Felicitacionesintentar: FC<IGeneralProps> = props => {
  /** Controllers */
  const {useScreenHooks} = useControllers();
  const {useCongratulations, useWelcome} = useScreenHooks();
  const {useCongratulationsLevel1} = useCongratulations();
  const {navigation, level} = useCongratulationsLevel1();
  const { setLevel } = useWelcome();

  console.log(level);

  /** Components */
  const {Navigation} = useComponents();

  /** Effects */
  useEffect(() => {
    setLevel(level === 1
                ? 1
                : level === 2
                  ? 2 : 3);
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
            {
              level === 1 ? (
                <Image
              source={require('../../assets/images/Felicidades.png')}
              alt="Intructions' Image"
            />
              ) : level === 2 ? (
                <Image
              source={require('../../assets/images/Felicidades.png')}
              alt="Intructions' Image"
            />
              ) : (
                <Image
              source={require('../../assets/images/felicicalificacion.png')}
              alt="Intructions' Image"
            />
              )
            }
            <Button
              variant="unstyled"
              style={{
                position: 'absolute',
                width: 150,
                height: 33,
                bottom: '27.3%',
                left: '36.3%',
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
