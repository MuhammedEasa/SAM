import { useState } from "react";
import { motion } from "framer-motion";
import styles from "../style";
import { serviceCategories } from "../constants/serviceData";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <div className="w-full overflow-hidden bg-primary">
      {/* Hero Section */}
      <section
        className={`${styles.flexCenter} ${styles.paddingY} ${styles.paddingX} flex-col relative`}
      >
        <div className="absolute z-[0] w-[60%] h-[60%] -right-[50%] rounded-full blue__gradient opacity-60" />
        <div className="absolute z-[0] w-[40%] h-[40%] left-[50%] bottom-0 rounded-full pink__gradient opacity-20" />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="w-full flex justify-between items-center md:flex-row flex-col sm:mb-16 mb-6 relative z-[1]"
        >
          <h1 className={styles.heading2}>
            Let&apos;s Start a <br className="sm:block hidden" />
            Conversation
          </h1>
          <div className="w-full md:mt-0 mt-6">
            <p className={`${styles.paragraph} text-left max-w-[450px]`}>
              Reach out to us for personalized solutions tailored to your needs.
              Our team is ready to assist you.
            </p>
          </div>
        </motion.div>
      </section>

      {/* Main Content */}
      <section className={`${styles.paddingX} ${styles.paddingY}`}>
        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="space-y-8"
            >
              <div className="bg-dimBlue rounded-[20px] p-8 space-y-6">
                <h3 className="font-poppins font-semibold text-[24px] text-white">
                  Get in Touch
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center flex-shrink-0">
                      <svg
                        className="w-6 h-6 text-secondary"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                        />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-white font-medium mb-1">Phone</h4>
                      <p className="text-dimWhite">+971 56 565 7217</p>
                      <p className="text-dimWhite">
                        Monday - Saturday, 9am - 6pm
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center flex-shrink-0">
                      <svg
                        className="w-6 h-6 text-secondary"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-white font-medium mb-1">Email</h4>
                      <p className="text-dimWhite">
                        info@samtechnicalservices.com
                      </p>
                      <p className="text-dimWhite">
                        support@samtechnicalservices.com
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center flex-shrink-0">
                      <svg
                        className="w-6 h-6 text-secondary"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-white font-medium mb-1">Location</h4>
                      <p className="text-dimWhite">Umm Ramool, Rashidiya</p>
                      <p className="text-dimWhite">
                        Dubai, United Arab Emirates
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-dimBlue rounded-[20px] p-8">
                <h3 className="font-poppins font-semibold text-[24px] text-white mb-6">
                  Business Hours
                </h3>
                <div className="space-y-3">
                  <div className="flex justify-between text-dimWhite">
                    <span>Monday - Saturday</span>
                    <span>9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between text-dimWhite">
                    <span>Sunday</span>
                    <span>Closed</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="bg-dimBlue rounded-[20px] p-8"
            >
              <h3 className="font-poppins font-semibold text-[24px] text-white mb-8">
                Send us a Message
              </h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-dimWhite mb-2">Name *</label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-lg bg-primary border border-dimWhite/20 text-white focus:border-secondary outline-none transition-colors"
                      placeholder="Your name"
                    />
                  </div>

                  <div>
                    <label className="block text-dimWhite mb-2">Email *</label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-lg bg-primary border border-dimWhite/20 text-white focus:border-secondary outline-none transition-colors"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-dimWhite mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-lg bg-primary border border-dimWhite/20 text-white focus:border-secondary outline-none transition-colors"
                      placeholder="+971 234 567 890"
                    />
                  </div>

                  <div>
                    <label className="block text-dimWhite mb-2">
                      Service Required
                    </label>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-lg bg-primary border border-dimWhite/20 text-white focus:border-secondary outline-none transition-colors"
                    >
                      <option value="">Select a service</option>
                      {serviceCategories.map((category) => (
                        <option key={category.id} value={category.id}>
                          {category.name}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-dimWhite mb-2">
                    Message (Optional)
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows="4"
                    className="w-full px-4 py-3 rounded-lg bg-primary border border-dimWhite/20 text-white focus:border-secondary outline-none transition-colors resize-none"
                    placeholder="Tell us more about your requirements..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full py-4 px-6 bg-secondary text-primary rounded-[10px] font-poppins font-medium text-[18px] outline-none hover:bg-secondary/80 transition-all duration-300"
                >
                  Send Message
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
      {/* Map Section */}
      <section className={`${styles.paddingX} ${styles.paddingY}`}>
        <div className="max-w-[1400px] mx-auto">
          <div className="w-full h-[400px] rounded-[20px] overflow-hidden">
            {/* Google Map Integration */}
            <iframe
              style={{ border: 0, width: "100%", height: "100%" }}
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3609.1125033950107!2d55.370750374521386!3d25.233135430245756!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f5d8e2719c27b%3A0x2226abdfdf383ab9!2sUNIFLO%20-%20AL%20SHIHHI%20INDUSTRY%20CO.!5e0!3m2!1sen!2sae!4v1694731829284!5m2!1sen!2sae"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
