import bcrypt from "bcrypt";

export const hashPassword = (pass: string) => {
  return bcrypt.hash(pass, 10);
};

export const checkPassword = (pass: string, hashPass: string) => {
  return bcrypt.compare(pass, hashPass);
};
