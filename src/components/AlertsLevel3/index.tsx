import {Image, View} from 'native-base';
import React, {FC} from 'react';

const Alert3: FC<{number: number; style?: any; onPress: any}> = ({
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
            source={require('../../assets/images/alertacafe12.png')}
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
            source={require('../../assets/images/alertanaranja11.png')}
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
            source={require('../../assets/images/alertaverde1.png')}
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
            source={require('../../assets/images/alertarosado1.png')}
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
            source={require('../../assets/images/alertacafe1.png')}
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
            source={require('../../assets/images/alertanaranja1.png')}
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
            source={require('../../assets/images/alertaverde.png')}
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
            source={require('../../assets/images/alertarosado.png')}
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
            source={require('../../assets/images/alertanaranja.png')}
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
            source={require('../../assets/images/Alertacafe.png')}
            alt="Red Capsule"
            width={'100%'}
            height={'100%'}
          />
        </View>
      )}
    </React.Fragment>
  );
};

export default Alert3;
