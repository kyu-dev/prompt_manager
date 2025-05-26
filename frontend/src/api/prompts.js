export async function apiGetPrompt() {
  try {
    const res = await fetch('http://localhost:3000/prompt/get', {
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

export async function apiCreatePrompt(title, content, folder_id) {
  try {
    const res = await fetch('http://localhost:3000/prompt/create', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include',
      body: JSON.stringify({
        title: title,
        content: content,
        folder_id: folder_id,
      }),
    });
    const json = await res.json();
    return json;
  } catch (err) {
    console.error('erreur lors de la creation du prompt', err);
  }
}

export async function apiDeletePrompt(id) {
  try {
    const res = await fetch('http://localhost:3000/prompt/delete', {
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
  } catch (err) {
    console.error('Erreur lors de la suppression du prompt:', err);
  }
}

export async function apiEditPrompt(id, folder_id, content, title) {
  try {
    const res = await fetch('http://localhost:3000/prompt/edit', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include',
      body: JSON.stringify({
        id: id,
        folder_id: folder_id,
        content: content,
        title: title,
      }),
    });
    const json = await res.json();
    return json;
  } catch (err) {
    console.error("Erreur lors de l'édition du prompt", err);
  }
}
