import { ICallback } from "../general";

export interface ISetLevelAction extends ICallback {
    level_id: number;
}