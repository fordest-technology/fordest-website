"use client"

const WhyChooseFordest = () => {
  return (
    <div className="w-full bg-white py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-start gap-12">
          {/* Left side - Content */}
          <div className="w-full md:w-1/2">
            <h2 className="text-4xl font-bold text-[#0B0C3A] mb-12">
              Why Choose Fordest Technologies for Your Software Needs?
            </h2>
            <div className="space-y-8">
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0">
                  <svg width="45" height="46" viewBox="0 0 45 46" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect y="0.5" width="45" height="45" rx="22.5" fill="#CDDEFF"/>
                    <path d="M31.875 31.75H13.125V14.25H31.875V31.75ZM15 16.125V29.875H30V16.125H15ZM27.1875 25.1875H18.75V23.3125H27.1875V25.1875ZM27.1875 21.4375H18.75V19.5625H27.1875V21.4375Z" fill="#0057FF"/>
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-medium text-[#0057FF] mb-2">Expertise:</h3>
                  <p className="text-gray-800 leading-relaxed">
                    Our team of skilled professionals brings a wealth of experience to the table, ensuring your projects are in capable hands.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="flex-shrink-0">
                  <svg width="45" height="46" viewBox="0 0 45 46" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect y="0.5" width="45" height="45" rx="22.5" fill="#CDDEFF"/>
                    <path d="M22.5 10.5L18.75 14.25H21.25V21.75H23.75V14.25H26.25L22.5 10.5ZM28.75 31.75H16.25C15.5625 31.75 15 31.1875 15 30.5V24.25H17.5V29.25H27.5V24.25H30V30.5C30 31.1875 29.4375 31.75 28.75 31.75Z" fill="#0057FF"/>
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-medium text-[#0057FF] mb-2">Innovation:</h3>
                  <p className="text-gray-800 leading-relaxed">
                    We stay at the forefront of technological advancements, incorporating the latest trends and methodologies into our services to keep your business ahead of the curve.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="flex-shrink-0">
                  <svg width="45" height="46" viewBox="0 0 45 46" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect y="0.5" width="45" height="45" rx="22.5" fill="#CDDEFF"/>
                    <path d="M31.875 31.75H13.125V14.25H31.875V31.75ZM15 29.875H30V16.125H15V29.875ZM22.5 26.125C20.625 26.125 19.0625 24.5625 19.0625 22.6875C19.0625 20.8125 20.625 19.25 22.5 19.25C24.375 19.25 25.9375 20.8125 25.9375 22.6875C25.9375 24.5625 24.375 26.125 22.5 26.125Z" fill="#0057FF"/>
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-medium text-[#0057FF] mb-2">Client-Centric Approach:</h3>
                  <p className="text-gray-800 leading-relaxed">
                    Your success is our priority. We work closely with you to understand your goals and deliver solutions that align with your unique requirements.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right side - Image */}
          <div className="w-full md:w-1/2">
            <div className="relative">
              <img 
                src="/why-choose-us.png" 
                alt="Why Choose Fordest Technologies" 
                className="w-[90%] rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default WhyChooseFordest 