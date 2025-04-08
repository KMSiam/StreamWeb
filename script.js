document.addEventListener('DOMContentLoaded', () => {
    const movies = [




        {
            id: 1, // Unique ID for the movie
            title: "Toofan",
            date: "June 17, 2024",
            image: "photos/Toofan.jpg"
        },
        {
            id: 2, 
            title: "Toofan",
            date: "June 17, 2024",
            image: "photos/Toofan.jpg"
        },
        {
            id: 3, 
            title: "Toofan",
            date: "June 17, 2024",
            image: "photos/Toofan.jpg"
        },
        {
            id: 4, 
            title: "Toofan",
            date: "June 17, 2024",
            image: "photos/Toofan.jpg"
        },
        {
            id: 5, 
            title: "Toofan",
            date: "June 17, 2024",
            image: "photos/Toofan.jpg"
        },
        {
            id: 6, 
            title: "Toofan",
            date: "June 17, 2024",
            image: "photos/Toofan.jpg"
        },








    ];

    const moviesGrid = document.getElementById('movies-grid');
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

            const movieLink = document.createElement('a');
            movieLink.href = `movie.html?movie=${movie.id}`;
            movieLink.classList.add('movie-link');

            const movieImage = document.createElement('img');
            movieImage.src = movie.image;
            movieImage.alt = movie.title;

            const movieTitle = document.createElement('p');
            movieTitle.textContent = movie.title;

            const movieDate = document.createElement('span');
            movieDate.textContent = movie.date;

            movieLink.appendChild(movieImage);
            movieLink.appendChild(movieTitle);
            movieLink.appendChild(movieDate);
            movieItem.appendChild(movieLink);

            moviesGrid.appendChild(movieItem);
        });
    }

    function updateButtons() {
        document.getElementById('prev-button').disabled = currentPage === 1;
        document.getElementById('next-button').disabled = currentPage * moviesPerPage >= movies.length;
    }

    document.getElementById('prev-button').addEventListener('click', () => {
        if (currentPage > 1) {
            currentPage--;
            renderMovies(currentPage);
            updateButtons();
        }
    });

    document.getElementById('next-button').addEventListener('click', () => {
        if (currentPage * moviesPerPage < movies.length) {
            currentPage++;
            renderMovies(currentPage);
            updateButtons();
        }
    });

    // Initial render
    renderMovies(currentPage);
    updateButtons();

    // Search functionality
    const searchButton = document.getElementById('search-button');
    const searchInput = document.getElementById('search-input');

    const performSearch = () => {
        const query = searchInput.value.toLowerCase();
        const movieItems = document.querySelectorAll('.movie-item');

        movieItems.forEach(item => {
            const title = item.querySelector('p').textContent.toLowerCase();
            if (title.includes(query)) {
                item.style.display = 'block';
            } else {
                item.style.display = 'none';
            }
        });
    };

    searchButton.addEventListener('click', performSearch);

    searchInput.addEventListener('keydown', (event) => {
        if (event.key === 'Enter') {
            performSearch();
        }
    });
});
