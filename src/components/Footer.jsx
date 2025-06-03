import { FiPhone, FiMail, FiMapPin, FiTwitter, FiLinkedin, FiYoutube } from 'react-icons/fi'
import { motion } from 'framer-motion'

const Footer = () => {
  const currentYear = new Date().getFullYear()
  
  return (
    <footer id="contact" className="bg-neutral-900 text-neutral-300">
      <div className="container">
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-white text-xl font-bold mb-4">NationalResearch</h3>
            <p className="mb-6">
              Leading government research and planning organization dedicated to developing evidence-based policies and solutions.
            </p>
            <div className="flex space-x-4">
              <a href="#" aria-label="Twitter" className="text-neutral-400 hover:text-white transition-colors">
                <FiTwitter size={20} />
              </a>
              <a href="#" aria-label="LinkedIn" className="text-neutral-400 hover:text-white transition-colors">
                <FiLinkedin size={20} />
              </a>
              <a href="#" aria-label="YouTube" className="text-neutral-400 hover:text-white transition-colors">
                <FiYoutube size={20} />
              </a>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h3 className="text-white text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {['Home', 'About Us', 'Research Areas', 'Publications', 'Our Team', 'Events', 'Media Center', 'Contact'].map((link) => (
                <li key={link}>
                  <a href="#" className="hover:text-white transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-white text-lg font-bold mb-4">Research Areas</h3>
            <ul className="space-y-2">
              {['Urban Planning', 'Economic Policy', 'Environmental Sustainability', 'Digital Governance', 'Public Health', 'Education', 'Infrastructure', 'Social Policy'].map((area) => (
                <li key={area}>
                  <a href="#" className="hover:text-white transition-colors">
                    {area}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h3 className="text-white text-lg font-bold mb-4">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex">
                <FiMapPin className="mt-1 mr-3 text-primary-400" />
                <span>1200 Pennsylvania Ave, Washington DC, 20004</span>
              </li>
              <li className="flex">
                <FiPhone className="mt-1 mr-3 text-primary-400" />
                <span>(202) 555-0123</span>
              </li>
              <li className="flex">
                <FiMail className="mt-1 mr-3 text-primary-400" />
                <span>info@nationalresearch.gov</span>
              </li>
            </ul>
          </motion.div>
        </div>
        
        <div className="py-6 border-t border-neutral-800 flex flex-col md:flex-row justify-between items-center">
          <p>&copy; {currentYear} NationalResearch. All rights reserved.</p>
          <div className="mt-4 md:mt-0">
            <ul className="flex space-x-6">
              <li><a href="#" className="text-sm hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-sm hover:text-white transition-colors">Terms of Service</a></li>
              <li><a href="#" className="text-sm hover:text-white transition-colors">Accessibility</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer