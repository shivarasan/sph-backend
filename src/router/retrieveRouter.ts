import express from "express";
import { retrieve } from "../controller/retrieveController";

const router = express.Router();

router.get("/", retrieve);

export default router;