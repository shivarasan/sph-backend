import express from 'express';
import router from "./router";
import dotenv from "dotenv";
import cors from 'cors';
dotenv.config()


const app = express();
const port = process.env.PORT || 5000;
app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/", router);

app.listen(port);

