import { motion } from "framer-motion";
import heroImage from "../assets/HeroImage.png";

const Hero = () => {
  return (
    <section
      id="hero"
      className="relative bg-gradient-to-br from-primary-600 to-primary-500 pt-32 pb-20 overflow-hidden"
    >
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute right-0 top-0 w-96 h-96 bg-white rounded-full -mr-48 -mt-48"></div>
        <div className="absolute left-0 bottom-0 w-96 h-96 bg-white rounded-full -ml-48 -mb-48"></div>
      </div>

      <div className="container relative z-10">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-white"
          >
            <h1 className="text-white mb-3 leading-tight">
              SDOIC Easy Links
              <span className="block text-secondary-300 text-base mt-1">
                Schools Division Office of Imus City
              </span>
            </h1>
            <p className="text-white text-opacity-90 text-lg mb-8 max-w-lg">
              We truly value your opinion. By rating your recent experience,
              you&apos;ll directly contribute to helping us enhance our process
              for everyone. Thank you for your feedback!
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="https://csm.depedimuscity.com"
                className="btn bg-white text-primary-500 hover:bg-neutral-100"
                target="_blank"
                rel="noopener noreferrer"
              >
                We appreciate your Feedback
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="p-6 text-center"
          >
            <img
              src={heroImage}
              alt="SDO - Imus City Hero Image"
              className="mx-auto w-full max-w-lg object-contain"
            />
          </motion.div>
        </div>

        {/* Placeholder for removed statistics section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-4 md:p-6 text-center text-white text-opacity-90"
        >
          <p className="text-white text-xl">
            Schools Governance and Operations Division - Planning and Research
            Section
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
