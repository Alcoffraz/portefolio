const themes = ['light', 'old', 'jue']; // les 3 thèmes disponibles
const body = document.body;
const toggleButton = document.getElementById('theme-toggle');

// Charger le thème sauvegardé ou par défaut
let currentTheme = localStorage.getItem('theme') || 'light';
applyTheme(currentTheme);

// Quand on clique sur le bouton
toggleButton.addEventListener('click', () => {
  let nextIndex = (themes.indexOf(currentTheme) + 1) % themes.length;
  currentTheme = themes[nextIndex];
  applyTheme(currentTheme);
  localStorage.setItem('theme', currentTheme);
});

function applyTheme(theme) {
  body.classList.remove('old-mode', 'jue-mode');
  if (theme === 'old') {
    body.classList.add('old-mode');
  } 
  else if (theme === 'jue') {
    body.classList.add('jue-mode');
  }
}