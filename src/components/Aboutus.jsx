import styles, { layout } from "../style";
import About from "../assets/AboutImage.jpg";
import Mission from "./Mission";
import Vision from "./Vision";
import ValuesSection from "./CoreValues";

const AboutUs = () => {
  return (
    <div className={`w-full overflow-hidden bg-primary`}>
      <div
        className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}
      >
        {/* Hero Section */}
        <div className={`flex flex-col items-center justify-center w-full`}>
          <h1 className="font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100px] leading-[75px] w-full text-center mb-12">
            About Us
          </h1>
        </div>

        {/* Main Content Section */}
        <div className={`${layout.section} relative z-[1] pt-10`}>
          <div className={layout.sectionInfo}>
            <h2 className={styles.heading2}>
              Crafting Quality, <br className="sm:block hidden" /> Delivering
              Trust
            </h2>
            <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
              SADAH ALMANARA TECHNICAL SERVICES L.L.C, established in 2016, is a
              trusted provider of maintenance and technical services across the
              UAE. From HVAC and plumbing to carpentry and painting, we deliver
              quality solutions tailored to offices and commercial projects.
              Based in Dubai, our skilled team ensures excellence and innovation
              in every project, exceeding client expectations with reliable and
              efficient results.
            </p>

            <div className="flex flex-row flex-wrap sm:mt-10 mt-6">
              <div className="flex flex-col items-center justify-center mr-8 mb-4">
                <h4 className="font-poppins font-semibold text-white text-[40px] leading-[53px]">
                  8+
                </h4>
                <p className="font-poppins font-normal text-dimWhite text-[16px] leading-[24px]">
                  Years Experience
                </p>
              </div>
              <div className="flex flex-col items-center justify-center mr-8 mb-4">
                <h4 className="font-poppins font-semibold text-white text-[40px] leading-[53px]">
                  500+
                </h4>
                <p className="font-poppins font-normal text-dimWhite text-[16px] leading-[24px]">
                  Projects Completed
                </p>
              </div>
              <div className="flex flex-col items-center justify-center mb-4">
                <h4 className="font-poppins font-semibold text-white text-[40px] leading-[53px]">
                  50+
                </h4>
                <p className="font-poppins font-normal text-dimWhite text-[16px] leading-[24px]">
                  Team Members
                </p>
              </div>
            </div>
          </div>

          <div className={layout.sectionImg}>
            <img
              src={About}
              alt="about-us"
              className="w-[100%] h-[100%] relative z-[5] rounded-xl"
            />
            <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
            <div className="absolute z-[0] -left-1/2 bottom-0 w-[50%] h-[50%] rounded-full pink__gradient" />
          </div>
        </div>

        <div>
          <Mission />
          <Vision />
          <ValuesSection />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
