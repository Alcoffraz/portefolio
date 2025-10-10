window.console.log("coucou ! fait attention c est les log ca");

const toggleButton = document.getElementById('theme-toggle');
const body = document.body;

// Charger le thème depuis le stockage local
if (localStorage.getItem('theme') === 'old') {
  body.classList.add('old-mode');
}
if (localStorage.getItem('theme') === 'jue') {
  body.classList.add('jue-mode');
}
// Quand on clique sur le bouton
toggleButton.addEventListener('click', () => {
    if (body.classList.contains('basic-mode')){
  body.classList.toggle('old-mode');
    }


  
  // Sauvegarder la préférence
  if (body.classList.contains('old-mode')) {
    localStorage.setItem('theme', 'old');
    window.console.log("Mode ancien");

  } 
  if (body.classList.contains('jue-mode')) {
    localStorage.setItem('theme', 'jue');
    window.console.log("Mode Jue");

  } 
  
  else {
    localStorage.setItem('theme', 'basic');
    window.console.log("Mode Basique");

  }
});