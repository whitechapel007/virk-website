/* eslint-disable react/prop-types */
import ArrowRight from "../assets/arrow-right.svg";
export const ButtonSm = ({ text, customStyle, icon }) => {
  return (
    <button
      className={`font-satoshi-normal w-full border border-primary-main bg-white p-2 px-1 py-3 text-base font-bold uppercase leading-6 transition-all hover:bg-primary-main hover:text-white md:w-[155px] ${customStyle}`}
    >
      {text}
      {icon ? <img src={icon} alt="" /> : null}
    </button>
  );
};

export const ButtonLg = ({ text, customStyle }) => {
  return (
    <button
      className={`w-full border border-primary-main bg-primary-main p-2 px-1  py-3 text-sm uppercase text-white transition-all hover:bg-white hover:text-black-700 ${customStyle}`}
    >
      {text}
    </button>
  );
};

export const FloatingBtn = ({ floatStyle }) => {
  return (
    <button
      className={`fixed -right-5 top-[50%] z-10 !w-20 -rotate-90 border-2 border-primary-main bg-primary-main p-2 !text-[10px] text-sm uppercase text-white transition-all hover:!border-white hover:bg-white hover:text-black-700 md:right-0 md:!h-28 md:!w-28 md:rotate-0 md:!text-sm ${floatStyle}`}
    >
      contact us
    </button>
  );
};

export const PlayButton = ({ text }) => {
  return (
    <div className="flex h-[55px]">
      <button className="font-satoshi-normal flex h-full items-center border border-primary-main px-3 text-base font-bold leading-6 tracking-[10%] uppercase transition-all hover:bg-primary-main  hover:text-white">
        {text}
      </button>
      <img
        src={ArrowRight}
        alt=""
        className="h-full cursor-pointer border border-primary-main bg-primary-main"
      />
    </div>
  );
};
