import axios, {AxiosResponse} from 'axios';
import {useSelector} from 'react-redux';
import useSelectors from '../../../models/selectors';

const useGeneralProviders = () => {
  /** Selectors */
  const {useLoginSelectors} = useSelectors();
  const {loginSelector} = useLoginSelectors();
  const {token} = useSelector(loginSelector);

  /** Providers */
  const getLevels = (): Promise<AxiosResponse> =>
    axios.get('/levels/get-levels', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

  const setLevels = (level_id: number): Promise<AxiosResponse> =>
    axios.post(
      '/levels/set-levels',
      {level_id: level_id},
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    );

  const setSatisfaction = (response: number) => axios.post('/levels/set-satisfaction', { response: response }, {
    headers: {
      "Authorization": `Bearer ${token}`
    }
  })

  return {
    getLevels,
    setLevels,
    setSatisfaction
  };
};

export default useGeneralProviders;
