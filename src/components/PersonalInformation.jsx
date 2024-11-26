import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin  } from '@fortawesome/free-brands-svg-icons';

export const PersonalInformation = () =>{
    
    return(
        <div className="flex w-full justify-center px-4 gap-x-4 mt-4">
            {/* Github */}
            <FontAwesomeIcon className='text-indigo-500 text-5xl cursor-pointer' onClick={()=>window.open("https://github.com/JoanSebastianRuiz", "_blank")} icon={faGithub}/>
            
            {/* Linkedin */}            
            <FontAwesomeIcon className='text-indigo-500 text-5xl cursor-pointer' onClick={()=>window.open("https://www.linkedin.com/in/joan-sebastian-ruiz-angarita-b798b8316/", "_blank")} icon={faLinkedin}/>
            
            <a className="font-mosk600 p-2 bg-indigo-500 border-4 border-indigo-500 hover:bg-amber-50 hover:text-indigo-500 text-amber-50 rounded-3xl" href="https://drive.google.com/file/d/1dLmxI6QeawklqprreELjJb_X30cP1ij9/view?usp=sharing" target="_blank">Download CV</a>

        </div>
    )
}