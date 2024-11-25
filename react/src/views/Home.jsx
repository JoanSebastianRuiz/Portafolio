import { TabsTransitionPanel } from "../components/TecnologiasContainer";
import { Texto } from "../components/Texto";
import { PersonalInformation } from "../components/PersonalInformation";
import { PortfolioInfo } from "../components/PortfolioInfo";
import { CardCertificate } from "../components/CardCertificate";


export const Home = () =>{
    return(
        <div className="bg-indigo-500 min-h-screen relative">      

            <main className="flex flex-col relative z-20">

                <section className="flex flex-col gap-6 px-6 py-10 mt-20 sm:mt-[4rem] md:mt-0 md:w-1/3 md:right-0 bg-amber-50 md:rounded-l-[35px] md:fixed md:min-h-screen">
                    <h1 className="text-indigo-500 text-5xl sm:text-6xl text-center font-galada text-arc">Hi, I am Joan!</h1>

                    <div className="flex justify-center relative">
                        <img className="w-4/5 max-w-80 min-w-60" src="./Images/Me/Foto.png" alt="Foto" />
                    </div>
                    <PersonalInformation/>

                </section>

                <section className="py-10 md:w-2/3 md:pt-20">

                    <div className="text-center px-6 lg:px-10 ">
                        <Texto/>
                    </div>

                    <PortfolioInfo/>

                    <h2 className="font-galada text-5xl sm:text-6xl text-amber-50 text-center mb-6">Skills</h2>
                    <div className="px-10 md:px-20 md:mb-10">
                        <TabsTransitionPanel/>
                    </div>
            
                </section>

                
            </main>

        </div>
    );
}