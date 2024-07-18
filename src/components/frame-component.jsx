import Field from "./field";
import PropTypes from "prop-types";

const FrameComponent = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch flex flex-row items-start justify-center py-0 px-5 box-border max-w-full text-left text-21xl text-black font-p ${className}`}
    >
      <div className="w-[1240px] flex flex-col items-start justify-start gap-[71px] max-w-full mq800:gap-[35px] mq450:gap-[18px]">
        <div className="w-[592px] flex flex-row flex-wrap items-start justify-start gap-[40px] max-w-full mq800:gap-[20px]">
          <div className="flex flex-row items-start justify-start">
            <div className="rounded-6xs bg-yellowgreen flex flex-row items-start justify-start py-0 px-[7px] whitespace-nowrap">
              <h1 className="m-0 relative text-inherit font-medium font-inherit">
                Contact Us
              </h1>
            </div>
            <div className="rounded-6xs bg-yellowgreen hidden flex-col items-start justify-start py-0 px-[7px]">
              <div className="h-[51px] relative font-medium inline-block mq800:text-13xl mq450:text-5xl">
                Label
              </div>
            </div>
            <div className="rounded-6xs bg-yellowgreen hidden flex-col items-start justify-start py-0 px-[7px]">
              <div className="h-[51px] relative font-medium inline-block mq800:text-13xl mq450:text-5xl">
                Label
              </div>
            </div>
          </div>
          <div className="flex-1 relative text-lg inline-block min-w-[210px] max-w-full">
            Connect with Us: Let's Discuss Your Digital Marketing Needs
          </div>
        </div>
        <div className="self-stretch rounded-26xl bg-grey flex flex-col items-start justify-start pt-[60px] px-[100px] pb-20 box-border relative gap-[40px] max-w-full text-lg mq800:gap-[20px] mq800:pt-[39px] mq800:px-[50px] mq800:pb-[52px] mq800:box-border mq450:pt-[25px] mq450:px-5 mq450:pb-[34px] mq450:box-border">
          <div className="flex flex-row items-start justify-start gap-[35px] mq450:gap-[17px]">
            <div className="flex flex-row items-start justify-start gap-[14px]">
              <input
                className="cursor-pointer m-0 h-7 w-7 relative rounded-10xl bg-white box-border border-[1px] border-solid border-black"
                type="radio"
              />
              <div className="flex flex-col items-start justify-start pt-0.5 px-0 pb-0">
                <div className="relative inline-block min-w-[54px]">Say Hi</div>
              </div>
            </div>
            <div className="h-7 flex flex-row items-start justify-start gap-[14px]">
              <input
                className="cursor-pointer m-0 h-[30px] w-[30px] relative rounded-10xl bg-white box-border border-[1px] border-solid border-black"
                type="radio"
              />
              <div className="flex flex-col items-start justify-start pt-0.5 px-0 pb-0">
                <div className="relative inline-block min-w-[103px]">
                  Get a Quote
                </div>
              </div>
            </div>
          </div>
          <div className="w-[556px] flex flex-col items-start justify-start gap-[25px] max-w-full text-base">
            <Field name1="Name" namePlaceholder="Name" />
            <Field name1="Email*" namePlaceholder="Email" />
            <div className="self-stretch flex flex-col items-start justify-start gap-[5px]">
              <div className="relative leading-[28px] inline-block min-w-[78px]">
                Message*
              </div>
              <textarea
                className="bg-white h-[190px] w-auto [outline:none] self-stretch rounded-sm box-border overflow-hidden shrink-0 flex flex-row items-start justify-start py-[18px] px-[30px] font-p text-lg text-gray border-[1px] border-solid border-black"
                placeholder="Message"
                rows={10}
                cols={28}
              />
            </div>
          </div>
          <button className="cursor-pointer [border:none] p-5 bg-dark w-[556px] rounded-sm flex flex-row items-start justify-center box-border max-w-full hover:bg-dimgray-100">
            <div className="relative text-xl leading-[28px] font-p text-white text-center mq450:text-base mq450:leading-[22px]">
              Send Message
            </div>
          </button>
          <img
            className="w-[691.6px] h-[648px] absolute !m-[0] top-[calc(50%_-_324px)] right-[-324.6px] object-contain z-[1]"
            alt=""
            src="/illustration-6@2x.png"
          />
        </div>
      </div>
    </section>
  );
};

FrameComponent.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent;
