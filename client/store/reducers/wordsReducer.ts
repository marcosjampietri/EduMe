interface dictType {
    loadingWords: boolean
    words: string[]
}

const initState = {
    loadingWords: true,
    words: [],
};

export function wordsReducer(
    state: dictType = initState,
    action: any
): dictType {
    switch (action.type) {
        case "LOADING":
            return {
                ...state,
                loadingWords: true,
            };
        case "GET_WORDS":
            return {
                ...state,
                words: action.payload.words,
                loadingWords: false,
            };
        default:
            return {
                ...state,
            };
    }
}
