import useApi from '../../../api';
import {useSelector} from 'react-redux';
import useModels from '../../../models';
import {ICallback, ISetLevel, ISetSatisfactionAction} from '../../../models/interfaces/general';
import {useNavigation} from '@react-navigation/native';
import {IUseNavigation} from '../../../models/interfaces/routes';
import {ILogout} from '../../../models/interfaces/login';

const useWelcome = () => {
  /** Navigation */
  const navigation = useNavigation<IUseNavigation>();

  /** Selectors */
  const {useSelectors} = useModels();
  const {useLoginSelectors} = useSelectors();
  const {loginSelector, levelsSelector} = useLoginSelectors();
  const {user, token, fullname} = useSelector(loginSelector);
  const {level2, level3} = useSelector(levelsSelector);

  /** Actions */
  const {useActions} = useApi();
  const {dispatch, useLoginActions, useGeneralActions} = useActions();
  const {actLogout} = useLoginActions();
  const {actGetLevels, actSetLevels, actSetSatisfaction} = useGeneralActions();

  /** Handlers */
  const logout = () => {
    const request: ILogout = {
      onSuccess: () => {
        navigation.navigate('Home');
      },
      onError: (error: any) => console.log(error),
      fullname: fullname,
    };

    dispatch(actLogout(request));
  };

  const setLevel = (levelId: number) => {
    const request: ISetLevel = {
      onSuccess: () => {
        const request: ICallback = {
          onError: (error: any) => console.log(error),
          onSuccess: (data: any) => console.log(data),
        };

        console.log('level', levelId);
        dispatch(actGetLevels(request));
      },
      onError: (error: any) => console.log(error),
      levelId: levelId,
    };

    dispatch(actSetLevels(request));
  };

  const setSatisfaction = (response: number) => {
    const request : ISetSatisfactionAction = {
      onError: (error: any) => console.log(error),
      onSuccess: () => {
        if(response === 1){
          navigation.navigate('AlertCalificacion')
        }else if(response === 2){
          navigation.navigate('AlertCalificacion2')
        }else{
          navigation.navigate('AlertCalificacion3')
        }
      },
      response: response
    }

    dispatch(actSetSatisfaction(request));
  }

  return {
    user,
    token,
    logout,
    navigation,
    level2,
    level3,
    setLevel,
    setSatisfaction
  };
};

export default useWelcome;
