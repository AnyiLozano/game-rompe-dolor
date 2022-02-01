import { Dispatch } from "redux";
import { ISetLevelAction } from "../../../models/interfaces/game";
import { ICallback } from "../../../models/interfaces/general";
import useServices from "../../services";

const useGameActions = () => {
    /** Services */
    const { useGameServices } = useServices();
    const { setLevelServices, getLevelServices } = useGameServices();

    /** Actions */
    const actSetLevel = (request: ISetLevelAction) => async(dispatch: Dispatch) => {
        const { level_id, onError, onSuccess } = request;
        try {
            const res = await setLevelServices(level_id);
            const { transaction } = res.data;

            if(transaction.status === true){
                onSuccess && onSuccess();
            }else{
                onError && onError();
            }
        } catch (error) {
            onError && onError(error);
        }
    }

    const actGetLevel = (request: ICallback) => async(dispatch: Dispatch) => {
        const { onError, onSuccess } = request;
        try {
            const res = await getLevelServices();
            const { transaction, data } = res.data;

            if(transaction.status === true){
                onSuccess && onSuccess(data);
            }else{
                onError && onError();
            }
        } catch (error) {
            onError && onError(error);
        }
    }

    return {
        actSetLevel,
        actGetLevel
    }
}

export default useGameActions;
