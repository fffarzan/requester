import { endpoint } from "../../http/utils/endpoint.js";
import type { GetHeroRequestDTO, GetHeroResponseDTO } from "./types/hero.js";
import { api } from "./api.js";

export const getHeroEndpoint = endpoint<GetHeroRequestDTO, GetHeroResponseDTO>(
  (parameters) => api.get(`/${parameters.id}`)
);
