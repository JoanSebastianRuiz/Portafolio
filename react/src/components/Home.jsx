import { Titulo } from "./Titulo";
import { TabsTransitionPanel } from "./TecnologiasContainer";
import { Texto } from "./ui/Texto";


export const Home = () =>{
    return(
        <div >
            <div className="flex fixed inset-0 -z-10">
                <div className="bg-indigo-500 w-2/3 h-screen"></div>
                <div className="bg-amber-50 w-1/3 h-screen"></div>
            </div>

            
           

            <Titulo/>

            

            <div className="flex">
                <Texto/>

                <div className="w-1/3">
                <img src="./Images/Foto.png" alt="" />


                </div>
                    
            </div>

            <h2 className="font-2xl ">Skills</h2>
            <div className="flex w-1/2">
                <TabsTransitionPanel/>
            </div>
            

            


       
            
 
    
  
            
        </div>
    );
}