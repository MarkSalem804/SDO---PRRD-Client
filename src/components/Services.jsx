import { motion } from "framer-motion";
import ResearchImage from "../assets/ResearchImage.png";

const Services = () => {
  return (
    <section
      id="services"
      className="relative bg-white flex items-center justify-center min-h-[1100px] overflow-hidden"
    >
      {/* Background blobs */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute right-0 top-0 w-96 h-96 bg-primary-600 rounded-full -mr-48 -mt-48"></div>
        <div className="absolute left-0 bottom-0 w-96 h-96 bg-primary-600 rounded-full -ml-48 -mb-48"></div>
      </div>

      <div className="container relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="mb-4 text-neutral-800">Our Services</h2>
            <p className="text-lg text-neutral-600">
              Discover the range of services we offer.
            </p>
          </motion.div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-center text-center md:text-left">
          <div className="w-[700px] h-[700px] flex items-center justify-center mb-8 md:mb-0 md:mr-12">
            <img
              src={ResearchImage}
              alt="Services Section"
              className="max-w-full max-h-full object-contain"
            />
          </div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-md flex flex-col items-center md:items-start"
          >
            <h3 className="text-2xl font-bold mb-4 text-neutral-800">
              This Section is Work In Progress
            </h3>
            <p className="text-neutral-600 text-lg">
              We&apos;re sorry for the inconvenience, please check back later
              for updates
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Services;
