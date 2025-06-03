/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import { useState } from "react";
import { FiArrowRight } from "react-icons/fi";
import PropTypes from "prop-types";
import depedLogo from "../assets/deped_logo.png";

const researchAreas = [
  {
    id: 1,
    title: "LIS BOSY",
    imageUrl: depedLogo,
    href: "https://docs.google.com/spreadsheets/d/1A679sPzIFDIyDqKyclUYBsjkyLs8Ty9cewflsEDBzLE/edit?gid=2047182434#gid=2047182434",
  },
  {
    id: 2,
    title: "LIS EOSY",
    imageUrl: depedLogo,
    href: "https://docs.google.com/spreadsheets/d/19U53LrKoNjWXahfjxBUINW6G619VP3e7eo1eIxoTz6E/edit?gid=2047182434#gid=2047182434",
  },
  {
    id: 3,
    title: "BEIS",
    imageUrl: depedLogo,
    href: "#", // Placeholder for now
  },
  {
    id: 4,
    title: "NSBI",
    imageUrl: depedLogo,
    href: "#", // Placeholder for now
  },
];

const FeaturedResearch = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <section id="research" className="section bg-neutral-50">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="mb-4 text-primary-500">Data Overview</h2>
            <p className="text-lg text-neutral-600">
              Access key educational data reports and statistics for informed
              decision-making and planning.
            </p>
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
      className="card h-full border-2 border-neutral-300 bg-neutral-100"
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
          {research.title === "LIS BOSY" &&
            "View Beginning of School Year Data"}
          {research.title === "LIS EOSY" && "View End of School Year Data"}
          {research.title === "BEIS" &&
            "View Basic Education Information System Data"}
          {research.title === "NSBI" &&
            "View National School Building Inventory Data"}
        </p>
        <a
          href={research.href}
          className="inline-flex items-center px-4 py-2 border border-blue-500 text-blue-500 rounded hover:bg-blue-500 hover:text-white transition-colors duration-200"
          target="_blank"
          rel="noopener noreferrer"
        >
          View Data
          <FiArrowRight className="ml-1" />
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

export default FeaturedResearch;
