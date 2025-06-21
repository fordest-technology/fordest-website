"use client"

const GetInTouch = () => {
  return (
    <div className="w-full bg-white py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          {/* Left side - Image */}
          <div className="w-full md:w-1/2 relative">
            <div className="relative">
              {/* Image with border */}
              <div className="relative rounded-2xl overflow-hidden">
                <img 
                  src="/get-in-touch.png" 
                  alt="Get in Touch" 
                  className=" rounded-2xl"
                />
              </div>

            </div>
          </div>

          {/* Right side - Content */}
          <div className="w-full md:w-1/2 space-y-6">
            <h2 className="text-4xl font-bold text-[#0B0C3A]">
              Get in Touch to Elevate Your Software Experience
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Ready to take your software solutions to the next level? Contact us today to discuss how Fordest Technologies can empower your business through innovative and reliable services.
            </p>
            <div>
              <a 
                href="/contact" 
                className="inline-block px-8 py-3 bg-[#0057FF] text-white rounded-lg font-medium hover:bg-blue-600 transition-colors"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default GetInTouch 