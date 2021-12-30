import SessionModel from "../model/session.model";

export async function createSession(userId: string | any, userAgent: string) {
  const session = await SessionModel.create({ user: userId, userAgent });
  return session.toJSON();
}
