import { describe, it, expect, vi, beforeEach } from 'vitest';
import { updateAuthUI } from './auth.js';

describe('updateAuthUI', () => {
    beforeEach(() => {
        // Setup DOM
        document.body.innerHTML = `
            <div class="sidebar-auth">
                <a href="signin.html" class="sidebar-auth-btn signin-btn">Sign In</a>
                <a href="signup.html" class="sidebar-auth-btn signup-btn">Get Started</a>
            </div>
            <div class="sidebar-auth">
                <a href="signin.html" class="sidebar-auth-btn signin-btn">Sign In</a>
                <a href="signup.html" class="sidebar-auth-btn signup-btn">Get Started</a>
            </div>
        `;

        // Mock global objects
        window.lucide = {
            createIcons: vi.fn()
        };
        window.supabaseClient = {
            auth: {
                signOut: vi.fn().mockResolvedValue({})
            }
        };
        window.location = {
            reload: vi.fn()
        };
    });

    it('should show user profile when session exists', async () => {
        const session = {
            user: {
                email: 'test@example.com',
                user_metadata: {
                    username: 'testuser'
                }
            }
        };

        await updateAuthUI(session);

        const authContainers = document.querySelectorAll('.sidebar-auth');
        authContainers.forEach(container => {
            expect(container.innerHTML).toContain('testuser');
            expect(container.querySelector('.logout-btn')).not.toBeNull();
        });

        expect(window.lucide.createIcons).toHaveBeenCalled();
    });

    it('should use email prefix if username is missing', async () => {
        const session = {
            user: {
                email: 'hello@world.com',
                user_metadata: {}
            }
        };

        await updateAuthUI(session);

        const authContainers = document.querySelectorAll('.sidebar-auth');
        expect(authContainers[0].innerHTML).toContain('hello');
    });

    it('should show sign in/up buttons when session is null', async () => {
        // First set it to logged in state to test transition
        document.querySelectorAll('.sidebar-auth').forEach(c => {
            c.innerHTML = '<div class="user-profile-summary">...</div>';
        });

        await updateAuthUI(null);

        const authContainers = document.querySelectorAll('.sidebar-auth');
        authContainers.forEach(container => {
            expect(container.querySelector('.signin-btn')).not.toBeNull();
            expect(container.querySelector('.signup-btn')).not.toBeNull();
            expect(container.innerHTML).toContain('signin.html');
        });
    });

    it('should handle logout button click', async () => {
        const session = {
            user: {
                email: 'test@example.com',
                user_metadata: { username: 'testuser' }
            }
        };

        await updateAuthUI(session);

        const logoutBtn = document.querySelector('.logout-btn');
        await logoutBtn.click();

        expect(window.supabaseClient.auth.signOut).toHaveBeenCalled();
        expect(window.location.reload).toHaveBeenCalled();
    });
});
