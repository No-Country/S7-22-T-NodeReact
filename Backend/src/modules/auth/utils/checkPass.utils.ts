import bcrypt from "bcrypt";

export const checkPassword = async (pass: string, hashPass: string) => {
  const isCorrect = await bcrypt.compare(pass, hashPass);
  return isCorrect;
};
