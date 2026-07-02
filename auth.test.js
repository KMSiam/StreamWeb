import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { JSDOM } from 'jsdom';
import fs from 'fs';
import path from 'path';

describe('Authentication Error Handling', () => {
    let dom;
    let document;
    let window;

    beforeEach(() => {
        // Setup JSDOM
        dom = new JSDOM(`
            <!DOCTYPE html>
            <html>
            <body>
                <!-- Signin Form -->
                <form id="signin-form">
                    <input type="email" name="email">
                    <input type="password" name="password">
                    <button type="submit">🎬 Let's Stream</button>
                </form>

                <!-- Signup Form -->
                <form id="signup-form">
                    <input type="email" name="email">
                    <input type="password" name="password">
                    <input type="text" name="username">
                    <button type="submit">🚀 Start Free Trial</button>
                </form>

                <!-- Reset Password Request -->
                <a href="#" id="forgot-password-link">Forgot Password?</a>

                <!-- Reset Password Form (Update) -->
                <form id="reset-password-form">
                    <input type="password" id="new-password">
                    <button type="submit">🚀 Update Password</button>
                </form>

                <div class="sidebar-auth"></div>
                <div class="sidebar-links"></div>
            </body>
            </html>
        `, {
            runScripts: "dangerously",
            resources: "usable",
            url: "http://localhost/"
        });

        window = dom.window;
        document = window.document;

        // Mock window properties
        window.alert = vi.fn();
        window.console.error = vi.fn();
        window.prompt = vi.fn();

        // Mock Supabase Client on window
        window.supabaseClient = {
            auth: {
                onAuthStateChange: vi.fn(),
                signInWithPassword: vi.fn(),
                signUp: vi.fn(),
                signOut: vi.fn(),
                resetPasswordForEmail: vi.fn(),
                updateUser: vi.fn()
            }
        };

        // Make window and other globals available for the script
        global.window = window;
        global.document = document;
        global.supabaseClient = window.supabaseClient;
        global.alert = window.alert;
        global.console = window.console;
        global.Event = window.Event;
        global.prompt = window.prompt;
        global.location = window.location;

        // Load auth.js logic
        const authJs = fs.readFileSync(path.resolve(__dirname, 'auth.js'), 'utf8');
        const script = document.createElement('script');
        script.textContent = authJs;
        document.body.appendChild(script);

        // Manually trigger DOMContentLoaded
        const event = new window.Event('DOMContentLoaded');
        document.dispatchEvent(event);
    });

    afterEach(() => {
        vi.clearAllMocks();
        delete global.window;
        delete global.document;
        delete global.supabaseClient;
        delete global.alert;
        delete global.Event;
        delete global.prompt;
        delete global.location;
    });

    it('should show an alert and re-enable the submit button when signin fails', async () => {
        const signinForm = document.getElementById('signin-form');
        const submitBtn = signinForm.querySelector('button');
        const errorMessage = 'Invalid login credentials';

        window.supabaseClient.auth.signInWithPassword.mockRejectedValue(new Error(errorMessage));

        Object.defineProperty(signinForm, 'email', { value: { value: 'test@example.com' }, configurable: true });
        Object.defineProperty(signinForm, 'password', { value: { value: 'password123' }, configurable: true });

        signinForm.dispatchEvent(new window.Event('submit', { cancelable: true, bubbles: true }));

        await vi.waitFor(() => expect(window.alert).toHaveBeenCalledWith('Error: ' + errorMessage));
        expect(window.console.error).toHaveBeenCalledWith('Signin Error:', expect.any(Error));
        expect(submitBtn.disabled).toBe(false);
        expect(submitBtn.textContent).toBe("🎬 Let's Stream");
    });

    it('should show an alert and re-enable the submit button when signup fails', async () => {
        const signupForm = document.getElementById('signup-form');
        const submitBtn = signupForm.querySelector('button');
        const errorMessage = 'User already exists';

        window.supabaseClient.auth.signUp.mockRejectedValue(new Error(errorMessage));

        Object.defineProperty(signupForm, 'email', { value: { value: 'new@example.com' }, configurable: true });
        Object.defineProperty(signupForm, 'password', { value: { value: 'password123' }, configurable: true });
        Object.defineProperty(signupForm, 'username', { value: { value: 'tester' }, configurable: true });

        signupForm.dispatchEvent(new window.Event('submit', { cancelable: true, bubbles: true }));

        await vi.waitFor(() => expect(window.alert).toHaveBeenCalledWith('Error: ' + errorMessage));
        expect(window.console.error).toHaveBeenCalledWith('Signup Error:', expect.any(Error));
        expect(submitBtn.disabled).toBe(false);
        expect(submitBtn.textContent).toBe("🚀 Start Free Trial");
    });

    it('should show an alert when password reset request fails', async () => {
        const forgotPasswordLink = document.getElementById('forgot-password-link');
        const errorMessage = 'Email not found';

        window.prompt.mockReturnValue('notfound@example.com');
        window.supabaseClient.auth.resetPasswordForEmail.mockRejectedValue(new Error(errorMessage));

        forgotPasswordLink.dispatchEvent(new window.Event('click', { cancelable: true, bubbles: true }));

        await vi.waitFor(() => expect(window.alert).toHaveBeenCalledWith('Error: ' + errorMessage));
        expect(window.console.error).toHaveBeenCalledWith('Reset Request Error:', expect.any(Error));
    });

    it('should show an alert and re-enable the submit button when password update fails', async () => {
        const resetForm = document.getElementById('reset-password-form');
        const submitBtn = resetForm.querySelector('button');
        const errorMessage = 'Password too weak';

        window.supabaseClient.auth.updateUser.mockRejectedValue(new Error(errorMessage));

        const newPasswordInput = document.getElementById('new-password');
        newPasswordInput.value = 'weak';

        resetForm.dispatchEvent(new window.Event('submit', { cancelable: true, bubbles: true }));

        await vi.waitFor(() => expect(window.alert).toHaveBeenCalledWith('Error: ' + errorMessage));
        expect(window.console.error).toHaveBeenCalledWith('Update Error:', expect.any(Error));
        expect(submitBtn.disabled).toBe(false);
        expect(submitBtn.textContent).toBe("🚀 Update Password");
    });
});
