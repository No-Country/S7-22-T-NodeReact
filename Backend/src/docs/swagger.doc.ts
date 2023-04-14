import swaggerJSDoc from "swagger-jsdoc";

import { careers, classes, commissions, roles, school, subjects, user, userRoles } from ".";

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
      commissions,
      roles,
      careers,
      classes,
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
