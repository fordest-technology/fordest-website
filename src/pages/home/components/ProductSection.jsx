"use client"

const ProductSection = () => {
  return (
    <div className="w-full bg-white py-16 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-[#0B0C3A] mb-4">
            Our Products
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover innovative solutions designed to transform your educational experience
          </p>
        </div>

        {/* Product Card */}
        <div className="bg-gradient-to-br from-[#f8faff] to-white rounded-2xl p-8 shadow-lg">
          <div className="flex flex-col md:flex-row items-center gap-12">
            {/* Left side - Product Image */}
            <div className="w-full md:w-3/5">
              <div className="relative">
                <img 
                  src="/eduit-dashboard.jpeg" 
                  alt="Eduit Dashboard" 
                  className="rounded-xl h-full w-full object-cover shadow-lg"
                />
              </div>
            </div>

            {/* Right side - Product Info */}
            <div className="w-full md:w-2/5 space-y-6">
              <div className="flex items-center gap-3">
                <img 
                  src="/eduit-logo.png" 
                  alt="Eduit Logo" 
                  className="h-8"
                />
                <span className="text-sm font-medium px-3 py-1 bg-blue-100 text-[#0057FF] rounded-full">
                  Education Platform
                </span>
              </div>

              <h3 className="text-3xl font-bold text-[#0B0C3A]">
                Eduit
              </h3>

              <p className="text-gray-600 leading-relaxed">
                A comprehensive educational platform designed to streamline learning management and enhance the educational experience. Eduit provides powerful tools for educators and students alike.
              </p>

              <div className="space-y-4">
                <h4 className="font-semibold text-[#0B0C3A]">Key Features:</h4>
                <ul className="space-y-3">
                  {[
                    "Interactive Learning Management System",
                    "Real-time Progress Tracking",
                    "Customizable Course Creation",
                    "Seamless Communication Tools",
                    "Advanced Analytics Dashboard"
                  ].map((feature, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <svg className="w-5 h-5 text-[#0057FF]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-4">
                <a 
                  href="/products/eduit" 
                  className="inline-flex items-center gap-2 px-6 py-3 bg-[#0057FF] text-white rounded-lg font-medium hover:bg-blue-600 transition-colors"
                >
                  Learn More
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductSection 