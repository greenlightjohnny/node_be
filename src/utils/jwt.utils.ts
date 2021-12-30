import jwt from "jsonwebtoken";
import config from "config";

const privateKey = process.env.PRIVATE_KEY?.replace(/\\n/gm, "\n") || "";
const publicKey = process.env.PUBLIC_KEY?.replace(/\\n/gm, "\n") || "";
//console.log("$$$$$$$$$$$$$$", publicKey?.replace(/\\n/g, "\n"));
console.log("$$$$$$$$$$$$$$Privatekey", privateKey);

export function signJwt(object: Object, options?: jwt.SignOptions | undefined) {
  return jwt.sign(object, privateKey, {
    ...(options && options),
    //algorithm: "RS256",
  });
}

export function verifyJwt(token: string) {
  try {
    const decoded = jwt.verify(token, publicKey);
    return {
      valid: true,
      expired: false,
      decoded,
    };
  } catch (error: any) {
    return {
      valid: false,
      expired: error.message === "jwt expired",
      decoded: null,
    };
  }
}
