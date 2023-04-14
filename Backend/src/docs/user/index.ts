import { SwaggerSchema } from "../../shared/interfaces/SwaggerDocs";

export const user: SwaggerSchema = {
  type: "object",
  properties: {
    dni: {
      type: "string",
      example: "0101-2000-01234"
    },
    name: {
      type: "string",
    },
    lastName: {
      type: "string",
    },
    phone: {
      type: "string",
      example: "+504 9998-9796"
    },
    address: {
      type: "string",
    },
    state: {
      type: "string",
      example: "active",
      enum: ["active", "inactive"],
    },
  },
  required: ["dni", "name", "lastName"],
};
