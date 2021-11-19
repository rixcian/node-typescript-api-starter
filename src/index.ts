import cors from 'cors';
import path from "path";
import express from 'express';
import bodyParser from "body-parser";
import {Request, Response} from "express";
import {RequestContext} from "@mikro-orm/core";

require('dotenv').config();
import {initDB} from "./db";
import router from "./routes";

const PORT = process.env.PORT || 8000;

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', async (req: Request, res: Response) => {
  res.sendFile(path.join(__dirname, './frontend/index.html'));
});

initDB()
  .then(async (orm) => {

    app.use((req, res, next) => {
      RequestContext.create(orm.em, next);
    });

    app.use('/api', router);

    app.listen(PORT, () => console.log(`Server is running on port ${PORT} ...`));
  })
  .catch(err => {
    console.log(err);
  });
