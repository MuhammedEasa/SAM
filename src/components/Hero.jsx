import styles from "../style";
import discount from "../assets/Discount.svg";
import GetStarted from "./GetStarted";
// import service3d from "../assets/3D Icon.png";
import Design from "../assets/Design.png";
const Hero = () => (
  <section className={`flex md:flex-row flex-col ${styles.paddingY}`}>
    <div
      className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}
    >
      <div className="flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2">
        <img src={discount} alt="discount" className="w-8 h-8" />
        <p className={`${styles.paragraph} ml-2`}>
          <span className="text-white">Get 20% Off</span> Your First Service
          <span className="text-white"> Request a Callback </span> Today!
        </p>
      </div>

      <div className="flex flex-row justify-between items-center w-full">
        <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100px] leading-[75px]">
          Your Fix,
          <br className="sm:block hidden" />
          <span className="text-gradient">Our Expertise.</span>
        </h1>
        <div className="ss:flex hidden md:mr-4 mr-0 ">
          <GetStarted />
        </div>
      </div>
      <h1 className="font-poppins font-semibold ss:text-[68px] text-[52px] text-white ss:leading-[100px] leading-[75px] w-full">
        your success
      </h1>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Our expert team provides a full range of maintenance and technical
        services, ensuring quality, efficiency, and reliability for all your
        needs, from repairs to installations.
      </p>
    </div>

    <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>
      <img
        src={Design}
        alt="Billing"
        className="w-[100%] h-[100%] relative z-[5] "
      />
      <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
      <div className="absolute z-[1] w-[80%] h-[80%] rounded-full bottom-40 white__gradient" />
      <div className="absolute z-[0] w-[50%] h-[50%] bottom-20 right-20 blue__gradient" />
    </div>

    <div className={`ss:hidden ${styles.flexCenter}`}>
      <GetStarted />
    </div>
  </section>
);

export default Hero;
