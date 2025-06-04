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
];

const Team = () => {
  // Filter top management and other researchers
  const topManagement = researchersData.filter(
    (researcher) =>
      researcher.name === "Homer N. Mendoza" ||
      researcher.name === "Bernadette T. Luna"
  );
  const otherResearchers = researchersData.filter(
    (researcher) =>
      researcher.name !== "Homer N. Mendoza" &&
      researcher.name !== "Bernadette T. Luna"
  );

  // Sort top management: Homer first, then Bernadette
  topManagement.sort((a, b) => {
    if (a.name === "Homer N. Mendoza") return -1; // Homer comes first
    if (b.name === "Homer N. Mendoza") return 1; // Homer comes first
    if (a.name === "Bernadette T. Luna") return -1; // Bernadette comes second (if Homer isn't involved)
    return 1; // Other cases (should only be Bernadette vs herself or other names)
  });

  return (
    <section
      id="team"
      className="section bg-primary-600 relative overflow-hidden"
    >
      {/* Background blobs */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute right-0 top-0 w-96 h-96 bg-white rounded-full -mr-48 -mt-48"></div>
        <div className="absolute left-0 bottom-0 w-96 h-96 bg-white rounded-full -ml-48 -mb-48"></div>
      </div>
      <div className="container relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="mb-4 text-white">Meet Our Team</h2>
            <p className="text-lg text-white">
              Our team of experts brings together diverse expertise to tackle
              complex policy challenges
            </p>
          </motion.div>
        </div>

        {/* Hierarchical display for Top Management */}
        <div className="flex flex-col items-center mb-16 space-y-8">
          {topManagement.map((researcher, index) => (
            <ResearcherCard
              key={researcher.id}
              researcher={researcher}
              index={index}
            />
          ))}
        </div>

        {/* Grid display for other researchers */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {otherResearchers.map((researcher, index) => (
            <ResearcherCard
              key={researcher.id}
              researcher={researcher}
              index={index + topManagement.length}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

const ResearcherCard = ({ researcher, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="overflow-hidden h-full flex flex-col items-center text-center"
    >
      {/* Container for the circular image */}
      <div className="w-48 h-48 rounded-full overflow-hidden mx-auto mb-6 shadow-md flex-shrink-0">
        <img
          src={researcher.imageUrl}
          alt={researcher.name}
          className="w-full h-full object-cover"
          style={{ objectPosition: "top" }}
        />
      </div>
      <div className="p-0 flex flex-col items-center text-center flex-grow">
        <h3 className="text-lg font-semibold mb-1 text-white">
          {researcher.name}
        </h3>
        <p className="text-sm font-medium mb-4 text-white">
          {researcher.title}
        </p>
        <p className="mt-2 text-sm italic flex-grow text-white">
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
};

export default Team;
