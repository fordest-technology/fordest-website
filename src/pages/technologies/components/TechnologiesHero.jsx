import { motion } from "framer-motion";

const TechnologiesHero = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: { duration: 1.5, ease: "easeOut" },
        },
      };
    
      const textContainerVariants = {
        hidden: { opacity: 0, y: 40 },
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.8,
            ease: "easeOut",
            staggerChildren: 0.3,
          },
        },
      };
    
      const textItemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.6, ease: "easeOut" },
        },
      };
    
      const underlineVariants = {
        hidden: { scaleX: 0 },
        visible: {
          scaleX: 1,
          transition: { duration: 0.6, ease: "easeOut", delay: 0.2 },
        },
      };
    
      return (
        <motion.div
          className="w-full h-[500px] mt-16 flex flex-col gap-4 justify-center items-center"
          style={{
            backgroundImage: "url('/technologiesHero.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div
            className="flex flex-col items-center gap-2"
            variants={textContainerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.h2
              className="text-white text-2xl md:text-3xl lg:text-4xl font-bold text-center px-2 md:px-4"
              variants={textItemVariants}
            >
              Technologes & Expertise
            </motion.h2>
            <motion.div
              className="h-1 w-12 md:w-16 lg:w-20 bg-white rounded-full origin-left"
              variants={underlineVariants}
            ></motion.div>
          </motion.div>
    
          <motion.div
            className="max-w-[800px] px-10"
            variants={textContainerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.p
              className="text-center text-lg text-white font-semibold leading-[27px]"
              variants={textItemVariants}
            >
             At Fordest Technologies, we pride ourselves on our diverse technological skill set, enabling us to provide tailored solutions that meet the unique needs of our clients.
            </motion.p>
      </motion.div>
    </motion.div>
  );
};

export default TechnologiesHero
