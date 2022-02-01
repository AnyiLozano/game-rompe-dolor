import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import { useCallback } from "react";
import useApi from "../../../../api";
import { ISetLevelAction } from "../../../../models/interfaces/game";
import { IUseNavigation } from "../../../../models/interfaces/routes";

type ParamsList = {
    param: {
        level: number
    }
}

const useCongratulationsLevel1 = () => {
    /** Navigation */
    const navigation = useNavigation<IUseNavigation>();
    const route = useRoute<RouteProp<ParamsList, 'param'>>();
    const level = route.params.level

    /** Actions */
    const { useActions } = useApi();
    const { dispatch, useGameActions } = useActions();
    const { actSetLevel } = useGameActions();

    /** Use Callback */
    const setLevel = useCallback(() => {
        const request : ISetLevelAction = {
            level_id: level,
            onSuccess: () => {},
            onError: (error: any) => {
                console.log(error)
            }
        };

        dispatch(actSetLevel(request));

    }, [dispatch]);

    return {
        setLevel,
        navigation,
        level
    };
}

export default useCongratulationsLevel1;
