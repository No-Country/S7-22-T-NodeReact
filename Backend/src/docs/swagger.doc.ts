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
      subject: {
        type: "object",
        properties: {
          careerId: {
            type: "number"
          },
          className: {
            type: "string"
          }
        }
      },
      commission: {
        type: "object",
        properties: {
          commissionId: {
            type: "number"
          },
          studentId: {
            type: "string"
          },
          teacherId: {
            type: "string"
          },
        }
      },
      roles: {
        type: "object",
        properties: {
          roleName: {
            type: "string"
          }
        }
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
