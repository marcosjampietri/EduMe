import { Action } from "redux";
import { ThunkAction } from "redux-thunk";

export interface navState {
    NavOn: boolean;
}
export interface modState {
    ModOn: boolean;
    modComponent: JSX.Element | null;
}
export interface toastState {
    ToastOn: boolean;
    toastComponent: JSX.Element | null;
}
export interface loadState {
    isLoading: boolean;
}
export interface filterState {
    activeSkill: string;
    index: number;
}

export interface navActionTP {
    obj: { type: "TOGGLE_NAV" };
}

export interface isLodingActionTP {
    type: "LOADED";
}

export interface storeType {
    navState: navState;
    modState: modState;
    toastState: toastState;
    loadState: loadState;


}

export type allActions = navActionTP | isLodingActionTP;

export type actionCreator<allActions extends Action> = () => ThunkAction<
    void,
    storeType,
    {},
    allActions
>;