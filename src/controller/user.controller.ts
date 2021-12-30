import { Response, Request } from "express";
import { createUser } from "../service/user.service";
import logger from "../utils/logger";

const createUserHandler = async (req: Request, res: Response) => {
  try {
    const user = await createUser(req.body);
    return user;
  } catch (e) {
    logger.error(e);
    return res.status(409).send(e.message);
  }
};

export default createUserHandler;
