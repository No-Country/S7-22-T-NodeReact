import { Subjects } from "../../modules";
import { SwaggerSchema } from "../../shared/interfaces/SwaggerDocs";

export const subjects: SwaggerSchema<Subjects> = {
  type: "object",
  properties: {
    school: {
      type: "number",
    },
    career: {
      type: "number",
    },
    class: {
      type: "number",
    },
  },
  required: ["school", "career", "class"],
};
