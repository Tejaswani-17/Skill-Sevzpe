import PropTypes from "prop-types";

const CallToAction = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-[33px] box-border max-w-full text-left text-11xl text-black font-p ${className}`}
    >
      <div className="flex-1 flex flex-row items-center justify-start py-0 px-[100px] box-border max-w-full mq800:pl-[25px] mq800:pr-[25px] mq800:box-border mq1350:pl-[50px] mq1350:pr-[50px] mq1350:box-border">
        <div className="w-[1240px] rounded-26xl bg-grey flex flex-row items-center justify-start p-[60px] box-border max-w-full mq800:gap-[137px] mq800:pl-[30px] mq800:pr-[30px] mq800:box-border mq450:gap-[69px]">
          <div className="w-[500px] flex flex-col items-start justify-start gap-[26px] max-w-full">
            <h3 className="m-0 self-stretch relative text-inherit font-medium font-inherit mq800:text-5xl mq450:text-lg">
              Lets make things happen
            </h3>
            <div className="self-stretch relative text-lg">
              Contact us today to learn more about how our digital marketing
              services can help your business grow and succeed online.
            </div>
            <button className="cursor-pointer [border:none] py-5 px-[35px] bg-dark rounded-sm flex flex-row items-start justify-start whitespace-nowrap hover:bg-dimgray-100">
              <div className="relative text-xl leading-[28px] font-p text-white text-center">
                Get your free proposal
              </div>
            </button>
          </div>
        </div>
        <img
          className="w-[494px] relative max-h-full max-w-full z-[1] ml-[-715px]"
          loading="lazy"
          alt=""
          src="/frame-19.svg"
        />
      </div>
    </section>
  );
};

CallToAction.propTypes = {
  className: PropTypes.string,
};

export default CallToAction;
