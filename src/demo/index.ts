import { getHeroEndpoint } from "./api/index.js";
import { api } from "./api/api.js";

export const getHero = async () => {
  // const params = { id: 1 };
  // const hero = await api(getHeroEndpoint(params));
  const hero = await api((client: any, params: any) =>
    client.get(`/${params.id}`)
  );

  return hero;
};

console.log(getHero());
