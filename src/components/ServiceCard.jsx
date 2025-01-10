import styles from "../style";
import PropTypes from "prop-types";
import { motion, AnimatePresence } from "framer-motion";

// PropTypes definitions
const ServiceType = PropTypes.shape({
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  features: PropTypes.arrayOf(PropTypes.string).isRequired,
  image: PropTypes.string.isRequired,
});

const CategoryType = PropTypes.shape({
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  services: PropTypes.arrayOf(ServiceType).isRequired,
});

// Service Card Component
const ServiceCard = ({ service }) => (
  <motion.div
    layout
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    className="bg-dimBlue rounded-[20px] overflow-hidden hover:bg-secondary/10 transition-all duration-300 flex flex-col h-full"
  >
    <div className="w-full h-[240px] relative bg-gray-800 overflow-hidden">
      <img
        src={service.image}
        alt={service.title}
        className="w-full h-full object-cover"
      />
    </div>

    <div className="p-6 flex flex-col flex-1">
      <h3 className="font-poppins font-semibold text-[24px] leading-[32px] text-white mb-4">
        {service.title}
      </h3>

      <p className={`${styles.paragraph} mb-6`}>{service.description}</p>

      <div className="flex-1">
        <ul className="space-y-3 mb-6">
          {service.features.map((feature, idx) => (
            <li key={idx} className="flex items-start text-dimWhite">
              <span className="w-2 h-2 bg-secondary rounded-full mr-3 mt-2 flex-shrink-0"></span>
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </div>

      <button className="w-full py-4 px-6 bg-secondary text-primary rounded-[10px] font-poppins font-medium text-[18px] outline-none hover:bg-secondary/80 transition-all duration-300">
        Request Service
      </button>
    </div>
  </motion.div>
);

ServiceCard.propTypes = {
  service: ServiceType.isRequired,
};

// Services Grid Component
const ServicesGrid = ({ categories, activeCategory }) => {
  // Reorder categories to show active category first
  const orderedCategories = [...categories].sort((a, b) => {
    if (a.id === activeCategory) return -1;
    if (b.id === activeCategory) return 1;
    return 0;
  });

  return (
    <motion.div layout className="space-y-16">
      {orderedCategories.map((category) => (
        <motion.div
          layout
          key={category.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className={`${styles.heading2} mb-12`}>{category.name}</h2>
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            <AnimatePresence mode="popLayout">
              {category.services.map((service, index) => (
                <ServiceCard
                  key={`${category.id}-${index}`}
                  service={service}
                />
              ))}
            </AnimatePresence>
          </motion.div>
        </motion.div>
      ))}
    </motion.div>
  );
};

ServicesGrid.propTypes = {
  categories: PropTypes.arrayOf(CategoryType).isRequired,
  activeCategory: PropTypes.string.isRequired,
};
export default ServicesGrid;
