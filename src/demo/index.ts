import { getHeroEndpoint } from "./api/index.js";

export const getHero = async () => {
  const params = { id: 1 };
  const hero = await getHeroEndpoint(params);

  return hero;
};

console.log(getHero());
