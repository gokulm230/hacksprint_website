import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import EmergencyButton from "../components/EmergencyButton";
import StarfieldBackground from "../components/StarfieldBackground";
import SpaceshipLoadingAnimation from "../components/SpaceShipLoading";
import NavigationOrb from "../components/NavigationOrb";

const Home = () => {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleStartLoading = () => {
    setIsLoading(true);

    // Show loading for 3 seconds, then navigate to about page
    setTimeout(() => {
      navigate("/about");
    }, 3000);
  };

  if (isLoading) {
    return <SpaceshipLoadingAnimation />;
  }

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 200,
      },
    },
  };

  const titleVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        damping: 10,
        stiffness: 100,
        delay: 0.5,
      },
    },
    hover: {
      scale: 1.05,
      textShadow: "0px 0px 30px rgba(6, 182, 212, 0.8)",
      transition: {
        type: "spring",
        damping: 10,
        stiffness: 400,
      },
    },
  };

  const floatingVariants = {
    animate: {
      y: [-10, 10, -10],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  return (
    <motion.div
      className="relative w-full h-screen overflow-hidden bg-black spaceship-cursor"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {/* Three.js Canvas for 3D starfield background */}
      <StarfieldBackground />

     

      {/* Main content overlay */}
      <motion.div
        className="absolute inset-0 z-10 flex flex-col items-center justify-center pl-16 md:pl-24 lg:pl-32"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Title Section */}
        <motion.div className="text-center space-y-4" variants={itemVariants}>
          <motion.h1
            className="text-5xl md:text-7xl lg:text-8xl font-black text-white tracking-wider cursor-pointer"
            variants={titleVariants}
            whileHover="hover"
            style={{
              fontFamily: "'Pixelify Sans', monospace",
              fontWeight: 700,
              textShadow: "0px 0px 20px rgba(6, 182, 212, 0.5)",
            }}
          >
            HACKSPRINT
          </motion.h1>

          <motion.p
            className="text-lg md:text-2xl text-cyan-400 font-semibold tracking-wide"
            variants={itemVariants}
            whileHover={{
              scale: 1.1,
              color: "#22d3ee",
              transition: { type: "spring", stiffness: 300 },
            }}
            style={{
              fontFamily: "'Orbitron', sans-serif",
            }}
          >
            36 HOUR HACKATHON
          </motion.p>

          <motion.p
            className="text-lg md:text-xl text-white/80 font-light mt-6 body-font"
            variants={itemVariants}
            whileHover={{
              color: "#ffffff",
              transition: { duration: 0.3 },
            }}
          >
            Are You Ready to Join the Crew?
          </motion.p>
        </motion.div>

        {/* Emergency Start Button */}
        <motion.div
          className="mt-16"
          variants={floatingVariants}
          animate="animate"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <EmergencyButton onStartLoading={handleStartLoading} />
        </motion.div>

        {/* Interactive particles */}
        <motion.div
          className="absolute inset-0 pointer-events-none"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
        >
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-cyan-400 rounded-full"
              style={{
                left: `${20 + i * 15}%`,
                top: `${30 + i * 10}%`,
              }}
              animate={{
                scale: [0, 1, 0],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                delay: i * 0.5,
                ease: "easeInOut",
              }}
            />
          ))}
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Home;
