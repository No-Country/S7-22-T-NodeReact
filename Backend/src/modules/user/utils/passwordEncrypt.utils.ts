import bcrypt from "bcrypt";

export const hashPassword = (pass: string) => {
  return bcrypt.hash(pass, 10);
};


