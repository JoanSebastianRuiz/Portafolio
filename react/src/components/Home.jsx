import { Nombre } from "./ui/nombre";
import {Marquee} from "./ui/Marquee";
import { Tecnologias1, Tecnologias2 } from "./Tecnologias";
import { FloatingDockDemo } from "./Menu";
import { Background } from "./Background";
import { BackgroundBeamsWithCollision } from "./ui/BackgroundBeamsWithCollision";
import { Titulo } from "./Titulo";
import { TabsTransitionPanel } from "./TecnologiasContainer";


export const Home = () =>{
    return(
        <div className="">
            <div className="fixed inset-0 -z-10">
            <BackgroundBeamsWithCollision/>
            </div>

            <Titulo/>

            <h2 className="text-white ">Skills</h2>
            <div className="flex w-1/2">
                <TabsTransitionPanel/>
            </div>
            

            <FloatingDockDemo/>
            

            <p>I specialize in transforming ideas into innovative and efficient digital solutions. I stand out for my ability to solve problems and quickly adapt to change, which ensures the creation of efficient, creative, and high-quality projects. My professional goal is focused on transforming processes through technology.</p>
       
            
 
    
  
            
        </div>
    );
}