const API_KEY = "419d9b34";
const BASE_URL = `https://www.omdbapi.com/?apikey=${API_KEY}`;

export const searchMovies = async (query) => {
  if (!query) return []; // prevent empty fetch

  const response = await fetch(`${BASE_URL}&s=${encodeURIComponent(query)}`);
  const data = await response.json();

  if (data.Response === "True") {
    return data.Search;
  } else {
    return [];
  }
};
