import styles, { layout } from "../style";
import { process } from "../constants";
import Button from "./Button";
import PropTypes from "prop-types";

const Process = ({ icon, title, content, index }) => (
  <div
    className={`flex flex-row p-6 rounded-[20px] ${
      index !== process.length - 1 ? "mb-6" : "mb-0"
    } feature-card`}
  >
    <div
      className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue`}
    >
      <img src={icon} alt="icon" className="w-[50%] h-[50%] object-contain" />
    </div>
    <div className="flex flex-col flex-1 ml-3">
      <h4 className="font-poppins font-semibold text-white text-[18px] leading-[23px] mb-1">
        {title}
      </h4>
      <p className="font-poppins font-normal text-dimWhite text-[16px] leading-[24px] mb-1">
        {content}
      </p>
    </div>
  </div>
);
Process.propTypes = {
  icon: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
};
const Business = () => (
  <section  className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        Our Process, <br className="sm:block hidden" /> Your Peace of Mind.
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        We simplify your maintenance and technical needs with a streamlined
        approach: from understanding your requirements to delivering exceptional
        results, our process is built for efficiency and quality.
      </p>
      <Button styles="mt-10" />
    </div>

    <div className={`${layout.sectionImg} flex-col`}>
      {process.map((feature, index) => (
        <Process key={feature.id} {...feature} index={index} />
      ))}
    </div>
  </section>
);

export default Business;
