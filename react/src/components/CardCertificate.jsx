import {motion} from "framer-motion";
import { useState } from "react";

export const CardCertificate = ({ name, place, duration, date, logo }) => {
    return (
      <div className="bg-amber-50 shadow-lg rounded-lg p-6 border border-gray-200 w-2/5">
        {logo && (
          <div className="flex justify-center mb-4">
            <img
              src={logo}
              alt={`${name} logo`}
              className="h-16 w-16 object-contain"
            />
          </div>
        )}
  
        {/* Title */}
        <h1 className="text-lg font-bold text-gray-800 text-center">{name}</h1>
  
        {/* Place */}
        {place && <p className="text-sm text-gray-500 text-center">{place}</p>}
  
        <div className="flex justify-between items-center mt-4">
          <p className="text-sm text-gray-600">{duration}</p>
          <p className="text-sm text-gray-600">{date}</p>
        </div>
      </div>
    );
  };


export const MainCertificate = ({ name, place, start, end, logo, title, description }) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  const handleFlip = () =>{
    if(!isAnimating){
      setIsFlipped(!isFlipped);
      setIsAnimating(true);
    }
  }

return (
    <div className="h-96 w-1/5 cursor-pointer">
      <div className="flip-card w-full h-full" onClick={handleFlip}>
        <motion.div
        className="flip-card-inner w-full h-full"
        initial={false}
        animate={{rotateY: isFlipped?180:0}}
        transition={{duration:0.6, animationDirection: "normal"}}
        onAnimationComplete={()=>setIsAnimating(false)}>

          <div className="flip-card-front w-full h-full bg-amber-50 p-6 rounded-xl border-gray-200 border shadow-lg flex items-center flex-col justify-center">
            {logo && (
                <div className="flex justify-center mb-4">
                <img
                    src={logo}
                    alt={`${name} logo`}
                    className="w-auto h-32 rounded-xl"
                />
                </div>
            )}

            <h1 className="text-lg font-bold text-gray-800 text-center">{name}</h1>

            {place && <p className="text-sm text-gray-500 text-center">{place}</p>}

            {title && <p className="text-sm text-gray-500 text-center">{title}</p>}

            <div className="w-1/2 h-1 bg-gray-400 rounded-full mx-auto my-4"></div>

            <div className="flex gap-x-20 justify-evenly mt-4">
                <p className="text-sm text-gray-600">{start}</p>
                <p className="text-sm text-gray-600">{end}</p>
            </div>

            
          </div>

          <div className="flip-card-back w-full h-full bg-amber-50 p-6 rounded-xl border-gray-200 border shadow-lg">
            <p className="text-justify">{description}</p>
          </div>
        </motion.div>
      </div>
      
    
    </div>
);
};



  