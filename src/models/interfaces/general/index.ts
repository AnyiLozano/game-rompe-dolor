export interface ICallback {
    onSuccess: (data?: any) => void;
    onError: (data?: any) => void;
}

export interface IGeneralProps {
    navigation: any;
}

export interface ISetLevel extends ICallback{
    levelId: number;
}

export interface ISetSatisfactionAction extends ICallback{
    response: number;
}

export interface ILevels {
    level2: boolean;
    level3: boolean;
}