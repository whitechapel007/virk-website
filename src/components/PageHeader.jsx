/* eslint-disable react/prop-types */
import Typography from "./Typography";
import { twMerge } from "tailwind-merge";

const PageHeader = ({ image, heading, summary, customStyle }) => {
  return (
    <section
      className={twMerge(
        "flex flex-col items-center gap-8 bg-red-100 px-4 py-20 md:flex-row md:gap-32 md:px-20 md:pb-28 md:pt-28",
        customStyle,
      )}
    >
      <div className="max-w-sm">
        <img src={image} alt="" className="w-full lg:h-[270px]" />
      </div>
      <div className="">
        <Typography
          color="primary-dark"
          variant="headline-l"
          fontWeight="medium"
          customClassName="mb-5 max-w-lg font-satoshi"
        >
          {heading}
        </Typography>
        <Typography
          color="primary-dark"
          fontWeight="regular"
          customClassName="max-w-xl font-merriweather-light font-normal "
        >
          {summary}
        </Typography>
      </div>
    </section>
  );
};

export default PageHeader;
