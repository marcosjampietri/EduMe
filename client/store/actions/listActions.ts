
export const addFavAction = (word: string) => ({
    type: "ADD_TO_LIST",
    payload: word,
});

export const remvFavAction = (word: string) => ({
    type: "REMOVE_FROM_LIST",
    payload: word,
});

export const clearFavAction = () => ({
    type: "CLEAR_LIST",
});