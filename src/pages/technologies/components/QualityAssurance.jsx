"use client"

const QualityAssurance = () => {
  return (
    <div className="w-full bg-white py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Left side - Image */}
          <div className="w-full md:w-1/2">
            <img 
              src="/quality-assurance.png" 
              alt="Quality Assurance and Testing" 
              className="w-full  rounded-lg"
            />
          </div>

          {/* Right side - Content */}
          <div className="w-full md:w-1/2">
            <h2 className="text-3xl font-semibold mb-8 text-[#0B0C3A]">
              Quality Assurance and Testing:
            </h2>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                <svg width="45" height="46" viewBox="0 0 45 46" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect y="0.5" width="45" height="45" rx="22.5" fill="#CDDEFF"/>
<path d="M32.5498 26.3082C30.3957 26.3082 28.6439 28.1162 28.6439 30.3394C28.6439 31.0287 28.8274 31.6666 29.1243 32.234C27.2843 33.6223 25.0641 34.3706 22.7849 34.3705C16.8625 34.3705 12.0435 29.3971 12.0435 23.2849H10.0905C10.0905 30.5087 15.7854 36.3861 22.7849 36.3861C25.5509 36.3848 28.2405 35.4497 30.4435 33.7235C31.0705 34.1444 31.802 34.3691 32.5498 34.3705C34.704 34.3705 36.4558 32.5626 36.4558 30.3394C36.4558 28.1162 34.704 26.3082 32.5498 26.3082ZM32.5498 32.355C31.4727 32.355 30.5968 31.451 30.5968 30.3394C30.5968 29.2278 31.4727 28.3238 32.5498 28.3238C33.6269 28.3238 34.5028 29.2288 34.5028 30.3394C34.5028 31.45 33.6269 32.355 32.5498 32.355ZM22.7849 10.1836C20.0189 10.1849 17.3293 11.12 15.1263 12.8462C14.4993 12.4253 13.7679 12.2006 13.02 12.1992C10.8658 12.1992 9.11401 14.0071 9.11401 16.2303C9.11401 18.4535 10.8658 20.2615 13.02 20.2615C15.1741 20.2615 16.9259 18.4535 16.9259 16.2303C16.9259 15.541 16.7424 14.9031 16.4455 14.3357C18.2855 12.9474 20.5057 12.1992 22.7849 12.1992C28.7073 12.1992 33.5263 17.1726 33.5263 23.2849H35.4793C35.4793 16.061 29.7844 10.1836 22.7849 10.1836ZM13.02 18.2459C11.9429 18.2459 11.067 17.3419 11.067 16.2303C11.067 15.1187 11.9429 14.2148 13.02 14.2148C14.0971 14.2148 14.973 15.1197 14.973 16.2303C14.973 17.3409 14.0971 18.2459 13.02 18.2459Z" fill="#0057FF"/>
</svg>

                </div>
                <div>
                  <h3 className="text-lg font-semibold text-[#0057FF] mb-2">Automated Testing:</h3>
                  <p className="text-gray-600">
                    Ensure the reliability of your software through automated testing tools such as Selenium and Jest.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                <svg width="45" height="46" viewBox="0 0 45 46" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect y="0.5" width="45" height="45" rx="22.5" fill="#CDDEFF"/>
<path d="M13.4978 19.2015V10.1431H29.8125L33.75 14.1061V35.0538H12.375M28.125 10.1431V15.8046H33.75M11.25 30.5246L16.875 24.863L21.375 29.3923L28.6875 22.0323M29.25 28.26V21.4661H22.5" stroke="#0057FF" stroke-width="2"/>
</svg>

                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2 text-[#0057FF]">Performance Testing:</h3>
                  <p className="text-gray-600">
                    Identify and optimize application performance using tools like Apache JMeter.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default QualityAssurance 