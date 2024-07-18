import Card1 from "./card1";
import PropTypes from "prop-types";

const ServiceProcess = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch flex flex-row items-start justify-center py-0 pr-[26px] pl-5 box-border max-w-full text-left text-41xl text-black font-p ${className}`}
    >
      <div className="w-[1234px] flex flex-col items-start justify-start gap-[30px] max-w-full">
        <div className="self-stretch shadow-[0px_5px_0px_#191a23] rounded-26xl bg-yellowgreen box-border overflow-hidden flex flex-col items-start justify-start py-[39px] pr-14 pl-[59px] gap-[29.5px] max-w-full border-[1px] border-solid border-dark mq1350:pl-[29px] mq1350:pr-7 mq1350:box-border">
          <div className="self-stretch overflow-hidden flex flex-row items-start justify-between max-w-full gap-[20px] mq1150:flex-wrap">
            <div className="w-[702px] flex flex-row items-start justify-start gap-[25px] max-w-full mq800:flex-wrap">
              <div className="relative font-medium inline-block min-w-[65px] mq800:text-29xl mq450:text-17xl">
                01
              </div>
              <div className="flex-1 flex flex-col items-start justify-start pt-[19.5px] px-0 pb-0 box-border min-w-[398px] max-w-full text-11xl mq800:min-w-full">
                <h3 className="m-0 self-stretch relative text-inherit font-medium font-inherit mq800:text-5xl mq450:text-lg">
                  Consultation
                </h3>
              </div>
            </div>
            <div className="flex flex-col items-start justify-start pt-[9.5px] px-0 pb-0">
              <img
                className="w-[58px] h-[58px] relative"
                loading="lazy"
                alt=""
                src="/plus-icon.svg"
              />
            </div>
          </div>
          <div className="self-stretch h-px relative box-border border-t-[1px] border-solid border-black" />
          <div className="self-stretch h-[60px] relative text-lg inline-block shrink-0">
            During the initial consultation, we will discuss your business goals
            and objectives, target audience, and current marketing efforts. This
            will allow us to understand your needs and tailor our services to
            best fit your requirements.
          </div>
        </div>
        <Card1
          emptyLabels="02"
          researchAndStrategyDevelo="Research and Strategy Development"
        />
        <Card1 emptyLabels="03" researchAndStrategyDevelo="Implementation" />
        <Card1
          emptyLabels="04"
          researchAndStrategyDevelo="Monitoring and Optimization"
        />
        <Card1
          emptyLabels="05"
          researchAndStrategyDevelo="Reporting and Communication"
        />
        <Card1
          emptyLabels="06"
          researchAndStrategyDevelo="Continual Improvement"
        />
      </div>
    </section>
  );
};

ServiceProcess.propTypes = {
  className: PropTypes.string,
};

export default ServiceProcess;
