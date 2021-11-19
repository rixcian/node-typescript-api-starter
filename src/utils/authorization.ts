import passport from "passport";


export const checkLogin = passport.authenticate('jwt', { session: false });
