import { endpoint } from "../../http/utils/endpoint.ts";

export const getHeroEndpoint = endpoint((client: any, params: any) =>
  client.get(`/${params.id}`)
);
