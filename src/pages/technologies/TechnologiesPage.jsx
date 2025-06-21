import TechnologiesHero from "./components/TechnologiesHero"
import ProgrammingLanguages from "./components/ProgrammingLanguages"
import { motion } from "framer-motion";
import WebDevelopmentSection from "./components/WebDevelopmentSection";
import QualityAssurance from "./components/QualityAssurance";
import WhyChooseFordest from "./components/WhyChooseFordest";
import GetInTouch from "./components/GetInTouch";


const sectionVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };
  
  const TechnologiesPage = () => {
    return (
      <div>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={sectionVariants}
          viewport={{ once: true, amount: 0.2 }}
        >
          <TechnologiesHero />
        </motion.div>
  
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionVariants}
        >
          <ProgrammingLanguages />
        </motion.div>
  
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionVariants}
        >
          <WebDevelopmentSection />
        </motion.div>
  
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionVariants}
        >
          <QualityAssurance />
        </motion.div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionVariants}
        >
          <WhyChooseFordest />
        </motion.div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionVariants}
        >
          <GetInTouch />
        </motion.div>
  
        {/* <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionVariants}
        >
          <GetInTouch />
        </motion.div> */}
      </div>
    );
  };
export default TechnologiesPage