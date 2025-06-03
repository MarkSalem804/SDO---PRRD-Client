import { motion } from 'framer-motion'

const departments = [
  {
    id: 1,
    name: 'Urban Planning',
    icon: '🏙️',
    description: 'Developing strategies for sustainable urban development and smart city initiatives.'
  },
  {
    id: 2,
    name: 'Economic Research',
    icon: '📊',
    description: 'Analyzing economic trends and policies to support informed government decision-making.'
  },
  {
    id: 3,
    name: 'Environmental Science',
    icon: '🌿',
    description: 'Researching environmental challenges and developing policies for sustainable solutions.'
  },
  {
    id: 4,
    name: 'Digital Transformation',
    icon: '💻',
    description: 'Exploring digital solutions to enhance government services and operations.'
  },
  {
    id: 5,
    name: 'Health Policy',
    icon: '🏥',
    description: 'Developing research-backed health policies to improve public health outcomes.'
  },
  {
    id: 6,
    name: 'Education Innovation',
    icon: '🎓',
    description: 'Researching educational approaches to support lifelong learning and skill development.'
  }
]

const Departments = () => {
  return (
    <section id="departments" className="section bg-white">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="mb-4">Research Departments</h2>
            <p className="text-lg text-neutral-600">
              Our specialized departments work collaboratively to address complex challenges across government sectors
            </p>
          </motion.div>
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {departments.map((dept, index) => (
            <DepartmentCard 
              key={dept.id} 
              department={dept} 
              index={index} 
            />
          ))}
        </div>
      </div>
    </section>
  )
}

const DepartmentCard = ({ department, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -5 }}
      className="bg-neutral-50 rounded-lg p-6 hover:shadow-md transition-all duration-300 border border-neutral-100"
    >
      <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center text-2xl mb-4">
        {department.icon}
      </div>
      <h3 className="text-xl font-bold mb-2">{department.name}</h3>
      <p className="text-neutral-600">{department.description}</p>
      <a 
        href="#" 
        className="mt-4 inline-block text-primary-500 font-medium hover:text-primary-600 transition-colors"
      >
        View Projects →
      </a>
    </motion.div>
  )
}

export default Departments