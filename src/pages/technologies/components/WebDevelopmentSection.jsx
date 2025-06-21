"use client"

const WebDevelopmentSection = () => {
  return (
    <div className="w-full bg-[#0066FF] py-16 px-4">
      {/* Title */}
      <div className="text-center mb-12">
        <h2 className="text-white text-4xl font-normal mb-2">
          Web Development
        </h2>
        <div className="h-0.5 w-48 bg-white mx-auto"></div>
      </div>

      {/* White Card */}
      <div className="bg-white rounded-lg max-w-6xl mx-auto p-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {/* Frontend Development */}
          <div className="flex flex-col items-center text-center px-8">
            <div className="mb-6">
            <img src="/dev.png" alt="Backend Development" className="w-12 h-12" />
            </div>
            <h3 className="text-xl font-semibold mb-4">Frontend development</h3>
            <p className="text-gray-600 leading-relaxed">
              Craft visually appealing and user-friendly interfaces using HTML, CSS, and JavaScript frameworks such as React.js and Next.js.
            </p>
          </div>

          {/* Vertical Divider */}
          <div className="hidden md:block absolute h-3/4 w-[3px] bg-[#FFB800] left-1/3 top-1/2 -translate-y-1/2"></div>

          {/* Backend Development */}
          <div className="flex flex-col items-center text-center px-8">
            <div className="mb-6">
              <img src="/dev.png" alt="Backend Development" className="w-12 h-12" />
            </div>
            <h3 className="text-xl font-semibold mb-4">Backend development</h3>
            <p className="text-gray-600 leading-relaxed">
              Implement powerful server-side logic with Node.js, Express.js, and PHP.
            </p>
          </div>

          {/* Vertical Divider */}
          <div className="hidden md:block absolute h-3/4 w-[3px] bg-[#FFB800] right-1/3 top-1/2 -translate-y-1/2"></div>

          {/* CMS */}
          <div className="flex flex-col items-center text-center px-8">
            <div className="mb-6">
           <img src="/iconoir.png" alt="Backend Development" className="w-12 h-12" />
            </div>
            <h3 className="text-xl font-semibold mb-4">Content Management Systems (CMS)</h3>
            <p className="text-gray-600 leading-relaxed">
              Customize and optimize websites with CMS platforms like WordPress and Drupal.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default WebDevelopmentSection
