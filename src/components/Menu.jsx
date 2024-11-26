import { useMediaQuery } from '@mui/material'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faBriefcase, faGraduationCap, faEnvelope  } from '@fortawesome/free-solid-svg-icons';

import { NavBar } from '../ui/NavBar'

export const Menu = () => {
  const isMobile = useMediaQuery('(min-width:640px)');
  return(
    <>
      {isMobile ? (
        <div className=' '>
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
      ) : (
        <div className=''>
          <NavBar tabs={[
            {
              name: <FontAwesomeIcon icon={faUser}/>,
              url:"/"
            },
            {
              name: <FontAwesomeIcon icon={faBriefcase}/>,
              url:"/projects"
            },
            {
              name: <FontAwesomeIcon icon={faGraduationCap}/>,
              url:"/education"
            },
            {
              name: <FontAwesomeIcon icon={faEnvelope}/>,
              url:"/contact"
            }
            ]} />
        </div>
      )}
    </>
    
  );
}

