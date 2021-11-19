import path from "path";
import {ConnectionOptions} from "@mikro-orm/core";

import {User} from "./db/entities/User";

export default {
  migrations: {
    path: path.join(__dirname, './db/migrations'),
    pattern: /^[\w-]+\d+\.[tj]s$/
  },
  entities: [
    User
  ],
  type: process.env.DB_TYPE, // one of `mongo` | `mysql` | `mariadb` | `postgresql` | `sqlite`
  dbName: process.env.DB_NAME,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
} as ConnectionOptions;
