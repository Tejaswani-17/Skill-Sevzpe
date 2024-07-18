import Card from "./card";
import PropTypes from "prop-types";

const Testimonials = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch flex flex-col items-start justify-start pt-0 pb-[23px] pr-[7px] pl-[93px] box-border gap-[71px] max-w-full text-left text-21xl text-black font-p mq800:gap-[35px] mq800:pl-[23px] mq800:box-border mq450:gap-[18px] mq1350:pl-[46px] mq1350:box-border ${className}`}
    >
      <div className="ml-[-100px] w-[1440px] flex flex-row flex-wrap items-start justify-center py-0 pr-[572px] pl-[100px] box-border gap-[40px] max-w-[108%] shrink-0 mq800:gap-[20px] mq800:pl-[50px] mq800:pr-[286px] mq800:box-border mq450:pl-5 mq450:pr-5 mq450:box-border">
        <div className="flex flex-col items-start justify-start">
          <div className="rounded-6xs bg-yellowgreen flex flex-col items-start justify-start py-0 px-[7px]">
            <h1 className="m-0 relative text-inherit font-medium font-inherit mq800:text-13xl mq450:text-5xl">
              Testimonials
            </h1>
          </div>
          <div className="w-[119px] rounded-6xs bg-yellowgreen hidden flex-col items-start justify-start py-0 px-[7px] box-border">
            <div className="self-stretch h-[51px] relative font-medium inline-block mq800:text-13xl mq450:text-5xl">
              Label
            </div>
          </div>
          <div className="w-[119px] rounded-6xs bg-yellowgreen hidden flex-col items-start justify-start py-0 px-[7px] box-border">
            <div className="self-stretch h-[51px] relative font-medium inline-block mq800:text-13xl mq450:text-5xl">
              Label
            </div>
          </div>
        </div>
        <div className="flex-1 relative text-lg inline-block min-w-[307px] max-w-full">
          Hear from Our Satisfied Clients: Read Our Testimonials to Learn More
          about Our Digital Marketing Services
        </div>
      </div>
      <div className="w-[1240px] rounded-26xl bg-dark overflow-hidden flex flex-col items-start justify-start pt-[84px] px-[331px] pb-[68px] box-border gap-[124px] max-w-full text-lg text-white mq800:gap-[31px] mq800:pt-[55px] mq800:px-[82px] mq800:pb-11 mq800:box-border mq450:gap-[15px] mq450:pl-5 mq450:pr-5 mq450:box-border mq1350:gap-[62px] mq1350:pl-[165px] mq1350:pr-[165px] mq1350:box-border">
        <div className="ml-[-677px] w-[2117px] overflow-x-auto flex flex-row items-start justify-start gap-[50px] max-w-[367%] shrink-0 mq800:gap-[25px]">
          <Card rectangle55="/rectangle-55.svg" shapes="/polygon-1.svg" />
          <div className="w-[606px] shrink-0 flex flex-col items-start justify-start gap-[20px] max-w-full">
            <div className="self-stretch h-[266px] relative">
              <div className="absolute top-[0px] left-[0px] bg-dark w-full h-full flex flex-row items-start justify-start">
                <div className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px]">
                  <img
                    className="absolute top-[0px] left-[0px] rounded-26xl w-[606px] h-[238px]"
                    alt=""
                    src="/rectangle-55-1.svg"
                  />
                  <img
                    className="absolute top-[227.1px] left-[51px] w-16 h-[38.9px] object-contain z-[1]"
                    alt=""
                    src="/polygon-1-1.svg"
                  />
                </div>
              </div>
              <blockquote className="m-0 absolute top-[48px] left-[52px] inline-block w-[502px] z-[2]">
                "We have been working with Positivus for the past year and have
                seen a significant increase in website traffic and leads as a
                result of their efforts. The team is professional, responsive,
                and truly cares about the success of our business. We highly
                recommend Positivus to any company looking to grow their online
                presence."
              </blockquote>
            </div>
            <div className="self-stretch flex flex-row items-start justify-end max-w-full text-xl text-yellowgreen">
              <div className="w-[526px] relative inline-block shrink-0 max-w-full">
                <p className="m-0 font-medium">John Smith</p>
                <p className="m-0 text-lg text-white">
                  Marketing Director at XYZ Corp
                </p>
              </div>
            </div>
          </div>
          <Card rectangle55="/rectangle-55-2.svg" shapes="/polygon-1-2.svg" />
        </div>
        <div className="w-[564px] flex flex-row items-start justify-between gap-[20px] max-w-full mq450:flex-wrap">
          <div className="h-[7px] flex flex-col items-start justify-start pt-[7px] px-0 pb-0 box-border">
            <div className="w-5 h-0 relative flex items-center justify-center">
              <img
                className="w-full h-full object-contain absolute left-[0px] top-[0px] [transform:scale(Infinity)]"
                loading="lazy"
                alt=""
                src="/arrow-left.svg"
              />
            </div>
          </div>
          <img
            className="h-3.5 w-[146px] relative"
            loading="lazy"
            alt=""
            src="/navigation-stars.svg"
          />
          <div className="h-[7px] flex flex-col items-start justify-start pt-[7px] px-0 pb-0 box-border">
            <img
              className="w-5 h-0 relative object-contain"
              loading="lazy"
              alt=""
              src="/arrow-right@2x.png"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

Testimonials.propTypes = {
  className: PropTypes.string,
};

export default Testimonials;
