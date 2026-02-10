// Dark Mode Toggle
const darkToggle = document.getElementById('darkToggle');
const body = document.body;
const icon = darkToggle.querySelector('i');

// Check for saved preference or default to light mode
const currentMode = localStorage.getItem('theme') || 'light';
if (currentMode === 'dark') {
  body.classList.add('dark-mode');
  icon.classList.replace('bx-sun', 'bx-moon');
  darkToggle.innerHTML = '<i class="bx bx-moon"></i> Dark Mode';
}

// Toggle dark mode
darkToggle.addEventListener('click', () => {
  body.classList.toggle('dark-mode');
  
  if (body.classList.contains('dark-mode')) {
    icon.classList.replace('bx-sun', 'bx-moon');
    darkToggle.innerHTML = '<i class="bx bx-moon"></i> Dark Mode';
    localStorage.setItem('theme', 'dark');
  } else {
    icon.classList.replace('bx-moon', 'bx-sun');
    darkToggle.innerHTML = '<i class="bx bx-sun"></i> Light Mode';
    localStorage.setItem('theme', 'light');
  }
});