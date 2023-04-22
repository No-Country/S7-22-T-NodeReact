import { School } from "../../modules";
import { SwaggerSchema } from "../../shared/interfaces/SwaggerDocs";

export const school: SwaggerSchema<School> = {
  type: "object",
  properties: {
    schoolName: {
      type: "string",
      example: "Universidad Nacional de Argentina",
    },
    emailDomain: {
      type: "string",
      example: "unarg",
    },
  },
  required: ["schoolName", "emailDomain"],
};
