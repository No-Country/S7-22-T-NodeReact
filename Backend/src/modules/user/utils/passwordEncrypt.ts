import bcrypt from "bcrypt";

export const hashPassword = (pass: string) => {
  return bcrypt.hash(pass, 10);
};

export const checkPassword = async (pass: string, hashPass: string) => {
  const isCorrect = await bcrypt.compare(pass, hashPass);
  return isCorrect;
};
