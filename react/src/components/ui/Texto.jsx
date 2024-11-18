export const Texto = () =>{
    return(
            <span className=" font-mosk font-semibold text-center items-center  w-2/3 leading-normal  text-gray-800 text-6xl">I <TextoSinRelleno text="specialize"/> in transforming ideas into <TextoSinRelleno text="innovative"/> and efficient digital <TextoSinRelleno text="solutions"/>.</span>
    );
}

const TextoSinRelleno = ({text}) =>{
    return(
        <span className="text-stroke text-transparent ">{text}</span>
    );
}



