import { words } from "../utils/dictionary";
import word from "../models/dictionaryModel";

export const getDictionary = (req: any, res: any) => {
    word.find({}, (err, word) => {
        res.header("Access-Control-Allow-Origin", "*"); //CORS
        res.json(word);
    });
};

export const decoder = async (req: any, res: any) => {

    const { code } = req.body;

    const wordCode = RegExp(`^${code}`, 'g')

    const wordList = words.filter((x: string) => {
        return x.match(wordCode)
    }).splice(0, 200);

    res.status(200).send(wordList);


};