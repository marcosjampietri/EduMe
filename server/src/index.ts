import express from "express";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";

import router from "./routes/mainRoutes";

const app = express();

app.use(cors());

app.use(bodyParser.urlencoded({ extended: true }));

app.use(bodyParser.json());

dotenv.config({ path: "./.env" });

app.use("/api", router);

//test api route
app.get("/api", async (req, res) => {
    res.json("1 2 3 testando api com taipeees");
});

const uri: string = <string>process.env.DATABASE;

run().catch(err => console.log(err));

async function run(): Promise<void> {
    // 4. Connect to MongoDB
    await mongoose.connect(uri);

    console.log("connected to MongoDB using mongoose 6... yaayy"); // 'bill@initech.com'
}

const PORT: number = parseInt(<string>process.env.PORT, 10) || 5000;

app.listen(PORT, () => {
    console.log(`consolando a porta ${PORT}`);
});
