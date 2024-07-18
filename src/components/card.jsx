import PropTypes from "prop-types";

const Card = ({ className = "", rectangle55, shapes }) => {
  return (
    <div
      className={`w-[606px] shrink-0 flex flex-col items-start justify-start pt-12 pb-0 pr-0 pl-[52px] box-border relative gap-[100px] max-w-full text-left text-lg text-white font-p mq800:gap-[50px] mq800:pl-[26px] mq800:box-border mq450:gap-[25px] ${className}`}
    >
      <div className="w-full h-[266px] !m-[0] absolute top-[0px] right-[0px] left-[0px] bg-dark flex flex-row items-start justify-start">
        <div className="h-full w-[353px] absolute !m-[0] top-[0px] right-[0px] bottom-[0px]">
          <img
            className="absolute top-[0px] left-[-253px] rounded-26xl w-[606px] h-[238px]"
            alt=""
            src={rectangle55}
          />
          <img
            className="absolute top-[227.1px] left-[-202px] w-16 h-[38.9px] object-contain z-[1]"
            loading="lazy"
            alt=""
            src={shapes}
          />
        </div>
      </div>
      <blockquote className="m-0 w-[502px] relative inline-block max-w-full z-[2]">
        "We have been working with Positivus for the past year and have seen a
        significant increase in website traffic and leads as a result of their
        efforts. The team is professional, responsive, and truly cares about the
        success of our business. We highly recommend Positivus to any company
        looking to grow their online presence."
      </blockquote>
      <div className="self-stretch flex flex-row items-start justify-start py-0 pr-0 pl-7 box-border max-w-full text-xl text-yellowgreen">
        <div className="flex-1 relative inline-block max-w-full">
          <p className="m-0 font-medium">John Smith</p>
          <p className="m-0 text-lg text-white">
            Marketing Director at XYZ Corp
          </p>
        </div>
      </div>
    </div>
  );
};

Card.propTypes = {
  className: PropTypes.string,
  rectangle55: PropTypes.string,
  shapes: PropTypes.string,
};

export default Card;
