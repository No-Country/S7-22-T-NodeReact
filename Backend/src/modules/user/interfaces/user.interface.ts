import { RolesEntity } from "../../roles/roles.entity";

export interface User {
  userId: string;
  dni: string;
  email: string;
  password: string;
  name: string;
  lastName: string;
  birthDate?: Date;
  phone?: string;
  address?: string;
  state: userStates;
  role: RolesEntity;
}

export type userStates = "active" | "inactive";
