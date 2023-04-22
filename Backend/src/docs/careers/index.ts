import { Careers } from "../../modules";
import { SwaggerSchema } from "../../shared/interfaces/SwaggerDocs";

export const careers: SwaggerSchema<Careers> = {
  type: "object",
  properties: {
    careerName: {
      type: "string",
    },
  },
  required: ["careerName"],
};
