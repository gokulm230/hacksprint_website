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
        className="relative w-56 h-20 md:w-64 md:h-24 px-6 py-4 md:px-8 md:py-6 rounded-lg bg-linear-to-b from-purple-500 to-purple-700 border-4 border-purple-800"
        whileHover={{ 
          scale: 1.05,
          transition: { type: "spring", stiffness: 300 }
        }}
        whileTap={{ 
          scale: 0.95,
          transition: { type: "spring", stiffness: 500 }
        }}
        animate={{
         
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
          className="absolute inset-0 rounded-lg bg-linear-to-b from-white/30 to-transparent opacity-50"
          animate={{ opacity: [0.3, 0.7, 0.3] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        />
        
        {/* Button text */}
        <motion.div 
          className="relative flex items-center justify-center h-full"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 400 }}
        >
          <motion.span 
            className="text-white text-2xl md:text-3xl font-black tracking-wider drop-shadow-lg"
            animate={{ 
              
            }}
            transition={{ duration: 2, repeat: Infinity }}
            style={{ fontFamily: "'Pixelify Sans', monospace" }}
          >
            START JOURNEY
          </motion.span>
        </motion.div>
        
        {/* Animated glow effect */}
        <motion.div 
          className="absolute inset-0 rounded-lg bg-purple-500 blur-xl opacity-40"
          animate={{
            scale: [1, 1.1, 1],
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
