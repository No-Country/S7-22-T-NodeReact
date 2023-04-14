import swaggerJSDoc from "swagger-jsdoc";
import { school } from "./school";
import { userRoles } from "./userRoles";
import { user } from "./user";
import { subjects } from "./subjects";
import { roles } from "./roles";

const swaggerDefinition = {
  openapi: "3.0.0",
  info: {
    title: "Api EduWeb",
    version: "1.0.0",
  },
  servers: [
    {
      url: "http://localhost:3000/",
    },
    {
      url: "http://localhost:8080/",
    },
  ],
  components: {
    schemas: {
      user,
      subjects,
      commission: {
        type: "object",
        properties: {
          commissionId: {
            type: "number",
          },
          studentId: {
            type: "string",
          },
          teacherId: {
            type: "string",
          },
        },
      },
      roles,
      careers: {
        type: "object",
        properties: {
          careerName: {
            type: "string",
          },
        },
      },
      classes: {
        type: "object",
        properties: {
          className: {
            type: "string",
          },
        },
      },
      school,
      userRoles,
    },
  },
};

const swaggerOptions = {
  swaggerDefinition,
  schemes: ["https", "http"],
  apis: ["./src/docs/**/*.yaml"],
};

export default swaggerJSDoc(swaggerOptions);
