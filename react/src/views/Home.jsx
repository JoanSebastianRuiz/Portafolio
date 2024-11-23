import { TabsTransitionPanel } from "../components/TecnologiasContainer";
import { Texto } from "../ui/Texto";
import { Menu } from "../components/Menu";
import { Contacto } from "../components/Contacto";
import { PortfolioInfo } from "../components/PortfolioInfo";
import { CardCertificate } from "../components/CardCertificate";


export const Home = () =>{
    return(
        <div className="bg-indigo-500 min-h-screen relative">      

            <main className="flex relative z-20">
                <section className="w-2/3">
                    <Menu/>

                    <div className="text-center px-4 ">
                        <Texto/>
                    </div>

                    <PortfolioInfo/>

                    <h2 className="font-leckerli text-6xl text-amber-50 text-center mb-6">Skills</h2>
                    <div className="px-20 mb-10">
                        <TabsTransitionPanel/>
                    </div>
            
                </section>

                <section className="w-1/3 right-0 bg-amber-50 rounded-l-[35px] fixed min-h-screen">
                    <h1 className="text-indigo-500 text-6xl font-leckerli text-center">Hi, I am Joan!</h1>
                    <div className="flex justify-center">
                        <img className="w-4/5" src="./Images/Foto.png" alt="Foto" />
                    </div>
                    <Contacto/>

                </section>
            </main>

        </div>
    );
}