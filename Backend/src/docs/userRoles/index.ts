import { SwaggerSchema } from "../../shared/interfaces/SwaggerDocs";
import crypto from "crypto";

export const userRoles: SwaggerSchema = {
  type: "object",
  properties: {
    userId: {
      type: "string",
      format: "uuid",
      example: crypto.randomUUID()
    },
    roleId: {
      type: "number",
      example: 1
    },
  },
  required: ["schoolName", "emailDomain"]
};
