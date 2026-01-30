// 1. Select DOM elements
const moviesGrid = document.getElementById('movies-grid');
const movieCount = document.getElementById('movie-count');
const filterButtons = document.querySelectorAll('.filter-btn');

let allMovies = []; // Global storage for movies to filter against

// 2. Fetch data from the JSON file
async function fetchMovies() {
    try {
        // Path matches the structure: js/data/movies.json
        const response = await fetch('js/data/movies.json');
        if (!response.ok) throw new Error('Failed to fetch movie data');
        
        const data = await response.json();
        allMovies = data.movies; // Access the "movies" array inside the JSON object
        
        // Initial render
        displayMovies(allMovies);
    } catch (error) {
        moviesGrid.innerHTML = `<p class="error">Error loading movies: ${error.message}</p>`;
    }
}

// 3. Function to render cards to the DOM
function displayMovies(moviesToRender) {
    // Clear the grid first
    moviesGrid.innerHTML = '';
    
    // Update the movie count text
    movieCount.textContent = `Showing ${moviesToRender.length} movies`;

    // Loop through movies and create HTML strings
    moviesToRender.forEach(movie => {
        const movieCard = document.createElement('div');
        movieCard.classList.add('movie-card');
        
        movieCard.innerHTML = `
            <img class="movie-poster" src="${movie.poster}" alt="${movie.title}">
            <div class="movie-info">
                <div class="movie-header">
                    <h3 class="movie-title">${movie.title}</h3>
                    <span class="movie-year">${movie.year}</span>
                </div>
                <span class="movie-genre">${movie.genre}</span>
                <p class="movie-description">${movie.description}</p>
            </div>
        `;
        
        moviesGrid.appendChild(movieCard);
    });
}

// 4. Filtering Logic
filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Update active button styling
        document.querySelector('.filter-btn.active').classList.remove('active');
        button.classList.add('active');

        const selectedGenre = button.getAttribute('data-genre');

        // Filter the logic
        if (selectedGenre === 'all') {
            displayMovies(allMovies);
        } else {
            const filteredMovies = allMovies.filter(movie => movie.genre === selectedGenre);
            displayMovies(filteredMovies);
        }
    });
});

// Start the app
fetchMovies();