import styles, { layout } from '../style';
import Button from './Button';
import vision from "../assets/vision.jpg";

const Vision = () => (
  <section id="vision" className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>Our Vision</h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        At SADAH ALMANARA TECHNICAL SERVICES L.L.C, we aspire to be the leading provider of technical services in the GCC, 
        renowned for excellence, innovation, and unparalleled customer satisfaction. Our vision is to set industry benchmarks 
        for quality and reliability, becoming a name that inspires trust and fosters long-lasting relationships with clients 
        and partners alike.
      </p>
      <Button styles="mt-10" />
    </div>
    <div className={layout.sectionImg}>
      <img src={vision} alt="vision" className='w-[100%] h-[100%] rounded-xl' />
    </div>
  </section>
);

export default Vision;