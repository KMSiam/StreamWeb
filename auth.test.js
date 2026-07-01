import { describe, it, expect, vi, beforeEach } from 'vitest';
import fs from 'fs';
import path from 'path';

describe('Authentication Logic', () => {
    let signupForm;
    let signinForm;
    let signupSubmitBtn;
    let signinSubmitBtn;

    beforeEach(() => {
        // Setup DOM
        document.body.innerHTML = `
            <form id="signup-form">
                <input id="username" name="username" value="testuser" />
                <input id="email" name="email" value="test@example.com" />
                <input id="password" name="password" value="password123" />
                <button type="submit">🚀 Start Free Trial</button>
            </form>
            <form id="signin-form">
                <input name="email" value="signin@example.com" />
                <input name="password" value="password123" />
                <button type="submit">🎬 Let's Stream</button>
            </form>
            <div class="sidebar-auth"></div>
            <div class="sidebar-links"></div>
        `;

        signupForm = document.getElementById('signup-form');
        signupSubmitBtn = signupForm.querySelector('button');
        signinForm = document.getElementById('signin-form');
        signinSubmitBtn = signinForm.querySelector('button');

        // Ensure form elements are accessible as properties (simulating browser behavior more closely)
        signupForm.email = signupForm.querySelector('input[name="email"]');
        signupForm.password = signupForm.querySelector('input[name="password"]');
        signupForm.username = signupForm.querySelector('input[name="username"]');

        signinForm.email = signinForm.querySelector('input[name="email"]');
        signinForm.password = signinForm.querySelector('input[name="password"]');

        // Mock Supabase
        window.supabaseClient = {
            auth: {
                onAuthStateChange: vi.fn(),
                signUp: vi.fn(),
                signInWithPassword: vi.fn(),
                resetPasswordForEmail: vi.fn(),
                updateUser: vi.fn(),
                signOut: vi.fn(),
            }
        };

        // Mock lucide
        window.lucide = {
            createIcons: vi.fn()
        };

        // Mock alert and console.error
        window.alert = vi.fn();
        vi.spyOn(console, 'error').mockImplementation(() => {});

        // Load and execute auth.js content
        const authJs = fs.readFileSync(path.resolve(__dirname, './auth.js'), 'utf8');
        eval(authJs);

        // Trigger DOMContentLoaded
        document.dispatchEvent(new Event('DOMContentLoaded'));
    });

    describe('Signup Error Handling', () => {
        it('should show an alert and log error when signup fails', async () => {
            const errorMessage = 'Signup failed';
            window.supabaseClient.auth.signUp.mockResolvedValue({
                data: null,
                error: { message: errorMessage }
            });

            // Submit the form
            signupForm.dispatchEvent(new Event('submit', { cancelable: true }));

            // Wait for the async operation to complete
            await vi.waitFor(() => {
                if (signupSubmitBtn.disabled === false && signupSubmitBtn.textContent === '🚀 Start Free Trial') return true;
                throw new Error('Button still processing');
            }, { timeout: 2000 });

            expect(window.alert).toHaveBeenCalledWith('Error: ' + errorMessage);
            expect(console.error).toHaveBeenCalledWith('Signup Error:', expect.objectContaining({ message: errorMessage }));
        });
    });

    describe('Signin Error Handling', () => {
        it('should show an alert and log error when signin fails', async () => {
            const errorMessage = 'Invalid credentials';
            window.supabaseClient.auth.signInWithPassword.mockResolvedValue({
                data: null,
                error: { message: errorMessage }
            });

            // Submit the form
            signinForm.dispatchEvent(new Event('submit', { cancelable: true }));

            // Wait for the async operation to complete
            await vi.waitFor(() => {
                if (signinSubmitBtn.disabled === false && signinSubmitBtn.textContent === "🎬 Let's Stream") return true;
                throw new Error('Button still processing');
            }, { timeout: 2000 });

            expect(window.alert).toHaveBeenCalledWith('Error: ' + errorMessage);
            expect(console.error).toHaveBeenCalledWith('Signin Error:', expect.objectContaining({ message: errorMessage }));
        });
    });
});
