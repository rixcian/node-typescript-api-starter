import {MikroORM} from "@mikro-orm/core";

export const initDB = async () => {
  return await MikroORM.init({
    entities: ['./dist/db/entities/**/*.js'], // path to your JS entities (dist), relative to `baseDir`
    entitiesTs: ['./src/db/entities/**/*.ts'], // path to your TS entities (source), relative to `baseDir`
    // @ts-ignore
    type: process.env.DB_TYPE, // one of `mongo` | `mysql` | `mariadb` | `postgresql` | `sqlite`
    dbName: process.env.DB_NAME,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
  });
};
