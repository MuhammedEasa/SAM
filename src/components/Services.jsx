import { useState } from "react";
import { motion } from "framer-motion";
import styles from "../style";
import { serviceCategories } from "../constants/serviceData";
import ServicesGrid from "./ServiceCard";

// Main Services Page Component
const ServicesPage = () => {
  const [activeCategory, setActiveCategory] = useState(serviceCategories[0].id);

  return (
    <div className="w-full overflow-hidden bg-primary">
      {/* Hero Section */}
      <section
        className={`${styles.flexCenter} ${styles.paddingY} ${styles.paddingX} flex-col relative`}
      >
        <div className="absolute z-[0] w-[60%] h-[60%] -right-[50%] rounded-full blue__gradient" />

        <div className="w-full flex justify-between items-center md:flex-row flex-col sm:mb-16 mb-6 relative z-[1]">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className={styles.heading2}
          >
            Engineering Excellence, <br className="sm:block hidden" />
            Delivering Innovation
          </motion.h1>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="w-full md:mt-0 mt-6"
          >
            <p className={`${styles.paragraph} text-left max-w-[450px]`}>
              Setting new standards in technical services with cutting-edge
              solutions and unmatched expertise in facility management and
              engineering.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Navigation */}
      <div
        className={`${styles.paddingX} sticky top-0 bg-primary z-50 border-b border-dimBlue`}
      >
        <div className="overflow-x-auto py-4">
          <div className="flex gap-4 min-w-max">
            {serviceCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-6 py-3 rounded-full transition-all duration-300 whitespace-nowrap ${
                  activeCategory === category.id
                    ? "bg-secondary text-primary"
                    : "bg-dimBlue text-dimWhite hover:bg-secondary/20"
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Services Content */}
      <div className={`${styles.paddingX} max-w-[1400px] mx-auto`}>
        <ServicesGrid
          categories={serviceCategories}
          activeCategory={activeCategory}
        />
      </div>

      {/* Contact Section */}
      <section className={`${styles.paddingX} ${styles.marginY}`}>
        <div
          className={`${styles.padding} sm:flex-row flex-col bg-dimBlue rounded-[20px] max-w-[1400px] mx-auto`}
        >
          <div className="flex flex-col md:flex-row items-center justify-between w-full">
            <div className="flex-1">
              <h2 className={styles.heading2}>Ready to get started?</h2>
              <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
                Contact us today for a free consultation and let us help you
                with your service needs.
              </p>
            </div>

            <div className="md:ml-10 mt-10 md:mt-0">
              <button className="py-4 px-8 bg-secondary font-poppins font-medium text-[18px] text-primary outline-none rounded-[10px] hover:bg-secondary/80 transition-all duration-300">
                Request Consultation
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;
