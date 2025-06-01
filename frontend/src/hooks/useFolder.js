import {
  apiCreateFolder,
  apiDeleteFolder,
  apiEditFolder,
  apiGetFolder,
} from '../api/folder';

import { useState, useEffect } from 'react';

export const useFolder = () => {
  const [folder, setFolder] = useState([]);
  const [loading, setLoading] = useState(null);

  async function fetchFolder(withLoading = true) {
    if (withLoading) setLoading(true);
    try {
      const data = await apiGetFolder();
      setFolder(data);
    } catch (error) {
      console.error('Erreur lors de la récupération des folders:', error);
    } finally {
      if (withLoading) setLoading(false);
    }
  }

  const handleDeleteFolder = async (folderId) => {
    setLoading(true);
    try {
      await apiDeleteFolder(folderId);
      fetchFolder(false); //on ignore le loading de fetch
    } catch (error) {
      console.error('Erreur lors de la suppression du folder:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleCreateFolder = async (title, content) => {
    setLoading(true);
    try {
      await apiCreateFolder(title, content);
      fetchFolder(false); // mise à jour après ajout sans le loading du refetch
    } catch (error) {
      console.error('Erreur lors de la création du folder:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleEditFolder = async (id, title) => {
    setLoading(true);
    try {
      await apiEditFolder(id, title);
    } catch (error) {
      console.error("Erreur lors de l'édition du folder", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchFolder();
  }, []);

  return {
    folder,
    loading,
    fetchFolder,
    handleDeleteFolder,
    handleCreateFolder,
    handleEditFolder,
  };
};
