import PropTypes from "prop-types";

const FrameComponent1 = ({ className = "", forALocalRestaurantWeImpl }) => {
  return (
    <div
      className={`w-[286px] flex flex-col items-start justify-start gap-[20px] text-left text-lg text-white font-p ${className}`}
    >
      <div className="self-stretch relative">{forALocalRestaurantWeImpl}</div>
      <div className="flex flex-row items-start justify-start gap-[15px] text-xl text-yellowgreen">
        <a className="[text-decoration:none] relative leading-[28px] text-[inherit] inline-block min-w-[108px] whitespace-nowrap mq450:text-base mq450:leading-[22px]">
          Learn more
        </a>
        <div className="flex flex-col items-start justify-start pt-[9px] px-0 pb-0">
          <img className="w-[17.3px] h-2.5 relative" alt="" src="/icon-6.svg" />
        </div>
      </div>
    </div>
  );
};

FrameComponent1.propTypes = {
  className: PropTypes.string,
  forALocalRestaurantWeImpl: PropTypes.string,
};

export default FrameComponent1;
