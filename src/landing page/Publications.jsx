import { motion } from "framer-motion";
import PropTypes from "prop-types";
import { FiArrowRight } from "react-icons/fi";
import depedLogo from "../assets/deped_logo.png";

const Publications = () => {
  const researchAreas = [
    {
      id: 1,
      title: "STATUS OF GASS WFP PER SDO/OU",
      imageUrl: depedLogo,
      href: "https://docs.google.com/spreadsheets/d/1de5xfMIiX8fpJHf0pbBnODfQCcCazWoueTpBvegsBcM/edit?gid=1265102695#gid=1265102695",
    },
    {
      id: 2,
      title: "Summary OF WFP Status per Division",
      imageUrl: depedLogo,
      href: "https://docs.google.com/spreadsheets/d/1zcdMHr66s184QkuqUBtdfPk4-F3xaaMc6iFm5Fg_J64/edit?gid=926511942#gid=926511942",
    },
    {
      id: 3,
      title: "Status OF WFP per Program/Division/OU",
      imageUrl: depedLogo,
      href: "https://docs.google.com/spreadsheets/d/1M5lFBPcfsqmWXYmYv89vaMzmeoqALAyvXT-uGzB0d7M/edit?gid=1195456487#gid=1195456487",
    },
  ];

  return (
    <section
      id="educationandplanning"
      className="relative bg-gradient-to-br from-primary-600 to-primary-500 pt-32 pb-20 overflow-hidden"
    >
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute right-0 top-0 w-96 h-96 bg-white rounded-full -mr-48 -mt-48"></div>
        <div className="absolute left-0 bottom-0 w-96 h-96 bg-white rounded-full -ml-48 -mb-48"></div>
      </div>
      <div className="container relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="mb-4 text-white">Education and Planning</h2>
            <p className="text-lg text-white">
              Explore our Data and Summaries on Division Work Financial Plans in
              the PMIS
            </p>
            <h3 className="text-xl font-semibold mt-10 text-white">
              PROGRAM MANAGEMENT INFORMATION SYSTEM (PMIS)
            </h3>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {researchAreas.map((research, index) => (
            <ResearchCard key={research.id} research={research} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

const ResearchCard = ({ research, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -5 }}
      className="card h-full border-2 border-neutral-300 bg-white text-neutral-800"
    >
      <div className="h-48 overflow-hidden mt-4 border border-neutral-300 p-4 bg-gradient-to-br from-neutral-500 to-neutral-600">
        <img
          src={research.imageUrl}
          alt={research.title}
          className="w-full h-full object-contain transition-transform duration-500"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-3 text-center">{research.title}</h3>
        <p className="text-neutral-600 text-sm text-center mb-4">
          Click to view data
        </p>
        <a
          href={research.href}
          className="block mx-auto text-center px-4 py-2 bg-primary-500 text-white rounded hover:bg-primary-600 transition-colors duration-200"
          target="_blank"
          rel="noopener noreferrer"
        >
          FY 2025
          <FiArrowRight className="ml-1 inline-block" />
        </a>
      </div>
    </motion.div>
  );
};

ResearchCard.propTypes = {
  research: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    imageUrl: PropTypes.string,
    href: PropTypes.string,
  }).isRequired,
  index: PropTypes.number,
};

export default Publications;
