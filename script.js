document.addEventListener('DOMContentLoaded', () => {
    const movies = [
        { id: 1, title: "Toofan", date: "2024", image: "photos/Toofan.jpg", genre: "action", category: "new", rating: 8.5, duration: "2h 15m", description: "An epic action thriller", video: "video/TOOFAN%20_%20Official%20Tease.mp4" },
        { id: 2, title: "Midnight Express", date: "2024", image: "photos/Toofan.jpg", genre: "action", category: "popular", rating: 7.8, duration: "1h 58m", description: "High-speed chase thriller", video: "video/TOOFAN%20_%20Official%20Tease.mp4" },
        { id: 3, title: "Eternal Love", date: "2024", image: "photos/Toofan.jpg", genre: "romance", category: "new", rating: 8.2, duration: "2h 5m", description: "A timeless love story", video: "video/TOOFAN%20_%20Official%20Tease.mp4" },
        { id: 4, title: "Laugh Out Loud", date: "2023", image: "photos/Toofan.jpg", genre: "comedy", category: "popular", rating: 7.5, duration: "1h 42m", description: "Comedy at its finest", video: "video/TOOFAN%20_%20Official%20Tease.mp4" },
        { id: 5, title: "Dark Secrets", date: "2024", image: "photos/Toofan.jpg", genre: "thriller", category: "new", rating: 8.9, duration: "2h 8m", description: "Psychological thriller", video: "video/TOOFAN%20_%20Official%20Tease.mp4" },
        { id: 6, title: "The Haunting", date: "2023", image: "photos/Toofan.jpg", genre: "horror", category: "popular", rating: 7.2, duration: "1h 35m", description: "Spine-chilling horror", video: "video/TOOFAN%20_%20Official%20Tease.mp4" },
        { id: 7, title: "Family Bonds", date: "2024", image: "photos/Toofan.jpg", genre: "drama", category: "new", rating: 8.7, duration: "2h 22m", description: "Emotional family drama", video: "video/TOOFAN%20_%20Official%20Tease.mp4" },
        { id: 8, title: "Space Odyssey", date: "2024", image: "photos/Toofan.jpg", genre: "action", category: "popular", rating: 9.1, duration: "2h 45m", description: "Epic space adventure", video: "video/TOOFAN%20_%20Official%20Tease.mp4" }
    ];

    const trendingMovies = [
        { id: 8, title: "Space Odyssey", image: "photos/Toofan.jpg", rank: 1 },
        { id: 5, title: "Dark Secrets", image: "photos/Toofan.jpg", rank: 2 },
        { id: 7, title: "Family Bonds", image: "photos/Toofan.jpg", rank: 3 },
        { id: 1, title: "Toofan", image: "photos/Toofan.jpg", rank: 4 },
        { id: 3, title: "Eternal Love", image: "photos/Toofan.jpg", rank: 5 }
    ];

    const continueWatching = [
        { id: 1, title: "Toofan", image: "photos/Toofan.jpg", progress: 65, duration: "2h 15m", timeLeft: "48m left" },
        { id: 2, title: "Midnight Express", image: "photos/Toofan.jpg", progress: 30, duration: "1h 58m", timeLeft: "1h 22m left" },
        { id: 4, title: "Laugh Out Loud", image: "photos/Toofan.jpg", progress: 85, duration: "1h 42m", timeLeft: "15m left" }
    ];

    const moviesGrid = document.getElementById('movies-grid');
    const prevButton = document.getElementById('prev-button');
    const nextButton = document.getElementById('next-button');
    const searchButton = document.getElementById('search-button');
    const searchInput = document.getElementById('search-input');
    
    if (!moviesGrid) {
        console.error('Movies grid not found');
        return;
    }

    const moviesPerPage = 4;
    let currentPage = 1;

    function renderMovies(page) {
        moviesGrid.innerHTML = '';
        const start = (page - 1) * moviesPerPage;
        const end = start + moviesPerPage;
        const paginatedMovies = movies.slice(start, end);

        paginatedMovies.forEach(movie => {
            const movieItem = document.createElement('div');
            movieItem.classList.add('movie-item');
            movieItem.innerHTML = `
                <div class="movie-poster">
                    <img src="${movie.image}" alt="${movie.title}">
                    <div class="quality-badge">HD</div>
                    <div class="movie-overlay">
                        <div class="play-button">▶</div>
                        <div class="movie-rating">⭐ ${movie.rating}</div>
                    </div>
                </div>
                <div class="movie-info">
                    <h3 class="movie-title">${movie.title}</h3>
                    <div class="movie-meta">
                        <span class="movie-year">${movie.date}</span>
                        <span class="movie-duration">${movie.duration}</span>
                        <span class="genre-tag">${movie.genre.toUpperCase()}</span>
                    </div>
                    <p class="movie-description">${movie.description}</p>
                </div>
            `;
            movieItem.addEventListener('click', () => {
                window.location.href = `movie.html?movie=${movie.id}`;
            });
            moviesGrid.appendChild(movieItem);
        });
    }

    function updateButtons() {
        if (prevButton) prevButton.disabled = currentPage === 1;
        if (nextButton) nextButton.disabled = currentPage * moviesPerPage >= movies.length;
    }

    if (prevButton) {
        prevButton.addEventListener('click', () => {
            if (currentPage > 1) {
                currentPage--;
                renderMovies(currentPage);
                updateButtons();
            }
        });
    }

    if (nextButton) {
        nextButton.addEventListener('click', () => {
            if (currentPage * moviesPerPage < movies.length) {
                currentPage++;
                renderMovies(currentPage);
                updateButtons();
            }
        });
    }

    function renderTrending() {
        const trendingSlider = document.getElementById('trending-slider');
        if (!trendingSlider) return;

        trendingSlider.innerHTML = '';
        trendingMovies.forEach(movie => {
            const trendingItem = document.createElement('div');
            trendingItem.classList.add('trending-item');
            trendingItem.innerHTML = `
                <div class="trending-rank">#${movie.rank}</div>
                <div class="trending-poster">
                    <img src="${movie.image}" alt="${movie.title}">
                    <div class="trending-overlay">
                        <div class="play-btn-small">▶</div>
                    </div>
                </div>
                <div class="trending-info">
                    <h4>${movie.title}</h4>
                    <div class="trending-badge">🔥 Trending</div>
                </div>
            `;
            trendingItem.addEventListener('click', () => {
                window.location.href = `movie.html?movie=${movie.id}`;
            });
            trendingSlider.appendChild(trendingItem);
        });
    }

    function renderContinueWatching() {
        const continueGrid = document.getElementById('continue-grid');
        if (!continueGrid) return;

        continueGrid.innerHTML = '';
        continueWatching.forEach(item => {
            const continueItem = document.createElement('div');
            continueItem.classList.add('continue-item');
            continueItem.innerHTML = `
                <div class="continue-thumbnail">
                    <img src="${item.image}" alt="${item.title}">
                    <div class="progress-overlay">
                        <div class="progress-bar" style="width: ${item.progress}%"></div>
                        <div class="resume-btn">▶ Resume</div>
                    </div>
                </div>
                <div class="continue-info">
                    <h4>${item.title}</h4>
                    <div class="continue-meta">
                        <span class="progress-text">${item.progress}% watched</span>
                        <span class="time-left">${item.timeLeft}</span>
                    </div>
                </div>
            `;
            continueItem.addEventListener('click', () => {
                window.location.href = `movie.html?movie=${item.id}`;
            });
            continueGrid.appendChild(continueItem);
        });
    }

    function setupGenreFilters() {
        const genreCards = document.querySelectorAll('.genre-card');
        genreCards.forEach(card => {
            card.addEventListener('click', () => {
                const genre = card.dataset.genre;
                const filteredMovies = movies.filter(movie => movie.genre === genre);
                renderFilteredMovies(filteredMovies);
                document.getElementById('movies').scrollIntoView({ behavior: 'smooth' });
            });
        });
    }

    function setupMovieFilters() {
        const filterBtns = document.querySelectorAll('.filter-btn');
        filterBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                filterBtns.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                const filter = btn.dataset.filter;
                let filteredMovies = movies;
                if (filter !== 'all') {
                    filteredMovies = movies.filter(movie => movie.category === filter);
                }
                renderFilteredMovies(filteredMovies);
            });
        });
    }

    function renderFilteredMovies(movieList) {
        moviesGrid.innerHTML = '';
        movieList.forEach(movie => {
            const movieItem = document.createElement('div');
            movieItem.classList.add('movie-item');
            movieItem.innerHTML = `
                <div class="movie-poster">
                    <img src="${movie.image}" alt="${movie.title}">
                    <div class="quality-badge">HD</div>
                    <div class="movie-overlay">
                        <div class="play-button">▶</div>
                        <div class="movie-rating">⭐ ${movie.rating}</div>
                    </div>
                </div>
                <div class="movie-info">
                    <h3 class="movie-title">${movie.title}</h3>
                    <div class="movie-meta">
                        <span class="movie-year">${movie.date}</span>
                        <span class="movie-duration">${movie.duration}</span>
                        <span class="genre-tag">${movie.genre.toUpperCase()}</span>
                    </div>
                    <p class="movie-description">${movie.description}</p>
                </div>
            `;
            movieItem.addEventListener('click', () => {
                window.location.href = `movie.html?movie=${movie.id}`;
            });
            moviesGrid.appendChild(movieItem);
        });
    }

    function performSearch() {
        const query = searchInput.value.toLowerCase().trim();
        const searchResults = document.getElementById('search-results');
        
        if (query.length === 0) {
            if (searchResults) searchResults.style.display = 'none';
            return;
        }
        
        const filteredMovies = movies.filter(movie => 
            movie.title.toLowerCase().includes(query) ||
            movie.genre.toLowerCase().includes(query)
        );
        
        if (searchResults && filteredMovies.length > 0) {
            searchResults.innerHTML = filteredMovies.slice(0, 5).map(movie => `
                <div class="search-result-item" onclick="window.location.href='movie.html?movie=${movie.id}'">
                    <img src="${movie.image}" alt="${movie.title}">
                    <div class="result-info">
                        <h4>${movie.title}</h4>
                        <span>${movie.genre.toUpperCase()} • ${movie.rating} ⭐</span>
                    </div>
                </div>
            `).join('');
            searchResults.style.display = 'block';
        } else if (searchResults) {
            searchResults.innerHTML = '<div class="no-results">No movies found</div>';
            searchResults.style.display = 'block';
        }
    }

    if (searchInput && searchButton) {
        searchInput.addEventListener('input', performSearch);
        searchInput.addEventListener('keydown', (event) => {
            if (event.key === 'Enter') {
                performSearch();
                document.getElementById('movies').scrollIntoView({ behavior: 'smooth' });
            }
        });
        searchButton.addEventListener('click', () => {
            performSearch();
            document.getElementById('movies').scrollIntoView({ behavior: 'smooth' });
        });
        
        document.addEventListener('click', (event) => {
            if (!event.target.closest('.search-container')) {
                const searchResults = document.getElementById('search-results');
                if (searchResults) searchResults.style.display = 'none';
            }
        });
    }

    // Initialize
    renderMovies(currentPage);
    updateButtons();
    renderTrending();
    renderContinueWatching();
    setupGenreFilters();
    setupMovieFilters();
});
