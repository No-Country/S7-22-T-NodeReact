import { SwaggerSchema } from "../../shared/interfaces/SwaggerDocs";

export const subjects: SwaggerSchema = {
  type: "object",
  properties: {
    schoolId: {
      type: "number",
    },
    careerId: {
      type: "number",
    },
    classId: {
      type: "number",
    
    },
  },
};
