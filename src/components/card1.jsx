import PropTypes from "prop-types";

const Card1 = ({ className = "", emptyLabels, researchAndStrategyDevelo }) => {
  return (
    <div
      className={`self-stretch shadow-[0px_5px_0px_#191a23] rounded-26xl bg-grey box-border overflow-hidden flex flex-col items-start justify-start py-[39px] pr-14 pl-[59px] max-w-full text-left text-41xl text-black font-p border-[1px] border-solid border-dark mq1350:pl-[29px] mq1350:pr-7 mq1350:box-border ${className}`}
    >
      <div className="self-stretch overflow-hidden flex flex-row items-center justify-between max-w-full gap-[20px] mq1150:flex-wrap">
        <div className="w-[712px] flex flex-row items-center justify-start gap-[25px] max-w-full mq800:flex-wrap">
          <div className="relative font-medium inline-block min-w-[75px] mq800:text-29xl mq450:text-17xl">
            {emptyLabels}
          </div>
          <h3 className="m-0 flex-1 relative text-11xl font-medium font-inherit inline-block min-w-[398px] max-w-full mq800:text-5xl mq800:min-w-full mq450:text-lg">
            {researchAndStrategyDevelo}
          </h3>
        </div>
        <img
          className="h-[58px] w-[58px] relative"
          alt=""
          src="/plus-icon-1.svg"
        />
      </div>
    </div>
  );
};

Card1.propTypes = {
  className: PropTypes.string,
  emptyLabels: PropTypes.string,
  researchAndStrategyDevelo: PropTypes.string,
};

export default Card1;
