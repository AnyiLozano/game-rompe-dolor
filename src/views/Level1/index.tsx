import {
  ArrowBackIcon,
  ArrowForwardIcon,
  Button,
  Image,
  Text,
  View,
} from 'native-base';
import React, {useCallback, useRef, useState} from 'react';
import {Animated, Dimensions, ImageBackground} from 'react-native';
import useComponents from '../../components';
import Alert from '../../components/Alerts';
import Body from '../../components/Body';
import CapsulesActive from '../../components/CapsulesActive';
import useControllers from '../../controllers';
import Level1Styles from './Level1.style';

const Level1 = () => {
  /** Controllers */
  const {useScreenHooks} = useControllers();
  const {useGame} = useScreenHooks();
  const {
    capsules,
    angle,
    setAngle,
    guns,
    executeGuns,
    capsule,
    showAlert,
    handleAccept,
    color,
    colorName,
    colorTop,
    topInitialBlue,
    topInitialGreen,
    topInitialPurple,
    topInitialRed,
    topInitialYellow,
  } = useGame();

  /** Components */
  const {Capsules, Navigation} = useComponents();

  /** Local Components */
  const BodyT = (index: number) => {
    return (
      <React.Fragment>
        {index === 1 && (
          <Image
            source={require('../../assets/images/RedBody.png')}
            alt="Red Capsule"
            style={Level1Styles.body}
          />
        )}
        {index === 2 && (
          <Image
            source={require('../../assets/images/RedYellow.png')}
            alt="Yellow Capsule"
            style={Level1Styles.body}
          />
        )}
        {index === 3 && (
          <Image
            source={require('../../assets/images/Blue1.png')}
            alt="Red Capsule"
            style={Level1Styles.body}
          />
        )}
        {index === 4 && (
          <Image
            source={require('../../assets/images/Morado2.png')}
            alt="Yellow Capsule"
            style={Level1Styles.body}
          />
        )}
        {index === 5 && (
          <Image
            source={require('../../assets/images/Verde1.png')}
            alt="Red Capsule"
            style={Level1Styles.body}
          />
        )}
      </React.Fragment>
    );
  };

  const CapsuleT = (index: number) => {
    return (
      <React.Fragment>
        {index === 1 && (
          <Animated.Image
            source={require('../../assets/images/RedActivado.png')}
            style={{
              position: 'absolute',
              top: '30%',
              left: '25%',
              zIndex: 1,
              transform: [
                {
                  translateY: topInitialRed.interpolate({
                    inputRange: [0, 1],
                    outputRange: [15, colorTop],
                  }),
                },
              ],
              height: '50%',
              width: '50%',
            }}
          />
        )}
        {index === 2 && (
          <Animated.Image
            source={require('../../assets/images/YellowActivo.png')}
            style={{
              position: 'absolute',
              top: '30%',
              left: '25%',
              zIndex: 1,
              transform: [
                {
                  translateY: topInitialYellow.interpolate({
                    inputRange: [0, 1],
                    outputRange: [15, colorTop],
                  }),
                },
              ],
              height: '50%',
              width: '50%',
            }}
          />
        )}
        {index === 3 && (
          <Animated.Image
            source={require('../../assets/images/BlueActivo.png')}
            style={{
              position: 'absolute',
              top: '30%',
              left: '25%',
              zIndex: 1,
              transform: [
                {
                  translateY: topInitialBlue.interpolate({
                    inputRange: [0, 1],
                    outputRange: [15, colorTop],
                  }),
                },
              ],
              height: '50%',
              width: '50%',
            }}
          />
        )}
        {index === 4 && (
          <Animated.Image
            source={require('../../assets/images/RosaActivo.png')}
            style={{
              position: 'absolute',
              top: '30%',
              left: '25%',
              zIndex: 1,
              transform: [
                {
                  translateY: topInitialPurple.interpolate({
                    inputRange: [0, 1],
                    outputRange: [15, colorTop],
                  }),
                },
              ],
              height: '50%',
              width: '50%',
            }}
          />
        )}
        {index === 5 && (
          <Animated.Image
            source={require('../../assets/images/GreenActivo.png')}
            style={{
              position: 'absolute',
              top: '30%',
              left: '25%',
              zIndex: 1,
              transform: [
                {
                  translateY: topInitialGreen.interpolate({
                    inputRange: [0, 1],
                    outputRange: [15, colorTop],
                  }),
                },
              ],
              height: '50%',
              width: '50%',
            }}
          />
        )}
      </React.Fragment>
    );
  };

  const CapsuleMiniumT = (index: number) => {
    return (
      <React.Fragment>
        {index === 1 && (
          <Image
            source={require('../../assets/images/RedActivado.png')}
            alt="Red Capsule"
            size="16"
            style={{
              position: 'absolute',
              top: '30%',
              left: '15%',
              zIndex: 1,
            }}
          />
        )}
        {index === 2 && (
          <Image
            source={require('../../assets/images/YellowActivo.png')}
            alt="Yellow Capsule"
            size="16"
            style={{
              position: 'absolute',
              top: '30%',
              left: '15%',
              zIndex: 1,
            }}
          />
        )}
        {index === 3 && (
          <Image
            source={require('../../assets/images/BlueActivo.png')}
            alt="Red Capsule"
            size="16"
            style={{
              position: 'absolute',
              top: '30%',
              left: '15%',
              zIndex: 1,
            }}
          />
        )}
        {index === 4 && (
          <Image
            source={require('../../assets/images/RosaActivo.png')}
            alt="Yellow Capsule"
            size="16"
            style={{
              position: 'absolute',
              top: '30%',
              left: '15%',
              zIndex: 1,
            }}
          />
        )}
        {index === 5 && (
          <Image
            source={require('../../assets/images/GreenActivo.png')}
            alt="Red Capsule"
            size="16"
            style={{
              position: 'absolute',
              top: '30%',
              left: '15%',
              zIndex: 1,
            }}
          />
        )}
      </React.Fragment>
    );
  };

  /** Final */
  return (
    <ImageBackground
      resizeMode="stretch"
      source={require('../../assets/images/politicas.png')}
      style={Level1Styles.background}>
      {/* <Text>{angle}</Text> */}
      <Image
        source={require('../../assets/images/HeaderLevel1.png')}
        alt="Header Level 1"
        style={Level1Styles.header}
      />
      {BodyT(color)}
      <View style={Level1Styles.container}>
        {capsules &&
          capsules.map((item: any, index: number) => (
            <View
              key={index}
              style={{flexDirection: 'row', justifyContent: 'center'}}>
              {item.map(
                (column: {color: string; visible: boolean}, idx: number) => (
                  <Capsules
                    color={column.color}
                    key={idx}
                    style={{opacity: column.visible === true ? 1 : 0}}
                  />
                ),
              )}
            </View>
          ))}
        <View style={{position: 'absolute', bottom: '10%', left: '49%'}}>
          <View style={{transform: [{rotate: `${angle}deg`}]}}>
            <Image
              source={require('../../assets/images/ArrowButton.png')}
              alt="Arrow"
            />
            {CapsuleT(color)}
          </View>
        </View>
        <View
          onStartShouldSetResponder={() => true}
          onResponderStart={() => executeGuns(colorName, angle)}
          style={{
            position: 'absolute',
            bottom: '2%',
            left: '52%',
            zIndex: 10,
          }}>
          <Image
            source={require('../../assets/images/Button.png')}
            alt="Down Bar"
          />
        </View>

        <Image
          source={require('../../assets/images/DownBar.png')}
          alt="Down Bar"
          style={Level1Styles.downBar}
        />
        {capsule.length >= 2 && (
          <View style={Level1Styles.secondCapsule}>
            {CapsuleMiniumT(capsule[1].number)}
          </View>
        )}
        {capsule.length >= 3 && (
          <View style={Level1Styles.thirdCapsule}>
            {CapsuleMiniumT(capsule[2].number)}
          </View>
        )}
        {capsule.length >= 4 && (
          <View style={Level1Styles.fourCapsule}>
            {CapsuleMiniumT(capsule[3].number)}
          </View>
        )}
        <View
          style={Level1Styles.backIcon}
          onStartShouldSetResponder={() => true}
          onResponderStart={() => {
            angle >= -50 && setAngle(angle - 5);
          }}>
          <ArrowBackIcon size="10" color="white" />
        </View>
        <View
          style={Level1Styles.nextIcon}
          onStartShouldSetResponder={() => true}
          onResponderStart={() => {
            angle <= 45 && setAngle(angle + 5);
          }}>
          <ArrowForwardIcon size="10" color="white" />
        </View>
        <Text
          style={Level1Styles.guns}>{`${guns} | Tiros \n Disponibles`}</Text>
      </View>
      <Alert
        number={guns}
        onPress={handleAccept}
        style={{
          position: 'absolute',
          width: '100%',
          height: '100%',
          zIndex: 100,
          backgroundColor: '#ffffff',
          display: showAlert ? 'flex' : 'none',
        }}
      />
      <Navigation />
    </ImageBackground>
  );
};

export default Level1;
