import { SwaggerSchema } from "../../shared/interfaces/SwaggerDocs";

export const careers: SwaggerSchema = {
  type: "object",
  properties: {
    careerName: {
      type: "string",
    },
  },
  required: ["careerName"],
};
