import {MikroORM} from "@mikro-orm/core";
import {EntityManager, EntityRepository} from "@mikro-orm/postgresql";

import {User} from "@entities/User";


interface IDB {
  orm: MikroORM,
  em: EntityManager,
  usersRep: EntityRepository<User>
}

export let db: IDB;

export const initDB = async () => {
  const orm = await MikroORM.init({
    entities: ['./dist/db/entities/**/*.js'], // path to your JS entities (dist), relative to `baseDir`
    entitiesTs: ['./src/db/entities/**/*.ts'], // path to your TS entities (source), relative to `baseDir`
    // @ts-ignore
    type: process.env.DB_TYPE, // one of `mongo` | `mysql` | `mariadb` | `postgresql` | `sqlite`
    dbName: process.env.DB_NAME,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
  });

  db = {
    orm,
    em: orm.em as EntityManager,
    usersRep: orm.em.getRepository(User)
  }

  return db.em;
};
