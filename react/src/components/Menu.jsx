'use client'

import { NavBar } from '../ui/NavBar'

export const Menu = () => (
  <div className=' relative z-20'>
    <NavBar tabs={[
      {
        name: 'About me',
        url:"/"
      },
      {
        name: 'Projects',
        url:"/projects"
      },
      {
        name: 'Education',
        url:"/education"
      },
      {
        name: 'Contact',
        url:"/contact"
      }
      ]} />
  </div>
)

