window.console.log("coucou ! fait attention c est les log ca");

const toggleButton = document.getElementById('theme-toggle');
const body = document.body;

// Charger le thème depuis le stockage local
if (localStorage.getItem('theme') === 'old') {
  body.classList.add('old-mode');
}

// Quand on clique sur le bouton
toggleButton.addEventListener('click', () => {
  body.classList.toggle('old-mode');
  
  // Sauvegarder la préférence
  if (body.classList.contains('old-mode')) {
    localStorage.setItem('theme', 'old');
    window.console.log("Mode ancien");

  } 
  
  else {
    localStorage.setItem('theme', 'basic');
    window.console.log("Mode Basique");

  }
});