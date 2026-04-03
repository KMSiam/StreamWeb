document.addEventListener('DOMContentLoaded', () => {
    const movies = [
        { id: 1, title: "Toofan", date: "2024", image: "photos/Toofan.jpg", genre: "action", category: "new", rating: 8.5, duration: "2h 15m", description: "An epic action thriller", video: "video/TOOFAN%20_%20Official%20Tease.mp4" },
        { id: 2, title: "Midnight Express", date: "2024", image: "photos/Toofan.jpg", genre: "action", category: "popular", rating: 7.8, duration: "1h 58m", description: "High-speed chase thriller", video: "video/TOOFAN%20_%20Official%20Tease.mp4" },
        { id: 3, title: "Eternal Love", date: "2024", image: "photos/Toofan.jpg", genre: "romance", category: "new", rating: 8.2, duration: "2h 5m", description: "A timeless love story", video: "video/TOOFAN%20_%20Official%20Tease.mp4" },
        { id: 4, title: "Laugh Out Loud", date: "2023", image: "photos/Toofan.jpg", genre: "comedy", category: "popular", rating: 7.5, duration: "1h 42m", description: "Comedy at its finest", video: "video/TOOFAN%20_%20Official%20Tease.mp4" },
        { id: 5, title: "Dark Secrets", date: "2024", image: "photos/Toofan.jpg", genre: "thriller", category: "new", rating: 8.9, duration: "2h 8m", description: "Psychological thriller", video: "video/TOOFAN%20_%20Official%20Tease.mp4" },
        { id: 6, title: "The Haunting", date: "2023", image: "photos/Toofan.jpg", genre: "horror", category: "popular", rating: 7.2, duration: "1h 35m", description: "Spine-chilling horror", video: "video/TOOFAN%20_%20Official%20Tease.mp4" },
        { id: 7, title: "Family Bonds", date: "2024", image: "photos/Toofan.jpg", genre: "drama", category: "new", rating: 8.7, duration: "2h 22m", description: "Emotional family drama", video: "video/TOOFAN%20_%20Official%20Tease.mp4" },
        { id: 8, title: "Space Odyssey", date: "2024", image: "photos/Toofan.jpg", genre: "action", category: "popular", rating: 9.1, duration: "2h 45m", description: "Epic space adventure", video: "video/TOOFAN%20_%20Official%20Tease.mp4" },
        // Mock items to fill 5 rows
        { id: 9, title: "Phantom Quest", date: "2024", image: "photos/Toofan.jpg", genre: "fantasy", category: "new", rating: 8.1, duration: "2h 10m", description: "A journey beyond reality", video: "video/TOOFAN%20_%20Official%20Tease.mp4" },
        { id: 10, title: "Cyber Protocol", date: "2024", image: "photos/Toofan.jpg", genre: "sci-fi", category: "new", rating: 8.4, duration: "1h 55m", description: "Digital warfare in 2077", video: "video/TOOFAN%20_%20Official%20Tease.mp4" },
        { id: 11, title: "Crimson Tide", date: "2024", image: "photos/Toofan.jpg", genre: "action", category: "popular", rating: 7.9, duration: "2h 5m", description: "Deep sea naval action", video: "video/TOOFAN%20_%20Official%20Tease.mp4" },
        { id: 12, title: "The Last Stand", date: "2023", image: "photos/Toofan.jpg", genre: "drama", category: "popular", rating: 8.3, duration: "2h 30m", description: "A heroic final chapter", video: "video/TOOFAN%20_%20Official%20Tease.mp4" },
        { id: 13, title: "Neon Nights", date: "2024", image: "photos/Toofan.jpg", genre: "sci-fi", category: "new", rating: 8.6, duration: "1h 50m", description: "Cyberpunk detective story", video: "video/TOOFAN%20_%20Official%20Tease.mp4" },
        { id: 14, title: "Island Mystery", date: "2024", image: "photos/Toofan.jpg", genre: "mystery", category: "new", rating: 7.7, duration: "2h 15m", description: "Lost in the tropics", video: "video/TOOFAN%20_%20Official%20Tease.mp4" },
        { id: 15, title: "Speed Demon", date: "2024", image: "photos/Toofan.jpg", genre: "action", category: "popular", rating: 8.2, duration: "1h 45m", description: "Underground street racing", video: "video/TOOFAN%20_%20Official%20Tease.mp4" },
        { id: 16, title: "Winter Solstice", date: "2024", image: "photos/Toofan.jpg", genre: "drama", category: "new", rating: 8.0, duration: "2h 20m", description: "A cold winter tale", video: "video/TOOFAN%20_%20Official%20Tease.mp4" },
        { id: 17, title: "Ghost Protocol", date: "2024", image: "photos/Toofan.jpg", genre: "thriller", category: "new", rating: 8.8, duration: "2h 5m", description: "Stealth ops thriller", video: "video/TOOFAN%20_%20Official%20Tease.mp4" },
        { id: 18, title: "Summer Vibes", date: "2023", image: "photos/Toofan.jpg", genre: "comedy", category: "popular", rating: 7.4, duration: "1h 40m", description: "Best summer ever", video: "video/TOOFAN%20_%20Official%20Tease.mp4" },
        { id: 19, title: "Ancient Legacy", date: "2024", image: "photos/Toofan.jpg", genre: "fantasy", category: "new", rating: 8.5, duration: "2h 40m", description: "Return of the gods", video: "video/TOOFAN%20_%20Official%20Tease.mp4" },
        { id: 20, title: "Final Frontier", date: "2024", image: "photos/Toofan.jpg", genre: "sci-fi", category: "popular", rating: 9.0, duration: "2h 55m", description: "Beyond the galaxy", video: "video/TOOFAN%20_%20Official%20Tease.mp4" },
        { id: 21, title: "Rising Star", date: "2024", image: "photos/Toofan.jpg", genre: "drama", category: "new", rating: 8.1, duration: "2h 10m", description: "A dreamer's journey", video: "video/TOOFAN%20_%20Official%20Tease.mp4" },
        { id: 22, title: "Desert Storm", date: "2024", image: "photos/Toofan.jpg", genre: "action", category: "new", rating: 7.8, duration: "1h 55m", description: "War in the dunes", video: "video/TOOFAN%20_%20Official%20Tease.mp4" },
        { id: 23, title: "Silicon Dreams", date: "2024", image: "photos/Toofan.jpg", genre: "sci-fi", category: "popular", rating: 8.4, duration: "2h 0m", description: "AI revolution", video: "video/TOOFAN%20_%20Official%20Tease.mp4" },
        { id: 24, title: "Lost Temple", date: "2024", image: "photos/Toofan.jpg", genre: "adventure", category: "new", rating: 7.9, duration: "2h 15m", description: "Searching for gold", video: "video/TOOFAN%20_%20Official%20Tease.mp4" },
        { id: 25, title: "Urban Jungle", date: "2024", image: "photos/Toofan.jpg", genre: "action", category: "new", rating: 8.3, duration: "2h 5m", description: "Survival in the city", video: "video/TOOFAN%20_%20Official%20Tease.mp4" },
        // Pagination test items
        { id: 26, title: "The Beginning", date: "2024", image: "photos/Toofan.jpg", genre: "drama", category: "new", rating: 8.0, duration: "1h 50m", description: "Where it all started", video: "video/TOOFAN%20_%20Official%20Tease.mp4" },
        { id: 27, title: "Double Cross", date: "2024", image: "photos/Toofan.jpg", genre: "thriller", category: "popular", rating: 8.2, duration: "2h 10m", description: "Betrayal in the ranks", video: "video/TOOFAN%20_%20Official%20Tease.mp4" },
        { id: 28, title: "Happy Endings", date: "2023", image: "photos/Toofan.jpg", genre: "romance", category: "popular", rating: 7.6, duration: "1h 45m", description: "Love always wins", video: "video/TOOFAN%20_%20Official%20Tease.mp4" }
    ];

    const trendingMovies = [
        { id: 8, title: "Space Odyssey", image: "photos/Toofan.jpg", rank: 1 },
        { id: 5, title: "Dark Secrets", image: "photos/Toofan.jpg", rank: 2 },
        { id: 7, title: "Family Bonds", image: "photos/Toofan.jpg", rank: 3 },
        { id: 1, title: "Toofan", image: "photos/Toofan.jpg", rank: 4 },
        { id: 3, title: "Eternal Love", image: "photos/Toofan.jpg", rank: 5 }
    ];



    const moviesGrid = document.getElementById('movies-grid');
    const prevButton = document.getElementById('prev-button');
    const nextButton = document.getElementById('next-button');
    const searchInput = document.getElementById('search-input');
    
    if (!moviesGrid) {
        console.error('Movies grid not found');
        return;
    }

    const moviesPerPage = 25;
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

    const continueGrid = document.getElementById('continue-grid');
    const continueSection = document.getElementById('continue-section');
    const seeAllBtn = document.getElementById('see-all-toggle');

    async function renderContinueWatching() {
        const { data: { session } } = await supabaseClient.auth.getSession();
        let items = [];

        if (session) {
            // Fetch from Supabase
            const { data, error } = await supabaseClient
                .from('user_progress')
                .select('*')
                .eq('user_id', session.user.id)
                .order('updated_at', { ascending: false })
                .limit(10);

            if (!error && data) {
                items = data.map(d => ({
                    id: d.movie_id,
                    title: d.title,
                    image: d.image_url,
                    progress: d.progress_percent,
                    currentTime: d.playback_time,
                    duration: d.duration,
                    timestamp: new Date(d.updated_at).getTime()
                }));
            }
        } else {
            // Guest mode: Fetch from localStorage
            const progressData = JSON.parse(localStorage.getItem('streamweb_progress') || '{}');
            items = Object.values(progressData)
                .sort((a, b) => b.timestamp - a.timestamp)
                .slice(0, 10);
        }

        if (items.length === 0) {
            if (continueSection) continueSection.style.display = 'none';
            return;
        } else if (continueSection) {
            continueSection.style.display = 'block';
        }

        // Show/hide Show All button based on item count
        if (items.length > 3) {
            if (seeAllBtn) seeAllBtn.style.display = 'flex';
        } else {
            if (seeAllBtn) seeAllBtn.style.display = 'none';
        }

        continueGrid.innerHTML = '';
        items.forEach((item, index) => {
            const continueItem = document.createElement('div');
            continueItem.classList.add('continue-item');
            
            const timeLeftVal = (item.duration || 0) - (item.currentTime || 0);
            const minutesLeft = Math.floor(timeLeftVal / 60);
            const timeLeftText = minutesLeft > 60 ? 
                `${Math.floor(minutesLeft/60)}h ${minutesLeft%60}m left` : 
                `${minutesLeft}m left`;

            continueItem.innerHTML = `
                <div class="continue-thumbnail">
                    <img src="${item.image}" alt="${item.title}">
                    <div class="progress-overlay">
                        <div class="progress-bar" style="width: ${item.progress || 0}%"></div>
                    </div>
                </div>
                <div class="continue-info">
                    <h4>${item.title}</h4>
                    <div class="continue-meta">
                        <span class="progress-text">${Math.round(item.progress || 0)}% completed</span>
                        <span>${item.progress > 98 ? 'Finished' : timeLeftText}</span>
                    </div>
                    <div class="resume-btn" style="margin-top: 8px;">
                        <i data-lucide="play" style="width:14px;height:14px;fill:currentColor;"></i>
                        Resume
                    </div>
                </div>
                <button class="remove-item-btn" title="Remove from list">
                    <i data-lucide="x"></i>
                </button>
            `;
            
            continueItem.addEventListener('click', (e) => {
                // Don't trigger redirect if clicking the remove button
                if (e.target.closest('.remove-item-btn')) return;
                window.location.href = `movie.html?movie=${item.id}`;
            });

            const removeBtn = continueItem.querySelector('.remove-item-btn');
            if (removeBtn) {
                removeBtn.addEventListener('click', (e) => {
                    e.stopPropagation();
                    removeProgress(item.id);
                });
            }
            
            continueGrid.appendChild(continueItem);
        });

        if (window.lucide) lucide.createIcons();
    }

    async function removeProgress(movieId) {
        const { data: { session } } = await supabaseClient.auth.getSession();

        if (session) {
            // Delete from Supabase
            const { error } = await supabaseClient
                .from('user_progress')
                .delete()
                .eq('user_id', session.user.id)
                .eq('movie_id', movieId);
            
            if (!error) renderContinueWatching();
        } else {
            // Guest mode: Delete from localStorage
            const progressData = JSON.parse(localStorage.getItem('streamweb_progress') || '{}');
            if (progressData[movieId]) {
                delete progressData[movieId];
                localStorage.setItem('streamweb_progress', JSON.stringify(progressData));
                renderContinueWatching();
            }
        }
    }

    // New Toggle Logic
    const seeAllToggle = document.getElementById('see-all-toggle');
    if (seeAllToggle && continueGrid) {
        seeAllToggle.addEventListener('click', () => {
            const isGridView = continueGrid.classList.toggle('grid-view');
            
            const btnText = seeAllToggle.querySelector('span');
            
            if (isGridView) {
                btnText.textContent = 'Show Less';
                seeAllToggle.innerHTML = `<span>Show Less</span><i data-lucide="chevron-left"></i>`;
            } else {
                btnText.textContent = 'Show All';
                seeAllToggle.innerHTML = `<span>Show All</span><i data-lucide="chevron-right"></i>`;
            }
            
            if (window.lucide) lucide.createIcons();
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

    // Search works via input event — no separate button needed
    if (searchInput) {
        searchInput.addEventListener('input', performSearch);
        searchInput.addEventListener('keydown', (event) => {
            if (event.key === 'Enter') {
                performSearch();
                const moviesSection = document.getElementById('movies');
                if (moviesSection) moviesSection.scrollIntoView({ behavior: 'smooth' });
            }
        });
        
        document.addEventListener('click', (event) => {
            if (!event.target.closest('.search-container')) {
                const searchResults = document.getElementById('search-results');
                if (searchResults) searchResults.style.display = 'none';
            }
        });
    }

    // Sidebar & Mobile Menu Logic
    const menuToggle = document.getElementById('menu-toggle');
    const sidebar = document.getElementById('sidebar');
    const header = document.querySelector('header');
    const navLinks = document.querySelectorAll('.sidebar-links a, .bottom-nav a');

    if (menuToggle && sidebar) {
        menuToggle.addEventListener('click', () => {
            sidebar.classList.toggle('active');
            // Prevent scrolling on mobile when sidebar is open
            if (window.innerWidth <= 950) {
                document.body.style.overflow = sidebar.classList.contains('active') ? 'hidden' : 'auto';
            }
        });

        // Close sidebar when clicking outside on mobile
        document.addEventListener('click', (e) => {
            if (window.innerWidth <= 950 && 
                sidebar.classList.contains('active') && 
                !sidebar.contains(e.target) && 
                !menuToggle.contains(e.target)) {
                sidebar.classList.remove('active');
                document.body.style.overflow = 'auto';
            }
        });
    }

    // Sync active states across Sidebar and Bottom Nav
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            const href = link.getAttribute('href');
            navLinks.forEach(l => {
                if (l.getAttribute('href') === href) {
                    l.classList.add('active');
                } else {
                    l.classList.remove('active');
                }
            });
            
            if (window.innerWidth <= 900) {
                sidebar.classList.remove('active');
                document.body.style.overflow = 'auto';
            }
        });
    });

    // Header scroll effect
    window.addEventListener('scroll', () => {
        if (window.scrollY > 20) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // Initialize
    renderMovies(currentPage);
    updateButtons();
    renderTrending();
    renderContinueWatching();

    setupMovieFilters();
});
