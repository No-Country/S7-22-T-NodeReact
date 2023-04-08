import { JwtPayload } from "jsonwebtoken";

export interface Auth {
  email: string;
  password: string;
}

export interface CustomJwtPayload extends JwtPayload {
  payload: string | object | Buffer;
}
