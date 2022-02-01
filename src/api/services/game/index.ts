import { trackPromise } from "react-promise-tracker";
import useProviders from "../../providers";

const useGameServices = () => {
    /** Providers */
    const { useGameProviders } = useProviders();
    const { setLevel, getLevels } = useGameProviders();

    /** Services */
    const setLevelServices = (level_id: number) : Promise<any> => {
        return new Promise<any>(async(resolve, reject) => {
            try {
                resolve(await trackPromise(setLevel(level_id)));
            } catch (error) {
                reject(error);
            }
        });
    }

    const getLevelServices = () : Promise<any> => {
        return new Promise<any>(async(resolve, reject) => {
            try {
                resolve(await trackPromise(getLevels()));
            } catch (error) {
                reject(error);
            }
        });
    }
    
    return {
        setLevelServices,
        getLevelServices
    };
}

export default useGameServices;
