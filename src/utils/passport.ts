import { PassportStatic } from "passport";
import { Strategy as JWTStrategy, StrategyOptions, ExtractJwt } from "passport-jwt";

import {db} from "@db/init";


const opts: StrategyOptions = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: process.env.SECRET || '',
};

export default (passport: PassportStatic) => {
  passport.use(new JWTStrategy(opts, async (jwtPayload, done) => {
    const user = await db.usersRep.findOne({ id: jwtPayload.id });

    if (!user) return done(null, false);

    return done(null, user);
  }))
}
