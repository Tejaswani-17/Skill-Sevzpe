import PropTypes from "prop-types";

const Card3 = ({ className = "", label, label1, illustration }) => {
  return (
    <div
      className={`flex-1 shadow-[0px_5px_0px_#191a23] rounded-26xl bg-grey box-border overflow-hidden flex flex-row items-center justify-between py-12 px-[50px] min-w-[390px] max-w-full gap-[20px] text-left text-11xl text-black font-p border-[1px] border-solid border-dark mq800:flex-wrap mq800:pl-[25px] mq800:pr-[25px] mq800:box-border mq800:min-w-full ${className}`}
    >
      <div className="flex flex-col items-start justify-center gap-[93px] min-w-[221px] mq800:flex-1">
        <div className="flex flex-col items-start justify-start">
          <div className="rounded-6xs bg-yellowgreen flex flex-col items-start justify-start py-0 px-[7px] whitespace-nowrap">
            <div className="relative font-medium">{label}</div>
          </div>
          <div className="rounded-6xs bg-yellowgreen flex flex-col items-start justify-start py-0 px-[7px]">
            <div className="relative font-medium mq800:text-5xl mq450:text-lg">
              {label1}
            </div>
          </div>
          <div className="w-[119px] rounded-6xs bg-yellowgreen hidden flex-col items-start justify-start py-0 px-[7px] box-border">
            <div className="h-[38px] relative font-medium inline-block mq800:text-5xl mq450:text-lg">
              (SEO)
            </div>
          </div>
        </div>
        <div className="flex flex-row items-center justify-start gap-[15px] text-xl">
          <img className="h-[41px] w-[41px] relative" alt="" src="/icon.svg" />
          <a className="[text-decoration:none] relative leading-[28px] text-[inherit] inline-block min-w-[108px] whitespace-nowrap mq450:text-base mq450:leading-[22px]">
            Learn more
          </a>
        </div>
      </div>
      <img
        className="h-[170px] w-[210px] relative object-contain mq800:flex-1"
        alt=""
        src={illustration}
      />
    </div>
  );
};

Card3.propTypes = {
  className: PropTypes.string,
  label: PropTypes.string,
  label1: PropTypes.string,
  illustration: PropTypes.string,
};

export default Card3;
