// Theme handling
const themeToggle = document.getElementById('themeToggle');
const html = document.documentElement;

// Load saved theme preference
const savedTheme = localStorage.getItem('theme') || 'light';
html.setAttribute('data-theme', savedTheme);
themeToggle.textContent = savedTheme === 'light' ? '🌞' : '🌙';

// Theme toggle functionality
themeToggle.addEventListener('click', () => {
  const currentTheme = html.getAttribute('data-theme');
  const newTheme = currentTheme === 'light' ? 'dark' : 'light';
  
  html.setAttribute('data-theme', newTheme);
  themeToggle.textContent = newTheme === 'light' ? '🌞' : '🌙';
  localStorage.setItem('theme', newTheme);
});

// Your existing JavaScript code
const transactions = [];
[Previous JavaScript content continues...]