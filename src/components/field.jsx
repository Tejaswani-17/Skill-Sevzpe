import PropTypes from "prop-types";

const Field = ({ className = "", name1, namePlaceholder }) => {
  return (
    <div
      className={`self-stretch flex flex-col items-start justify-start gap-[5px] text-left text-base text-black font-p ${className}`}
    >
      <div className="relative leading-[28px] inline-block min-w-[44px]">
        {name1}
      </div>
      <div className="self-stretch rounded-sm bg-white overflow-hidden flex flex-row items-start justify-start py-4 px-[30px] border-[1px] border-solid border-black">
        <input
          className="w-[49px] [border:none] [outline:none] font-p text-lg bg-[transparent] h-[23px] relative text-gray text-left inline-block p-0"
          placeholder={namePlaceholder}
          type="text"
        />
      </div>
    </div>
  );
};

Field.propTypes = {
  className: PropTypes.string,
  name1: PropTypes.string,
  namePlaceholder: PropTypes.string,
};

export default Field;
