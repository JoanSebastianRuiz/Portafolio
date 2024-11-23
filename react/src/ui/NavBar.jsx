import { cn } from '../lib/utils'
import React, { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { twMerge } from 'tailwind-merge'

export const NavBar = ({ tabs }) => {
  const navigate = useNavigate();
  const fired = useRef(false)
  const defaultSelectedTabIndex = 0
  const [currentLink, setCurrentLink] = useState({
    index: defaultSelectedTabIndex,
    left: undefined,
    width: undefined
  })


  const defaultSelectedTabStyles = [
    '[&:nth-child(1)]:dark:bg-white [&:nth-child(1)]:bg-neutral-950',
    '[&:nth-child(2)]:dark:bg-white [&:nth-child(2)]:bg-neutral-950',
    '[&:nth-child(3)]:dark:bg-white [&:nth-child(3)]:bg-neutral-950',
    '[&:nth-child(4)]:dark:bg-white [&:nth-child(4)]:bg-neutral-950'
  ]

  useEffect(() => {
    setCurrentLink(() => ({
      left: document.getElementById('uuu-btn-' + defaultSelectedTabIndex)?.offsetLeft,
      width: document.getElementById('uuu-btn-' + defaultSelectedTabIndex)?.getBoundingClientRect()
        .width,
      index: defaultSelectedTabIndex
    }))
  }, [])

  return (
    <div
      className={
        'w-fit flex gap-5 items-center justify-center p-2 backdrop-blur-2xl text-xl font-mosk700 text-gray-800'
      }
    >
      {tabs.map(({name, url}, i) => (
        <button
          key={i}
          id={'uuu-btn-' + i}
          onClick={() => {
            fired.current = true
            setCurrentLink(() => ({
              left: document.getElementById('uuu-btn-' + i)?.offsetLeft,
              width: document.getElementById('uuu-btn-' + i)?.getBoundingClientRect().width,
              index: i
            }));
            navigate(url);
          }}
          className={twMerge(
            'transition-colors duration-200 flex items-center justify-center rounded-full h-fit px-2 py-2 text-nowrap',
            currentLink.index === i && 'text-gray-800',
            fired.current ? '' : defaultSelectedTabStyles[defaultSelectedTabIndex]
          )}
        >
          {name}
        </button>
      ))}
      <div className={'absolute inset-0 h-full p-2 -z-[1] overflow-hidden'}>
        <div className={'relative h-full w-full overflow-hidden'}>
          <div
            style={{
              left: `calc(${currentLink.left || 0}px - 0.75rem + 0.25rem)`,
              width: `${currentLink.width || 0}px`
            }}
            className={twMerge(
              `transition-[color,left,width] duration-300 absolute top-1/2 -translate-y-1/2 h-full rounded-full -z-[1]`,
              fired.current ? 'bg-amber-50 ' : 'bg-transparent'
            )}
          />
        </div>
      </div>
    </div>
  )
}
