
const loginForm = document.querySelector('form');
const emailInput = document.querySelector('input[name="email"]');
const passwordInput = document.querySelector('input[name="psw"]');

// Écoute de l'événement de soumission du formulaire de connexion
loginForm.addEventListener('submit', (event) => {
  event.preventDefault(); // Empêche l'envoi du formulaire par défaut

  const email = emailInput.value;
  const password = passwordInput.value;

  // Envoi des données d'identification à l'API pour vérification
  
    const response = fetch('http://localhost:5678/api/users/login', {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({ email, password })
  })
  .then(response => {
    if (!response.ok) {
      throw new Error('Erreur dans l’identifiant ou le mot de passe');
    }
    return response.json();
  })
  .then(data => {
    if (data.token) {
      // Stockage du token dans le stockage local
      localStorage.setItem('token', data.token);

      // Redirection vers la page d'accueil
      window.location.href = './index.html';
    } else {
      throw new Error('Erreur lors de la connexion');
    }
  })
  .catch(error => {
    console.error('Erreur lors de la connexion:', error);
    alert(error.message);
  });
  
});


/* Login et Logout*/

const token = localStorage.getItem('token');
function viderToken(){
  localStorage.removeItem('token');
  logout.style.display = 'none';
  login.style.display = 'block';
  location.reload();
 }

if (typeof token === 'string' && token.length > 0){

  const logout = document.querySelector(".logout");
  const login = document.querySelector(".login");
  logout.style.display = 'block';
  login.style.display = 'none';
  logout.addEventListener ('click', function (){
    viderToken();
  });
}