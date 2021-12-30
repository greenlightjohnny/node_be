import { Request, Response } from "express";
import { createSession, findSessions } from "../service/session.service";
import { validatePassword } from "../service/user.service";
import { signJwt } from "../utils/jwt.utils";

export async function createUserSessionHandler(req: Request, res: Response) {
  //check password
  const user = await validatePassword(req.body);
  if (!user) {
    return res.status(401).send("Invalid user, not found");
  }

  //create session
  const session = await createSession(user._id, req.get("user-agent") || "");

  //create access token
  const accessToken = signJwt(
    {
      ...user,
      session: session._id,
    },

    { expiresIn: process.env.accessTokenTTL }
  );
  //create refresh token
  const refreshToken = signJwt(
    {
      ...user,
      session: session._id,
    },

    { expiresIn: process.env.refreshTokenTTL }
  );

  //Return access and refresh tokens
  return res.send({ accessToken, refreshToken });
}

export async function getUserSessionsHandler(req: Request, res: Response) {
  const userId = res.locals.user._id;
  console.log("***********", userId);

  const sessions = await findSessions({ user: userId, valid: false });
  console.log("*88888888888888888888", { sessions });

  return res.send(sessions);
}
