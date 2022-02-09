import React from 'react';
import { ArrowBackIcon, ArrowForwardIcon, Image, Text, View } from 'native-base';
import Level2Styles from './Level2.style';
import { Animated, ImageBackground } from 'react-native';
import useControllers from '../../controllers';
import useComponents from '../../components';
import Alert2 from '../../components/AlertsLevel2';

const Level2 = () => {
    /** Controllers */
    const { useScreenHooks } = useControllers();
    const { useGame1 } = useScreenHooks();
    const {
        topInitialBlue,
        topInitialPurple,
        topInitialOrange,
        topInitialBlack,
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
        showAlert
    } = useGame1();

    const { Cubos, Navigation, Alert } = useComponents();

    /** Local Components */
  const BodyT = (index: number) => {
    return (
      <React.Fragment>
        {index === 1 && (
          <Image
            source={require('../../assets/images/second1.png')}
            alt="Red Capsule"
            style={Level2Styles.body}
          />
        )}
        {index === 2 && (
          <Image
            source={require('../../assets/images/second2.png')}
            alt="Yellow Capsule"
            style={Level2Styles.body}
          />
        )}
        {index === 3 && (
          <Image
            source={require('../../assets/images/second3.png')}
            alt="Red Capsule"
            style={Level2Styles.body}
          />
        )}
        {index === 4 && (
          <Image
            source={require('../../assets/images/second6.png')}  
            alt="Yellow Capsule"
            style={Level2Styles.body}
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
            source={require('../../assets/images/BlueCubo.png')}
            style={{
              position: 'absolute',
              top: '38%',
              left: '28%',
              zIndex: 1,
              transform: [
                {
                  translateY: topInitialBlue.interpolate({
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
            source={require('../../assets/images/RoseCubo.png')}
            style={{
              position: 'absolute',
              top: '38%',
              left: '28%',
              zIndex: 1,
              transform: [
                {
                  translateY: topInitialPurple.interpolate({
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
            source={require('../../assets/images/BlackCubo.png')}
            style={{
              position: 'absolute',
              top: '38%',
              left: '28%',
              zIndex: 1,
              transform: [
                {
                  translateY: topInitialBlack.interpolate({
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
            source={require('../../assets/images/OrangeCubo.png')}
            style={{
              position: 'absolute',
              transform: [
                {
                  translateY: topInitialOrange.interpolate({
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
            source={require('../../assets/images/BlueCubo.png')}
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
            source={require('../../assets/images/RoseCubo.png')}
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
            source={require('../../assets/images/BlackCubo.png')}
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
            source={require('../../assets/images/OrangeCubo.png')}
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
      style={Level2Styles.background}>
      <Image
        source={require('../../assets/images/Headerlevel2.png')}
        alt="Header Level 1"
        style={Level2Styles.header}
      />
      {BodyT(color)}
      <View style={Level2Styles.container}>
        {capsules &&
          capsules.map((item: any, index: number) => (
            <View
              key={index}
              style={{flexDirection: 'row', justifyContent: 'center'}}>
              {item.map(
                (column: {color: string; visible: boolean}, idx: number) => (
                  <Cubos
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
          style={Level2Styles.downBar}
        />
        {capsule.length >= 2 && (
          <View style={Level2Styles.secondCapsule}>
            {CapsuleMiniumT(capsule[1].number)}
          </View>
        )}
        {capsule.length >= 3 && (
          <View style={Level2Styles.thirdCapsule}>
            {CapsuleMiniumT(capsule[2].number)}
          </View>
        )}
        {capsule.length >= 4 && (
          <View style={Level2Styles.fourCapsule}>
            {CapsuleMiniumT(capsule[3].number)}
          </View>
        )}
        <View
          style={Level2Styles.backIcon}
          onStartShouldSetResponder={() => true}
          onResponderStart={() => {
            angle >= -50 && setAngle(angle - 5);
          }}>
          <ArrowBackIcon size="10" color="white" />
        </View>
        <View
          style={Level2Styles.nextIcon}
          onStartShouldSetResponder={() => true}
          onResponderStart={() => {
            angle <= 45 && setAngle(angle + 5);
          }}>
          <ArrowForwardIcon size="10" color="white" />
        </View>
        <Text
          style={Level2Styles.guns}>{`${guns} | Tiros \n Disponibles`}</Text>
      </View>
      <Alert2
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

export default Level2;
