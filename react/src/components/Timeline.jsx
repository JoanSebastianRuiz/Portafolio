import {motion} from "framer-motion";
import {CardCertificate} from "./CardCertificate";

export const Timeline = ()=>{
    const certificates = [
        {
            name: "Informática: microsoft Word, Excel e internet",
            year: "2020",
            duration: "40 hours",
            place:"Servicio Nacional de Aprendizaje",
            date:"May - 2020",
            logo:"/Images/sena.png"
        },
        {
            name: "AutoCAD 3D",
            year: "2018",
            duration: "40 hours",
            place:"Servicio Nacional de Aprendizaje",
            date:"Dec - 2018",
            logo:"/Images/sena.png"
        },
        {
            name: "AutoCAD 2D",
            year: "2018",
            duration: "40 hours",
            place:"Servicio Nacional de Aprendizaje",
            date:"Oct - 2018",
            logo:"/Images/sena.png"
        },
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
                name="Sena"
                year="2020"
                description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt soluta, quaerat ex, velit possimus earum sunt iure quisquam laborum culpa, numquam adipisci libero recusandae. Amet consequatur velit consequuntur minima accusantium!"
                />

<TextBoxRight
                name="Sena"
                year="2020"
                description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt soluta, quaerat ex, velit possimus earum sunt iure quisquam laborum culpa, numquam adipisci libero recusandae. Amet consequatur velit consequuntur minima accusantium!"
                />

<TextBoxLeft

                name="Sena"
                year="2020"
                description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt soluta, quaerat ex, velit possimus earum sunt iure quisquam laborum culpa, numquam adipisci libero recusandae. Amet consequatur velit consequuntur minima accusantium!"/>

<TextBoxRight
                name="Sena"
                year="2020"
                description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt soluta, quaerat ex, velit possimus earum sunt iure quisquam laborum culpa, numquam adipisci libero recusandae. Amet consequatur velit consequuntur minima accusantium!"/>
                <TextBoxLeft

                name="Sena"
                year="2020"
                description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt soluta, quaerat ex, velit possimus earum sunt iure quisquam laborum culpa, numquam adipisci libero recusandae. Amet consequatur velit consequuntur minima accusantium!"/>

<TextBoxRight
                name="Sena"
                year="2020"
                description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt soluta, quaerat ex, velit possimus earum sunt iure quisquam laborum culpa, numquam adipisci libero recusandae. Amet consequatur velit consequuntur minima accusantium!"/>

<TextBoxLeft

                name="Sena"
                year="2020"
                description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt soluta, quaerat ex, velit possimus earum sunt iure quisquam laborum culpa, numquam adipisci libero recusandae. Amet consequatur velit consequuntur minima accusantium!"/>

<TextBoxRight
                name="Sena"
                year="2020"
                description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt soluta, quaerat ex, velit possimus earum sunt iure quisquam laborum culpa, numquam adipisci libero recusandae. Amet consequatur velit consequuntur minima accusantium!"/>

<TextBoxLeft

                name="Sena"
                year="2020"
                description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt soluta, quaerat ex, velit possimus earum sunt iure quisquam laborum culpa, numquam adipisci libero recusandae. Amet consequatur velit consequuntur minima accusantium!"/>

<TextBoxRight
                name="Sena"
                year="2020"
                description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt soluta, quaerat ex, velit possimus earum sunt iure quisquam laborum culpa, numquam adipisci libero recusandae. Amet consequatur velit consequuntur minima accusantium!"/>

        </div>
        </motion.div>
    );
}

const TextBoxLeft = ({name, year, description})=>{
    return(
        <div id="container" className="px-8 py-4 w-full relative
        md:w-1/2  ">
            <h3 className="absolute bg-indigo-100 rounded-xl z-10 -top-0 p-1 left-0 -translate-x-6 
            md:left-full md:-translate-x-4">{year}</h3>
            
            <div id="text-box" className="relative px-4 py-10 my-4 bg-indigo-100 rounded-xl flex flex-wrap gap-4 content-center justify-center ">
            <CardCertificate
            name="DISEÑO ASISTIDO POR COMPUTADOR - AUTOCAD 2D"
            duration="40 hours"
            place="SENA"
            date="25-10-2018"
            logo="/Images/sena.png"/>
            <CardCertificate
            name="DISEÑO ASISTIDO POR COMPUTADOR - AUTOCAD 2D"
            duration="40 hours"
            place="SENA"
            date="25-10-2018"
            logo="/Images/sena.png"/>
            <CardCertificate
            name="DISEÑO ASISTIDO POR COMPUTADOR - AUTOCAD 2D"
            duration="40 hours"
            place="SENA"
            date="25-10-2018"
            logo="/Images/sena.png"/>
            <CardCertificate
            name="DISEÑO ASISTIDO POR COMPUTADOR - AUTOCAD 2D"
            duration="40 hours"
            place="SENA"
            date="25-10-2018"
            logo="/Images/sena.png"/>
                <span className="absolute h-0 w-0 top-6 z-1 border-t-[15px] border-t-transparent border-b-[15px] border-b-transparent border-r-[15px] border-r-indigo-100 -left-3
                md:border-l-indigo-100 md:border-l-[15px] md:left-full md:border-r-[0px]"></span>
            </div>
        </div>
    )
}

const TextBoxRight = ({name, year, description})=>{
    return(
        <div id="container" className="px-8 py-4 relative w-full  left-0
        md:w-1/2 md:left-1/2 md:ml-2">
            <h3 className="absolute bg-indigo-100 rounded-xl z-10 -top-0 p-1 left-0 -translate-x-6 
            md:left-0 md:-translate-x-6">{year}</h3>
            <div id="text-box" className="relative p-4 my-4 bg-indigo-100 rounded-xl ">
                <h2>{name}</h2>
                <small>{year}</small>
                <p>{description}</p>
                <span className="absolute h-0 w-0 top-6 z-1 border-t-[15px] border-t-transparent border-b-[15px] border-b-transparent border-r-[15px] border-r-indigo-100 -left-3"></span>
            </div>
        </div>
    )
}

