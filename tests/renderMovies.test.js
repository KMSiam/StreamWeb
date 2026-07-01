import { describe, it, expect, beforeEach } from 'vitest';
import { renderMovies } from '../script.js';

describe('renderMovies', () => {
    let moviesGrid;
    const mockMovies = [
        { id: 1, title: 'Movie 1', image: 'img1.jpg', rating: 8.0, date: '2024', duration: '2h', genre: 'action', description: 'Desc 1' },
        { id: 2, title: 'Movie 2', image: 'img2.jpg', rating: 7.5, date: '2023', duration: '1h 30m', genre: 'comedy', description: 'Desc 2' },
        { id: 3, title: 'Movie 3', image: 'img3.jpg', rating: 9.0, date: '2024', duration: '2h 15m', genre: 'drama', description: 'Desc 3' }
    ];

    beforeEach(() => {
        document.body.innerHTML = '<div id="movies-grid"></div>';
        moviesGrid = document.getElementById('movies-grid');
    });

    it('should render the correct number of movies based on page and moviesPerPage', () => {
        renderMovies(moviesGrid, mockMovies, 1, 2);
        const movieItems = moviesGrid.querySelectorAll('.movie-item');
        expect(movieItems.length).toBe(2);
        expect(movieItems[0].querySelector('.movie-title').textContent).toBe('Movie 1');
        expect(movieItems[1].querySelector('.movie-title').textContent).toBe('Movie 2');
    });

    it('should render the correct movies for the second page', () => {
        renderMovies(moviesGrid, mockMovies, 2, 2);
        const movieItems = moviesGrid.querySelectorAll('.movie-item');
        expect(movieItems.length).toBe(1);
        expect(movieItems[0].querySelector('.movie-title').textContent).toBe('Movie 3');
    });

    it('should correctly populate movie details', () => {
        renderMovies(moviesGrid, mockMovies, 1, 1);
        const movieItem = moviesGrid.querySelector('.movie-item');

        expect(movieItem.href).toContain('movie.html?movie=1');
        expect(movieItem.querySelector('img').src).toContain('img1.jpg');
        expect(movieItem.querySelector('.movie-rating').textContent).toContain('8');
        expect(movieItem.querySelector('.movie-year').textContent).toBe('2024');
        expect(movieItem.querySelector('.movie-duration').textContent).toBe('2h');
        expect(movieItem.querySelector('.genre-tag').textContent).toBe('ACTION');
        expect(movieItem.querySelector('.movie-description').textContent).toBe('Desc 1');
    });

    it('should clear the grid before rendering', () => {
        moviesGrid.innerHTML = '<div class="old-item">Old</div>';
        renderMovies(moviesGrid, mockMovies, 1, 1);
        expect(moviesGrid.querySelector('.old-item')).toBeNull();
        expect(moviesGrid.querySelectorAll('.movie-item').length).toBe(1);
    });

    it('should do nothing if moviesGrid is null', () => {
        expect(() => renderMovies(null, mockMovies, 1, 1)).not.toThrow();
    });
});
