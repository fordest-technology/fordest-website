import { motion } from "framer-motion"


export default function TechCard({ title, description, logos, logoLayout = "three-logos" }) {
  return (
    <motion.div
      className="h-full rounded-lg border border-gray-200 p-6 bg-white flex flex-col"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
    >
      {/* Logo section with different layouts */}
      <motion.div
        className="flex justify-center items-center mb-4"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: {
              staggerChildren: 0.2,
            },
          },
        }}
      >
        {logoLayout === "three-logos" && (
          <div className="flex flex-col items-center">
            {/* Top logo */}
            <motion.div
              className="mb-4"
              variants={{
                hidden: { scale: 0.8, opacity: 0 },
                visible: { scale: 1, opacity: 1 },
              }}
            >
              <img
                src={logos[0].src || "/placeholder.svg"}
                alt={logos[0].alt}
                width={logos[0].width}
                height={logos[0].height}
                className="object-contain"
              />
            </motion.div>

            {/* Bottom two logos */}
            <div className="flex justify-center gap-4">
              {logos.slice(1, 3).map((logo, index) => (
                <motion.div
                  key={index}
                  variants={{
                    hidden: { scale: 0.8, opacity: 0 },
                    visible: { scale: 1, opacity: 1 },
                  }}
                >
                  <img
                    src={logo.src || "/placeholder.svg"}
                    alt={logo.alt}
                    width={logo.width}
                    height={logo.height}
                    className="object-contain"
                  />
                </motion.div>
              ))}
            </div>
          </div>
        )}

        {logoLayout === "stacked" && (
          <div className="flex flex-col items-center">
            {/* Top logo */}
            <motion.div
              className="mb-4"
              variants={{
                hidden: { scale: 0.8, opacity: 0 },
                visible: { scale: 1, opacity: 1 },
              }}
            >
              <img
                src={logos[0].src || "/placeholder.svg"}
                alt={logos[0].alt}
                width={logos[0].width}
                height={logos[0].height}
                className="object-contain"
              />
            </motion.div>

            {/* Bottom two logos */}
            <div className="flex justify-center gap-4">
              {logos.slice(1, 3).map((logo, index) => (
                <motion.div
                  key={index}
                  variants={{
                    hidden: { scale: 0.8, opacity: 0 },
                    visible: { scale: 1, opacity: 1 },
                  }}
                >
                  <img
                    src={logo.src || "/placeholder.svg"}
                    alt={logo.alt}
                    width={logo.width}
                    height={logo.height}
                    className="object-contain"
                  />
                </motion.div>
              ))}
            </div>
          </div>
        )}

        {logoLayout === "single" && logos.length > 0 && (
          <motion.div
            variants={{
              hidden: { scale: 0.8, opacity: 0 },
              visible: { scale: 1, opacity: 1 },
            }}
          >
            <img
              src={logos[0].src || "/placeholder.svg"}
              alt={logos[0].alt}
              width={logos[0].width}
              height={logos[0].height}
              className="object-contain"
            />
          </motion.div>
        )}
      </motion.div>

      {/* Divider */}
      <motion.div
        className="h-px bg-gray-200 w-full my-4"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
      />

      {/* Content */}
      <div className="flex flex-col flex-grow">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="mb-2"
        >
          <h3 className="text-center font-bold text-gray-900">{title}</h3>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="flex-grow"
        >
          <p className="text-center text-sm text-gray-700">{description}</p>
        </motion.div>
      </div>
    </motion.div>
  )
}
