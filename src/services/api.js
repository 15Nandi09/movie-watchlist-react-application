const API_KEY = "59bc45e5";
const BASE_URL = "https://www.omdbapi.com/";

/* ================================
   🔍 Search Movies (User Search)
================================ */
export const searchMovies = async (query, page = 1) => {
  const response = await fetch(
    `${BASE_URL}?apikey=${API_KEY}&s=${encodeURIComponent(query)}&page=${page}`
  );
  const data = await response.json();
  return data.Search || [];
};

/* =====================================
   🏠 Load Home Movies (Multiple Keywords)
===================================== */
export const loadHomeMovies = async () => {
  const keywords = [
    "Harry Potter",
    "Friends",
    "Batman",
    "Iron Man",
    "Spider Man", 
  ];

  let allMovies = [];

  for (const word of keywords) {
    const response = await fetch(
      `${BASE_URL}?apikey=${API_KEY}&s=${encodeURIComponent(word)}`
    );
    const data = await response.json();

    if (data.Search) {
      allMovies = [...allMovies, ...data.Search];
    }
  }

  // Remove duplicates by imdbID
  const uniqueMovies = Array.from(
    new Map(allMovies.map((movie) => [movie.imdbID, movie])).values()
  );

  return uniqueMovies;
};

/* ===============================
   🎬 Get Movie Details (for card)
=============================== */
export const getMovieDetails = async (imdbID) => {
  const response = await fetch(
    `${BASE_URL}?apikey=${API_KEY}&i=${imdbID}&plot=short`
  );
  const data = await response.json();
  return data;
};
