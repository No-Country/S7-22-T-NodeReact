import { SwaggerSchema } from "../../shared/interfaces/SwaggerDocs";

export const commissions: SwaggerSchema = {
  type: "object",
  properties: {
    commissionId: {
      type: "number",
      example: "10010",
    },
    subjectId: {
      type: "number",
    },
    teacherId: {
      type: "string",
      format: "uuid",
    },
    studentId: {
      type: "string",
      format: "uuid",
    },
    state: {
      type: "string",
      enum: ["coursing", "approved", "disapproved"],
      example: "coursing",
    },
  },
  required: ["commissionId", "subjectId", "teacherId"],
};
