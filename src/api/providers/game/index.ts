import axios, { AxiosResponse } from "axios";
import { useSelector } from "react-redux";
import useSelectors from "../../../models/selectors";

const useGameProviders = () => {
    const { useLoginSelectors } = useSelectors();
    const { loginSelector } = useLoginSelectors();
    const login = useSelector(loginSelector);
    const { token } = login;

    /** Providers */
    const setLevel = (level_id: number) : Promise<AxiosResponse> => axios.post("/levels/set-levels", { level_id }, {
        headers: {
            "Authorization": `Bearer ${token}`
        }
    });

    const getLevels = () : Promise<AxiosResponse> => axios.get("/levels/get-levels", {
        headers: {
            "Authorization": `Bearer ${token}`
        }
    });

    return {
        setLevel,
        getLevels,
    };
}

export default useGameProviders;
