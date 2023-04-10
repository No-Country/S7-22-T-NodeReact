const responseMessage = (status: boolean, msg: string) => {
  return { status, msg };
};

//! Cambiar nombre por camelCase
export const AuthResponses = {
  errors: {
    noToken: responseMessage(false, "User not authenticated"),
    invalidToken: responseMessage(false, "Invalid token"),
    credential: responseMessage(false, "Error while authenticating, no account has been found!"),
    badPassword: responseMessage(false, "Your password does not match with your account!"),
  },
};
