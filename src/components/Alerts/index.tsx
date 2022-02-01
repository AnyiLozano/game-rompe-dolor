import {Image, View} from 'native-base';
import React, {FC} from 'react';

const Alert: FC<{number: number; style?: any; onPress: any}> = ({
  number,
  style,
  onPress,
}): JSX.Element => {

  return (
    <React.Fragment>
      {number === 1 && (
        <View
          onStartShouldSetResponderCapture={() => true}
          onResponderStart={onPress}
          style={style}
          >
          <Image
            source={require('../../assets/images/AlertMorado1.png')}
            alt="Red Capsule"
            width={'100%'}
            height={'100%'}
          />
        </View>
      )}
      {number === 2 && (
        <View
          onStartShouldSetResponderCapture={() => true}
          onResponderStart={onPress}
          style={style}
          >
          <Image
            source={require('../../assets/images/AlertGreen1.png')}
            alt="Yellow Capsule"
            width={'100%'}
            height={'100%'}
          />
        </View>
      )}
      {number === 3 && (
        <View
          onStartShouldSetResponderCapture={() => true}
          onResponderStart={onPress}
          style={style}>
          <Image
            source={require('../../assets/images/AlertBlue1.png')}
            alt="Red Capsule"
            width={'100%'}
            height={'100%'}
          />
        </View>
      )}
      {number === 4 && (
        <View
          onStartShouldSetResponderCapture={() => true}
          onResponderStart={onPress}
          style={style}
          >
          <Image
            source={require('../../assets/images/AlertYellow2.png')}
            alt="Yellow Capsule"
            width={'100%'}
            height={'100%'}
          />
        </View>
      )}
      {number === 5 && (
        <View
          onStartShouldSetResponderCapture={() => true}
          onResponderStart={onPress}
          style={style}
          >
          <Image
            source={require('../../assets/images/AlertRed3.png')}
            alt="Red Capsule"
            width={'100%'}
            height={'100%'}
          />
        </View>
      )}

      {number === 6 && (
        <View
          onStartShouldSetResponderCapture={() => true}
          onResponderStart={onPress}
          style={style}
          >
          <Image
            source={require('../../assets/images/AlertGreen.png')}
            alt="Red Capsule"
            width={'100%'}
            height={'100%'}
          />
        </View>
      )}
      {number === 7 && (
        <View
          onStartShouldSetResponderCapture={() => true}
          onResponderStart={onPress}
          style={style}
          >
          <Image
            source={require('../../assets/images/AlertMorado.png')}
            alt="Yellow Capsule"
            width={'100%'}
            height={'100%'}
          />
        </View>
      )}
      {number === 8 && (
        <View
          onStartShouldSetResponderCapture={() => true}
          onResponderStart={onPress}
          style={style}
          >
          <Image
            source={require('../../assets/images/AlertBlue.png')}
            alt="Red Capsule"
            width={'100%'}
            height={'100%'}
          />
        </View>
      )}
      {number === 9 && (
        <View
          onStartShouldSetResponderCapture={() => true}
          onResponderStart={onPress}
          style={style}
          >
          <Image
            source={require('../../assets/images/AlertaYellow1.png')}
            alt="Yellow Capsule"
            width={'100%'}
            height={'100%'}
          />
        </View>
      )}
      {number === 10 && (
        <View
          onStartShouldSetResponderCapture={() => true}
          onResponderStart={onPress}
          style={style}
          >
          <Image
            source={require('../../assets/images/AlertaRed1.png')}
            alt="Red Capsule"
            width={'100%'}
            height={'100%'}
          />
        </View>
      )}
    </React.Fragment>
  );
};

export default Alert;
