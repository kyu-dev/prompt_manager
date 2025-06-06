import { useState, useEffect } from 'react';
import {
  apiDeletePrompt,
  apiGetPrompt,
  apiCreatePrompt,
  apiEditPrompt,
  apiCopiedAt,
  apiGetPromptOrderByCopiedAt,
} from '../api/prompts';

export const usePrompt = () => {
  const [prompts, setPrompts] = useState([]);
  const [promptsByCopy, setPromptsByCopy] = useState([]);
  const [loading, setLoading] = useState(false);

  // withLoading permet de désactiver le spinner pour certains appels
  async function fetchPrompts(withLoading = true, variant = 'default') {
    if (withLoading) setLoading(true);
    try {
      let data;
      switch (variant) {
        case 'copied':
          data = await apiGetPromptOrderByCopiedAt();
          setPromptsByCopy(data);
          break;

        case 'default':
        default:
          data = await apiGetPrompt();
          setPrompts(data);
          break;
      }
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
      fetchPrompts(false);
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
      await fetchPrompts(false);
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

  const handleCopiedAt = async (id) => {
    setLoading(true);
    try {
      await apiCopiedAt(id);
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
    promptsByCopy, 
    loading,
    fetchPrompts,
    handleDeletePrompt,
    handleCreatePrompt,
    handleEditPrompt,
    handleCopiedAt,
  };
};