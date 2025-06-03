import { useState } from 'react'
import { motion } from 'framer-motion'

const categories = ['All', 'Reports', 'Policy Briefs', 'Research Papers', 'Case Studies']

const publications = [
  {
    id: 1,
    title: 'Urban Mobility Solutions for Growing Metropolitan Areas',
    excerpt: 'A comprehensive analysis of transportation strategies for rapidly expanding urban centers.',
    category: 'Reports',
    date: 'June 12, 2025',
    author: 'Dr. Sarah Chen'
  },
  {
    id: 2,
    title: 'Digital Identity Systems: Security and Privacy Considerations',
    excerpt: 'Examining the implementation challenges of national digital identity systems.',
    category: 'Policy Briefs',
    date: 'May 28, 2025',
    author: 'Prof. Michael Winters'
  },
  {
    id: 3,
    title: 'Renewable Energy Transition in Rural Communities',
    excerpt: 'Analyzing effective strategies for implementing renewable energy solutions in rural areas.',
    category: 'Research Papers',
    date: 'May 15, 2025',
    author: 'Dr. Amelia Rodriguez'
  },
  {
    id: 4,
    title: 'Public Health Response to Emerging Infectious Diseases',
    excerpt: 'Case-based analysis of effective public health interventions during disease outbreaks.',
    category: 'Case Studies',
    date: 'April 30, 2025',
    author: 'Dr. James Wilson'
  },
  {
    id: 5,
    title: 'Affordable Housing Policies for Sustainable Communities',
    excerpt: 'Research-backed policy recommendations to address housing affordability challenges.',
    category: 'Policy Briefs',
    date: 'April 18, 2025',
    author: 'Dr. Emily Thompson'
  },
  {
    id: 6,
    title: 'AI Ethics in Government Decision-Making',
    excerpt: 'Exploring ethical frameworks for implementing AI in government operations and services.',
    category: 'Research Papers',
    date: 'March 25, 2025',
    author: 'Prof. David Kumar'
  }
]

const Publications = () => {
  const [activeFilter, setActiveFilter] = useState('All')
  
  const filteredPublications = activeFilter === 'All' 
    ? publications 
    : publications.filter(pub => pub.category === activeFilter)
  
  return (
    <section id="publications" className="section bg-neutral-50">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="mb-4">Latest Publications</h2>
            <p className="text-lg text-neutral-600">
              Browse our recent research publications, policy briefs, and technical reports
            </p>
          </motion.div>
        </div>
        
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {categories.map((category, index) => (
            <motion.button
              key={category}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              onClick={() => setActiveFilter(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                activeFilter === category
                  ? 'bg-primary-500 text-white'
                  : 'bg-white text-neutral-700 hover:bg-neutral-100'
              }`}
            >
              {category}
            </motion.button>
          ))}
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPublications.map((publication, index) => (
            <PublicationCard 
              key={publication.id} 
              publication={publication} 
              index={index} 
            />
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <motion.a
            href="#"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            className="btn-outline"
          >
            View All Publications
          </motion.a>
        </div>
      </div>
    </section>
  )
}

const PublicationCard = ({ publication, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="card h-full flex flex-col"
    >
      <div className="p-6 flex-1">
        <div className="flex justify-between items-center mb-3">
          <span className="text-xs font-medium px-2 py-1 bg-primary-100 text-primary-700 rounded-full">
            {publication.category}
          </span>
          <span className="text-sm text-neutral-500">{publication.date}</span>
        </div>
        <h3 className="text-lg font-bold mb-3 hover:text-primary-500 transition-colors">
          <a href="#">{publication.title}</a>
        </h3>
        <p className="text-neutral-600 mb-4">{publication.excerpt}</p>
        <div className="mt-auto">
          <p className="text-sm text-neutral-500">By {publication.author}</p>
        </div>
      </div>
      <div className="p-4 border-t border-neutral-100 bg-neutral-50">
        <div className="flex justify-between items-center">
          <div className="flex space-x-2">
            <button className="text-sm text-neutral-500 hover:text-primary-500">
              PDF
            </button>
            <button className="text-sm text-neutral-500 hover:text-primary-500">
              Cite
            </button>
          </div>
          <a href="#" className="text-primary-500 font-medium hover:text-primary-600 transition-colors">
            Read More →
          </a>
        </div>
      </div>
    </motion.div>
  )
}

export default Publications