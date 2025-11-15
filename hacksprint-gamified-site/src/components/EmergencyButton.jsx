import React, { useState } from 'react';
import { motion } from 'framer-motion';

const EmergencyButton = ({ onStartLoading }) => {
  const [isPressed, setIsPressed] = useState(false);
  const [showMessage, setShowMessage] = useState(false);

  const handleClick = () => {
    setIsPressed(true);
    setShowMessage(true);
    
    setTimeout(() => setIsPressed(false), 200);
    setTimeout(() => setShowMessage(false), 1000);
    
    // Start the loading sequence after a brief delay
    setTimeout(() => {
      if (onStartLoading) {
        onStartLoading();
      }
    }, 100);
  };

  return (
    <motion.div 
      className="flex flex-col items-center space-y-6"
      initial={{ scale: 0, rotate: -180 }}
      animate={{ scale: 1, rotate: 0 }}
      transition={{ 
        type: "spring",
        damping: 10,
        stiffness: 100,
        delay: 1.5
      }}
    >
      {/* Emergency Button */}
      <motion.button
        onClick={handleClick}
        className="relative w-40 h-40 md:w-48 md:h-48 rounded-full bg-linear-to-b from-red-500 to-red-700 border-4 border-red-800"
        whileHover={{ 
          scale: 1.1,
          boxShadow: "0px 0px 50px rgba(239,68,68,0.8), 0px 0px 100px rgba(239,68,68,0.6)",
          transition: { type: "spring", stiffness: 300 }
        }}
        whileTap={{ 
          scale: 0.9,
          transition: { type: "spring", stiffness: 500 }
        }}
        animate={{
          boxShadow: [
            "0px 0px 30px rgba(239,68,68,0.6), 0px 0px 60px rgba(239,68,68,0.4)",
            "0px 0px 40px rgba(239,68,68,0.8), 0px 0px 80px rgba(239,68,68,0.6)",
            "0px 0px 30px rgba(239,68,68,0.6), 0px 0px 60px rgba(239,68,68,0.4)"
          ]
        }}
        transition={{
          boxShadow: {
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }
        }}
      >
        {/* Button highlight */}
        <motion.div 
          className="absolute inset-0 rounded-full bg-linear-to-b from-white/30 to-transparent opacity-50"
          animate={{ opacity: [0.3, 0.7, 0.3] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        />
        
        {/* Button text */}
        <motion.div 
          className="relative flex flex-col items-center justify-center h-full"
          whileHover={{ scale: 1.1 }}
          transition={{ type: "spring", stiffness: 400 }}
        >
          <motion.span 
            className="text-white text-2xl md:text-3xl font-black tracking-wider drop-shadow-lg"
            animate={{ 
              textShadow: [
                "0px 0px 10px rgba(255,255,255,0.5)",
                "0px 0px 20px rgba(255,255,255,0.8)",
                "0px 0px 10px rgba(255,255,255,0.5)"
              ]
            }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            START
          </motion.span>
          <motion.span 
            className="text-white/80 text-xs md:text-sm font-semibold mt-1"
            animate={{ opacity: [0.6, 1, 0.6] }}
            transition={{ duration: 1.8, repeat: Infinity }}
          >
            EMERGENCY
          </motion.span>
        </motion.div>
        
        {/* Animated glow effect */}
        <motion.div 
          className="absolute inset-0 rounded-full bg-red-500 blur-xl opacity-40"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </motion.button>

     
    </motion.div>
  );
};

export default EmergencyButton;
