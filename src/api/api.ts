const BASE_URL = "https://dummy-api-jtg6bessta-ey.a.run.app";

export const get = async (path: string) => {
  const url = BASE_URL + path;
  const data = fetch(url)
    .then((response) => response.json())
    .then((data) => {
      return data;
    })
    .catch((error) => {
      throw new Error(error.message);
    });

  return data;
};
