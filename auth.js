// 🔐 StreamWeb Authentication Logic
// Uses Supabase for secure user management.

document.addEventListener('DOMContentLoaded', () => {
    const signupForm = document.getElementById('signup-form');
    const signinForm = document.getElementById('signin-form');
    const sidebarAuth = document.querySelector('.sidebar-auth');
    const sidebarLinks = document.querySelector('.sidebar-links');

    if (typeof supabaseClient === 'undefined') {
        console.error('Supabase client not initialized!');
        return;
    }

    // 1. Initial UI Setup & Auth State Listener
    supabaseClient.auth.onAuthStateChange((event, session) => {
        console.log('Auth State Change:', event, session);
        updateAuthUI(session);
    });

    // 2. Handle Sign Up
    if (signupForm) {
        signupForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            const email = signupForm.email.value;
            const password = signupForm.password.value;
            const username = signupForm.username.value;
            const submitBtn = signupForm.querySelector('button');

            try {
                submitBtn.disabled = true;
                submitBtn.textContent = 'Creating Account...';

                const { data, error } = await supabaseClient.auth.signUp({
                    email,
                    password,
                    options: {
                        data: {
                            username: username,
                            full_name: username, // Default to username
                        }
                    }
                });

                if (error) throw error;

                alert('Registration successful! Please check your email for verification.');
                window.location.href = 'signin.html';
            } catch (error) {
                alert('Error: ' + error.message);
                console.error('Signup Error:', error);
            } finally {
                submitBtn.disabled = false;
                submitBtn.textContent = '🚀 Start Free Trial';
            }
        });
    }

    // 3. Handle Sign In
    if (signinForm) {
        signinForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            const email = signinForm.email.value;
            const password = signinForm.password.value;
            const submitBtn = signinForm.querySelector('button');

            try {
                submitBtn.disabled = true;
                submitBtn.textContent = 'Signing In...';

                const { data, error } = await supabaseClient.auth.signInWithPassword({
                    email,
                    password
                });

                if (error) throw error;

                window.location.href = 'index.html';
            } catch (error) {
                alert('Error: ' + error.message);
                console.error('Signin Error:', error);
            } finally {
                submitBtn.disabled = false;
                submitBtn.textContent = '🎬 Let\'s Stream';
            }
        });
    }

    // 3.1 Handle Password Reset Request
    const forgotPasswordLink = document.getElementById('forgot-password-link');
    if (forgotPasswordLink) {
        forgotPasswordLink.addEventListener('click', async (e) => {
            e.preventDefault();
            const email = prompt('Please enter your email to receive a password reset link:');
            if (!email) return;

            try {
                const { error } = await supabaseClient.auth.resetPasswordForEmail(email, {
                    redirectTo: window.location.origin + '/reset-password.html',
                });
                if (error) throw error;
                alert('Password reset email sent! Please check your inbox.');
            } catch (error) {
                alert('Error: ' + error.message);
                console.error('Reset Request Error:', error);
            }
        });
    }

    // 4. Update UI based on Auth State
    async function updateAuthUI(session) {
        const authContainers = document.querySelectorAll('.sidebar-auth');
        
        if (session) {
            // User is logged in
            const user = session.user;
            const username = user.user_metadata.username || user.email.split('@')[0];

            authContainers.forEach(container => {
                container.innerHTML = `
                    <div class="user-profile-summary">
                        <div class="user-avatar">
                            <i data-lucide="user"></i>
                        </div>
                        <div class="user-info">
                            <span class="user-name">${username}</span>
                            <button id="logout-btn" class="logout-link">Log Out</button>
                        </div>
                    </div>
                `;
            });

            // Re-initialize icons for the new HTML
            if (window.lucide) lucide.createIcons();

            // Add logout listener
            const logoutBtns = document.querySelectorAll('#logout-btn');
            logoutBtns.forEach(btn => {
                btn.addEventListener('click', async () => {
                    await supabaseClient.auth.signOut();
                    window.location.reload();
                });
            });

        } else {
            // User is logged out
            authContainers.forEach(container => {
                if (container.querySelector('.user-profile-summary')) {
                    container.innerHTML = `
                        <a href="signin.html" class="sidebar-auth-btn signin-btn">Sign In</a>
                        <a href="signup.html" class="sidebar-auth-btn signup-btn">Get Started</a>
                    `;
                }
            });
        }
    }

    // 5. Password Show/Hide Toggle Logic
    const passwordToggles = document.querySelectorAll('.password-toggle');
    passwordToggles.forEach(toggle => {
        toggle.addEventListener('click', () => {
            const input = toggle.parentElement.querySelector('input');
            const icon = toggle.querySelector('i');
            
            if (input.type === 'password') {
                input.type = 'text';
                icon.setAttribute('data-lucide', 'eye-off');
            } else {
                input.type = 'password';
                icon.setAttribute('data-lucide', 'eye');
            }
            
            // Re-render the icon
            if (window.lucide) lucide.createIcons();
        });
    });

    // 6. Handle Password Update (Reset Page)
    const resetPasswordForm = document.getElementById('reset-password-form');
    if (resetPasswordForm) {
        resetPasswordForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            const newPassword = document.getElementById('new-password').value;
            const submitBtn = resetPasswordForm.querySelector('button');

            try {
                submitBtn.disabled = true;
                submitBtn.textContent = 'Updating...';

                const { error } = await supabaseClient.auth.updateUser({
                    password: newPassword
                });

                if (error) throw error;

                alert('Password updated successfully! You can now sign in.');
                window.location.href = 'signin.html';
            } catch (error) {
                alert('Error: ' + error.message);
                console.error('Update Error:', error);
            } finally {
                submitBtn.disabled = false;
                submitBtn.textContent = '🚀 Update Password';
            }
        });
    }
});
