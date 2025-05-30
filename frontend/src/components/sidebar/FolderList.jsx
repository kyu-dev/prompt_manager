import React from 'react';
import { useFolder } from '../../hooks/useFolder';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const FolderList = () => {
  const { folder, loading } = useFolder();
  return (
    <div>
      {loading ? (
        <p>charchement en cours</p>
      ) : (
        <ul>
          {folder.map((item, index) => (
            <div key={index}>
              <Accordion type="single" collapsible>
                <AccordionItem value="item-1">
                  <AccordionTrigger>{item.title}</AccordionTrigger>
                  <AccordionContent>
                    Yes. It adheres to the WAI-ARIA design pattern.
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
