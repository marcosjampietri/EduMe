import { model, Schema, Model, Document } from "mongoose";

interface word extends Document {
    mot: string;
    description: string;

}

const DictScheme: Schema = new Schema({
    mot: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: false,
    },

});

const word: Model<word> = model("word", DictScheme);

export default word;
