import React from "react";

const ServicesSection = () => {
  const services = [
    {
      icon: "/icons/solar_programming-linear (2).svg",
      title: "Custom Software Development",
      description:
        "Turn your unique concepts into reality with our custom software development services. Whether you're a startup with groundbreaking ideas or an established enterprise seeking a tailored solution, our expert team is ready to bring your vision to life.",
    },
    {
      icon: "/icons/solar_programming-linear (3).svg",
      title: "Web and Mobile App Development",
      description:
        "Stay ahead in the digital landscape with our web and mobile app development expertise. From intuitive user interfaces to seamless user experiences, we create applications that engage and captivate your audience across devices.",
    },
    {
      icon: "/icons/iconoir_design-nib.svg",
      title: "UI/UX Design",
      description:
        "Make a lasting impression with visually stunning and user-friendly interfaces. Our UI/UX design services focus on creating designs that not only look good but enhance the overall user experience, ensuring maximum satisfaction and engagement.",
    },
    {
      icon: "/icons/arcticons_dns-test.svg",
      title: "Quality Assurance and Testing",
      description:
        "Ensure the reliability and performance of your software with our rigorous quality assurance and testing services. From functionality and security testing to performance optimization, we guarantee a flawless user experience.",
    },
    {
      icon: "/icons/material-symbols_bookmark-manager-outline.svg",
      title: "Product Management",
      description:
        "Maximize the potential of your products with our comprehensive product management services. From ideation to market launch, we assist in defining product roadmaps, prioritizing features, and ensuring alignment with your business goals. Our product management expertise ensures that your offerings not only meet but exceed customer expectations.",
    },
    {
      icon: "/icons/fluent-mdl2_shop-server.svg",
      title: "E-commerce Solutions",
      description:
        "Elevate your online business with our tailored e-commerce solutions. Whether you’re looking to set up a new online store, optimize an existing one, or integrate advanced e-commerce features, our team is equipped to meet your specific requirements. We provide end-to-end solutions, from secure payment gateways to user-friendly interfaces, ensuring a seamless and secure shopping experience for your customers.",
    },
  ];

  return (
    <section className="bg-[#F4F7FD] py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-12 items-start">
          {services.map((service, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center gap-4 px-4"
            >
              <img
                src={service.icon}
                alt={`${service.title} icon`}
                className="w-10 h-10 object-contain"
              />
              <h3 className="text-[#0B0C3A] text-lg font-semibold">
                {service.title}
              </h3>
              <p className="text-sm md:text-base text-gray-700">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
