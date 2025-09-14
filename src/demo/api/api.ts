import { http } from "../../http/index.ts";

export const api = http("axios", {
  baseURL: "https://superheroapi.com/api/7c92ec31439bcedd9aa98c0e594465f2",
});
