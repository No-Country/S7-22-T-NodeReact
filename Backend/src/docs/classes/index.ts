import { Classes } from "../../modules";
import { SwaggerSchema } from "../../shared/interfaces/SwaggerDocs";

export const classes: SwaggerSchema<Classes> = {
  type: "object",
  properties: {
    className: {
      type: "string",
      example: "Mathematics 1",
    },
  },
  required: ["className"],
};
