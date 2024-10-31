import React from "react";

// Dynamic team data array
const teamMembers = [
  {
    name: "Sanya Ololade",
    position: "Founder/CEO",
    role: "Software Engineer",
    image: "/images/team_member1.png",
    socialLinks: {
      linkedin: "/icons/jam_linkedin-square.svg",
      website: "/icons/mage_x.svg",
      instagram: "/icons/cib_instagram.svg",
      facebook: "/icons/mingcute_facebook-line.svg",
    },
  },
  {
    name: "Jane Doe",
    position: "Lead Designer",
    role: "Creative Designer",
    image: "/images/team_member2.png",
    socialLinks: {
      linkedin: "/icons/jam_linkedin-square.svg",
      website: "/icons/mage_x.svg",
      instagram: "/icons/cib_instagram.svg",
      facebook: "/icons/mingcute_facebook-line.svg",
    },
  },
  {
    name: "Jane Doe",
    position: "Lead Designer",
    role: "Creative Designer",
    image: "/images/team_member2.png",
    socialLinks: {
      linkedin: "/icons/jam_linkedin-square.svg",
      website: "/icons/mage_x.svg",
      instagram: "/icons/cib_instagram.svg",
      facebook: "/icons/mingcute_facebook-line.svg",
    },
  },
  {
    name: "Jane Doe",
    position: "Lead Designer",
    role: "Creative Designer",
    image: "/images/team_member2.png",
    socialLinks: {
      linkedin: "/icons/jam_linkedin-square.svg",
      website: "/icons/mage_x.svg",
      instagram: "/icons/cib_instagram.svg",
      facebook: "/icons/mingcute_facebook-line.svg",
    },
  },
  // Add more team members as needed
];

const OurTeam = () => {
  return (
    <div className="flex flex-col w-[90%] max-w-7xl mx-auto my-20 gap-8">
      {/* Section Header */}
      <div className="flex flex-col items-start gap-4">
        <h2 className="text-[#0B0C3A] text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold">
          Meet the Team
        </h2>
        <div className="h-1 w-12 md:w-16 lg:w-20 bg-[#0B0C3A] rounded-full"></div>
        <p className="text-sm sm:text-base font-medium text-[#000000] max-w-4xl">
          Our team is our greatest asset. Comprising seasoned developers,
          creative designers, and dedicated professionals, each member brings a
          unique skill set and perspective to the table. Together, we form a
          collaborative force committed to turning your visions into reality.
        </p>
      </div>

      {/* Team Members Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-7">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className="flex flex-col justify-center items-center gap-2 border py-6 px-6 rounded-lg border-[#BDBDBD] shadow-md"
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
              <a href="#" aria-label="LinkedIn">
                <img
                  src={member.socialLinks.linkedin}
                  alt="LinkedIn Icon"
                  className="w-5 h-5"
                />
              </a>
              <a href="#" aria-label="Website">
                <img
                  src={member.socialLinks.website}
                  alt="Website Icon"
                  className="w-5 h-5"
                />
              </a>
              <a href="#" aria-label="Instagram">
                <img
                  src={member.socialLinks.instagram}
                  alt="Instagram Icon"
                  className="w-5 h-5"
                />
              </a>
              <a href="#" aria-label="Facebook">
                <img
                  src={member.socialLinks.facebook}
                  alt="Facebook Icon"
                  className="w-5 h-5"
                />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurTeam;
