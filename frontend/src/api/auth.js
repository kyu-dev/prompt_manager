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
      method: 'DELETE',
      credentials: 'include',
    });

    const json = await res.json();

    if (res.ok) {
      console.log(json.message);
      localStorage.removeItem('user');
      return true;
    } else {
      console.error(json.message);
      return false;
    }
  } catch (err) {
    console.error('Erreur lors de la déconnexion :', err);
    return false;
  }
}

export async function checkSession() {
  try {
    const res = await fetch('http://localhost:3000/auth/checkSession', {
      method: 'GET',
      credentials: 'include',
    });

    if (!res.ok) {
      throw new Error(`Erreur HTTP: ${res.status}`);
    }

    const json = await res.json();
    return json;
  } catch (error) {
    console.error('checkSession error:', error);
    return { error: 'Erreur lors de la vérification de la session' };
  }
}
