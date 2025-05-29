export async function getFolder() {
  try {
    const res = await fetch('http://localhost:3000/folder/get', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include',
    });
    const json = await res.json();

    return json;
  } catch (error) {
    console.error('Erreur lors de la connexion:', error);
  }
}

export async function createFolder(title) {
  try {
    const res = await fetch('http://localhost:3000/folder/create', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include',
      body: JSON.stringify({
        title: title,
      }),
    });
    const json = res.json();
    return json;
  } catch (error) {
    console.error(error);
  }
}
