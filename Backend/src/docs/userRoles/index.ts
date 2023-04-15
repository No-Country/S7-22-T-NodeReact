import { UserRoles } from "../../modules";
import { SwaggerSchema } from "../../shared/interfaces/SwaggerDocs";
import crypto from "crypto";

export const userRoles: SwaggerSchema<UserRoles> = {
  type: "object",
  properties: {
    userId: {
      type: "string",
      format: "uuid",
      example: crypto.randomUUID(),
    },
    roleId: {
      type: "number",
      example: 1,
    },
  },
  required: ["userId", "roleId"],
};
