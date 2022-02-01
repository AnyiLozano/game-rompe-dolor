import React from 'react';
import {ArrowBackIcon, ArrowForwardIcon, Image, Text, View} from 'native-base';
import Level3Styles from './Level3.style';
import {Animated, ImageBackground} from 'react-native';
import useControllers from '../../controllers';
import useComponents from '../../components';
import Bubble from '../../components/Bubbles';

const Level3 = () => {
  /** Controllers */
  const {useScreenHooks} = useControllers();
  const {useGame2} = useScreenHooks();
  const {
    topInitialRose,
    topInitialGreen,
    topInitialOrange,
    topInitialCoffee,
    angle,
    capsule,
    capsules,
    color,
    colorName,
    colorTop,
    executeGuns,
    guns,
    handleAccept,
    setAngle,
    showAlert,
  } = useGame2();

  const {Cubos, Navigation, Alert} = useComponents();

  /** Local Components */
  const BodyT = (index: number) => {
    return (
      <React.Fragment>
        {index === 1 && (
          <Image
            source={require('../../assets/images/RedBody.png')}
            alt="Red Capsule"
            style={Level3Styles.body}
          />
        )}
        {index === 2 && (
          <Image
            source={require('../../assets/images/RedYellow.png')}
            alt="Yellow Capsule"
            style={Level3Styles.body}
          />
        )}
        {index === 3 && (
          <Image
            source={require('../../assets/images/Blue1.png')}
            alt="Red Capsule"
            style={Level3Styles.body}
          />
        )}
        {index === 4 && (
          <Image
            source={require('../../assets/images/Morado2.png')}
            alt="Yellow Capsule"
            style={Level3Styles.body}
          />
        )}
        {index === 5 && (
          <Image
            source={require('../../assets/images/Verde1.png')}
            alt="Red Capsule"
            style={Level3Styles.body}
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
            source={require('../../assets/images/GreenBubble.png')}
            style={{
              position: 'absolute',
              top: '38%',
              left: '28%',
              zIndex: 1,
              transform: [
                {
                  translateY: topInitialGreen.interpolate({
                    inputRange: [0, 1],
                    outputRange: [15, colorTop],
                  }),
                },
              ],
            }}
          />
        )}
        {index === 2 && (
          <Animated.Image
            source={require('../../assets/images/RoseBubble.png')}
            style={{
              position: 'absolute',
              top: '38%',
              left: '28%',
              zIndex: 1,
              transform: [
                {
                  translateY: topInitialRose.interpolate({
                    inputRange: [0, 1],
                    outputRange: [15, colorTop],
                  }),
                },
              ],
            }}
          />
        )}
        {index === 3 && (
          <Animated.Image
            source={require('../../assets/images/OrangeBubble.png')}
            style={{
              position: 'absolute',
              top: '38%',
              left: '28%',
              zIndex: 1,
              transform: [
                {
                  translateY: topInitialOrange.interpolate({
                    inputRange: [0, 1],
                    outputRange: [15, colorTop],
                  }),
                },
              ],
            }}
          />
        )}
        {index === 4 && (
          <Animated.Image
            source={require('../../assets/images/CoffeeBubble.png')}
            style={{
              position: 'absolute',
              transform: [
                {
                  translateY: topInitialCoffee.interpolate({
                    inputRange: [0, 1],
                    outputRange: [15, colorTop],
                  }),
                },
              ],
              top: '38%',
              left: '28%',
              zIndex: 1,
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
            source={require('../../assets/images/GreenBubble.png')}
            alt="Red Capsule"
            size="10"
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
            source={require('../../assets/images/RoseBubble.png')}
            alt="Yellow Capsule"
            size="10"
            style={{
              position: 'absolute',
              top: '20%',
              left: '15%',
              zIndex: 1,
            }}
          />
        )}
        {index === 3 && (
          <Image
            source={require('../../assets/images/OrangeBubble.png')}
            alt="Red Capsule"
            size="10"
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
            source={require('../../assets/images/CoffeeBubble.png')}
            alt="Yellow Capsule"
            size="10"
            style={{
              position: 'absolute',
              top: '40%',
              left: '15%',
              zIndex: 1,
            }}
          />
        )}
      </React.Fragment>
    );
  };

  /** Render */
  return (
    <ImageBackground
      resizeMode="stretch"
      source={require('../../assets/images/politicas.png')}
      style={Level3Styles.background}>
      <Image
        source={require('../../assets/images/HeaderLevel3.png')}
        alt="Header Level 1"
        style={Level3Styles.header}
      />
      {BodyT(color)}
      <View style={Level3Styles.container}>
        {capsules &&
          capsules.map((item: any, index: number) => (
            <View
              key={index}
              style={{flexDirection: 'row', justifyContent: 'center'}}>
              {item.map(
                (column: {color: string; visible: boolean}, idx: number) => (
                  <Bubble
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
          style={Level3Styles.downBar}
        />
        {capsule.length >= 2 && (
          <View style={Level3Styles.secondCapsule}>
            {CapsuleMiniumT(capsule[1].number)}
          </View>
        )}
        {capsule.length >= 3 && (
          <View style={Level3Styles.thirdCapsule}>
            {CapsuleMiniumT(capsule[2].number)}
          </View>
        )}
        {capsule.length >= 4 && (
          <View style={Level3Styles.fourCapsule}>
            {CapsuleMiniumT(capsule[3].number)}
          </View>
        )}
        <View
          style={Level3Styles.backIcon}
          onStartShouldSetResponder={() => true}
          onResponderStart={() => {
            angle >= -50 && setAngle(angle - 5);
          }}>
          <ArrowBackIcon size="10" color="white" />
        </View>
        <View
          style={Level3Styles.nextIcon}
          onStartShouldSetResponder={() => true}
          onResponderStart={() => {
            angle <= 45 && setAngle(angle + 5);
          }}>
          <ArrowForwardIcon size="10" color="white" />
        </View>
        <Text
          style={Level3Styles.guns}>{`${guns} | Tiros \n Disponibles`}</Text>
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

export default Level3;
