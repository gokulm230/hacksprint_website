import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import StarfieldBackground from '../components/StarfieldBackground';

const SponsorsPage = () => {
  const navigate = useNavigate();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100
      }
    }
  };

  return (
    <motion.div 
      className="relative w-full min-h-screen bg-black spaceship-cursor"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
    >
      <div className="fixed inset-0 w-full h-full">
        <StarfieldBackground />
      </div>
      
      

      <motion.div 
        className="relative z-10 flex flex-col items-center justify-start p-4 sm:p-6 md:p-8 py-12 sm:py-16 min-h-screen page-with-progress-bar"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div className="text-center space-y-4 sm:space-y-6 md:space-y-8 max-w-4xl w-full px-4" variants={containerVariants}>
          <motion.h1 
            className="text-3xl md:text-5xl lg:text-6xl font-black text-white tracking-wider cursor-pointer"
            variants={itemVariants}
            style={{
              fontFamily: "'Pixelify Sans', monospace",
              fontWeight: 700,
              textShadow: "0px 0px 20px rgba(6, 182, 212, 0.5)"
            }}
          >
            SPONSORS
          </motion.h1>
          
          <motion.div className="space-y-6 text-white/90" variants={itemVariants}>
            <motion.p 
              className="text-xl md:text-2xl text-cyan-400 font-semibold space-font"
              style={{ fontFamily: "'Orbitron', sans-serif" }}
            >
              Our Amazing Partners
            </motion.p>
            
            <motion.p 
              className="text-lg md:text-xl leading-relaxed body-font"
              style={{ fontFamily: "'Rajdhani', sans-serif" }}
            >
              Meet the incredible organizations supporting HackSprint 2025. 
              Together, we're building the future of technology and innovation.
            </motion.p>

            <motion.div 
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mt-8 sm:mt-12"
              variants={containerVariants}
            >
              {[1, 2, 3, 4, 5, 6].map((sponsor) => (
                <motion.div
                  key={sponsor}
                  className="bg-gradient-to-br from-cyan-500/10 to-purple-500/10 border border-cyan-400/30 rounded-lg p-6 backdrop-blur-sm"
                  variants={itemVariants}
                  whileHover={{ scale: 1.05, borderColor: "rgba(6, 182, 212, 0.8)" }}
                >
                  <div className="w-full h-20 bg-white/10 rounded-lg flex items-center justify-center mb-4">
                    <span className="text-white/60 space-font">Logo {sponsor}</span>
                  </div>
                  <h3 className="text-white font-bold text-lg mb-2 space-font">Sponsor {sponsor}</h3>
                  <p className="text-white/80 text-sm body-font">Supporting innovation and creativity</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default SponsorsPage;