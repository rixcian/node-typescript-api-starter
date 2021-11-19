import bcrypt from "bcrypt";
import {RequestContext} from "@mikro-orm/core";
import {Request, RequestHandler, Response} from "express";

import {User} from "@entities/User";
import {APIResponse} from "../../types";


// const login: RequestHandler = (req, res) => {};



interface RegisterBody {
  username: string,
  email: string,
  password: string,
}

const register: RequestHandler = async (req: Request<{}, null, RegisterBody>, res: Response<APIResponse>) => {
  const em = RequestContext.getEntityManager()!;
  const userRep = em.getRepository(User);

  const { username, email, password } = req.body;
  const user = await userRep.findOne({ $or: [{ username }, { email }] });

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
    await em.persistAndFlush(newUser);
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
  // login,
  register,
  // forgotPassword
}
