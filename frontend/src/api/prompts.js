export async function getPrompt() {
  try {
    const res = await fetch('http://localhost:3000/prompt/get', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const json = await res.json();

    console.log(json.message);
  } catch (error) {
    console.error('Erreur lors de la connexion:', error);
  }
}

getPrompt();
