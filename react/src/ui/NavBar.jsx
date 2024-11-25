import React, { useEffect, useRef, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { twMerge } from 'tailwind-merge';

export const NavBar = ({ tabs }) => {
  const navigate = useNavigate();
  const location = useLocation(); // Se obtiene la ruta actual
  const fired = useRef(false);

  const [currentLink, setCurrentLink] = useState(null); 

  // Sincroniza el estado inicial con la ruta actual al cargar la página
  useEffect(() => {
    const currentTabIndex = tabs.findIndex(tab => tab.url === location.pathname);
    const index = currentTabIndex !== -1 ? currentTabIndex : 0; // Selecciona el primer elemento del menú
    const tabElement = document.getElementById(`tab-${index}`);

    if (tabElement) {
      const { offsetLeft, offsetWidth } = tabElement;
      setCurrentLink({ left: offsetLeft, width: offsetWidth, index });
    }
  }, [location.pathname, tabs]);

  const handleTabClick = (index, url) => {
    const tab = document.getElementById(`tab-${index}`);
    if (tab) {
      const { offsetLeft, offsetWidth } = tab;
      setCurrentLink({ left: offsetLeft, width: offsetWidth, index });
      fired.current = true;
      navigate(url);
    }
  };

  return (
    <div className="w-fit flex gap-5 items-center justify-center p-2 backdrop-blur-2xl text-3xl sm:text-xl font-mosk700 text-gray-800 relative">
      {tabs.map(({ name, url }, index) => (
        <button
          key={index}
          id={`tab-${index}`}
          onClick={() => handleTabClick(index, url)}
          className={twMerge(
            'transition-colors duration-200 flex items-center justify-center rounded-full p-3 sm:px-2 sm:py-2',
            currentLink?.index === index && 'text-gray-800',
            !fired.current && index === currentLink?.index && 'dark:bg-white bg-neutral-950'
          )}
        >
          {name}
        </button>
      ))}
      {currentLink && ( // Renderiza el fondo solo si currentLink está inicializado
        <div className="absolute inset-0 h-full p-2 -z-[1] overflow-hidden">
          <div className="relative h-full w-full overflow-hidden">
            <div
              style={{
                left: `calc(${currentLink.left}px - 0.5rem)`,
                width: `${currentLink.width}px`,
              }}
              className={twMerge(
                'transition-[color,left,width] duration-300 absolute top-1/2 -translate-y-1/2 h-full rounded-full -z-[1]',
                fired.current ? 'bg-amber-50' : 'bg-transparent'
              )}
            />
          </div>
        </div>
      )}
    </div>
  );
};
