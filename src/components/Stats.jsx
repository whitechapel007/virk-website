import Typography from "./Typography";
import StatImg from "../assets/stat-img.png";

import { stats } from "../constants/partners";

const Stats = () => {
  return (
    <section className="relative bg-primary-500">
      <div className="mx-auto flex w-full max-w-7xl  flex-col justify-between gap-10 p-4 py-10 md:flex-row md:py-20 lg:w-[90%]">
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
            variant="headline-l"
            fontWeight="medium"
            customClassName="md:max-w-xs"
          >
            This is how we make a
            <Typography tag="span" variant="headline-l" fontWeight="medium">
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
                {stat.value}
              </Typography>
              <Typography color="primary-dark" fontWeight="medium">
                {stat.category}
              </Typography>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
