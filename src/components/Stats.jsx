import Typography from "./Typography";
import StatImg from "../assets/stat-img.png";

import { stats } from "../constants/partners";

const Stats = () => {
  return (
    <section className="relative bg-primary-500">
      <div className="mx-auto flex w-full   flex-col justify-between gap-10 p-4  py-10 md:flex-row md:py-20 lg:w-[93%] ">
        <div className="space-y-5 md:w-1/2">
          <Typography
            fontWeight="bold"
            customClassName="uppercase !text-primary-light !text-[11px] !tracking-widest"
            variant="text-sm"
          >
            By the numbers
          </Typography>
          <Typography
            color="primary-dark"
            variant="headline-p"
            fontWeight="medium"
            customClassName="md:max-w-xs whitespace-nowrap"
          >
            This is how we make <br /> a
            <Typography tag="span" variant="headline-p" fontWeight="medium">
              {" "}
              difference
            </Typography>
            .
          </Typography>
          <div className="">
            <img src={StatImg} alt="" width={500} />
            <small className="mt-4 inline-block max-w-sm text-sm text-primary-light">
              *Past results are not necessarily indicative of future results and
              the amount recovered and other litigation outcomes will vary
              according to the facts in individual cases.
            </small>
          </div>
        </div>
        <div className="flex flex-col items-center justify-between border-t border-t-gray-200 md:w-[30%] md:items-start">
          {stats.map((stat, id) => (
            <div
              key={id}
              className="flex w-full flex-col items-center space-y-3 border-b border-b-gray-200 py-10 text-center md:items-start"
            >
              <Typography
                fontWeight="regular"
                variant="display-l"
                customClassName="display-l"
              >
                <p className="font-satoshi text-8xl leading-[120px]">
                  {stat.value}
                </p>
              </Typography>
              <Typography color="primary-dark" fontWeight="medium">
                <p className="font-merriweather text-xl font-regular leading-8">
                  {stat.category}{" "}
                </p>
              </Typography>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
