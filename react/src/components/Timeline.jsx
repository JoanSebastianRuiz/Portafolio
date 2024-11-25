import {motion} from "framer-motion";
import {CardCertificate} from "./CardCertificate";

export const Timeline = ()=>{
    const certificates = [
        {
            name: "Mobile application development",
            year: "2023",
            duration: "240 hours",
            place: "Organización Internacional del Trabajo",
            date: "Dec - 2021",
            logo: "/Images/OIT.png"
        },
        {
            name: "Advanced Excel and Power BI",
            year: "2021",
            duration: "360 hours",
            place: "Corporación Universitaria Minuto de Dios",
            date: "Dec - 2021",
            logo: "/Images/uniminuto.png"
        },
        {
            name: "Software deveploment",
            year: "2021",
            duration: "800 hours",
            place: "Mintic - UIS",
            date: "Dec - 2021",
            logo: "/Images/MINTIC.png"
        },
        {
            name: "Designing Web Pages with HTML and JavaScript",
            year: "2021",
            duration: "40 hours",
            place: "Servicio Nacional de Aprendizaje",
            date: "Dec - 2021",
            logo: "/Images/sena.png"
        },
        {
            name: "Website Layout with HTML5 and CSS3",
            year: "2021",
            duration: "48 hours",
            place: "Servicio Nacional de Aprendizaje",
            date: "Dec - 2021",
            logo: "/Images/sena.png"
        },
        {
            name: "Basic English - Level 1",
            year: "2021",
            duration: "48 hours",
            place: "Servicio Nacional de Aprendizaje",
            date: "Apr - 2021",
            logo: "/Images/sena.png"
        },
        {
            name: "Quality System Structuring NTC ISO 9001:2015",
            year: "2021",
            duration: "48 hours",
            place: "Servicio Nacional de Aprendizaje",
            date: "Mar - 2021",
            logo: "/Images/sena.png"
        },
        {
            name: "Rhinoceros 3D",
            year: "2020",
            duration: "40 hours",
            place: "Servicio Nacional de Aprendizaje",
            date: "Sep - 2020",
            logo: "/Images/sena.png"
        },
        {
            name: "Programming Fundamentals",
            year: "2020",
            duration: "60 hours",
            place: "Servicio Nacional de Aprendizaje",
            date: "Aug - 2020",
            logo: "/Images/sena.png"
        },
        {
            name: "Databases with MySQL",
            year: "2020",
            duration: "80 hours",
            place: "Servicio Nacional de Aprendizaje",
            date: "Aug - 2020",
            logo: "/Images/sena.png"
        },
        {
            name: "Basic Word",
            year: "2020",
            duration: "40 hours",
            place: "Servicio Nacional de Aprendizaje",
            date: "Aug - 2020",
            logo: "/Images/sena.png"
        },
        {
            name: "Fundamentals of Software Engineering",
            year: "2020",
            duration: "6 hours",
            place: "Platzy",
            date: "Jul - 2020",
            logo: "/Images/platzi.png"
        },
        {
            name: "Database Creation with Microsoft Access",
            year: "2020",
            duration: "40 hours",
            place: "Servicio Nacional de Aprendizaje",
            date: "Jul - 2020",
            logo: "/Images/sena.png"
        },
        {
            name: "Intermediate Excel",
            year: "2020",
            duration: "40 hours",
            place: "Servicio Nacional de Aprendizaje",
            date: "Jul - 2020",
            logo: "/Images/sena.png"
        },
        {
            name: "Database Development with SQL",
            year: "2020",
            duration: "40 hours",
            place: "Servicio Nacional de Aprendizaje",
            date: "Jul - 2020",
            logo: "/Images/sena.png"
        },
        {
            name: "Computer Skills: Microsoft Word, Excel, and Internet",
            year: "2020",
            duration: "40 hours",
            place: "Servicio Nacional de Aprendizaje",
            date: "May - 2020",
            logo: "/Images/sena.png"
        },
        {
            name: "AutoCAD 3D",
            year: "2018",
            duration: "40 hours",
            place: "Servicio Nacional de Aprendizaje",
            date: "Dec - 2018",
            logo: "/Images/sena.png"
        },
        {
            name: "AutoCAD 2D",
            year: "2018",
            duration: "40 hours",
            place: "Servicio Nacional de Aprendizaje",
            date: "Oct - 2018",
            logo: "/Images/sena.png"
        }        
    ]

    return(
        <motion.div
        initial={{opacity:0}}
        animate={{opacity:1}}
        transition={{duration:1.2}}>
        <div id="timeline" className="px-10  relative  ">
            {/* Linea timeline */}            
            <span className="absolute bg-amber-50 w-2 h-full top-0 rounded-xl left-8
            md:left-1/2"></span>

                <TextBoxLeft
                year="2023"
                certificates={certificates}
                />

                <TextBoxRight
                year="2021"
                certificates={certificates}
                />

                <TextBoxLeft
                year="2020"
                certificates={certificates}
                />

                <TextBoxRight
                year="2018"
                certificates={certificates}
                />



        </div>
        </motion.div>
    );
}

const TextBoxLeft = ({year: year2, certificates})=>{
    const elementosFiltrados = certificates.filter((elemento)=>elemento.year==year2);
    return(
        <div id="container" className="px-8 py-4 w-full relative
        md:w-1/2  ">
            <h3 className="absolute bg-indigo-100 rounded-[20px] z-10 -top-0 p-1 left-0 -translate-x-6 
            md:left-full md:-translate-x-4">{year2}</h3>
            
            <div id="text-box" className="relative px-4 py-10 my-4 bg-indigo-100 rounded-xl flex flex-wrap gap-4 content-center justify-center min-w-72">
                {elementosFiltrados.map(({name,duration, place, date, logo})=>{
                    return(
                        <CardCertificate
                        name={name}
                        duration={duration}
                        place={place}
                        date={date}
                        logo={logo}
                        />
                    );
                })}
            
                <span className="absolute h-0 w-0 top-6 z-1 border-t-[15px] border-t-transparent border-b-[15px] border-b-transparent border-r-[15px] border-r-indigo-100 -left-3
                md:border-l-indigo-100 md:border-l-[15px] md:left-full md:border-r-[0px]"></span>
            </div>
        </div>
    )
}

const TextBoxRight = ({year: year2, certificates})=>{
    const elementosFiltrados = certificates.filter((elemento)=>elemento.year==year2);
    return(
        <div id="container" className="px-8 py-4 relative w-full  left-0
        md:w-1/2 md:left-1/2 md:ml-2">
            <h3 className="absolute bg-indigo-100 rounded-[20px] z-10 -top-0 p-1 left-0 -translate-x-6 
            md:left-0 md:-translate-x-6">{year2}</h3>
            <div id="text-box" className="relative px-4 py-10 my-4 bg-indigo-100 rounded-xl flex flex-wrap gap-4 content-center justify-center min-w-72 ">

            {elementosFiltrados.map(({name,duration, place, date, logo})=>{
                    return(
                        <CardCertificate
                        name={name}
                        duration={duration}
                        place={place}
                        date={date}
                        logo={logo}
                        />
                    );
                })}
                <span className="absolute h-0 w-0 top-6 z-1 border-t-[15px] border-t-transparent border-b-[15px] border-b-transparent border-r-[15px] border-r-indigo-100 -left-3"></span>
            </div>
        </div>
    )
}

