import { motion } from 'framer-motion'
import { FiLinkedin, FiTwitter, FiMail } from 'react-icons/fi'

const researchers = [
  {
    id: 1,
    name: 'Dr. Sarah Chen',
    title: 'Director of Urban Planning',
    imageUrl: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    socials: {
      twitter: '#',
      linkedin: '#',
      email: 'mailto:example@nationalresearch.gov'
    }
  },
  {
    id: 2,
    name: 'Prof. Michael Winters',
    title: 'Chief Economist',
    imageUrl: 'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    socials: {
      twitter: '#',
      linkedin: '#',
      email: 'mailto:example@nationalresearch.gov'
    }
  },
  {
    id: 3,
    name: 'Dr. Amelia Rodriguez',
    title: 'Head of Environmental Research',
    imageUrl: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    socials: {
      twitter: '#',
      linkedin: '#',
      email: 'mailto:example@nationalresearch.gov'
    }
  },
  {
    id: 4,
    name: 'Dr. James Wilson',
    title: 'Director of Health Policy',
    imageUrl: 'https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    socials: {
      twitter: '#',
      linkedin: '#',
      email: 'mailto:example@nationalresearch.gov'
    }
  }
]

const Team = () => {
  return (
    <section id="team" className="section bg-white">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="mb-4">Meet Our Research Team</h2>
            <p className="text-lg text-neutral-600">
              Our team of experts brings together diverse expertise to tackle complex policy challenges
            </p>
          </motion.div>
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {researchers.map((researcher, index) => (
            <ResearcherCard 
              key={researcher.id} 
              researcher={researcher} 
              index={index} 
            />
          ))}
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <a href="#" className="btn-outline">
            View Full Team
          </a>
        </motion.div>
      </div>
    </section>
  )
}

const ResearcherCard = ({ researcher, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="card overflow-hidden h-full"
    >
      <div className="aspect-w-3 aspect-h-4 h-64">
        <img 
          src={researcher.imageUrl} 
          alt={researcher.name} 
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-5 text-center">
        <h3 className="font-bold text-lg mb-1">{researcher.name}</h3>
        <p className="text-neutral-600 mb-3">{researcher.title}</p>
        <div className="flex justify-center space-x-3">
          <a 
            href={researcher.socials.twitter} 
            className="text-neutral-500 hover:text-primary-500 transition-colors"
            aria-label="Twitter"
          >
            <FiTwitter size={18} />
          </a>
          <a 
            href={researcher.socials.linkedin} 
            className="text-neutral-500 hover:text-primary-500 transition-colors"
            aria-label="LinkedIn"
          >
            <FiLinkedin size={18} />
          </a>
          <a 
            href={researcher.socials.email} 
            className="text-neutral-500 hover:text-primary-500 transition-colors"
            aria-label="Email"
          >
            <FiMail size={18} />
          </a>
        </div>
      </div>
    </motion.div>
  )
}

export default Team