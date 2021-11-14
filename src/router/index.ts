import express from "express";
import searchRouter from "./searchRouter";
import retrieveRouter from "./retrieveRouter";

const router = express.Router();

router.use("/search", searchRouter);
router.use("/retrieve", retrieveRouter);

export default router;