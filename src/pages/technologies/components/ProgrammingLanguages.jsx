import { motion } from "framer-motion";
import TechCard from "./tech-card";

const ProgrammingLanguages = () => {
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


      const techCards = [
        {
          title: "JavaScript (React.js, Next.js)",
          description:
            "Craft dynamic and responsive user interfaces with React.js, and leverage the versatility of Next.js for server-side rendering.",
          logos: [
            {
              src: "/react.png",
              alt: "React Logo",
              width: 60,
              height: 60,
            },
            {
              src: "/next.png",
              alt: "Next.js Logo",
              width: 40,
              height: 40,
            },
            {
              src: "/javascript.png",
              alt: "JavaScript Logo",
              width: 40,
              height: 40,
            },
          ],
          logoLayout: "three-logos",
        },
        {
          title: "JavaScript (Node.js, Express.js)",
          description:
            "Utilize the power of Node.js for server-side JavaScript and build robust and scalable web applications with the Express.js framework.",
          logos: [
            {
              src: "/javascript.png",
              alt: "JavaScript Logo",
              width: 40,
              height: 40,
            },
            {
              src: "/express.png",
              alt: "Express.js Logo",
              width: 40,
              height: 40,
            },
            {
              src: "/node.png",
              alt: "Node.js Logo",
              width: 40,
              height: 40,
            },
          ],
          logoLayout: "stacked",
        },
        {
          title: "PHP",
          description:
            "Develop dynamic and feature-rich websites with PHP, a server-side scripting language known for its flexibility and broad support.",
          logos: [
            {
              src: "/php.png",
              alt: "PHP Logo",
              width: 60,
              height: 60,
            },
          ],
          logoLayout: "single",
        },
        {
          title: "React Native",
          description:
            "Develop dynamic and feature-rich applications with PHP, a server-side scripting language known for its flexibility and broad support.",
          logos: [
            {
              src: "/reactNative.png",
              alt: "React Native Logo",
              width: 60,
              height: 60,
            },
          ],
          logoLayout: "single",
        },
        {
          title: "SQL and NoSQL (Database Management)",
          description:
            "Develop dynamic and feature-rich websites with MySQL, a database management system known for its flexibility and broad support.",
          logos: [
            {
              src: "/mysql.png",
              alt: "MySQL Logo",
              width: 60,
              height: 60,
            },
          ],
          logoLayout: "single",
        },
      ]
    
  return (
    <motion.div
    className="flex flex-col items-center gap-2"
    variants={textContainerVariants}
    initial="hidden"
    animate="visible"
  >
      <motion.h2
              className="text-[#0B0C3A] text-[20px] md:text-3xl lg:text-4xl font-bold text-center px-2 md:px-4 md:py-2"
              variants={textItemVariants}
            >
              Programming Languages
            </motion.h2>
            <motion.div
              className="h-1 w-12 md:w-16 lg:w-20 bg-[#0B0C3A] rounded-full origin-left"
              variants={underlineVariants}
            ></motion.div>

<div className="min-h-screen p-8 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        {/* Top row with 3 cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          {techCards.slice(0, 3).map((card, index) => (
            <div key={index}>
              <TechCard
                title={card.title}
                description={card.description}
                logos={card.logos}
                logoLayout={card.logoLayout}
              />
            </div>
          ))}
        </div>

        {/* Bottom row with 2 cards centered */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:w-2/3 mx-auto">
          {techCards.slice(3, 5).map((card, index) => (
            <div key={index}>
              <TechCard
                title={card.title}
                description={card.description}
                logos={card.logos}
                logoLayout={card.logoLayout}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
    

            </motion.div>

  )
}

export default ProgrammingLanguages
