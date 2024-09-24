import { motion, MotionConfig } from "framer-motion";
import React, {useState} from "react";
const SideButton = () => {
  const [active, setActive] = useState(false);
  return (
  <MotionConfig
    transition={{
      duration: 0.5,
      ease: "easeInOut"
    }}
  >
    <motion.button 
      initial={false}
      onClick={() => setActive((pv) => !pv)}
      className="hidden max-lg:block relative h-16 w-16 rounded-full bg-slate-700/0 transition-colors hover:bg-violet-500"
      animate={active? "open" : "closed" }
      >
      <motion.span 
      style={{
        left:"50%",
        top:"35%",
        x: "-50%",
        y: "-50%"
      }}
      className="absolute h-1 w-10 bg-black " 
      variants={{
        open: {
          rotate: ["0deg", "0deg", "45deg"],
          top: ["35%", "50%", "50%"]
        },
        closed: {
          rotate: ["45deg", "0deg", "0deg"],
          top: ["50%", "50%", "35%"]
        },
      }}
      />
      <motion.span 
      style={{
        left: "50%",
        top: "50%",
        x: "-50%",
        y: "-50%"
      }}
      className="absolute h-1 w-10 bg-black " 
      variants={{
        open: {
          rotate: ["0deg", "0deg", "-45deg"],
        },
        closed: {
          rotate: ["-45deg", "0deg", "0deg"],
        },
      }}
      />
      <motion.span
      style={{
        bottom: "28%",
        left: "calc(50% + 5px)",
        x: "-50%",
        y: "-50%"
      }}
      className="absolute h-1 w-7 bg-black " 
      variants={{
        open: {
          rotate: ["0deg", "0deg", "45deg"],
          left: "43%",
          bottom: ["28%", "43%", "51%"]
        },
        closed: {
          rotate: ["45deg", "0deg", "0deg"],
          left: "calc(50% + 5px)",
          bottom: ["50%", "50%", "28%"]
        },
      }}
      />
    </motion.button>
  </MotionConfig>
  )
}

export default SideButton