import { sign, verify } from "jsonwebtoken";
import { CustomJwtPayload } from "../interfaces/auth.interface";

const JWT_SECRET = process.env.JWT_SECRET || "token 01010101S";

const generateToken = (payload: string | object | Buffer) => {
  const jwtPayload = { payload };
  const jwt = sign(jwtPayload, JWT_SECRET, {
    algorithm: "HS256",
    expiresIn: "2h",
  });
  return jwt;
};

const verifyToken = (jwt: string) => {
  const isOk = verify(jwt, JWT_SECRET) as CustomJwtPayload;
  return isOk;
};

export { generateToken, verifyToken };
