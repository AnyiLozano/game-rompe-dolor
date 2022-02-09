import { ILevels } from "../../interfaces/general";
import useCreateSelector from "../createSelector";

const useLoginSelectors = () => {
    // Constructor
    const { createSelector } = useCreateSelector();

    const loginSelector = createSelector(
        (state: any) => state.login,
        (login: any) => login
    );

    const levelsSelector = createSelector(
        (state: any) => state.levels,
        (levels: ILevels) => levels
    );

    return {
        loginSelector,
        levelsSelector
    }
}

export default useLoginSelectors;