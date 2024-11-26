export const Texto = () =>{
    return(
            <span className=" font-mosk900 text-center items-center leading-normal text-gray-900 text-4xl sm:text-5xl md:text-6xl sm:leading-snug md:leading-normal">I <TextoSinRelleno text="specialize"/> in transforming ideas into <TextoSinRelleno text="innovative"/> & efficient digital <TextoSinRelleno text="solutions"/>.</span>
    );
}

const TextoSinRelleno = ({text}) =>{
    return(
        <span className="text-stroke text-transparent ">{text}</span>
    );
}



