import { SwaggerSchema } from "../../shared/interfaces/SwaggerDocs";
import { User } from "../../modules";
import { format } from "path";

export const user: SwaggerSchema<User> = {
  type: "object",
  properties: {
    dni: {
      type: "string",
      example: "0101-2000-01234",
    },
    name: {
      type: "string",
    },
    lastName: {
      type: "string",
    },
    phone: {
      type: "string",
      example: "+504 9998-9796",
    },
    address: {
      type: "string",
    },
    state: {
      type: "string",
      example: "active",
      enum: ["active", "inactive"],
    },
    role: {
      type: "number",
      format: "integer",
    },
  },
  required: ["dni", "name", "lastName", "role"],
};
