import { describe, it, expect, beforeEach, vi } from 'vitest';

// Mock global dependencies
const mockSupabase = {
  auth: {
    onAuthStateChange: vi.fn(),
    signUp: vi.fn(),
    signInWithPassword: vi.fn(),
    signOut: vi.fn(),
    resetPasswordForEmail: vi.fn(),
    updateUser: vi.fn(),
    getSession: vi.fn().mockResolvedValue({ data: { session: null } }),
  },
};

global.supabaseClient = mockSupabase;

global.lucide = {
  createIcons: vi.fn(),
};

global.alert = vi.fn();
global.prompt = vi.fn();

// Mock window.location
const mockLocation = {
  href: '',
  reload: vi.fn(),
  origin: 'http://localhost',
};
delete window.location;
window.location = mockLocation;

// Import initAuth
const { initAuth } = require('./auth.js');

describe('auth.js', () => {
  beforeEach(() => {
    document.body.innerHTML = '';
    vi.clearAllMocks();
    mockLocation.href = '';
  });

  const setupTest = (html) => {
    document.body.innerHTML = html;
    initAuth();
  };

  it('should register auth state listener', () => {
    setupTest('');
    expect(mockSupabase.auth.onAuthStateChange).toHaveBeenCalled();
  });

  describe('updateAuthUI', () => {
    it('should show sign in/up buttons when logged out', () => {
      setupTest('<div class="sidebar-auth"><div class="user-profile-summary"></div></div>');

      const callback = mockSupabase.auth.onAuthStateChange.mock.calls[0][0];
      callback('SIGNED_OUT', null);

      const container = document.querySelector('.sidebar-auth');
      expect(container.innerHTML).toContain('signin.html');
      expect(container.innerHTML).toContain('signup.html');
    });

    it('should show user profile when logged in', async () => {
      setupTest('<div class="sidebar-auth"></div>');

      const mockSession = {
        user: {
          email: 'test@example.com',
          user_metadata: { username: 'testuser' }
        }
      };

      const callback = mockSupabase.auth.onAuthStateChange.mock.calls[0][0];
      await callback('SIGNED_IN', mockSession);

      const container = document.querySelector('.sidebar-auth');
      expect(container.innerHTML).toContain('testuser');
      expect(container.querySelector('#logout-btn')).toBeTruthy();
    });
  });

  describe('Forms', () => {
    describe('Sign Up', () => {
      it('should handle Sign Up success', async () => {
        setupTest(`
          <form id="signup-form">
            <input name="email">
            <input name="password">
            <input name="username">
            <button type="submit">Submit</button>
          </form>
        `);

        mockSupabase.auth.signUp.mockResolvedValue({ data: {}, error: null });

        const form = document.getElementById('signup-form');
        form.email = { value: 'test@example.com' };
        form.password = { value: 'password123' };
        form.username = { value: 'testuser' };

        form.dispatchEvent(new Event('submit', { cancelable: true, bubbles: true }));

        await vi.waitFor(() => expect(mockSupabase.auth.signUp).toHaveBeenCalled());
        expect(mockSupabase.auth.signUp).toHaveBeenCalledWith({
          email: 'test@example.com',
          password: 'password123',
          options: {
            data: {
              username: 'testuser',
              full_name: 'testuser',
            }
          }
        });
        expect(mockLocation.href).toBe('signin.html');
      });

      it('should handle Sign Up failure', async () => {
        setupTest(`
          <form id="signup-form">
            <input name="email">
            <input name="password">
            <input name="username">
            <button type="submit">Submit</button>
          </form>
        `);

        mockSupabase.auth.signUp.mockResolvedValue({ data: null, error: { message: 'Invalid email' } });

        const form = document.getElementById('signup-form');
        form.email = { value: 'invalid' };
        form.password = { value: 'password123' };
        form.username = { value: 'testuser' };

        form.dispatchEvent(new Event('submit', { cancelable: true, bubbles: true }));

        await vi.waitFor(() => expect(global.alert).toHaveBeenCalledWith('Error: Invalid email'));
      });
    });

    describe('Sign In', () => {
      it('should handle Sign In success', async () => {
        setupTest(`
          <form id="signin-form">
            <input name="email">
            <input name="password">
            <button type="submit">Submit</button>
          </form>
        `);

        mockSupabase.auth.signInWithPassword.mockResolvedValue({ data: {}, error: null });

        const form = document.getElementById('signin-form');
        form.email = { value: 'test@example.com' };
        form.password = { value: 'password123' };

        form.dispatchEvent(new Event('submit', { cancelable: true, bubbles: true }));

        await vi.waitFor(() => expect(mockSupabase.auth.signInWithPassword).toHaveBeenCalled());
        expect(mockLocation.href).toBe('index.html');
      });

      it('should handle Sign In failure', async () => {
        setupTest(`
          <form id="signin-form">
            <input name="email">
            <input name="password">
            <button type="submit">Submit</button>
          </form>
        `);

        mockSupabase.auth.signInWithPassword.mockResolvedValue({ data: null, error: { message: 'Invalid credentials' } });

        const form = document.getElementById('signin-form');
        form.email = { value: 'test@example.com' };
        form.password = { value: 'wrong' };

        form.dispatchEvent(new Event('submit', { cancelable: true, bubbles: true }));

        await vi.waitFor(() => expect(global.alert).toHaveBeenCalledWith('Error: Invalid credentials'));
      });
    });

    describe('Password Reset', () => {
      it('should handle forgot password link click', async () => {
        setupTest('<a id="forgot-password-link">Forgot Password</a>');

        global.prompt.mockReturnValue('test@example.com');
        mockSupabase.auth.resetPasswordForEmail.mockResolvedValue({ error: null });

        const link = document.getElementById('forgot-password-link');
        link.dispatchEvent(new Event('click', { bubbles: true, cancelable: true }));

        expect(global.prompt).toHaveBeenCalled();
        expect(mockSupabase.auth.resetPasswordForEmail).toHaveBeenCalledWith('test@example.com', expect.anything());
        await vi.waitFor(() => expect(global.alert).toHaveBeenCalledWith('Password reset email sent! Please check your inbox.'));
      });

      it('should handle reset password form submission', async () => {
        setupTest(`
          <form id="reset-password-form">
            <input id="new-password" value="newpassword123">
            <button type="submit">Update</button>
          </form>
        `);

        mockSupabase.auth.updateUser.mockResolvedValue({ error: null });

        const form = document.getElementById('reset-password-form');
        form.dispatchEvent(new Event('submit', { cancelable: true, bubbles: true }));

        await vi.waitFor(() => expect(mockSupabase.auth.updateUser).toHaveBeenCalledWith({
          password: 'newpassword123'
        }));
        expect(global.alert).toHaveBeenCalledWith('Password updated successfully! You can now sign in.');
        expect(mockLocation.href).toBe('signin.html');
      });
    });
  });

  describe('Interactive elements', () => {
    it('should toggle password visibility', () => {
      setupTest(`
        <div class="password-field">
          <input type="password">
          <button class="password-toggle"><i data-lucide="eye"></i></button>
        </div>
      `);

      const toggle = document.querySelector('.password-toggle');
      const input = document.querySelector('input');
      const icon = toggle.querySelector('i');

      toggle.dispatchEvent(new Event('click', { bubbles: true }));

      expect(input.type).toBe('text');
      expect(icon.getAttribute('data-lucide')).toBe('eye-off');

      toggle.dispatchEvent(new Event('click', { bubbles: true }));
      expect(input.type).toBe('password');
      expect(icon.getAttribute('data-lucide')).toBe('eye');
    });

    it('should handle logout', async () => {
      setupTest('<div class="sidebar-auth"></div>');

      const callback = mockSupabase.auth.onAuthStateChange.mock.calls[0][0];
      await callback('SIGNED_IN', { user: { email: 'a@b.com', user_metadata: {} } });

      const logoutBtn = document.querySelector('#logout-btn');
      logoutBtn.dispatchEvent(new Event('click', { bubbles: true }));

      expect(mockSupabase.auth.signOut).toHaveBeenCalled();
      await vi.waitFor(() => expect(mockLocation.reload).toHaveBeenCalled());
    });
  });
});
