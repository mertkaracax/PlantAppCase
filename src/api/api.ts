const BASE_URL = "https://dummy-api-jtg6bessta-ey.a.run.app";

export const get = async (path: string) => {
  const url = BASE_URL + path;
  const data = fetch(url)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json();
    })
    .then((data) => {
      return data;
    })
    .catch((error) => {
      throw new Error(error.message);
    });

  return data;
};
