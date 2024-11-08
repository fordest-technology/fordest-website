import React from "react";
import { motion } from "framer-motion";

const OurTeam = () => {
  // Dynamic team data array with updated socialLinks structure
  const teamMembers = [
    {
      name: "Sanya Ololade",
      position: "Founder/CEO",
      role: "Software Engineer",
      image: "/Sanya-Ololade-headsh.jpg",
      socialLinks: {
        linkedin: {
          image: "/icons/jam_linkedin-square.svg",
          link: "https://www.linkedin.com/in/sanyaololade",
        },
        x: {
          image: "/icons/mage_x.svg",
          link: "https://x.com/sanyaololade",
        },
        instagram: {
          image: "/icons/cib_instagram.svg",
          link: "https://instagram.com/sanyaololade",
        },
        facebook: {
          image: "/icons/mingcute_facebook-line.svg",
          link: "https://facebook.com/sanyaololade",
        },
      },
    },
    {
      name: "Akinmolayan John",
      position: "Software Engineer",
      role: "Co-founder/CTO",
      image: "https://ui-avatars.com/api/?name=John+Akinmolayan?color=#e32?",
      socialLinks: {
        linkedin: {
          image: "/icons/jam_linkedin-square.svg",
          link: "https://www.linkedin.com/in/janedoe",
        },
        x: {
          image: "/icons/mage_x.svg",
          link: "https://x.com/janedoe",
        },
        instagram: {
          image: "/icons/cib_instagram.svg",
          link: "https://instagram.com/janedoe",
        },
        facebook: {
          image: "/icons/mingcute_facebook-line.svg",
          link: "https://facebook.com/janedoe",
        },
      },
    },
    // Add more team members as needed
  ];

  const headerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut", staggerChildren: 0.3 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <div className="flex flex-col w-[90%] max-w-7xl mx-auto my-20 gap-8">
      {/* Section Header */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={headerVariants}
        className="flex flex-col items-start gap-4"
      >
        <motion.h2
          className="text-[#0B0C3A] text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold"
          variants={headerVariants}
        >
          Meet the Team
        </motion.h2>
        <motion.div
          className="h-1 w-12 md:w-16 lg:w-20 bg-[#0B0C3A] rounded-full"
          variants={headerVariants}
        ></motion.div>
        <motion.p
          className="text-sm sm:text-base font-medium text-[#000000] max-w-4xl"
          variants={headerVariants}
        >
          Our team is our greatest asset. Comprising seasoned developers,
          creative designers, and dedicated professionals, each member brings a
          unique skill set and perspective to the table. Together, we form a
          collaborative force committed to turning your visions into reality.
        </motion.p>
      </motion.div>

      {/* Team Members Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-7">
        {teamMembers.map((member, index) => (
          <motion.div
            key={index}
            className="flex flex-col justify-center items-center gap-2 border py-6 px-6 rounded-lg border-[#BDBDBD] shadow-md"
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div className="bg-slate-200 w-32 h-32 rounded-full overflow-hidden">
              <img
                src={member.image}
                alt={`${member.name} profile`}
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-lg font-semibold text-[#0B0C3A]">
              {member.name}
            </h3>
            <h4 className="text-sm font-medium text-gray-700">
              {member.position}
            </h4>
            <p className="text-sm text-gray-600">{member.role}</p>
            <div className="flex flex-row gap-3 mt-2">
              {Object.entries(member.socialLinks).map(
                ([key, { image, link }]) => (
                  <motion.a
                    key={key}
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    className="cursor-pointer"
                    aria-label={key.charAt(0).toUpperCase() + key.slice(1)}
                  >
                    <img src={image} alt={`${key} Icon`} className="w-5 h-5" />
                  </motion.a>
                )
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default OurTeam;
