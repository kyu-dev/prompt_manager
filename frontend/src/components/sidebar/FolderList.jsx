import React from 'react';
import { useFolder } from '../../hooks/useFolder';

const FolderList = () => {
  const { folder, loading } = useFolder();
  return (
    <div>
      {loading ? (
        <p>charchement en cours</p>
      ) : (
        <ul>
          {folder.map((item, index) => (
            <li key={index}>{item.title}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default FolderList;
