import { http } from "../../http/index.ts";

http("axios", {
  baseURL: "https://superheroapi.com/api/7c92ec31439bcedd9aa98c0e594465f2",
  defaultHeaders: {},
  timeout: 10000,
});
