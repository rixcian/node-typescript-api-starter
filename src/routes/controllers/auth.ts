import {RequestHandler} from "express";
import {RequestContext} from "@mikro-orm/core";



const login: RequestHandler = (req, res) => {};

const register: RequestHandler = (req, res) => {};

const forgotPassword: RequestHandler = (req, res) => {};


export default {
  login,
  register,
  forgotPassword
}
