import { Schema } from "swagger-jsdoc";
import { FindOptionsSelectByString } from "typeorm";

interface SchemaProps extends Schema {
  enum?: ReadonlyArray<string> | undefined;
  description?: string | undefined;
  example?: unknown;
}

export interface SwaggerSchema<Entity> extends Schema {
  required?: (keyof Entity)[];
  properties: {
    [keys in keyof Entity]?: SchemaProps;
  };
}
