export async function apiAskGemini(content){
    try {
        const res = await fetch('http://localhost:3000/gemini/ask', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          credentials: 'include',
          body: JSON.stringify({
            content: content,
          }),
        });
        const json = res.json();
        return json;
      } catch (error) {
        console.error(error);
      }
}