import { trackPromise } from "react-promise-tracker";
import useProviders from "../../providers";

const useGeneralServices = () => {
    /** Providers */
    const { useGeneralProviders } = useProviders();
    const { getLevels, setLevels, setSatisfaction } = useGeneralProviders();

    /** Services */
    const getLevelsService = () : Promise<any> => {
        return new Promise<any>(async(resolve, reject) => {
            try {
                resolve(await trackPromise(getLevels()))
            } catch (error) {
                reject(error);
            }
        })
    } 

    //Servicio para ejecutar la promesa de guardar nivel
    const setLevelsService = (levelId: number) : Promise<any> => {
        return new Promise<any>(async(resolve, reject) => {
            try {
                console.log('services', levelId)
                resolve(await trackPromise(setLevels(levelId)))
            } catch (error) {
                reject(error);
            }
        })
    } 

    /**
     * This functiuon is used from execute the axios promise of satisfaction response.
     * @param response number with the option selected.
     * @returns void with the response of the promise
     */
    const setSatisfactionService = (response: number) : Promise<any> => {
        return new Promise<any>(async(resolve, reject) => {
            try {
                resolve(await trackPromise(setSatisfaction(response)))
            } catch (error) {
                reject(error);
            }
        })
    } 

    return {
        getLevelsService,
        setLevelsService,
        setSatisfactionService
    }
}

export default useGeneralServices;