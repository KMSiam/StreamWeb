document.addEventListener('DOMContentLoaded', () => {
    const movies = [
        { id: 1, title: "Toofan", date: "2024", image: "photos/Toofan.jpg", genre: "action", category: "new", rating: 8.5, duration: "2h 15m", description: "An epic action thriller", video: "video/TOOFAN _ Official Tease.mp4" },
        { id: 2, title: "Midnight Express", date: "2024", image: "photos/Toofan.jpg", genre: "action", category: "popular", rating: 7.8, duration: "1h 58m", description: "High-speed chase thriller", video: "video/TOOFAN _ Official Tease.mp4" },
        { id: 3, title: "Eternal Love", date: "2024", image: "photos/Toofan.jpg", genre: "romance", category: "new", rating: 8.2, duration: "2h 5m", description: "A timeless love story", video: "video/TOOFAN _ Official Tease.mp4" },
        { id: 4, title: "Laugh Out Loud", date: "2023", image: "photos/Toofan.jpg", genre: "comedy", category: "popular", rating: 7.5, duration: "1h 42m", description: "Comedy at its finest", video: "video/TOOFAN _ Official Tease.mp4" },
        { id: 5, title: "Dark Secrets", date: "2024", image: "photos/Toofan.jpg", genre: "thriller", category: "new", rating: 8.9, duration: "2h 8m", description: "Psychological thriller", video: "video/TOOFAN _ Official Tease.mp4" },
        { id: 6, title: "The Haunting", date: "2023", image: "photos/Toofan.jpg", genre: "horror", category: "popular", rating: 7.2, duration: "1h 35m", description: "Spine-chilling horror", video: "video/TOOFAN _ Official Tease.mp4" },
        { id: 7, title: "Family Bonds", date: "2024", image: "photos/Toofan.jpg", genre: "drama", category: "new", rating: 8.7, duration: "2h 22m", description: "Emotional family drama", video: "video/TOOFAN _ Official Tease.mp4" },
        { id: 8, title: "Space Odyssey", date: "2024", image: "photos/Toofan.jpg", genre: "action", category: "popular", rating: 9.1, duration: "2h 45m", description: "Epic space adventure", video: "video/TOOFAN _ Official Tease.mp4" }
    ];

    const trendingMovies = [
        { id: 8, title: "Space Odyssey", image: "photos/Toofan.jpg", trending: true, rank: 1 },
        { id: 5, title: "Dark Secrets", image: "photos/Toofan.jpg", trending: true, rank: 2 },
        { id: 7, title: "Family Bonds", image: "photos/Toofan.jpg", trending: true, rank: 3 },
        { id: 1, title: "Toofan", image: "photos/Toofan.jpg", trending: true, rank: 4 },
        { id: 3, title: "Eternal Love", image: "photos/Toofan.jpg", trending: true, rank: 5 }
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
    
    if (!moviesGrid || !prevButton || !nextButton || !searchButton || !searchInput) {
        console.error('Required DOM elements not found');
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
        prevButton.disabled = currentPage === 1;
        nextButton.disabled = currentPage * moviesPerPage >= movies.length;
    }

    prevButton.addEventListener('click', () => {
        if (currentPage > 1) {
            currentPage--;
            renderMovies(currentPage);
            updateButtons();
        }
    });

    nextButton.addEventListener('click', () => {
        if (currentPage * moviesPerPage < movies.length) {
            currentPage++;
            renderMovies(currentPage);
            updateButtons();
        }
    });

    // Initialize all sections
    renderMovies(currentPage);
    updateButtons();
    renderTrending();
    renderContinueWatching();
    setupGenreFilters();
    setupMovieFilters();

    const performSearch = () => {
        const query = searchInput.value.toLowerCase().trim();
        const searchResults = document.getElementById('search-results');
        
        if (query.length === 0) {
            if (searchResults) searchResults.style.display = 'none';
            return;
        }
        
        // Filter movies and show in dropdown
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
        
        // Also filter the main movie grid
        const movieItems = document.querySelectorAll('.movie-item');
        movieItems.forEach(item => {
            const titleElement = item.querySelector('.movie-title');
            if (titleElement) {
                const title = titleElement.textContent.toLowerCase();
                item.style.display = title.includes(query) ? 'block' : 'none';
            }
        });
    };

    // Search event listeners
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
        
        // Hide search results when clicking outside
        document.addEventListener('click', (event) => {
            if (!event.target.closest('.search-container')) {
                const searchResults = document.getElementById('search-results');
                if (searchResults) {
                    searchResults.style.display = 'none';
                }
            }
        });
    }

    // Trending Section
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

    // Continue Watching Section
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

    // Genre Filters
    function setupGenreFilters() {
        const genreCards = document.querySelectorAll('.genre-card');
        genreCards.forEach(card => {
            card.addEventListener('click', () => {
                const genre = card.dataset.genre;
                filterMoviesByGenre(genre);
                document.getElementById('movies').scrollIntoView({ behavior: 'smooth' });
            });
        });
    }

    // Movie Category Filters
    function setupMovieFilters() {
        const filterBtns = document.querySelectorAll('.filter-btn');
        filterBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                filterBtns.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                const filter = btn.dataset.filter;
                filterMovies(filter);
            });
        });
    }

    function filterMoviesByGenre(genre) {
        const filteredMovies = movies.filter(movie => movie.genre === genre);
        renderFilteredMovies(filteredMovies);
    }

    function filterMovies(category) {
        let filteredMovies = movies;
        if (category !== 'all') {
            filteredMovies = movies.filter(movie => movie.category === category);
        }
        renderFilteredMovies(filteredMovies);
    }

    function renderFilteredMovies(movieList) {
        moviesGrid.innerHTML = '';
        movieList.forEach(movie => {
            const movieItem = document.createElement('div');
            movieItem.classList.add('movie-item');

            const movieLink = document.createElement('a');
            movieLink.href = `movie.html?movie=${movie.id}`;
            movieLink.classList.add('movie-link');

            const movieImage = document.createElement('img');
            movieImage.src = movie.image;
            movieImage.alt = movie.title;

            const movieTitle = document.createElement('p');
            movieTitle.textContent = movie.title;

            const movieInfo = document.createElement('div');
            movieInfo.innerHTML = `
                <div class="movie-meta">
                    <span class="movie-year">${movie.date}</span>
                    <span class="movie-duration">${movie.duration}</span>
                    <span class="genre-tag">${movie.genre.toUpperCase()}</span>
                    <span class="movie-rating">⭐ ${movie.rating}</span>
                </div>
                <p class="movie-description">${movie.description}</p>
            `;

            movieLink.appendChild(movieImage);
            movieLink.appendChild(movieTitle);
            movieLink.appendChild(movieInfo);
            movieItem.appendChild(movieLink);

            moviesGrid.appendChild(movieItem);
        });
    }
});
    // Watchlist functionality
    let watchlist = JSON.parse(localStorage.getItem('watchlist')) || [];

    function addToWatchlist(movieId) {
        if (!watchlist.includes(movieId)) {
            watchlist.push(movieId);
            localStorage.setItem('watchlist', JSON.stringify(watchlist));
            showNotification('Added to watchlist!');
        }
    }

    function removeFromWatchlist(movieId) {
        watchlist = watchlist.filter(id => id !== movieId);
        localStorage.setItem('watchlist', JSON.stringify(watchlist));
        showNotification('Removed from watchlist!');
    }

    function showNotification(message) {
        const notification = document.createElement('div');
        notification.className = 'notification';
        notification.textContent = message;
        notification.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            background: linear-gradient(45deg, #1e90ff, #00bfff);
            color: white;
            padding: 15px 25px;
            border-radius: 25px;
            z-index: 1000;
            animation: slideIn 0.3s ease;
        `;
        document.body.appendChild(notification);
        setTimeout(() => {
            notification.remove();
        }, 3000);
    }

    // Add watchlist buttons to movie items
    function addWatchlistButtons() {
        const movieItems = document.querySelectorAll('.movie-item');
        movieItems.forEach((item, index) => {
            const movieId = movies[index]?.id;
            if (!movieId) return;

            const watchlistBtn = document.createElement('button');
            watchlistBtn.className = 'watchlist-btn';
            watchlistBtn.innerHTML = watchlist.includes(movieId) ? '❤️' : '🤍';
            watchlistBtn.style.cssText = `
                position: absolute;
                top: 10px;
                right: 10px;
                background: rgba(0, 0, 0, 0.7);
                border: none;
                border-radius: 50%;
                width: 35px;
                height: 35px;
                cursor: pointer;
                font-size: 16px;
                transition: all 0.3s ease;
            `;
            
            watchlistBtn.addEventListener('click', (e) => {
                e.preventDefault();
                e.stopPropagation();
                if (watchlist.includes(movieId)) {
                    removeFromWatchlist(movieId);
                    watchlistBtn.innerHTML = '🤍';
                } else {
                    addToWatchlist(movieId);
                    watchlistBtn.innerHTML = '❤️';
                }
            });

            item.style.position = 'relative';
            item.appendChild(watchlistBtn);
        });
    }

    // Enhanced search with filters
    function enhancedSearch() {
        const query = searchInput.value.toLowerCase().trim();
        const movieItems = document.querySelectorAll('.movie-item');
        let hasResults = false;

        movieItems.forEach(item => {
            const titleElement = item.querySelector('p');
            if (titleElement) {
                const title = titleElement.textContent.toLowerCase();
                const isVisible = title.includes(query);
                item.style.display = isVisible ? 'block' : 'none';
                if (isVisible) hasResults = true;
            }
        });

        // Show no results message
        let noResultsMsg = document.getElementById('no-results');
        if (!hasResults && query) {
            if (!noResultsMsg) {
                noResultsMsg = document.createElement('div');
                noResultsMsg.id = 'no-results';
                noResultsMsg.innerHTML = `
                    <div style="text-align: center; padding: 40px; color: #aaa;">
                        <h3>No movies found for "${query}"</h3>
                        <p>Try searching with different keywords</p>
                    </div>
                `;
                moviesGrid.appendChild(noResultsMsg);
            }
        } else if (noResultsMsg) {
            noResultsMsg.remove();
        }
    }

    // Update search function
    searchButton.removeEventListener('click', performSearch);
    searchInput.removeEventListener('keydown', performSearch);
    
    searchButton.addEventListener('click', enhancedSearch);
    searchInput.addEventListener('keydown', (event) => {
        if (event.key === 'Enter') {
            enhancedSearch();
        }
    });

    // Add smooth scrolling for navigation
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Add loading animation
    function showLoading() {
        const loader = document.createElement('div');
        loader.id = 'loader';
        loader.innerHTML = `
            <div style="
                display: flex;
                justify-content: center;
                align-items: center;
                height: 200px;
                font-size: 1.2rem;
                color: #1e90ff;
            ">
                <div style="
                    width: 40px;
                    height: 40px;
                    border: 4px solid rgba(30, 144, 255, 0.3);
                    border-top: 4px solid #1e90ff;
                    border-radius: 50%;
                    animation: spin 1s linear infinite;
                    margin-right: 15px;
                "></div>
                Loading movies...
            </div>
        `;
        return loader;
    }

    // Add CSS animation for loader
    const style = document.createElement('style');
    style.textContent = `
        @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
        }
        @keyframes slideIn {
            from { transform: translateX(100%); opacity: 0; }
            to { transform: translateX(0); opacity: 1; }
        }
    `;
    document.head.appendChild(style);

    // Initialize watchlist buttons after movies are rendered
    setTimeout(() => {
        addWatchlistButtons();
    }, 100);
    // Enhanced search functionality
    function performRealTimeSearch() {
        const query = searchInput.value.toLowerCase().trim();
        const searchResults = document.getElementById('search-results');
        
        if (query.length === 0) {
            searchResults.style.display = 'none';
            return;
        }
        
        const filteredMovies = movies.filter(movie => 
            movie.title.toLowerCase().includes(query) ||
            movie.genre.toLowerCase().includes(query)
        );
        
        if (filteredMovies.length > 0) {
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
        } else {
            searchResults.innerHTML = '<div class="no-results">No movies found</div>';
            searchResults.style.display = 'block';
        }
    }
    
    function executeSearch() {
        const query = searchInput.value.toLowerCase().trim();
        if (query) {
            document.getElementById('movies').scrollIntoView({ behavior: 'smooth' });
            setTimeout(() => {
                const filteredMovies = movies.filter(movie => 
                    movie.title.toLowerCase().includes(query) ||
                    movie.genre.toLowerCase().includes(query)
                );
                renderFilteredMovies(filteredMovies);
                document.getElementById('search-results').style.display = 'none';
            }, 500);
        }
    }
    
    // Update search event listeners
    if (searchInput && searchButton) {
        searchInput.addEventListener('input', performRealTimeSearch);
        searchInput.addEventListener('keydown', (event) => {
            if (event.key === 'Enter') {
                executeSearch();
            }
        });
        searchButton.addEventListener('click', executeSearch);
        
        // Hide search results when clicking outside
        document.addEventListener('click', (event) => {
            if (!event.target.closest('.search-container')) {
                const searchResults = document.getElementById('search-results');
                if (searchResults) {
                    searchResults.style.display = 'none';
                }
            }
        });
    }