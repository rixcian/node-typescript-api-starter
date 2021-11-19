import {Request, Response} from "express";
import {RequestContext} from "@mikro-orm/core";

import {APIResponse} from "types";
import {User} from "@entities/User";



const getAllUsers = async (req: Request, res: Response<APIResponse>) => {
  const em = RequestContext.getEntityManager()!;
  const userRep = em.getRepository(User);

  const user = await userRep.findAll();

  return res.send({
    data: user,
    error: null
  });
};



interface GetUserByIdParams { id: string }

const getUserById = async (req: Request<GetUserByIdParams>, res: Response<APIResponse>) => {
  const em = RequestContext.getEntityManager()!;
  const userRep = em.getRepository(User);

  const { id } = req.params;
  const user = await userRep.findOne({ id });

  return res.send({
    data: user,
    error: null
  });
};



interface RemoveUserByIdParams { id: string }

const removeUserById = async (req: Request<RemoveUserByIdParams>, res: Response<APIResponse>) => {
  const { id } = req.params;

  res.send({
    data: id,
    error: null,
  });
}


export default {
  getAllUsers,
  getUserById,
  removeUserById
};
