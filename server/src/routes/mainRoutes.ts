import express from "express";
import { decoder, getDictionary } from "../controllers/wordsController";

const router = express.Router();

router.get("/dictionary", getDictionary);
router.post("/translate", decoder);


export default router;