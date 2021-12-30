import { Response, Request } from "express";
import { createUser } from "../service/user.service";
import logger from "../utils/logger";
import { CreateUserInput } from "../schema/user.schema";
import { omit } from "lodash";

export async function createUserHandler(
  req: Request<{}, {}, CreateUserInput["body"]>,
  res: Response
) {
  try {
    const user = await createUser(req.body);
    if (user) {
      return res.send(omit(user, "password"));
    }
    //return res.send(user.email, user.body);
  } catch (e: any) {
    logger.error(e);
    return res.status(409).send(e.message);
  }
}
