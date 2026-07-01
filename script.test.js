import { expect, test, vi } from 'vitest';

function createMockElement(tag) {
    const el = {
        tagName: tag.toUpperCase(),
        classList: {
            add: vi.fn((cls) => {
                const classes = el.className ? el.className.split(' ') : [];
                if (!classes.includes(cls)) {
                    classes.push(cls);
                    el.className = classes.join(' ');
                }
            }),
            remove: vi.fn(),
            toggle: vi.fn(),
            contains: vi.fn((cls) => el.className.split(' ').includes(cls))
        },
        _innerHTML: '',
        get innerHTML() { return this._innerHTML; },
        set innerHTML(val) {
            this._innerHTML = val;
            if (val === '') this.children = [];
        },
        appendChild: vi.fn((child) => {
            if (child.nodeType === 11) { // DocumentFragment
                while (child.children.length > 0) {
                    const c = child.children.shift();
                    el.children.push(c);
                    c.parentNode = el;
                }
            } else {
                el.children.push(child);
                child.parentNode = el;
            }
        }),
        children: [],
        className: '',
        setAttribute: vi.fn(),
        getAttribute: vi.fn(),
        addEventListener: vi.fn(),
        style: {},
        nodeType: 1
    };
    return el;
}

globalThis.document = {
    createElement: vi.fn((tag) => createMockElement(tag)),
    createDocumentFragment: vi.fn(() => ({
        nodeType: 11,
        appendChild: vi.fn(function(child) {
            this.children.push(child);
            child.parentNode = this;
        }),
        children: []
    })),
    getElementById: vi.fn(() => ({
        addEventListener: vi.fn(),
        scrollIntoView: vi.fn(),
        innerHTML: '',
        appendChild: vi.fn(),
        children: []
    })),
    addEventListener: vi.fn(),
    querySelectorAll: vi.fn(() => [])
};
globalThis.window = {
    location: { href: '' },
    addEventListener: vi.fn(),
    innerWidth: 1024,
    scrollY: 0
};
globalThis.localStorage = {
    getItem: vi.fn(),
    setItem: vi.fn()
};

// Import script AFTER setting up globals
const script = await import('./script.js');

test('createMovieItem creates a semantic link with correct attributes', () => {
    const movie = { id: 1, title: 'Test Movie', image: 'test.jpg', rating: 5.0, date: '2024', duration: '2h', genre: 'action', description: 'desc' };
    const item = script.createMovieItem(movie);

    expect(item.tagName).toBe('A');
    expect(item.href).toContain('movie.html?movie=1');
    expect(item.classList.contains('movie-item')).toBe(true);
    expect(item.innerHTML).toContain('Test Movie');
});

test('renderMovies appends correct number of movies to grid', () => {
    const grid = createMockElement('div');
    const mockMovies = Array.from({ length: 30 }, (_, i) => ({ id: i, title: `Movie ${i}`, image: 'img', rating: 5, date: '2024', duration: '1h', genre: 'action', description: 'desc' }));

    // Test page 1
    script.renderMovies(1, grid, mockMovies);
    expect(grid.children.length).toBe(25); // moviesPerPage is 25

    // Test page 2
    grid.innerHTML = ''; // This should clear children via mock setter
    script.renderMovies(2, grid, mockMovies);
    expect(grid.children.length).toBe(5); // Remaining 5 movies
});

test('renderFilteredMovies renders all provided movies', () => {
    const grid = createMockElement('div');
    const filteredList = [{ id: 1, title: 'F1', image: 'img', rating: 5, date: '2024', duration: '1h', genre: 'action', description: 'desc' }];

    script.renderFilteredMovies(filteredList, grid);
    expect(grid.children.length).toBe(1);
    expect(grid.children[0].innerHTML).toContain('F1');
});
