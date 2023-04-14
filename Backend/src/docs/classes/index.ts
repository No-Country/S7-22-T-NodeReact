import { SwaggerSchema } from "../../shared/interfaces/SwaggerDocs";

export const classes: SwaggerSchema = {
  type: "object",
  properties: {
    className: {
      type: "string",
      example: "Mathematics 1",
    },
  },
  required: ["className"],
};
