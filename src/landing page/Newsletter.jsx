import { motion } from "framer-motion";
import { useState } from "react";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      // Here you would typically handle the subscription
      setSubmitted(true);
      setEmail("");
      // Reset after 3 seconds
      setTimeout(() => setSubmitted(false), 3000);
    }
  };

  return (
    <section className="py-16 bg-white">
      <div className="container">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-lg shadow-xl overflow-hidden border border-neutral-300"
          >
            <div className="grid md:grid-cols-2">
              <div className="p-8 md:p-12 flex flex-col justify-center">
                <h2 className="text-3xl font-bold mb-4">
                  Do you have concerns?
                </h2>
                <p className="text-neutral-600 mb-6">
                  Reach out to us by providing your feedback.
                </p>

                {submitted ? (
                  <div className="bg-green-100 border border-green-200 text-green-800 rounded-md p-4 mb-4">
                    Thank you for subscribing! You&apos;ll receive our next
                    newsletter.
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <button type="submit" className="w-full btn-primary">
                      Proceed to feedback
                    </button>
                  </form>
                )}
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
  );
};

export default Newsletter;
