export async function getPrompt() {
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

export async function creatPrompt(title, content, folder_id) {
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
    const json = res.json();
    return json;
  } catch (err) {
    console.error('erreur lors de la creation du prompt', err);
  }
}
