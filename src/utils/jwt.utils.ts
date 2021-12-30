import jwt from "jsonwebtoken";

//const privateKey = process.env.PRIVATE_KEY?.replace(/\\n/gm, "\n") || "";
//const publicKey = process.env.PUBLIC_KEY?.replace(/\\n/gm, "\n") || "";
//console.log("$$$$$$$$$$$$$$", publicKey?.replace(/\\n/g, "\n"));
//console.log("$$$$$$$$$$$$$$Privatekey", privateKey);
const privateKey = process.env.PRIVATE_TWO || "";
const publicKey = process.env.PUBLIC_TWO || "";

export function signJwt(object: Object, options?: jwt.SignOptions | undefined) {
  // const signingKey = Buffer.from(
  //   privateKey,
  //   "base64"
  // ).toString("ascii");

  const signingKey = Buffer.from(privateKey, "base64").toString("ascii");

  return jwt.sign(object, signingKey, {
    ...(options && options),
    algorithm: "RS256",
  });
}

export function verifyJwt(token: string) {
  const pubKey = Buffer.from(publicKey, "base64").toString("ascii");

  try {
    const decoded = jwt.verify(token, pubKey);
    console.log("decoded", decoded);
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
