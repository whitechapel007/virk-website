import Typography from "./Typography";
import Carousel from "./Arosel";
import { PlayButton } from "./Button";

const Testimonies = () => {
  return (
    <section className=" mb-10 flex flex-col justify-between gap-10 py-10 pl-9 md:flex-row md:py-16 ">
      <div className="flex-1">
        <Typography customClassName="uppercase font-bold !text-primary-light !text-[11px] !tracking-widest">
          What our clients are saying
        </Typography>
        <Typography
          color="primary-dark"
          variant="headline-p"
          fontWeight="medium"
          customClassName="md:max-w-sm mt-5 whitespace-nowrap"
        >
          There is nothing better <br /> than knowing our clients <br /> are
          <Typography tag="span" variant="headline-p" fontWeight="medium">
            {" "}
            happy
          </Typography>
          .
        </Typography>
        <div className="mt-10 flex max-w-[250px] items-center md:mt-20">
          <PlayButton text="Read more reviews" />
        </div>
      </div>
      <Carousel />
    </section>
  );
};

export default Testimonies;
