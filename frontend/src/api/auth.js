export async function loginUser({ username, password }) {
  try {
    const res = await fetch('http://localhost:3000/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, password }),
    });

    const json = await res.json();

    if (res.ok) {
      console.log(json.message); //message de succès
      localStorage.setItem('user', JSON.stringify(json.user));
    } else {
      console.error(json.message); // message d'érreur
    }
  } catch (error) {
    console.error('Erreur lors de la connexion:', error);
  }
}

// Exemple d'appel de la fonction
loginUser({ username: 'nouvel_utilisateur', password: 'motdepasse' });
