import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import {Request, RequestHandler, Response} from "express";

import {db} from "@db/init";
import {APIResponse} from "types";
import {User} from "@entities/User";


interface LoginBody {
  email: string,
  password: string
}

const login: RequestHandler = async (req: Request<{}, null, LoginBody>, res: Response<APIResponse>) => {
  const { email, password } = req.body;

  const qb = await db.em.createQueryBuilder(User);
  const user = await qb.select(['id', 'email', 'username', 'password']).where({ email }).execute('get');

  if (!user) {
    return res.status(404).send({
      data: null,
      error: 'User with this email address doesn\'t exists.'
    });
  }

  const isPasswordCorrect = await bcrypt.compare(password, user.password);

  if (!isPasswordCorrect) {
    return res.status(403).send({
      data: null,
      error: 'Wrong password.'
    });
  }

  const jwtUser = { ...user, password: undefined };
  const jwtSecret = process.env.SECRET || '';
  const jwtToken = jwt.sign(jwtUser, jwtSecret, { expiresIn: '7d' });

  res.send({
    data: `Bearer ${jwtToken}`,
    error: null
  });
};



interface RegisterBody {
  username: string,
  email: string,
  password: string,
}

const register: RequestHandler = async (req: Request<{}, null, RegisterBody>, res: Response<APIResponse>) => {
  const { username, email, password } = req.body;
  const user = await db.usersRep.findOne({ $or: [{ username }, { email }] });

  if (user) {
    return res.status(422).send({
      data: null,
      error: 'User with these credentials already exists.'
    });
  }

  const salt = await bcrypt.genSalt(4);
  const hashedPassword = await bcrypt.hash(password, salt);

  const newUser = new User(username, email, hashedPassword);

  try {
    await db.em.persistAndFlush(newUser);
    return res.status(201).send();
  } catch (e) {
    return res.status(500).send({
      data: null,
      error: e
    });
  }
};

// const forgotPassword: RequestHandler = (req, res) => {};


export default {
  login,
  register,
  // forgotPassword
}
