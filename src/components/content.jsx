import PropTypes from "prop-types";

const Content = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-[33px] box-border max-w-full text-left text-41xl text-black font-p ${className}`}
    >
      <div className="flex-1 flex flex-col items-start justify-start gap-[70px] max-w-full mq800:gap-[35px] mq450:gap-[17px]">
        <header className="self-stretch overflow-hidden flex flex-row items-center justify-between py-0 px-[100px] box-border max-w-full text-left text-xl text-black font-p mq800:pl-[25px] mq800:pr-[25px] mq800:box-border mq1350:pl-[50px] mq1350:pr-[50px] mq1350:box-border">
          <div className="w-[404px] overflow-hidden shrink-0 flex flex-row items-start justify-start py-2.5 px-0 box-border max-w-full">
            <img
              className="h-[101px] flex-1 relative max-w-full overflow-hidden object-cover"
              loading="lazy"
              alt=""
              src="/full-frame-logo-black-1@2x.png"
            />
          </div>
          <div className="w-[811px] flex flex-row items-center justify-between py-5 px-0 box-border gap-[20px] max-w-full mq1350:hidden">
            <a className="[text-decoration:none] relative leading-[28px] text-[inherit] inline-block min-w-[88px] whitespace-nowrap">
              About us
            </a>
            <a className="[text-decoration:none] relative leading-[28px] text-[inherit] inline-block min-w-[82px]">
              Services
            </a>
            <a className="[text-decoration:none] relative leading-[28px] text-[inherit] inline-block min-w-[99px] whitespace-nowrap">
              Use Cases
            </a>
            <a className="[text-decoration:none] relative leading-[28px] text-[inherit] inline-block min-w-[67px]">
              Pricing
            </a>
            <a className="[text-decoration:none] relative leading-[28px] text-[inherit] inline-block min-w-[44px]">
              Blog
            </a>
            <button className="cursor-pointer py-[18px] px-[34px] bg-[transparent] rounded-sm flex flex-row items-start justify-start whitespace-nowrap border-[1px] border-solid border-dark hover:bg-dimgray-200 hover:box-border hover:border-[1px] hover:border-solid hover:border-dimgray-100">
              <a className="[text-decoration:none] relative text-xl leading-[28px] font-p text-black text-center">
                Request a quote
              </a>
            </button>
          </div>
        </header>
        <div className="self-stretch overflow-hidden flex flex-row items-start justify-between py-0 px-[100px] box-border max-w-full gap-[20px] mq800:pl-[25px] mq800:pr-[25px] mq800:box-border mq1350:flex-wrap mq1350:pl-[50px] mq1350:pr-[50px] mq1350:box-border">
          <div className="w-[531px] flex flex-col items-start justify-start gap-[35px] min-w-[531px] max-w-full mq800:gap-[17px] mq800:min-w-full mq1350:flex-1">
            <h1 className="m-0 self-stretch relative text-inherit font-medium font-inherit mq800:text-29xl mq450:text-17xl">
              Navigating the digital landscape for success
            </h1>
            <div className="w-[498px] relative text-xl leading-[28px] inline-block max-w-full mq450:text-base mq450:leading-[22px]">
              Our digital marketing agency helps businesses grow and succeed
              online through a range of services including SEO, PPC, social
              media marketing, and content creation.
            </div>
            <button className="cursor-pointer [border:none] py-5 px-[35px] bg-dark rounded-sm flex flex-row items-start justify-start whitespace-nowrap hover:bg-dimgray-100">
              <div className="relative text-xl leading-[28px] font-p text-white text-center">
                Book a consultation
              </div>
            </button>
          </div>
          <img
            className="w-[600.5px] relative max-h-full max-w-full mq1350:flex-1"
            loading="lazy"
            alt=""
            src="/illustration.svg"
          />
        </div>
        <div className="self-stretch overflow-hidden flex flex-row items-start justify-between py-0 px-[100px] gap-[20px] mq800:pl-[25px] mq800:pr-[25px] mq800:box-border mq1150:flex-wrap mq1150:justify-center mq1150:pl-[50px] mq1150:pr-[50px] mq1150:box-border">
          <img
            className="self-stretch w-[124.1px] relative max-h-full overflow-hidden shrink-0 mix-blend-luminosity min-h-[48px]"
            alt=""
            src="/company-logo.svg"
          />
          <img
            className="self-stretch w-[126.4px] relative max-h-full overflow-hidden shrink-0 mix-blend-luminosity min-h-[48px]"
            alt=""
            src="/company-logo-1.svg"
          />
          <img
            className="self-stretch w-[128.6px] relative max-h-full overflow-hidden shrink-0 mix-blend-luminosity min-h-[48px]"
            alt=""
            src="/company-logo-2.svg"
          />
          <img
            className="self-stretch w-[145.6px] relative max-h-full overflow-hidden shrink-0 mix-blend-luminosity min-h-[48px]"
            alt=""
            src="/company-logo-3.svg"
          />
          <img
            className="self-stretch w-[125.2px] relative max-h-full overflow-hidden shrink-0 mix-blend-luminosity min-h-[48px]"
            alt=""
            src="/company-logo-4.svg"
          />
          <img
            className="self-stretch w-[110.6px] relative max-h-full overflow-hidden shrink-0 mix-blend-luminosity min-h-[48px]"
            alt=""
            src="/company-logo-5.svg"
          />
        </div>
      </div>
    </section>
  );
};

Content.propTypes = {
  className: PropTypes.string,
};

export default Content;
