import swaggerJSDoc from "swagger-jsdoc";

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
      user: {
        type: "object",
        properties: {
          name: {
            type: "string",
          },
          lastName: {
            type: "string",
          },
          phone: {
            type: "number",
          },
          dni: {
            type: "number",
          },
          address: {
            type: "string",
          },
        },
      },
    },
  },
};

const swaggerOptions = {
  swaggerDefinition,
  schemes: ["https", "http"],
  apis: ["./src/docs/**/*.yaml"],
};

export default swaggerJSDoc(swaggerOptions);
