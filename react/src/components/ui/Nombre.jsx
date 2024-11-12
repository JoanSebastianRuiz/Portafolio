import { motion } from "framer-motion";
import { cn } from "../../lib/utils";



export const Nombre = ({
  applyMask = true,
  text = "Animata",
  delay = 0.09,
  direction = "drop",
  className,
  ...props
}) => {
  const common = "text-9xl font-bold drop-shadow-lg bg-clip-text bg-no-repeat text-transparent bg-gradient-to-r py-4 from-purple-500 via-violet-500 to-pink-500 [text-shadow:0_0_rgba(0,0,0,0.1)]";
  return (
    <div
      className={cn(
        "relative flex flex-col items-center justify-center text-foreground",
        className
      )}
      {...props}
    >
      {applyMask && <div className={cn(common, "absolute text-gray-400  ")}>{text}</div>}
      <div className="flex">
        {text.split("").map((letter, index) => (
          <motion.div
            className={common}
            initial={{ opacity: 0, y: direction === "up" ? 150 : -150 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: index * delay,
            }}
            key={`${letter}-${index}`}
          >
            {letter === " " ? <span>&nbsp;</span> : letter}
          </motion.div>
        ))}
      </div>
    </div>
  );
};

