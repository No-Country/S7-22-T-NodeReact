import { Role } from "../../modules";
import { SwaggerSchema } from "../../shared/interfaces/SwaggerDocs";

export const roles: SwaggerSchema<Role> = {
  type: "object",
  properties: {
    roleName: {
      type: "string",
      example: "student",
    },
  },
  required: ["roleName"],
};
