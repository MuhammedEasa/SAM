import styles, { layout } from '../style';
import mission from "../assets/mission.jpg";

const Mission = () => (
  <section className={layout.sectionReverse}>
    <div className={layout.sectionImgReverse}>
      <img src={mission} alt="mission" className='w-[100%] h-[100%] relative z-[5] rounded-xl' />
      <div className='absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient' />
      <div className='absolute z-[0] -left-1/2 bottom-0 w-[50%] h-[50%] rounded-full pink__gradient' />
    </div>

    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>Our Mission</h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        At SADAH ALMANARA TECHNICAL SERVICES L.L.C, our mission is to provide exceptional technical services that exceed expectations.
        We are dedicated to building lasting relationships founded on trust, reliability, and superior service quality.
        Through innovation and continuous improvement, we aim to deliver sustainable solutions that meet today&apos;s needs and anticipate tomorrow&apos;s challenges.
      </p>
    </div>
  </section>
);

export default Mission;