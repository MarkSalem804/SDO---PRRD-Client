import { motion } from "framer-motion";
import PropTypes from "prop-types";
import profileImage from "../assets/profileMockUp.jpg";
import glendaImage from "../assets/Glenda_DS._Catadman-removebg-preview.png";
import ivanImage from "../assets/Ivan Honorpette A. Mijares 8-1-2023.JPG";
import juneImage from "../assets/June_Bence_L._Adelan_-_IT_Officer_I-removebg-preview (1).png";
import luisaImage from "../assets/Maria Luisa Candelaria.png";
import rizaImage from "../assets/RIZA C. GARCIA.png";
import naamahImage from "../assets/Naamah Mambalos.jpg.png";
import winchellImage from "../assets/WINCHELL_Y._DE_VERA-removebg-preview (1).png";
import homerImage from "../assets/SDS Homer N. Mendoza.jpg";
import bernadetteImage from "../assets/ASDS Bernadette T. Luna.jpg";
import markImage from "../assets/Mark Joseph V. Salem.png";
import mattImage from "../assets/Matthew Lewis E. Romero.png";
import shaiImage from "../assets/Shaina_Montaño-removebg-preview (2).png";
import { useState } from "react";

// Function to format name to uppercase
const formatName = (name) => {
  return name.toUpperCase();
};

const researchersData = [
  {
    id: 1,
    name: "Glenda DS Catadman",
    title: "Curriculum Implementation Division Chief",
    imageUrl: glendaImage,
    socials: {
      twitter: "#",
      linkedin: "#",
      email: "mailto:example@sdoimus.gov.ph",
    },
    context: "",
  },
  {
    id: 2,
    name: "Ivan Honorpette A. Mijares",
    title: "Schools Governance Operations Division Chief",
    imageUrl: ivanImage,
    socials: {
      twitter: "#",
      linkedin: "#",
      email: "mailto:example@sdoimus.gov.ph",
    },
    context: "",
  },
  {
    id: 3,
    name: "June Bence L. Adelan",
    title: "Information Technology Officer I",
    imageUrl: juneImage,
    socials: {
      twitter: "#",
      linkedin: "#",
      email: "mailto:example@sdoimus.gov.ph",
    },
    context: "",
  },
  {
    id: 4,
    name: "Maria Luisa F. Candelaria",
    title: "Education Program Supervisor - Mathematics",
    imageUrl: luisaImage,
    socials: {
      twitter: "#",
      linkedin: "#",
      email: "mailto:example@sdoimus.gov.ph",
    },
    context: "",
  },
  {
    id: 5,
    name: "Riza C. Garcia",
    title: "Education Program Supervisor - SPED",
    imageUrl: rizaImage,
    socials: {
      twitter: "#",
      linkedin: "#",
      email: "mailto:example@sdoimus.gov.ph",
    },
    context: "",
  },
  {
    id: 6,
    name: "Naamah C. Mambalos",
    title: "Planning Officer III",
    imageUrl: naamahImage,
    socials: {
      twitter: "#",
      linkedin: "#",
      email: "mailto:example@sdoimus.gov.ph",
    },
    context: "",
  },
  {
    id: 7,
    name: "Winchell Y. De Vera",
    title: "Nurse II",
    imageUrl: winchellImage,
    socials: {
      twitter: "#",
      linkedin: "#",
      email: "mailto:example@sdoimus.gov.ph",
    },
    context: "",
  },
  {
    id: 8,
    name: "Angelo A. Unay",
    title: "Principal - Carsadang Bago ES",
    imageUrl: profileImage,
    socials: {
      twitter: "#",
      linkedin: "#",
      email: "mailto:example@sdoimus.gov.ph",
    },
    context: "",
  },
  {
    id: 9,
    name: "Florie-Ann S. Villanueva",
    title: "Principal - Bayan Luma I ES",
    imageUrl: profileImage,
    socials: {
      twitter: "#",
      linkedin: "#",
      email: "mailto:example@sdoimus.gov.ph",
    },
    context: "",
  },
  {
    id: 10,
    name: "Mervin G. Araja",
    title: "Master Teacher",
    imageUrl: profileImage,
    socials: {
      twitter: "#",
      linkedin: "#",
      email: "mailto:example@sdoimus.gov.ph",
    },
    context: "",
  },
  {
    id: 11,
    name: "Dennis Jay G. Umboc",
    title: "Master Teacher",
    imageUrl: profileImage,
    socials: {
      twitter: "#",
      linkedin: "#",
      email: "mailto:example@sdoimus.gov.ph",
    },
    context: "",
  },
  {
    id: 12,
    name: "Joan P. Sumbeling",
    title: "Teacher III",
    imageUrl: profileImage,
    socials: {
      twitter: "#",
      linkedin: "#",
      email: "mailto:example@sdoimus.gov.ph",
    },
    context: "",
  },
  {
    id: 13,
    name: "Lorenzo F. Moreno Jr.",
    title: "Teacher I",
    imageUrl: profileImage,
    socials: {
      twitter: "#",
      linkedin: "#",
      email: "mailto:example@sdoimus.gov.ph",
    },
    context: "",
  },
  {
    id: 14,
    name: "Zyldjian Tepora",
    title: "Teacher III",
    imageUrl: profileImage,
    socials: {
      twitter: "#",
      linkedin: "#",
      email: "mailto:example@sdoimus.gov.ph",
    },
    context: "",
  },
  {
    id: 15,
    name: "Marycon Carmella G. Mella",
    title: "Master Teacher",
    imageUrl: profileImage,
    socials: {
      twitter: "#",
      linkedin: "#",
      email: "mailto:example@sdoimus.gov.ph",
    },
    context: "",
  },
  {
    id: 16,
    name: "Genesis T. Pasilan",
    title: "Master Teacher",
    imageUrl: profileImage,
    socials: {
      twitter: "#",
      linkedin: "#",
      email: "mailto:example@sdoimus.gov.ph",
    },
    context: "",
  },
  {
    id: 17,
    name: "Homer N. Mendoza",
    title: "Schools Division Superintendent",
    imageUrl: homerImage,
    socials: {
      twitter: "#",
      linkedin: "#",
      email: "mailto:example@sdoimus.gov.ph",
    },
    context: "",
  },
  {
    id: 18,
    name: "Bernadette T. Luna",
    title: "Assistant Schools Division Superintendent",
    imageUrl: bernadetteImage,
    socials: {
      twitter: "#",
      linkedin: "#",
      email: "mailto:example@sdoimus.gov.ph",
    },
    context: "",
  },
  {
    id: 19,
    name: "Mark Joseph V. Salem",
    title: "Junior ICT - Programmer",
    imageUrl: markImage,
    socials: {
      twitter: "#",
      linkedin: "#",
      email: "mailto:example@sdoimus.gov.ph",
    },
    context: "",
  },
  {
    id: 20,
    name: "Matthew Lewis E. Romero",
    title: "Junior ICT - Programmer",
    imageUrl: mattImage,
    socials: {
      twitter: "#",
      linkedin: "#",
      email: "mailto:example@sdoimus.gov.ph",
    },
    context: "",
  },
  {
    id: 21,
    name: "Shaina Montaño",
    title: "Junior ICT - Programmer",
    imageUrl: shaiImage,
    socials: {
      twitter: "#",
      linkedin: "#",
      email: "mailto:example@sdoimus.gov.ph",
    },
    context: "",
  },
];

const Team = () => {
  const [activeTab, setActiveTab] = useState("topManagement");

  // Filter data for each tab
  const topManagementData = researchersData.filter(
    (researcher) =>
      researcher.name === "Homer N. Mendoza" ||
      researcher.name === "Bernadette T. Luna"
  );

  const developmentTeamData = researchersData.filter(
    (researcher) =>
      researcher.name === "June Bence L. Adelan" ||
      researcher.name === "Mark Joseph V. Salem" ||
      researcher.name === "Matthew Lewis E. Romero" ||
      researcher.name === "Shaina Montaño"
  );

  const contributorsData = researchersData.filter(
    (researcher) =>
      !topManagementData.some((tm) => tm.id === researcher.id) &&
      researcher.name !== "Mark Joseph V. Salem" &&
      researcher.name !== "Matthew Lewis E. Romero" &&
      researcher.name !== "Shaina Montaño"
  );

  const tabs = [
    {
      id: "topManagement",
      name: "Top Management",
    },
    {
      id: "contributors",
      name: "Contributors",
    },
    {
      id: "developmentTeam",
      name: "Development Team",
    },
  ];

  return (
    <section
      id="team"
      className="section bg-primary-600 relative overflow-hidden font-poppins"
    >
      {/* Background blobs for the main section (optional, can be adjusted) */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute right-0 top-0 w-96 h-96 bg-white rounded-full -mr-48 -mt-48"></div>
        <div className="absolute left-0 bottom-0 w-96 h-96 bg-white rounded-full -ml-48 -mb-48"></div>
      </div>

      <div className="container relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="mb-4 text-white">About Our Team</h2>
            <p className="text-lg text-white">
              Meet the amazing people behind this project.
            </p>
          </motion.div>
        </div>

        {/* Tab Navigation */}
        <div className="mb-8">
          <nav className="-mb-px flex justify-center space-x-8">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                className={`whitespace-nowrap py-4 px-4 border-b-2 text-sm transition-colors duration-200 ease-in-out focus:outline-none uppercase ${
                  activeTab === tab.id
                    ? "border-white text-white font-semibold"
                    : "border-transparent text-gray-300 hover:text-gray-100 hover:border-gray-100 font-medium"
                }`}
                onClick={() => setActiveTab(tab.id)}
              >
                {tab.name}
              </button>
            ))}
          </nav>
        </div>

        {/* Tab Content */}
        <div className="  dark:bg-gray-800 rounded-lg shadow-md p-7">
          {activeTab === "topManagement" && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
              {topManagementData.map((researcher, index) => (
                <ResearcherCard
                  key={researcher.id}
                  researcher={researcher}
                  index={index}
                  className={
                    index === 0
                      ? "lg:col-start-2"
                      : index === 1
                      ? "lg:col-start-3"
                      : ""
                  }
                />
              ))}
            </div>
          )}

          {activeTab === "contributors" && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
              {contributorsData.map((researcher, index) => (
                <ResearcherCard
                  key={researcher.id}
                  researcher={researcher}
                  index={index}
                />
              ))}
            </div>
          )}

          {activeTab === "developmentTeam" && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
              {developmentTeamData.map((researcher, index) => (
                <ResearcherCard
                  key={researcher.id}
                  researcher={researcher}
                  index={index}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

const ResearcherCard = ({ researcher, index, className }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={`overflow-hidden h-full flex flex-col items-center text-center ${className}`}
    >
      {/* Container for the circular image with a border */}
      <div className="w-48 h-48 rounded-full overflow-hidden mx-auto mb-6 shadow-md flex-shrink-0 border-4 border-blue-200">
        <img
          src={researcher.imageUrl}
          alt={researcher.name}
          className="w-full h-full object-cover"
          style={{ objectPosition: "top" }}
        />
      </div>
      <div className="p-0 flex flex-col items-center text-center flex-grow">
        <h3 className="text-lg font-semibold mb-1 text-black dark:text-white">
          {formatName(researcher.name)}
        </h3>
        <p className="text-sm font-medium mb-4 text-gray-700 dark:text-gray-300">
          {researcher.title}
        </p>
        <p className="mt-2 text-gray-600 dark:text-gray-400 text-sm italic flex-grow">
          {researcher.context}
        </p>
      </div>
    </motion.div>
  );
};

ResearcherCard.propTypes = {
  researcher: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    title: PropTypes.string,
    imageUrl: PropTypes.string,
    context: PropTypes.string,
  }).isRequired,
  index: PropTypes.number,
  className: PropTypes.string,
};

export default Team;
