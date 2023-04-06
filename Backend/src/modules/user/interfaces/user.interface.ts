export interface User {
  name: string;
  lastName: string;
  phone: number;
  dni: string;
  address: string;
  password: string;
  email: string;
  state: userStates;
}

export type userStates = "active" | "inActive" | "approved" | "coursing" | "disapproved"