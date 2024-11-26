import { BentoGrid } from "../components/BentoGrid"

export const Projects  = () =>{
    const projects = [
        {
            name: "HomeTheater",
            logo: "/Images/Projects/HomeTheatre.webp",
            description: "Movie e-commerce site built with web technologies like HTML, CSS, and JavaScript. This project connects to an external API to fetch up-to-date information on available movies.",
            place: "Campuslands",
            year: "2024",
            repository: "https://github.com/JoanSebastianRuiz/Home-Theatre-API",
            demo: "https://joansebastianruiz.github.io/Home-Theatre-API/",
            technologies:[
                "/Images/Technologies/HTML5.png",
                "/Images/Technologies/CSS.png",
                "/Images/Technologies/JavaScript.png"
            ],     
        },
        {
            name: "Granja estelar DB",
            logo: "/Images/Projects/Granja Estelar Logo.png",
            description: "Database created in MySQL to record and facilitate access to information on the agricultural production of a farm.",
            year: "2024",
            repository: "https://github.com/JuanJTorresB/Granja-Estelar-DB",
            technologies:[
                "/Images/Technologies/MySQL.png",
                "/Images/Technologies/UML.png"
            ],     
        },
        {
            name: "BillUp",
            logo: "/Images/Projects/BillUp.webp",
            description: "Invoicing system built with React, Express, and PostgreSQL, which aids in the management of clients, users, products, sales, and purchases.",
            year: "2024",
            repository: "https://github.com/JoanSebastianRuiz/BillUp",
            technologies:[
                "/Images/Technologies/Express.png",
                "/Images/Technologies/Postgres.png",
                "/Images/Technologies/React.png",
                "/Images/Technologies/Tailwind.png"
                
            ],     
        },
        {
            name: "Pokemon Database",
            logo: "/Images/Projects/Pokemon.jpg",
            description: "Relational database of the Pokémon world, where data about gyms, regions, Pokémon, their moves, abilities, and more can be found.",
            year: "2024",
            repository: "https://github.com/JuanJTorresB/Pokemon_Data_Base",
            technologies:[
                "/Images/Technologies/MySQL.png",
                "/Images/Technologies/UML.png"
            ],     
        },
        {
            name: "Star Wars",
            logo: "/Images/Projects/StarWars.png",
            demo: "https://juanjtorresb.github.io/Proyecto_JavaScript_TorresJuanRuizJoan/",
            description: "This project uses the SWAPI API to create a web page for retrieving information on Characters, Species, Planets, and Starships with search filters.",
            year: "2024",
            repository: "https://github.com/JuanJTorresB/Proyecto_JavaScript_TorresJuanRuizJoan",
            technologies:[
                "/Images/Technologies/MySQL.png",
                "/Images/Technologies/UML.png"
            ]
        }
    ];
    return(
        <div className="bg-indigo-500 min-h-screen relative">
            <BentoGrid projects={projects}/>
        </div>
    )
}