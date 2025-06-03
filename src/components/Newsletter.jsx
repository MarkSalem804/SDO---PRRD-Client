import { motion } from 'framer-motion'
import { useState } from 'react'

const Newsletter = () => {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)
  
  const handleSubmit = (e) => {
    e.preventDefault()
    if (email) {
      // Here you would typically handle the subscription
      setSubmitted(true)
      setEmail('')
      // Reset after 3 seconds
      setTimeout(() => setSubmitted(false), 3000)
    }
  }
  
  return (
    <section className="py-16 bg-primary-500">
      <div className="container">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-lg shadow-xl overflow-hidden"
          >
            <div className="grid md:grid-cols-2">
              <div className="p-8 md:p-12 flex flex-col justify-center">
                <h2 className="text-3xl font-bold mb-4">Stay Informed</h2>
                <p className="text-neutral-600 mb-6">
                  Subscribe to our newsletter for the latest research findings, policy briefs, and event announcements.
                </p>
                
                {submitted ? (
                  <div className="bg-green-100 border border-green-200 text-green-800 rounded-md p-4 mb-4">
                    Thank you for subscribing! You'll receive our next newsletter.
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-neutral-700 mb-1">
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="youremail@example.com"
                        className="w-full px-4 py-2 border border-neutral-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                        required
                      />
                    </div>
                    <div className="flex items-center">
                      <input
                        id="privacy"
                        type="checkbox"
                        className="h-4 w-4 text-primary-500 border-neutral-300 rounded"
                        required
                      />
                      <label htmlFor="privacy" className="ml-2 block text-sm text-neutral-600">
                        I agree to the <a href="#" className="text-primary-500 hover:text-primary-600">privacy policy</a>
                      </label>
                    </div>
                    <button 
                      type="submit"
                      className="w-full btn-primary"
                    >
                      Subscribe
                    </button>
                  </form>
                )}
                
                <p className="mt-4 text-sm text-neutral-500">
                  We respect your privacy and will never share your information.
                </p>
              </div>
              
              <div className="hidden md:block bg-neutral-100">
                <img 
                  src="https://images.pexels.com/photos/5673488/pexels-photo-5673488.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                  alt="Government research team" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Newsletter