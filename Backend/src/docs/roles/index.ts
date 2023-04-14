import { SwaggerSchema } from "../../shared/interfaces/SwaggerDocs";

export const roles: SwaggerSchema = {
  type: "object",
  properties: {
    roleName: {
      type: "string",
      example: "student",
    },
  },
  required: ["roleName"],
};
