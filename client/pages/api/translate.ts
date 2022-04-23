import { NextApiRequest, NextApiResponse } from "next";
// import word from "../../../server/src/models/dictionaryModel";
import { words } from "../../../server/src/utils/dictionary";



export default async function decoder(req: NextApiRequest, res: NextApiResponse) {

    try {


        const { code } = req.body;

        const wordCode = RegExp(`^${code}`, 'g')

        const wordList = words.filter((x: string) => {
            return x.match(wordCode)
        }).splice(0, 200);

        res.status(200).send(wordList);
    } catch (err) {
        console.log(err)
        res.status(500).send("error")
    }

}

