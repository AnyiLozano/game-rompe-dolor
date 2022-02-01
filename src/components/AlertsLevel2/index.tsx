import {Image, View} from 'native-base';
import React, {FC} from 'react';

const Alert2: FC<{number: number; style?: any; onPress: any}> = ({
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
            source={require('../../assets/images/alerta10.png')}
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
            source={require('../../assets/images/alerta9.png')}
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
            source={require('../../assets/images/alerta8.png')}
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
            source={require('../../assets/images/alerta7.png')}
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
            source={require('../../assets/images/alerta6.png')}
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
            source={require('../../assets/images/alerta5.png')}
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
            source={require('../../assets/images/alerta4.png')}
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
            source={require('../../assets/images/alerta3.png')}
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
            source={require('../../assets/images/alerta2.png')}
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
            source={require('../../assets/images/Alerta1.png')}
            alt="coffee Capsule"
            width={'100%'}
            height={'100%'}
          />
        </View>
      )}
    </React.Fragment>
  );
};

export default Alert2;
