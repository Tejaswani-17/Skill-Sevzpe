import Card3 from "./card3";
import Card2 from "./card2";
import PropTypes from "prop-types";

const FrameComponent2 = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-[33px] box-border max-w-full text-left text-11xl text-black font-p ${className}`}
    >
      <div className="flex-1 flex flex-col items-start justify-start gap-[40px] max-w-full mq800:gap-[20px]">
        <div className="self-stretch flex flex-row flex-wrap items-start justify-start py-0 px-[100px] box-border gap-[40px] max-w-full mq800:gap-[20px] mq800:pl-[50px] mq800:pr-[50px] mq800:box-border mq450:pl-5 mq450:pr-5 mq450:box-border">
          <Card3
            label="Search engine"
            label1="optimization"
            illustration="/illustration-1@2x.png"
          />
          <Card2
            label="Pay-per-click"
            label1="advertising"
            icon="/icon.svg"
            illustration="/illustration-2@2x.png"
          />
        </div>
        <div className="self-stretch flex flex-row flex-wrap items-start justify-start py-0 px-[100px] box-border gap-[40px] max-w-full mq800:gap-[20px] mq800:pl-[50px] mq800:pr-[50px] mq800:box-border mq450:pl-5 mq450:pr-5 mq450:box-border">
          <Card2
            label="Social Media"
            label1="Marketing"
            icon="/icon-2.svg"
            illustration="/illustration-3@2x.png"
            propBackgroundColor="#191a23"
          />
          <Card3
            label="Email"
            label1="Marketing"
            illustration="/tokyosendingmessagesfromoneplacetoanother-1@2x.png"
          />
        </div>
        <div className="self-stretch flex flex-row flex-wrap items-start justify-start py-0 px-[100px] box-border gap-[40px] max-w-full mq800:gap-[20px] mq800:pl-[50px] mq800:pr-[50px] mq800:box-border mq450:pl-5 mq450:pr-5 mq450:box-border">
          <Card2
            label="Content"
            label1="Creation"
            icon="/icon.svg"
            illustration="/illustration-4@2x.png"
            propBackgroundColor="#b9ff66"
          />
          <Card2
            label="Analytics and "
            label1="Tracking"
            icon="/icon-2.svg"
            illustration="/illustration-5@2x.png"
            propBackgroundColor="#191a23"
          />
        </div>
      </div>
    </section>
  );
};

FrameComponent2.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent2;
