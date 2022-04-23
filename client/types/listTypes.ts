

export interface ListState {
    listFavorites: string[],
    onList: boolean
}



export interface AddToListAction {
    type: string;
    payload: String;
}



export interface RemoveFromListAction {
    type: string
    payload: string;
}



export interface ClearListAction {
    type: string
    payload?: any;
}


export type ListActionType =
    | AddToListAction
    | RemoveFromListAction
    | ClearListAction
