import React from 'react';
import { motion } from 'framer-motion';
import StarfieldBackground from '../components/StarfieldBackground';
import NavigationOrb from '../components/NavigationOrb';

const TeamPage = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.1
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

  const teamMembers = [
    {
      name: "Alex Chen",
      role: "Lead Organizer",
      bio: "Passionate about bringing innovators together",
      avatar: "👨‍💻"
    },
    {
      name: "Sarah Johnson",
      role: "Tech Lead",
      bio: "Full-stack developer and mentor",
      avatar: "👩‍💻"
    },
    {
      name: "Mike Rodriguez",
      role: "Design Director",
      bio: "Creating amazing user experiences",
      avatar: "🎨"
    },
    {
      name: "Emily Wang",
      role: "Community Manager",
      bio: "Building connections and fostering collaboration",
      avatar: "🤝"
    },
    {
      name: "David Kim",
      role: "Logistics Coordinator",
      bio: "Making sure everything runs smoothly",
      avatar: "📋"
    },
    {
      name: "Lisa Thompson",
      role: "Marketing Lead",
      bio: "Spreading the word about innovation",
      avatar: "📢"
    }
  ];

  return (
    <motion.div 
      className="relative w-full min-h-screen overflow-hidden bg-black spaceship-cursor"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
    >
      <StarfieldBackground />
      
      {/* Navigation Orb */}
      <div className="fixed bottom-8 right-8 z-30">
        <NavigationOrb />
      </div>

      <motion.div 
        className="absolute inset-0 z-10 flex flex-col items-center justify-center p-8 py-16"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div className="text-center space-y-8 max-w-6xl w-full" variants={containerVariants}>
          <motion.h1 
            className="text-3xl md:text-5xl lg:text-6xl font-black text-white tracking-wider cursor-pointer"
            variants={itemVariants}
            style={{
              fontFamily: "'Pixelify Sans', monospace",
              fontWeight: 700,
              textShadow: "0px 0px 20px rgba(6, 182, 212, 0.5)"
            }}
          >
            MEET THE CREW
          </motion.h1>
          
          <motion.p 
            className="text-xl md:text-2xl text-cyan-400 font-semibold space-font"
            variants={itemVariants}
            style={{ fontFamily: "'Orbitron', sans-serif" }}
          >
            The Amazing Team Behind HackSprint
          </motion.p>

          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12"
            variants={containerVariants}
          >
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                className="bg-white/5 border border-cyan-400/20 rounded-lg p-6 backdrop-blur-sm text-center"
                variants={itemVariants}
                whileHover={{ 
                  scale: 1.05,
                  borderColor: "rgba(6, 182, 212, 0.5)",
                  backgroundColor: "rgba(255, 255, 255, 0.08)"
                }}
              >
                <motion.div 
                  className="text-6xl mb-4"
                  whileHover={{ scale: 1.2, rotate: 5 }}
                >
                  {member.avatar}
                </motion.div>
                <h3 className="text-white font-bold text-xl mb-2 space-font">
                  {member.name}
                </h3>
                <p className="text-cyan-400 font-semibold mb-3 space-font">
                  {member.role}
                </p>
                <p className="text-white/80 body-font text-sm leading-relaxed">
                  {member.bio}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default TeamPage;