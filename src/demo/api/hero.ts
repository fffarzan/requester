import { endpoint } from "../../http/endpoint.js";
import type { GetHeroRequestDTO, GetHeroResponseDTO } from "./types/index.js";

export const getHeroEndpoint = endpoint<GetHeroRequestDTO, GetHeroResponseDTO>(
  (client: any, params: GetHeroRequestDTO) => client.get(`/${params.id}`)
);
