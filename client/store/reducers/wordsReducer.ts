interface dictType {
    code: string
    numb: string
}

const initState = {
    code: "",
    numb: "",
};

export function codeReducer(
    state: dictType = initState,
    action: any
): dictType {
    switch (action.type) {
        case "GET_WORDS":
            return {
                ...state,
                code: action.payload.code,

            };
        case "TYPING":
            return {
                ...state,
                code: state.code += action.payload.alpha,
                numb: state.numb += action.payload.num
            }
        case "CLEAR_CODE":
            return {
                ...state,
                numb: "",
                code: "",
            }

        default:
            return {
                ...state,
            };
    }
}
