import Hero from "./Hero";
import Stats from "./Stats";
import Business from "./Business";
import Testimonials from "./Testimonials";
import Clients from "./Client";
import CTA from "./CTA";
import styles from "../style";

const Home = () => (
    <>
    <div className={`bg-primary ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Hero/>
      </div>
    </div>
    <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Stats/>
        <Business/>
        <Testimonials/>
        <Clients/>
        <CTA/>
      </div>
    </div>
  
  </>
);

export default Home;
