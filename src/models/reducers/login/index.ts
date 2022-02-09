import createReducer from '../createReducer';
import {LOGIN} from '../../../types/index';

const useLoginReducers = () => {
  const login = createReducer(
    {
      token: '',
      user: {},
    },
    {
      [LOGIN](state: any, action: any) {
        return {
          ...state,
          ...action.payload,
        };
      },
    },
  );

  const levels = createReducer(
    {level2: false, level3: false},
    {
      SET_LEVELS(state: any, action: any) {
        return {
          ...state,
          ...action.payload,
        };
      },
    },
  );

  return {
    login,
    levels
  };
};

export default useLoginReducers;
