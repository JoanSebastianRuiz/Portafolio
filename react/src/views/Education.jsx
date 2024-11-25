import { MainCertificate } from "../components/CardCertificate"
import { Timeline } from "../components/timeline"

export const Education = () =>{
    const mainCertificates = [
        {
            name: "Software Development",
            place: "Campuslands",
            title: "Technical degree",
            start: "Apr - 2024",
            end: "Feb - 2025",
            logo: "/Images/campuslands.png",
            description: "I trained in programming with Python and Java, web development using HTML, CSS, JavaScript, and Spring Boot, database management with SQL, agile methodologies, and Git, preparing me to work effectively in teams and manage software projects efficiently."
        },
        {
            name: "Software Analysis and Development",
            place: "Servicio Nacional de Aprendizaje",
            title: "Technologist degree",
            start: "Oct - 2023",
            end: "Present",
            logo: "/Images/sena.png",
            description: "I specialized in requirements analysis, system design using design patterns, object-oriented programming, and enterprise application development with Java, while also strengthening skills in software testing and quality assurance."
        },
        {
            name: "Metallurgical Engineering",
            place: "Universidad Industrial de Santander",
            title: "Bachelor's degree",
            start: "Jan - 2015",
            end: "Apr - 2021",
            logo: "/Images/UIS.png",
            description: "During my undergraduate studies, I developed analytical skills, complex problem-solving abilities, modeling, simulation, teamwork, and project management, strengthening key competencies for software development, such as communication and collaboration in interdisciplinary environments."
        }
    ]


    return(
        <div className="bg-indigo-500 min-h-screen relative pt-20 pb-10">
            <h2 className="font-galada text-6xl text-amber-50 text-center mb-6">Academic Background</h2>
            <section className="flex flex-wrap gap-10 justify-center  mb-12 px-6">
                {mainCertificates.map(({ name, place, start, end, logo, description, title },i)=>{
                    return(
                        <MainCertificate
                        key={i+1}
                        name={name}
                        place={place}
                        start={start}
                        end={end}
                        logo={logo}
                        description={description}
                        title={title}
                        />
                    );
                })

                }

            </section>

            
            <h2 className="font-galada text-6xl text-amber-50 text-center mb-6">Certifications</h2>
            <Timeline/>
        </div>
    )
}