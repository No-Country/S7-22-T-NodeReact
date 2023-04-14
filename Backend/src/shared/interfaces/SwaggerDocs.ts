import { Schema } from "swagger-jsdoc";

interface SchemaProps extends Schema {
  enum?: ReadonlyArray<string> | undefined;
  description?: string | undefined;
  example?: unknown;
}

export interface SwaggerSchema extends Schema {
  required?: string[]
  properties: {
    [keys: string]: SchemaProps;
  };
}
