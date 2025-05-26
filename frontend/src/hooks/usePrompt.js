import { useState, useEffect } from 'react';
import { apiDeletePrompt, apiGetPrompt } from '../api/prompts';
export const usePrompt = () => {
  const [prompts, setPrompts] = useState([]);
  const [loading, setLoading] = useState(false);

  //with loading permet de savoir si le fetch à besoin d'un loading ou non afin de ne pas altérer l'ux quand il n'est pas nécéssaire
  async function fetchPrompts(withLoading = true) {
    if (withLoading) setLoading(true);
    try {
      const data = await apiGetPrompt();
      setPrompts(data);
    } catch (error) {
      console.error('Erreur lors de la récupération des prompts:', error);
    } finally {
      if (withLoading) setLoading(false);
    }
  }

  const handleDeletePrompt = async (promptId) => {
    setLoading(true);
    try {
      await apiDeletePrompt(promptId);
      fetchPrompts(false); //on ignore le loading de fetch
    } catch (error) {
      console.error('Erreur lors de la suppression du prompt:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPrompts();
  }, []);

  return {
    prompts,
    loading,
    fetchPrompts,
    handleDeletePrompt,
  };
};
