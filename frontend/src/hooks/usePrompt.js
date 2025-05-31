import { useState, useEffect } from 'react';
import {
  apiDeletePrompt,
  apiGetPrompt,
  apiCreatePrompt,
  apiEditPrompt,
} from '../api/prompts';

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

  const handleCreatePrompt = async (title, content, folder_id) => {
    setLoading(true);
    try {
      await apiCreatePrompt(title, content, folder_id);
      await fetchPrompts(false); // Recharge les prompts après la création
    } catch (error) {
      console.error('Erreur lors de la création du prompt:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleEditPrompt = async (id, title, content, folder_id) => {
    setLoading(true);
    try {
      await apiEditPrompt(id, folder_id, content, title);
      fetchPrompts(false);
    } catch (error) {
      console.error("Erreur lors de l'édition du prompt", error);
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
    handleCreatePrompt,
    handleEditPrompt,
  };
};
