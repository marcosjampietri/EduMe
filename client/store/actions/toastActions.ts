export const toastONAction = (toastComponent: JSX.Element) => ({
    type: "TOGGLE_TOAST_ON",
    payload: toastComponent,
});

export const picAction = (toastComponent: JSX.Element) => ({
    type: "TOGGLE_TOAST_PIC",
    payload: toastComponent,
});

export const sklAction = (toastComponent: JSX.Element) => ({
    type: "TOGGLE_TOAST_SKL",
    payload: toastComponent,
});

export const toastOFFAction = () => ({
    type: "TOGGLE_TOAST_OFF",

});


