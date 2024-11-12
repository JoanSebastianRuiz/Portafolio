'use client';
import React, { useState } from 'react';
import { TransitionPanel } from './ui/TransitionPanel';
import { TecnologiasBack, TecnologiasFront, TecnologiasLearning, TecnologiasTools, TecnologiasMobile } from './Tecnologias';

export function TabsTransitionPanel() {
  const [activeIndex, setActiveIndex] = useState(0);

  const ITEMS = [
    {
      title: 'Front',
      content:
        <TecnologiasFront/>
    },
    {
      title: 'Back',
      content:
        <TecnologiasBack/>
    },
    {
      title: 'Mobile',
      content:
        <TecnologiasMobile/>
    },
    {
        title: 'Tools',
        content:
          <TecnologiasTools/>
      },
    {
      title: 'Learning',
      content:
        <TecnologiasLearning/>
    },
  ];

  return (
    <div>
      <div className='mb-4 flex space-x-2'>
        {ITEMS.map((item, index) => (
          <button
            key={index}
            onClick={() => setActiveIndex(index)}
            className={`rounded-md px-3 py-1 text-sm font-medium ${
              activeIndex === index
                ? 'bg-zinc-200 text-zinc-900 dark:bg-zinc-800 dark:text-zinc-100'
                : 'bg-zinc-100 text-zinc-600 dark:bg-zinc-700 dark:text-zinc-400'
            }`}
          >
            {item.title}
          </button>
        ))}
      </div>
      <div className='overflow-hidden border-t border-zinc-200 dark:border-zinc-700'>
        <TransitionPanel
          activeIndex={activeIndex}
          transition={{ duration: 0.2, ease: 'easeInOut' }}
          variants={{
            enter: { opacity: 0, y: -50, filter: 'blur(4px)' },
            center: { opacity: 1, y: 0, filter: 'blur(0px)' },
            exit: { opacity: 0, y: 50, filter: 'blur(4px)' },
          }}
        >
          {ITEMS.map((item, index) => (
            <div key={index} className='py-2'>
              <p className='text-zinc-600 dark:text-zinc-400'>{item.content}</p>
            </div>
          ))}
        </TransitionPanel>
      </div>
    </div>
  );
}
