
export const sugestionsAction = (wordsList: string[]) => ({
    type: "GET_SUGESTIONS",
    payload: wordsList,
});