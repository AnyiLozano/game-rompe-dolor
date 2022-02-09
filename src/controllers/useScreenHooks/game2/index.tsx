import { useNavigation } from '@react-navigation/native';
import _ from 'lodash';
import {useEffect, useRef, useState} from 'react';
import {Animated} from 'react-native';
import { IUseNavigation } from '../../../models/interfaces/routes';
import { capsuleToShooting, Level1 } from './LevelsOrder/Level3';

const useGame2 = () => {
  /** Navigation */
  const navigation = useNavigation<IUseNavigation>();

  /** Use Ref */
  const topInitialRose = useRef(new Animated.Value(0)).current;
  const topInitialCoffee = useRef(new Animated.Value(0)).current;
  const topInitialGreen = useRef(new Animated.Value(0)).current;
  const topInitialOrange = useRef(new Animated.Value(0)).current;

  /** States */
  const [angle, setAngle] = useState<number>(0);
  const [guns, setGuns] = useState<number>(capsuleToShooting.length);
  const [capsules, setCapsules] = useState<any[]>(Level1);
  const [capsule, setCapsule] = useState<any>(capsuleToShooting);
  const [showAlert, setShowAlert] = useState<boolean>(false);
  const [color, setColor] = useState<number>(capsuleToShooting[0].number);
  const [colorName, setColorName] = useState<string>(capsuleToShooting[0].name);
  const [colorTop, setColorTop] = useState<number>(0);
  const [position, setPosition] = useState<number>(400);
  const [time, setTime] = useState<number>(0);

  /** Handlers */
  const executeGuns = (colorGun: string, angleT: number) => {
    /** State Obtained Of Object */
    let status = 0;

    /** We Search The Object By Color And Angles Of Gun */
    const capsul = capsules.map((item: any) => {
      return item.filter((itm: any) => {
        if (itm.color === colorGun) {
          return angleT >= itm.angle[0] && angleT <= itm.angle[1] && itm.visible;
        }
      });
    });


    /** We Filter The Results By Color And We Set The Top Variable. */
    _.map(capsul, (item: any) => {
      if (item.length > 0) {
        _.map(item, (itm: any) => {
          if (itm.color === colorGun && itm.visible) {
            setTime(time + 1);
            status = itm.state;
            setColorTop(itm.top);
          }
        });
      }
    });

    /** We Execute The Animation. */
    executeAnimation(colorGun, status);
  };

  const executeAnimation = (color: string, status: number) => {
    switch (color) {
      case 'rose':
        Animated.timing(topInitialRose, {
          duration: 2000,
          toValue: 1,
          useNativeDriver: true,
        }).start(() => finishedAction(status));

      case 'green':
        Animated.timing(topInitialGreen, {
          duration: 2000,
          toValue: 1,
          useNativeDriver: true,
        }).start(() => finishedAction(status));

      case 'coffee':
        Animated.timing(topInitialCoffee, {
          duration: 2000,
          toValue: 1,
          useNativeDriver: true,
        }).start(() => finishedAction(status));

      case 'orange':
        Animated.timing(topInitialOrange, {
          duration: 2000,
          toValue: 1,
          useNativeDriver: true,
        }).start(() => finishedAction(status));
    }
  };

  const finishedAction = (status: number) => {
    /** We Filter The Results And We Generate A New Array And Set The New Array In The State */
    let newCapsules: any[] = [];
    _.map(capsules, (item: any) => {
      _.map(item, (itm: any) => {
        if (itm.state === status && itm.visible === true) {
          itm.visible = false;
        }
      });

      newCapsules.push(item);
    });

    /** We Delete The First Data And Select The New First Row In The Array */
    let cap = capsule.slice(1);
    setCapsule(cap);

    /** In This SetTimeout Set The Other Data And Lauch The Alert */
    if (status >= 0) {
      finishedAnimation();
      setCapsules(newCapsules);
    }
  };

  const finishedAnimation = () => {
    if (capsule.length > 0) {
      setShowAlert(true);
    }
  };

  const handleAccept = () => {
    if (capsule.length >= 1) {
      setColorTop(0);
      setColorName(capsule[0].name);
      setGuns(capsule.length);
      setColor(capsule[0].number);
      setShowAlert(false);
    } else {
      if (time === 10) {
        navigation.navigate('Felicitacionesintentar', {
          level: 3
        });
      } else {
        navigation.navigate('Gameover', {
          level: 3
        });
      }
    }
  };
  
  useEffect(() => {
    let newCapsules : any = []
    _.map(capsules, (item: any) => {
      _.map(item, (itm: any) => {
        if(itm.state > 0){
          itm.visible = true;
        }
      })

      newCapsules.push(item);
    })
    setCapsules(newCapsules)
  }, [])

  return {
    capsules,
    navigation,
    angle,
    setAngle,
    guns,
    executeGuns,
    capsule,
    showAlert,
    handleAccept,
    color,
    position,
    setPosition,
    colorName,
    colorTop,
    topInitialRose,
    topInitialGreen,
    topInitialOrange,
    topInitialCoffee,
  };
};

export default useGame2;
