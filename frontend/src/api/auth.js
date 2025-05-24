export async function loginUser({ username, password }) {
  try {
    const res = await fetch('http://localhost:3000/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, password }),
      credentials: 'include',
    });

    const json = await res.json();

    if (res.ok) {
      console.log(json.message); // message de succès
      localStorage.setItem('user', JSON.stringify(json.user));
    } else {
      console.error(json.message); // message d'erreur
    }
  } catch (error) {
    console.error(error);
  }
}
export async function logoutUser() {
  try {
    const res = await fetch('http://localhost:3000/auth/logout', {
      method: 'GET',
    });

    const json = await res.json();

    if (res.ok) {
      console.log(json.message); // message de succès
      localStorage.removeItem('user'); //  dégage l'utilisateur stocké
    } else {
      console.error(json.message); // message d'erreur
    }
  } catch (err) {
    console.error(err);
  }
}
