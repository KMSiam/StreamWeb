document.addEventListener('DOMContentLoaded', () => {
    const movies = [
        { id: 1, title: "Toofan", date: "2024", image: "photos/Toofan.jpg", genre: "action", category: "popular", rating: 8.5, duration: "2h 35m", description: "A high-octane action drama following the rise of a boxing champion.", video: "video/TOOFAN%20_%20Official%20Tease.mp4" },
        { id: 2, title: "Cyber City", date: "2023", image: "photos/Toofan.jpg", genre: "sci-fi", category: "new", rating: 7.9, duration: "2h 15m", description: "In a neon-lit future, a hacker uncovers a corporate conspiracy.", video: "video/TOOFAN%20_%20Official%20Tease.mp4" },
        { id: 3, title: "Eternal Love", date: "2024", image: "photos/Toofan.jpg", genre: "romance", category: "popular", rating: 9.1, duration: "1h 55m", description: "A timeless tale of love that spans generations.", video: "video/TOOFAN%20_%20Official%20Tease.mp4" },
        { id: 4, title: "The Last Hope", date: "2023", image: "photos/Toofan.jpg", genre: "drama", category: "new", rating: 8.2, duration: "2h 10m", description: "Humanity's final stand against an alien threat.", video: "video/TOOFAN%20_%20Official%20Tease.mp4" },
        { id: 5, title: "Dark Secrets", date: "2024", image: "photos/Toofan.jpg", genre: "thriller", category: "popular", rating: 8.7, duration: "2h 05m", description: "A detective investigates a series of mysterious disappearances.", video: "video/TOOFAN%20_%20Official%20Tease.mp4" },
        { id: 6, title: "Midnight Sun", date: "2023", image: "photos/Toofan.jpg", genre: "action", category: "new", rating: 7.5, duration: "2h 20m", description: "An elite squad is tasked with a dangerous mission in the Arctic.", video: "video/TOOFAN%20_%20Official%20Tease.mp4" },
        { id: 7, title: "Family Bonds", date: "2024", image: "photos/Toofan.jpg", genre: "drama", category: "popular", rating: 8.9, duration: "1h 50m", description: "The emotional journey of a family navigating life's challenges.", video: "video/TOOFAN%20_%20Official%20Tease.mp4" },
        { id: 8, title: "Space Odyssey", date: "2023", image: "photos/Toofan.jpg", genre: "sci-fi", category: "new", rating: 8.4, duration: "2h 45m", description: "An epic adventure through the vastness of the cosmos.", video: "video/TOOFAN%20_%20Official%20Tease.mp4" },
        { id: 9, title: "The Silent Witness", date: "2024", image: "photos/Toofan.jpg", genre: "thriller", category: "popular", rating: 8.1, duration: "2h 00m", description: "A witness to a crime must flee for their life.", video: "video/TOOFAN%20_%20Official%20Tease.mp4" },
        { id: 10, title: "Urban Legends", date: "2023", image: "photos/Toofan.jpg", genre: "action", category: "new", rating: 7.8, duration: "2h 25m", description: "Street fighters compete in an underground tournament.", video: "video/TOOFAN%20_%20Official%20Tease.mp4" },
        { id: 11, title: "Frozen In Time", date: "2024", image: "photos/Toofan.jpg", genre: "sci-fi", category: "popular", rating: 8.3, duration: "2h 10m", description: "A scientist discovers a way to pause time.", video: "video/TOOFAN%20_%20Official%20Tease.mp4" },
        { id: 12, title: "Ghost Protocol", date: "2023", image: "photos/Toofan.jpg", genre: "thriller", category: "new", rating: 7.6, duration: "1h 55m", description: "A spy is disavowed and must clear their name.", video: "video/TOOFAN%20_%20Official%20Tease.mp4" },
        { id: 13, title: "Rising Tide", date: "2024", image: "photos/Toofan.jpg", genre: "drama", category: "popular", rating: 8.6, duration: "2h 20m", description: "A coastal town faces a natural disaster.", video: "video/TOOFAN%20_%20Official%20Tease.mp4" },
        { id: 14, title: "Lost In Translation", date: "2023", image: "photos/Toofan.jpg", genre: "romance", category: "new", rating: 7.7, duration: "1h 45m", description: "Two strangers find connection in a foreign city.", video: "video/TOOFAN%20_%20Official%20Tease.mp4" },
        { id: 15, title: "Steel Rain", date: "2024", image: "photos/Toofan.jpg", genre: "action", category: "popular", rating: 8.4, duration: "2h 30m", description: "A mercenary is hired for one last job.", video: "video/TOOFAN%20_%20Official%20Tease.mp4" },
        { id: 16, title: "Island of Hope", date: "2023", image: "photos/Toofan.jpg", genre: "drama", category: "new", rating: 8.0, duration: "2h 15m", description: "Survivors of a shipwreck must work together.", video: "video/TOOFAN%20_%20Official%20Tease.mp4" },
        { id: 17, title: "Digital Souls", date: "2024", image: "photos/Toofan.jpg", genre: "sci-fi", category: "popular", rating: 8.8, duration: "2h 05m", description: "AI beings fight for their right to exist.", video: "video/TOOFAN%20_%20Official%20Tease.mp4" },
        { id: 18, title: "The Guardian", date: "2023", image: "photos/Toofan.jpg", genre: "action", category: "new", rating: 7.9, duration: "2h 10m", description: "A protector must defend their village from raiders.", video: "video/TOOFAN%20_%20Official%20Tease.mp4" },
        { id: 19, title: "Hidden Truth", date: "2024", image: "photos/Toofan.jpg", genre: "thriller", category: "popular", rating: 8.5, duration: "2h 00m", description: "A journalist uncovers a government secret.", video: "video/TOOFAN%20_%20Official%20Tease.mp4" },
        { id: 20, title: "Autumn Leaves", date: "2023", image: "photos/Toofan.jpg", genre: "romance", category: "new", rating: 7.4, duration: "1h 50m", description: "A bittersweet story of first love.", video: "video/TOOFAN%20_%20Official%20Tease.mp4" },
        { id: 21, title: "Shadow Play", date: "2024", image: "photos/Toofan.jpg", genre: "thriller", category: "popular", rating: 8.2, duration: "2h 05m", description: "A mental game of cat and mouse.", video: "video/TOOFAN%20_%20Official%20Tease.mp4" },
        { id: 22, title: "The Architect", date: "2023", image: "photos/Toofan.jpg", genre: "sci-fi", category: "new", rating: 8.1, duration: "2h 15m", description: "Building the world of tomorrow.", video: "video/TOOFAN%20_%20Official%20Tease.mp4" },
        { id: 23, title: "Desert Mirage", date: "2024", image: "photos/Toofan.jpg", genre: "drama", category: "popular", rating: 8.4, duration: "2h 20m", description: "Finding water in the wilderness.", video: "video/TOOFAN%20_%20Official%20Tease.mp4" },
        { id: 24, title: "Neon Nights", date: "2023", image: "photos/Toofan.jpg", genre: "action", category: "new", rating: 7.6, duration: "2h 00m", description: "Racing through the city streets.", video: "video/TOOFAN%20_%20Official%20Tease.mp4" },
        { id: 25, title: "Soul Mates", date: "2024", image: "photos/Toofan.jpg", genre: "romance", category: "popular", rating: 8.9, duration: "1h 55m", description: "Two people meant for each other.", video: "video/TOOFAN%20_%20Official%20Tease.mp4" },
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
    const prevButton = document.getElementById('prev-page');
    const nextButton = document.getElementById('next-page');
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
            const movieItem = document.createElement('a');
            movieItem.href = `movie.html?movie=${movie.id}`;
            movieItem.classList.add('movie-item');

            // Poster Section
            const posterDiv = document.createElement('div');
            posterDiv.classList.add('movie-poster');

            const img = document.createElement('img');
            img.src = movie.image;
            img.alt = movie.title;

            const qualityBadge = document.createElement('div');
            qualityBadge.classList.add('quality-badge');
            qualityBadge.textContent = 'HD';

            const overlay = document.createElement('div');
            overlay.classList.add('movie-overlay');

            const playBtn = document.createElement('div');
            playBtn.classList.add('play-button');
            playBtn.textContent = '▶';

            const rating = document.createElement('div');
            rating.classList.add('movie-rating');
            rating.textContent = `⭐ ${movie.rating}`;

            overlay.append(playBtn, rating);
            posterDiv.append(img, qualityBadge, overlay);

            // Info Section
            const infoDiv = document.createElement('div');
            infoDiv.classList.add('movie-info');

            const title = document.createElement('h3');
            title.classList.add('movie-title');
            title.textContent = movie.title;

            const meta = document.createElement('div');
            meta.classList.add('movie-meta');

            const year = document.createElement('span');
            year.classList.add('movie-year');
            year.textContent = movie.date;

            const duration = document.createElement('span');
            duration.classList.add('movie-duration');
            duration.textContent = movie.duration;

            const genre = document.createElement('span');
            genre.classList.add('genre-tag');
            genre.textContent = movie.genre.toUpperCase();

            meta.append(year, duration, genre);

            const description = document.createElement('p');
            description.classList.add('movie-description');
            description.textContent = movie.description;

            infoDiv.append(title, meta, description);

            movieItem.append(posterDiv, infoDiv);
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
                const moviesSection = document.getElementById('movies');
                if (moviesSection) moviesSection.scrollIntoView({ behavior: 'smooth' });
            }
        });
    }

    if (nextButton) {
        nextButton.addEventListener('click', () => {
            if (currentPage * moviesPerPage < movies.length) {
                currentPage++;
                renderMovies(currentPage);
                updateButtons();
                const moviesSection = document.getElementById('movies');
                if (moviesSection) moviesSection.scrollIntoView({ behavior: 'smooth' });
            }
        });
    }

    function renderTrending() {
        const trendingSlider = document.getElementById('trending-slider');
        if (!trendingSlider) return;

        trendingSlider.innerHTML = '';
        trendingMovies.forEach(movie => {
            const trendingItem = document.createElement('a');
            trendingItem.href = `movie.html?movie=${movie.id}`;
            trendingItem.classList.add('trending-item');

            const rank = document.createElement('div');
            rank.classList.add('trending-rank');
            rank.textContent = `#${movie.rank}`;

            const poster = document.createElement('div');
            poster.classList.add('trending-poster');

            const img = document.createElement('img');
            img.src = movie.image;
            img.alt = movie.title;

            const overlay = document.createElement('div');
            overlay.classList.add('trending-overlay');

            const playBtn = document.createElement('div');
            playBtn.classList.add('play-btn-small');
            playBtn.textContent = '▶';

            overlay.appendChild(playBtn);
            poster.append(img, overlay);

            const info = document.createElement('div');
            info.classList.add('trending-info');

            const title = document.createElement('h4');
            title.textContent = movie.title;

            const badge = document.createElement('div');
            badge.classList.add('trending-badge');
            badge.textContent = '🔥 Trending';

            info.append(title, badge);

            trendingItem.append(rank, poster, info);
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
            continueItem.setAttribute('role', 'link');
            continueItem.setAttribute('tabindex', '0');
            
            const timeLeftVal = (item.duration || 0) - (item.currentTime || 0);
            const minutesLeft = Math.floor(timeLeftVal / 60);
            const timeLeftText = minutesLeft > 60 ? 
                `${Math.floor(minutesLeft/60)}h ${minutesLeft%60}m left` : 
                `${minutesLeft}m left`;

            // Thumbnail section
            const thumbnailDiv = document.createElement('div');
            thumbnailDiv.classList.add('continue-thumbnail');

            const img = document.createElement('img');
            img.src = item.image;
            img.alt = item.title;

            const progressOverlay = document.createElement('div');
            progressOverlay.classList.add('progress-overlay');

            const progressBar = document.createElement('div');
            progressBar.classList.add('progress-bar');
            progressBar.style.width = `${item.progress || 0}%`;

            progressOverlay.appendChild(progressBar);
            thumbnailDiv.append(img, progressOverlay);

            // Info section
            const infoDiv = document.createElement('div');
            infoDiv.classList.add('continue-info');

            const title = document.createElement('h4');
            title.textContent = item.title;

            const metaDiv = document.createElement('div');
            metaDiv.classList.add('continue-meta');

            const progressText = document.createElement('span');
            progressText.classList.add('progress-text');
            progressText.textContent = `${Math.round(item.progress || 0)}% completed`;

            const timeLeftSpan = document.createElement('span');
            timeLeftSpan.textContent = item.progress > 98 ? 'Finished' : timeLeftText;

            metaDiv.append(progressText, timeLeftSpan);

            const resumeBtn = document.createElement('div');
            resumeBtn.classList.add('resume-btn');
            resumeBtn.style.marginTop = '8px';

            const playIcon = document.createElement('i');
            playIcon.setAttribute('data-lucide', 'play');
            playIcon.style.width = '14px';
            playIcon.style.height = '14px';
            playIcon.style.fill = 'currentColor';

            resumeBtn.append(playIcon, document.createTextNode(' Resume'));

            infoDiv.append(title, metaDiv, resumeBtn);

            // Remove button
            const removeBtn = document.createElement('button');
            removeBtn.classList.add('remove-item-btn');
            removeBtn.title = 'Remove from list';
            removeBtn.setAttribute('aria-label', 'Remove from list');

            const xIcon = document.createElement('i');
            xIcon.setAttribute('data-lucide', 'x');
            removeBtn.appendChild(xIcon);

            continueItem.append(thumbnailDiv, infoDiv, removeBtn);
            
            const navigateToMovie = (e) => {
                // Don't trigger redirect if clicking the remove button
                if (e.target.closest('.remove-item-btn')) return;
                window.location.href = `movie.html?movie=${item.id}`;
            };

            continueItem.addEventListener('click', navigateToMovie);
            continueItem.addEventListener('keydown', (e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    navigateToMovie(e);
                }
            });

            removeBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                removeProgress(item.id);
            });
            
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
    if (seeAllToggle) {
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
            const movieItem = document.createElement('a');
            movieItem.href = `movie.html?movie=${movie.id}`;
            movieItem.classList.add('movie-item');

            // Poster Section
            const posterDiv = document.createElement('div');
            posterDiv.classList.add('movie-poster');

            const img = document.createElement('img');
            img.src = movie.image;
            img.alt = movie.title;

            const qualityBadge = document.createElement('div');
            qualityBadge.classList.add('quality-badge');
            qualityBadge.textContent = 'HD';

            const overlay = document.createElement('div');
            overlay.classList.add('movie-overlay');

            const playBtn = document.createElement('div');
            playBtn.classList.add('play-button');
            playBtn.textContent = '▶';

            const rating = document.createElement('div');
            rating.classList.add('movie-rating');
            rating.textContent = `⭐ ${movie.rating}`;

            overlay.append(playBtn, rating);
            posterDiv.append(img, qualityBadge, overlay);

            // Info Section
            const infoDiv = document.createElement('div');
            infoDiv.classList.add('movie-info');

            const title = document.createElement('h3');
            title.classList.add('movie-title');
            title.textContent = movie.title;

            const meta = document.createElement('div');
            meta.classList.add('movie-meta');

            const year = document.createElement('span');
            year.classList.add('movie-year');
            year.textContent = movie.date;

            const duration = document.createElement('span');
            duration.classList.add('movie-duration');
            duration.textContent = movie.duration;

            const genre = document.createElement('span');
            genre.classList.add('genre-tag');
            genre.textContent = movie.genre.toUpperCase();

            meta.append(year, duration, genre);

            const description = document.createElement('p');
            description.classList.add('movie-description');
            description.textContent = movie.description;

            infoDiv.append(title, meta, description);

            movieItem.append(posterDiv, infoDiv);
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
            searchResults.innerHTML = '';
            filteredMovies.slice(0, 5).forEach(movie => {
                const resultItem = document.createElement('a');
                resultItem.href = `movie.html?movie=${movie.id}`;
                resultItem.classList.add('search-result-item');

                const img = document.createElement('img');
                img.src = movie.image;
                img.alt = movie.title;

                const info = document.createElement('div');
                info.classList.add('result-info');

                const title = document.createElement('h4');
                title.textContent = movie.title;

                const meta = document.createElement('span');
                meta.textContent = `${movie.genre.toUpperCase()} • ${movie.rating} ⭐`;

                info.append(title, meta);
                resultItem.append(img, info);
                searchResults.appendChild(resultItem);
            });
            searchResults.style.display = 'block';
        } else if (searchResults) {
            searchResults.innerHTML = '';
            const noResults = document.createElement('div');
            noResults.classList.add('no-results');
            noResults.textContent = 'No movies found';
            searchResults.appendChild(noResults);
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
