import { coreValues } from "../constants";
import styles, { layout } from "../style";

const ValuesSection = () => (
  <div className={`${layout.section} mt-20`}>
    <div className="flex flex-col w-full">
      <h2 className={`${styles.heading2} text-center mb-10`}>Our Core Values</h2>
      <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8">
        {coreValues.map((value, index) => (
          <div
            key={index}
            className="feature-card p-6 rounded-[20px] bg-dimBlue hover:bg-slate-800 transition-all duration-300"
          >
            <h4 className="font-poppins font-semibold text-white text-[20px] leading-[32px] mb-3">
              {value.title}
            </h4>
            <p className="font-poppins font-normal text-dimWhite text-[16px] leading-[24px]">
              {value.content}
            </p>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default ValuesSection;
