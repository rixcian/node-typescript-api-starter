import {Request, Response} from "express";

import {db} from "@db/init";
import {APIResponse} from "types";


const getAllUsers = async (req: Request, res: Response<APIResponse>) => {
  const users = await db.usersRep.findAll();

  return res.send({
    data: users,
    error: null
  });
};



interface GetUserByIdParams { id: string }

const getUserById = async (req: Request<GetUserByIdParams>, res: Response<APIResponse>) => {
  const { id } = req.params;
  const user = await db.usersRep.findOne({ id });

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
