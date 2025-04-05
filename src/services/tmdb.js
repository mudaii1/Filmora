import { API_BASE_URL, API_KEY, API_URL } from "../utils/constant";

const TMDB_IMAGE_BASE_URL = "https://image.tmdb.org/t/p";

export const getImageUrl = (path, size = "original") => {
  if (!path) return null;
  return `${TMDB_IMAGE_BASE_URL}/${size}${path}`;
};

export const getBackdropUrl = (path) => getImageUrl(path, "w1280");
export const getPosterUrl = (path) => getImageUrl(path, "w500");

export const fetchMovies = async (page = 1) => {
  try {
    const response = await fetch(
      `${API_URL}/discover/movie?api_key=${API_KEY}&page=${page}&language=en-US&sort_by=popularity.desc`,
    );
    const data = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
};

export const getMovieDetails = async (movieId) => {
  try {
    const response = await fetch(
      `${API_URL}/movie/${movieId}?api_key=${API_KEY}&language=en-US`,
    );
    const data = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
};

export async function getPopularMovies() {
  try {
    const response = await fetch(
      `${API_URL}/movie/popular?api_key=${API_KEY}&language=en-US&page=1`,
    );
    const data = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
}
export async function getTopRatedMovies() {
  try {
    const response = await fetch(
      `${API_URL}/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`,
    );
    const data = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
}

export async function getHomePageMovies() {
  try {
    const res = await fetch(
      `${API_URL}/movie/popular?api_key=${API_KEY}&language=en-US&page=1`,
    );
    const res2 = await fetch(
      `${API_URL}/movie/popular?api_key=${API_KEY}&language=en-US&page=2`,
    );
    const res3 = await fetch(
      `${API_URL}/movie/popular?api_key=${API_KEY}&language=en-US&page=3`,
    );
    const data = await res.json();
    const data2 = await res2.json();
    const data3 = await res3.json();
    return [...data.results, ...data2.results, ...data3.results];
  } catch (error) {
    throw error;
  }
}

export async function getMoviesByGenres() {
  try {
    // First fetch all genres
    const genresResponse = await fetch(
      `${API_URL}/genre/movie/list?api_key=${API_KEY}&language=en-US`,
    );
    const genresData = await genresResponse.json();

    // Then fetch movies for each genre
    const genresWithMovies = await Promise.all(
      genresData.genres.map(async (genre) => {
        const moviesResponse = await fetch(
          `${API_URL}/discover/movie?api_key=${API_KEY}&include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_genres=${genre.id}`,
        );
        const moviesData = await moviesResponse.json();
        return {
          ...genre,
          movies: moviesData.results,
        };
      }),
    );
    return genresWithMovies;
  } catch (error) {
    throw error;
  }
}
export async function getTopInGenres() {
  try {
    // First fetch all genres
    const genresResponse = await fetch(
      `${API_URL}/genre/movie/list?api_key=${API_KEY}&language=en-US`,
    );
    const genresData = await genresResponse.json();

    // Then fetch movies for each genre
    const TopMoviesBygenres = await Promise.all(
      genresData.genres.map(async (genre) => {
        const moviesResponse = await fetch(
          `${API_BASE_URL}/discover/movie?api_key=${API_KEY}&include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&vote_average.gte=9&with_genres=${genre.id}`,
        );
        const moviesData = await moviesResponse.json();
        return {
          ...genre,
          movies: moviesData.results,
        };
      }),
    );

    return TopMoviesBygenres;
  } catch (error) {
    throw error;
  }
}
export async function getNewReleaseMovies() {
  try {
    const response = await fetch(
      `${API_URL}/discover/movie?api_key=${API_KEY}&include_adult=false&include_video=false&language=en-US&page=1&release_date.gte=2025-01-01&sort_by=popularity.desc`,
    );
    const data = await response.json();

    return data.results;
  } catch (error) {
    throw error;
  }
}
export async function getMustWatchMovies() {
  try {
    const response = await fetch(
      `${API_URL}/discover/movie?api_key=${API_KEY}&include_video=false&language=en-US&page=1&sort_by=vote_count.desc`,
    );

    const data = await response.json();
    const mustWatchMovies = await Promise.all(
      data.results.map(async (movie) => {
        const movieDetails = await getMovieDetails(movie.id);
        return {
          ...movie,
          ...movieDetails,
        };
      }),
    );
    return mustWatchMovies;
  } catch (error) {
    throw error;
  }
}

export async function getTrendingMovies() {
  try {
    const response = await fetch(
      `${API_URL}/trending/movie/day?api_key=${API_KEY}&language=en-US&page=1`,
    );
    const data = await response.json();
    const trendingMovies = await Promise.all(
      data.results.map(async (movie) => {
        const movieDetails = await getMovieDetails(movie.id);
        return {
          ...movie,
          ...movieDetails,
        };
      }),
    );
    return trendingMovies;
  } catch (error) {
    throw error;
  }
}

export async function getMoviesByCategory(categoryId, page) {
  try {
    const response = await fetch(
      `${API_URL}/discover/movie?api_key=${API_KEY}&language=en-US&page=${page}&sort_by=popularity.desc&with_genres=${categoryId}`,
    );
    const data = await response.json();
    return data.results;
  } catch (error) {
    throw error;
  }
}

export async function getMovieCredits(movieId) {
  const response = await fetch(
    `${API_URL}/movie/${movieId}/credits?api_key=${API_KEY}&language=en-US`,
  );
  if (!response.ok) {
    throw new Error("Failed to fetch movie credits");
  }
  return response.json();
}

export async function getMovieReviews(movieId) {
  const response = await fetch(
    `${API_URL}/movie/${movieId}/reviews?api_key=${API_KEY}&language=en-US`,
  );
  if (!response.ok) {
    throw new Error("Failed to fetch movie reviews");
  }
  return response.json();
}

export async function getSimilarMovies(movieId) {
  try {
    const response = await fetch(
      `${API_URL}/movie/${movieId}/similar?api_key=${API_KEY}&language=en-US&page=1`,
    );
    const data = await response.json();
    return data.results;
  } catch (error) {
    throw error;
  }
}

// --------- TV SHOWS ---------

export async function getTVShowsGenres() {
  try {
    const response = await fetch(
      `${API_URL}/genre/tv/list?api_key=${API_KEY}&language=en-US`,
    );
    const data = await response.json();
    return data.genres;
  } catch (error) {
    throw error;
  }
}

export async function getShowsByCategory(categoryId, page) {
  try {
    const response = await fetch(
      `${API_URL}/discover/tv?api_key=${API_KEY}&language=en-US&page=${page}&sort_by=popularity.desc&with_genres=${categoryId}`,
    );
    const data = await response.json();
    return data.results;
  } catch (error) {
    throw error;
  }
}

export async function getShowsGenres(page) {
  try {
    const genresResponse = await getTVShowsGenres();
    const genresWithShows = await Promise.all(
      genresResponse.map(async (genre) => {
        const showsResponse = await getShowsByCategory(genre.id, page);
        return {
          ...genre,
          shows: showsResponse,
        };
      }),
    );
    return genresWithShows;
  } catch (error) {
    throw error;
  }
}

export async function getTVShowDetails(tvShowId) {
  try {
    const response = await fetch(
      `${API_URL}/tv/${tvShowId}?api_key=${API_KEY}&language=en-US`,
    );
    const data = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
}

export async function getTopShowsInGenres() {
  try {
    const genres = await getTVShowsGenres();
    const TopTVShowsBygenres = await Promise.all(
      genres.map(async (genre) => {
        const tvShowsResponse = await fetch(
          `${API_URL}/discover/tv?api_key=${API_KEY}&language=en-US&page=1&sort_by=popularity.desc&with_genres=${genre.id}`,
        );
        const tvShowsData = await tvShowsResponse.json();
        return {
          ...genre,
          shows: tvShowsData.results,
        };
      }),
    );
    return TopTVShowsBygenres;
  } catch (error) {
    throw error;
  }
}

export async function getTrendingTVShows() {
  try {
    const response = await fetch(
      `${API_URL}/trending/tv/day?api_key=${API_KEY}&language=en-US&page=1`,
    );
    const data = await response.json();
    const trendingTVShows = await Promise.all(
      data.results.map(async (tvShow) => {
        const tvShowDetails = await getTVShowDetails(tvShow.id);
        return {
          ...tvShow,
          ...tvShowDetails,
        };
      }),
    );
    return trendingTVShows;
  } catch (error) {
    throw error;
  }
}

export async function getNewReleaseTVShows() {
  try {
    const response = await fetch(
      `${API_URL}/discover/tv?api_key=${API_KEY}&language=en-US&page=1&sort_by=popularity.desc&first_air_date.gte=2025-01-01`,
    );
    const data = await response.json();
    return data.results;
  } catch (error) {
    throw error;
  }
}
export async function getMustWatchTVShows() {
  try {
    const response = await fetch(
      `${API_URL}/discover/tv?api_key=${API_KEY}&language=en-US&page=1&sort_by=vote_count.desc`,
    );
    const data = await response.json();
    const mustWatchTVShows = await Promise.all(
      data.results.map(async (tvShow) => {
        const tvShowDetails = await getTVShowDetails(tvShow.id);
        return {
          ...tvShow,
          ...tvShowDetails,
        };
      }),
    );
    return mustWatchTVShows;
  } catch (error) {
    throw error;
  }
}

export async function getTVShowSeasonsDetails(tvShowId, seasonNumber) {
  const response = await fetch(
    `${API_URL}/tv/${tvShowId}/season/${seasonNumber}?api_key=${API_KEY}&language=en-US`,
  );
  if (!response.ok) {
    throw new Error("Failed to fetch TV show seasons details");
  }
  return response.json();
}

export async function getTVShowReviews(tvShowId) {
  try {
    const response = await fetch(
      `${API_URL}/tv/${tvShowId}/reviews?api_key=${API_KEY}&language=en-US`,
    );
    if (!response.ok) {
      throw new Error("Failed to fetch TV show reviews");
    }
    return response.json();
  } catch (error) {
    throw error;
  }
}

export async function getTVShowCredits(tvShowId) {
  try {
    const response = await fetch(
      `${API_URL}/tv/${tvShowId}/credits?api_key=${API_KEY}&language=en-US`,
    );
    if (!response.ok) {
      throw new Error("Failed to fetch TV show credits");
    }
    return response.json();
  } catch (error) {
    throw error;
  }
}

export async function getSimilarShows(tvShowId) {
  try {
    const response = await fetch(
      `${API_URL}/tv/${tvShowId}/similar?api_key=${API_KEY}&language=en-US&page=1`,
    );
    const data = await response.json();
    return data.results;
  } catch (error) {
    throw error;
  }
}

export async function getSearchResults(query) {
  try {
    const response = await fetch(
      `${API_URL}/search/multi?include_adult=false&api_key=${API_KEY}&language=en-US&query=${query}`,
    );
    const data = await response.json();
    return data.results;
  } catch (error) {
    throw error;
  }
}
