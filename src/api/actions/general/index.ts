import {Dispatch} from 'redux';
import {ICallback, ISetLevel, ISetSatisfactionAction} from '../../../models/interfaces/general';
import useServices from '../../services';

const useGeneralActions = () => {
  /** Services */
  const {useGeneralServices} = useServices();
  const {getLevelsService, setLevelsService, setSatisfactionService} =
    useGeneralServices();

  /** Actions */
  const actGetLevels = (request: ICallback) => async (dispatch: Dispatch) => {
    const {onError, onSuccess} = request;
    try {
      const res = await getLevelsService();
      const {data} = res.data;

      dispatch({
        type: 'SET_LEVELS',
        payload: data,
      });
    } catch (error) {
      onError && onError(error);
    }
  };

  const actSetLevels = (request: ISetLevel) => async (dispatch: Dispatch) => {
    const {onError, onSuccess, levelId} = request;

    try {
      const res = await setLevelsService(levelId);
      const {transaction} = res.data;

      if (transaction.status === true) {
        onSuccess && onSuccess();
      } else {
        onError && onError();
      }
    } catch (error) {
      onError && onError(error);
    }
  };

  const actSetSatisfaction = (request: ISetSatisfactionAction) => async (dispatch: Dispatch) => {
    const {onError, onSuccess, response} = request;

    try {
      const res = await setSatisfactionService(response);
      const {transaction} = res.data;

      if (transaction.status === true) {
        onSuccess && onSuccess();
      } else {
        onError && onError();
      }
    } catch (error) {
      onError && onError(error);
    }
  };

  return {
    actGetLevels,
    actSetLevels,
    actSetSatisfaction
  };
};

export default useGeneralActions;
