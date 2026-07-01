const fs = require('fs');
const path = require('path');

// Mock Supabase Client
global.supabaseClient = {
    auth: {
        onAuthStateChange: jest.fn(),
        signUp: jest.fn(),
        signInWithPassword: jest.fn(),
        resetPasswordForEmail: jest.fn(),
        signOut: jest.fn(),
        updateUser: jest.fn(),
    }
};

// Mock other dependencies
global.lucide = {
    createIcons: jest.fn()
};

// Mock alert, prompt
global.alert = jest.fn();
global.prompt = jest.fn();
const originalConsoleError = console.error;
console.error = jest.fn();

// Mock location
delete window.location;
window.location = {
    origin: 'http://localhost',
    href: '',
    assign: jest.fn()
};

describe('auth.js', () => {
    beforeAll(() => {
        // Load auth.js code
        const authJs = fs.readFileSync(path.resolve(__dirname, './auth.js'), 'utf8');
        // We need to wrap it to avoid redeclaring things if it were to run multiple times,
        // though Jest runs each file in a fresh environment.
        eval(authJs);
    });

    beforeEach(() => {
        jest.clearAllMocks();

        // Setup DOM
        document.body.innerHTML = `
            <a href="#" id="forgot-password-link">Forgot Password?</a>
            <div class="sidebar-auth"></div>
            <div class="sidebar-links"></div>
        `;

        // Trigger DOMContentLoaded to attach listeners
        document.dispatchEvent(new Event('DOMContentLoaded'));
    });

    test('Reset Password Request - handles error correctly', async () => {
        const forgotPasswordLink = document.getElementById('forgot-password-link');
        const mockEmail = 'user@example.com';
        const mockError = { message: 'User not found' };

        // Setup mocks
        global.prompt.mockReturnValue(mockEmail);
        global.supabaseClient.auth.resetPasswordForEmail.mockResolvedValue({ error: mockError });

        // Simulate click
        forgotPasswordLink.click();

        // Wait for async execution
        await new Promise(resolve => setTimeout(resolve, 10));

        // Assertions
        expect(global.prompt).toHaveBeenCalled();
        expect(global.supabaseClient.auth.resetPasswordForEmail).toHaveBeenCalledWith(
            mockEmail,
            expect.objectContaining({
                redirectTo: expect.stringContaining('/reset-password.html')
            })
        );
        expect(global.alert).toHaveBeenCalledWith('Error: ' + mockError.message);
        expect(console.error).toHaveBeenCalledWith('Reset Request Error:', mockError);
    });
});
