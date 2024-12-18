// Initialize movie collection
const movies = [
    { title: "Inception", genre: "Sci-Fi", rating: 8.8, releaseYear: 2010 },
    { title: "The Dark Knight", genre: "Action", rating: 9.0, releaseYear: 2008 },
    { title: "Interstellar", genre: "Sci-Fi", rating: 8.6, releaseYear: 2014 }
];

// Add a new movie
const addMovie = (collection, movie) => {
    collection.push(movie);
    displayMovies(collection);
};

// List all movies in a specific genre
const listMoviesByGenre = (collection, genre) => {
    return collection.filter(movie => movie.genre === genre);
};

// Find the highest-rated movie
const findHighestRatedMovie = collection => {
    return collection.reduce((highest, movie) => movie.rating > highest.rating ? movie : highest);
};

// Get all movie titles
const getMovieTitles = collection => {
    return collection.map(movie => movie.title);
};

// Filter movies released after a specific year
const moviesAfterYear = (collection, year) => {
    return collection.filter(movie => movie.releaseYear > year);
};

// Display all movies in the collection
const displayMovies = (movies) => {
    const movieList = document.getElementById('movieList');
    movieList.innerHTML = '';
    movies.forEach(movie => {
        const movieItem = document.createElement('div');
        movieItem.classList.add('movie-item');
        movieItem.innerHTML = `<h3>${movie.title} (${movie.releaseYear})</h3>
                               <p>Genre: ${movie.genre}</p>
                               <p>Rating: ${movie.rating}</p>`;
        movieList.appendChild(movieItem);
    });
};

// Display the highest-rated movie
const displayHighestRatedMovie = (movies) => {
    const highestRatedMovie = findHighestRatedMovie(movies);
    const highestRatedDiv = document.getElementById('highestRatedMovie');
    highestRatedDiv.innerHTML = `<h3>${highestRatedMovie.title} (${highestRatedMovie.releaseYear})</h3>
                                 <p>Genre: ${highestRatedMovie.genre}</p>
                                 <p>Rating: ${highestRatedMovie.rating}</p>`;
};

// Display the movie titles
const displayMovieTitles = (movies) => {
    const movieTitlesList = document.getElementById('movieTitlesList');
    movieTitlesList.innerHTML = '';
    const titles = getMovieTitles(movies);
    titles.forEach(title => {
        const listItem = document.createElement('li');
        listItem.textContent = title;
        movieTitlesList.appendChild(listItem);
    });
};

// Event Listener for adding a movie
document.getElementById('addMovieForm').addEventListener('submit', (e) => {
    e.preventDefault();
    const title = document.getElementById('movieTitle').value;
    const genre = document.getElementById('movieGenre').value;
    const rating = parseFloat(document.getElementById('movieRating').value);
    const releaseYear = parseInt(document.getElementById('movieYear').value);

    addMovie(movies, { title, genre, rating, releaseYear });
    
    document.getElementById('addMovieForm').reset();
});

// Event Listener for filtering movies by genre
document.getElementById('filterButton').addEventListener('click', () => {
    const selectedGenre = document.getElementById('genreSelect').value;
    if (selectedGenre) {
        const filteredMovies = listMoviesByGenre(movies, selectedGenre);
        displayMovies(filteredMovies);
    }
});

// Initial display of all movies
displayMovies(movies);
displayHighestRatedMovie(movies);
displayMovieTitles(movies);
