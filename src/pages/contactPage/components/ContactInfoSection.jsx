import React from "react";
import { Mail, Phone, MapPin, Clock } from "lucide-react";

const ContactInfoSection = () => {
  return (
    <div className="max-w-7xl mx-auto py-16 px-4 grid grid-cols-1 md:grid-cols-2 gap-12 text-left">
      {/* General Inquiries */}
      <div>
        <h3 className="text-[#0057FF] font-bold text-xl mb-2">
          General Inquiries:
        </h3>
        <p className="text-gray-700 mb-4">
          For general inquiries or information about our services, please feel
          free to contact us via email or phone.
        </p>
        <div className="flex items-center space-x-2 text-gray-800">
          <Mail className="h-5 w-5 text-[#0057FF]" />
          <span>info@fordestech.com</span>
        </div>
        <div className="flex items-center space-x-2 text-gray-800 mt-2">
          <Phone className="h-5 w-5 text-[#0057FF]" />
          <span>+2348127874913</span>
        </div>
      </div>

      {/* Sales and Partnerships */}
      <div>
        <h3 className="text-[#0057FF] font-bold text-xl mb-2">
          Sales and Partnerships:
        </h3>
        <p className="text-gray-700 mb-4">
          If you have specific questions regarding our services, partnership
          opportunities, or would like to discuss a potential project, our sales
          team is ready to assist you.
        </p>
        <div className="flex items-center space-x-2 text-gray-800">
          <Mail className="h-5 w-5 text-[#0057FF]" />
          <span>sales@fordestech.com</span>
        </div>
      </div>

      {/* Visit Our Office */}
      <div>
        <h3 className="text-[#0057FF] font-bold text-xl mb-2">
          Visit Our Office:
        </h3>
        <p className="text-gray-700 mb-4">
          If you prefer face-to-face communication, you are welcome to visit our
          office during business hours.
        </p>
        <div className="flex items-start space-x-2 text-gray-800">
          <MapPin className="h-5 w-5 text-[#0057FF]" />
          <div>
            <p>Fordest Technologies</p>
            <p>30 Liasu Road Ikotun,</p>
            <p>Lagos State, Nigeria</p>
          </div>
        </div>
      </div>

      {/* Business Hours */}
      <div>
        <h3 className="text-[#0057FF] font-bold text-xl mb-2">
          Business Hours:
        </h3>
        <p className="text-gray-700 mb-4">
          Monday - Friday: 9:00 AM to 5:00 PM
        </p>
        <p className="text-gray-700 font-semibold mb-2">We’re Here to Help:</p>
        <p className="text-gray-700">
          Whether you have a question about our services, want to explore
          partnership opportunities, or need assistance with an existing
          project, we’re here to help. Please don’t hesitate to reach out using
          the contact information provided above. We strive to respond to all
          inquiries promptly.
        </p>
        <p className="text-gray-700 mt-4">
          Thank you for choosing Fordest Technologies. We look forward to
          hearing from you!
        </p>
      </div>
    </div>
  );
};

export default ContactInfoSection;
