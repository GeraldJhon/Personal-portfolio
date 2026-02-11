// Dark Mode Manager - Maintainable Implementation
class DarkModeManager {
  constructor() {
    this.toggle = document.getElementById('darkToggle');
    this.body = document.body;
    this.storageKey = 'theme';
    this.themes = {
      DARK: 'dark',
      LIGHT: 'light'
    };
    
    this.init();
  }

  // Initialize dark mode
  init() {
    const savedTheme = this.getSavedTheme();
    this.applyTheme(savedTheme);
    this.attachEventListeners();
  }

  // Get saved theme from localStorage
  getSavedTheme() {
    return localStorage.getItem(this.storageKey) || this.themes.LIGHT;
  }

  // Save theme to localStorage
  saveTheme(theme) {
    localStorage.setItem(this.storageKey, theme);
  }

  // Apply theme to the page
  applyTheme(theme) {
    const isDark = theme === this.themes.DARK;
    
    // Update body class
    this.body.classList.toggle('dark-mode', isDark);
    
    // Update toggle button
    this.updateToggleButton(isDark);
  }

  // Update toggle button appearance
  updateToggleButton(isDark) {
    if (!this.toggle) return;
    
    const icon = isDark ? 'bx-moon' : 'bx-sun';
    const text = isDark ? 'Dark Mode' : 'Light Mode';
    
    this.toggle.innerHTML = `<i class='bx ${icon}'></i> ${text}`;
  }

  // Toggle between themes
  toggleTheme() {
    const currentTheme = this.getSavedTheme();
    const newTheme = currentTheme === this.themes.DARK 
      ? this.themes.LIGHT 
      : this.themes.DARK;
    
    this.applyTheme(newTheme);
    this.saveTheme(newTheme);
  }

  // Attach event listeners
  attachEventListeners() {
    if (this.toggle) {
      this.toggle.addEventListener('click', () => this.toggleTheme());
    }
  }
}

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  new DarkModeManager();
});