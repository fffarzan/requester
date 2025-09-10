import api from "./client.js";

async function getUser() {
  try {
    const response = await api.get("/1");
    console.log(response);
  } catch (error) {
    console.error(error);
  }
}

getUser();
