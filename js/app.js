const moviesGrid = document.getElementById('movies-grid');
const movieCount = document.getElementById('movie-count');
const filterButtons = document.querySelectorAll('.filter-btn');

let allMovies = []; 

// Fetch data from the JSON file
async function fetchMovies() {
    try {
        const response = await fetch('js/data/movies.json');
        if (!response.ok) throw new Error('Failed to fetch movie data');
        
        const data = await response.json();
        allMovies = data.movies; 
        

        displayMovies(allMovies);
    } catch (error) {
        moviesGrid.innerHTML = `<p class="error">Error loading movies: ${error.message}</p>`;
    }
}

//Render cards to the DOM
function displayMovies(moviesToRender) {
    moviesGrid.innerHTML = '';
    
    movieCount.textContent = `Showing ${moviesToRender.length} movies`;

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
        document.querySelector('.filter-btn.active').classList.remove('active');
        button.classList.add('active');

        const selectedGenre = button.getAttribute('data-genre');

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
