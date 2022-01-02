import cors from "cors";
import path from "path";
import express from "express";
import passport from "passport";
import bodyParser from "body-parser";
import {Request, Response} from "express";

require('dotenv').config();
import router from "./routes";
import {initDB} from "@db/init";
import passportInit from "@utils/passport";


const PORT = process.env.PORT || 8000;
const app = express();

// CORS Setting
app.use(cors());

// Passport Initialization
app.use(passport.initialize());
passportInit(passport);

// BodyParser Setting
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Serving Frontend
app.get('/', async (req: Request, res: Response) => {
  res.sendFile(path.join(__dirname, '../frontend/index.html'));
});

initDB()
  .then(() => {
    app.use('/api', router);
    app.listen(PORT, () => console.log(`Server is running on port ${PORT} ...`));
  })
  .catch(err => {
    console.log(err);
  });
