import FrameComponent1 from "./frame-component1";
import PropTypes from "prop-types";

const CaseStudies = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch flex flex-row items-start justify-center pt-0 pb-[33px] pr-[26px] pl-5 box-border max-w-full text-left text-lg text-white font-p ${className}`}
    >
      <div className="w-[1234px] rounded-26xl bg-dark flex flex-row items-start justify-between py-[70px] px-[60px] box-border gap-[20px] max-w-full mq1150:flex-wrap mq1350:pl-[30px] mq1350:pr-[30px] mq1350:box-border">
        <FrameComponent1 forALocalRestaurantWeImpl="For a local restaurant, we implemented a targeted PPC campaign that resulted in a 50% increase in website traffic and a 25% increase in sales." />
        <div className="h-[187px] w-px relative box-border border-r-[1px] border-solid border-white mq1150:w-full mq1150:h-px" />
        <FrameComponent1 forALocalRestaurantWeImpl="For a B2B software company, we developed an SEO strategy that resulted in a first page ranking for key keywords and a 200% increase in organic traffic." />
        <div className="h-[187px] w-px relative box-border border-r-[1px] border-solid border-white mq1150:w-full mq1150:h-px" />
        <FrameComponent1 forALocalRestaurantWeImpl="For a national retail chain, we created a social media marketing campaign that increased followers by 25% and generated a 20% increase in online sales." />
      </div>
    </section>
  );
};

CaseStudies.propTypes = {
  className: PropTypes.string,
};

export default CaseStudies;
