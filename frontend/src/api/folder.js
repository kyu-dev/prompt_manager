export async function apiGetFolder() {
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

export async function apiCreateFolder(title) {
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

export async function apiDeleteFolder(id) {
  try {
    const res = await fetch('http://localhost:3000/folder/delete', {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include',
      body: JSON.stringify({
        id: id,
      }),
    });
    const json = await res.json();
    return json;
  } catch (error) {
    console.error(error);
  }
}

export async function apiEditFolder(id, title) {
  try {
    const res = await fetch('http://localhost:3000/folder/edit', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include',
      body: JSON.stringify({
        id: id,
        title: title,
      }),
    });
    const json = await res.json();
    return json;
  } catch (err) {
    console.error("Erreur lors de l'édition du folder", err);
  }
}
