/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import { useState } from "react";
import { FiArrowRight } from "react-icons/fi";
import PropTypes from "prop-types";
import depedLogo from "../assets/deped_logo.png";

const researchAreasData = [
  {
    id: 1,
    title: "LIS BOSY",
    syText: "SY 2024 - 2025",
    imageUrl: depedLogo,
    href: "https://docs.google.com/spreadsheets/d/1A679sPzIFDIyDqKyclUYBsjkyLs8Ty9cewflsEDBzLE/edit?gid=2047182434#gid=2047182434",
  },
  {
    id: 2,
    title: "LIS EOSY",
    syText: "SY 2024 - 2025",
    imageUrl: depedLogo,
    href: "https://docs.google.com/spreadsheets/d/19U53LrKoNjWXahfjxBUINW6G619VP3e7eo1eIxoTz6E/edit?gid=2047182434#gid=2047182434",
  },
  {
    id: 3,
    title: "BEIS",
    syText: "SY 2023 - 2024",
    imageUrl: depedLogo,
    href: "https://docs.google.com/spreadsheets/d/16ftdHpZVDjfRV0UyhM-2UPWvvdDH8-sZJ_0UaDbxLWk/edit?gid=2107593635#gid=2107593635", // Placeholder for now
  },
  {
    id: 4,
    title: "BEIS",
    syText: "SY 2024 - 2025",
    imageUrl: depedLogo,
    href: "https://docs.google.com/spreadsheets/d/14tQfcLQr7PdcKre1YDJr1YrD9JCNS5POCqw3ioSby-g/edit?gid=2107593635#gid=2107593635", // Placeholder for now
  },
  {
    id: 5,
    title: "NSBI",
    syText: "SY 2023 - 2024",
    imageUrl: depedLogo,
    href: "https://docs.google.com/spreadsheets/d/1EaM3XZjkROmBl7ZYtWZIXjXThVWecw1GOGFlp7S0RPc/edit?gid=2005271003#gid=2005271003", // Placeholder for now
  },
  {
    id: 6,
    title: "NSBI",
    syText: "SY 2024 - 2025",
    imageUrl: depedLogo,
    href: "https://docs.google.com/spreadsheets/d/10h8DPe_wwNci5DbAYFEGjI7-8MAAZIVtc5VJ7u6RX7E/edit?gid=2005271003#gid=2005271003", // Placeholder for now
  },
];

const FeaturedResearch = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Group research areas by title
  const groupedResearchAreas = researchAreasData.reduce((acc, item) => {
    if (!acc[item.title]) {
      acc[item.title] = {
        title: item.title,
        imageUrl: item.imageUrl,
        items: [],
      };
    }
    acc[item.title].items.push({
      id: item.id,
      syText: item.syText,
      href: item.href,
    });
    return acc;
  }, {});

  // Convert grouped object back to an array
  const researchAreas = Object.values(groupedResearchAreas);

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

        {/* Map over grouped research areas */}
        <div className="grid md:grid-cols-3 gap-8">
          {researchAreas.map((researchGroup, index) => (
            <ResearchCard
              key={researchGroup.title}
              research={researchGroup}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

// Modified ResearchCard to handle grouped data
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
      <div className="p-6 flex flex-col items-center">
        <h3 className="text-xl font-bold mb-3 text-center">{research.title}</h3>
        {/* Render buttons for each item in the group */}
        <div className="flex flex-col space-y-2">
          {research.items.map((item) => (
            <a
              key={item.id}
              href={item.href}
              className="inline-flex items-center justify-center px-4 py-2 bg-primary-500 text-white rounded hover:bg-primary-600 transition-colors duration-200"
              target="_blank"
              rel="noopener noreferrer"
            >
              {item.syText}
              <FiArrowRight className="ml-1" />
            </a>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

// Updated PropTypes for ResearchCard
ResearchCard.propTypes = {
  research: PropTypes.shape({
    title: PropTypes.string,
    imageUrl: PropTypes.string,
    items: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number,
        syText: PropTypes.string,
        href: PropTypes.string,
      })
    ).isRequired,
  }).isRequired,
  index: PropTypes.number,
};

export default FeaturedResearch;
