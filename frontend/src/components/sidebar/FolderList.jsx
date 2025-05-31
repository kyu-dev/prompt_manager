import React from 'react';
import { useFolder } from '../../hooks/useFolder';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { usePrompt } from '../../hooks/usePrompt';

const FolderList = () => {
  const { folder, loading } = useFolder();
  const { prompts } = usePrompt();

  return (
    <div>
      {loading ? (
        <p>Chargement en cours...</p>
      ) : (
        <ul>
          {folder.map((item, index) => (
            <div key={index}>
              <Accordion type="single" collapsible>
                <AccordionItem value="item-1">
                  <AccordionTrigger>{item.title}</AccordionTrigger>
                  <AccordionContent>
                    {prompts
                      .filter((prompt) => prompt.folder_id === item.id)
                      .map((prompt, i) => (
                        <div key={i}>
                          <p>{prompt.title}</p>
                        </div>
                      ))}
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          ))}
        </ul>
      )}
    </div>
  );
};

export default FolderList;
