import Content from "../components/content";
import FrameComponent2 from "../components/frame-component2";
import CallToAction from "../components/call-to-action";
import CaseStudies from "../components/case-studies";
import ServiceProcess from "../components/service-process";
import Testimonials from "../components/testimonials";
import FrameComponent from "../components/frame-component";

const Desktop = () => {
  return (
    <div className="w-full relative bg-white flex flex-col items-start justify-start py-[50px] px-0 box-border gap-[117px] leading-[normal] tracking-[normal] mq800:gap-[58px] mq450:gap-[29px]">
      <Content />
      <section className="self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-[33px] box-border max-w-full text-left text-21xl text-black font-p">
        <div className="flex-1 flex flex-row flex-wrap items-start justify-start py-0 pr-[542px] pl-[100px] box-border gap-[40px] max-w-full mq800:gap-[20px] mq800:pl-[50px] mq800:pr-[271px] mq800:box-border mq450:pl-5 mq450:pr-5 mq450:box-border">
          <div className="flex flex-col items-start justify-start">
            <div className="rounded-6xs bg-yellowgreen flex flex-col items-start justify-start py-0 px-[7px]">
              <h1 className="m-0 relative text-inherit font-medium font-inherit mq800:text-13xl mq450:text-5xl">
                Services
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
          <div className="flex-1 relative text-lg inline-block min-w-[377px] max-w-full mq1150:min-w-full">
            At our digital marketing agency, we offer a range of services to
            help businesses grow and succeed online. These services include:
          </div>
        </div>
      </section>
      <FrameComponent2 />
      <CallToAction />
      <section className="self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-[33px] box-border max-w-full text-left text-21xl text-black font-p">
        <div className="flex-1 flex flex-row flex-wrap items-start justify-start py-0 pr-[455px] pl-[100px] box-border gap-[40px] max-w-full mq800:gap-[20px] mq800:pl-[50px] mq800:pr-[227px] mq800:box-border mq450:pl-5 mq450:pr-5 mq450:box-border">
          <div className="flex flex-col items-start justify-start">
            <div className="rounded-6xs bg-yellowgreen flex flex-col items-start justify-start py-0 px-[7px] whitespace-nowrap">
              <h1 className="m-0 relative text-inherit font-medium font-inherit">
                Case Studies
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
          <div className="flex-1 relative text-lg inline-block min-w-[377px] max-w-full mq1150:min-w-full">
            Explore Real-Life Examples of Our Proven Digital Marketing Success
            through Our Case Studies
          </div>
        </div>
      </section>
      <CaseStudies />
      <section className="self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-[33px] box-border max-w-full text-left text-21xl text-black font-p">
        <div className="flex-1 flex flex-row flex-wrap items-start justify-center py-0 pr-[596px] pl-[100px] box-border gap-[40px] max-w-full mq800:gap-[20px] mq800:pl-[50px] mq800:pr-[298px] mq800:box-border mq450:pl-5 mq450:pr-5 mq450:box-border">
          <div className="flex-1 flex flex-col items-start justify-start min-w-[268px] max-w-full">
            <div className="self-stretch rounded-6xs bg-yellowgreen flex flex-col items-start justify-start py-0 px-[7px] whitespace-nowrap">
              <h1 className="m-0 relative text-inherit font-medium font-inherit">{`Our Working Process `}</h1>
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
          <div className="w-[292px] relative text-lg inline-block shrink-0">
            Step-by-Step Guide to Achieving Your Business Goals
          </div>
        </div>
      </section>
      <ServiceProcess />
      <Testimonials />
      <FrameComponent />
    </div>
  );
};

export default Desktop;
