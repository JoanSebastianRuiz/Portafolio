'use client';
import React, { useState } from 'react';
import { TransitionPanel } from '../ui/TransitionPanel';
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
      <div className='mb-4 flex flex-wrap gap-4 justify-center'>
        {ITEMS.map((item, index) => (
          <button
            key={index}
            onClick={() => setActiveIndex(index)}
            className={`rounded-3xl px-3 py-1 font-mosk500 ${
              activeIndex === index
                ? 'bg-amber-50  text-gray-800'
                : 'bg-gray-800 text-amber-50'
            }`}
          >
            {item.title}
          </button>
        ))}
      </div>
      <div className='overflow-hidden border-t-[3px] border-gray-800 '>
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
            <div key={index} className='p-4'>
              <div>{item.content}</div>
            </div>
          ))}
        </TransitionPanel>
      </div>
    </div>
  );
}
