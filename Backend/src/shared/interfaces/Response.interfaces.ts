type EndpointResponse<Entity> =
  | {
      status: boolean;
      entity: Entity;
    }
  | { msg: unknown };
