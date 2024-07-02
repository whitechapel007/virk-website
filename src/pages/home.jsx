import { useEffect } from "react";
import Typography from "../components/Typography";
import NewsLetter from "../components/Newsletter";
import Partner from "../components/Partner";
import Mission from "../components/Mission";
import Stats from "../components/Stats";
import AreasOfExpertise from "../components/AreasOfExpertise";
import Accommodate from "../components/Accommodate";
import Instruction from "../components/Instruction";
import Testimonies from "../components/Testimonies";
import Expectation from "../components/Expectation";
import News from "../components/News";

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <section className="justify-between bg-black-700 px-5 pb-10 pt-24 md:flex md:items-center  md:gap-20 lg:px-20 lg:py-24">
        <div className="flex-1 font-bold text-white">
          <p className="md:text-primary-h fluid-text font-bold leading-[0.8] text-white">
            Results
          </p>
          <p className="md:text-primary-h fluid-text font-bold leading-[0.8] text-white">
            fair &{" "}
          </p>
          <p className="md:text-primary-h fluid-text font-bold leading-[0.8] text-white">
            square.
          </p>
          <p className="md:text-primary-p mt-10">Book a free consultation.</p>
        </div>
        <div className="flex-1">
          <form action="" className="hidden flex-col  gap-10 lg:flex">
            <input
              type="text"
              name="name"
              placeholder="Name"
              className="h-12 p-2"
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="h-12 p-2"
            />
            <input
              type="text"
              name="phoneNo"
              placeholder="Phone Number"
              className="h-12 p-2"
            />

            <textarea
              name=""
              id=""
              cols="20"
              rows="6"
              placeholder="Tell us what happened..."
              className="p-2"
            ></textarea>

            <div>
              <button
                type="submit"
                className=" justify-start bg-primary-main px-4 py-2 text-white"
              >
                SUBMIT
              </button>
            </div>
          </form>
        </div>
      </section>

      <Stats />

      <AreasOfExpertise />

      <section className="flex items-center justify-center bg-red-100 py-20">
        <Typography customClassName="!text-[65px] px-2 mx-auto max-w-6xl font-bold text-center md:!text-[120px] !leading-[1.1]">
          <q>They go above and beyond for you...</q>
        </Typography>
      </section>

      <Testimonies />

      <Mission />

      <Instruction />

      <Expectation />

      <Accommodate />

      <News />

      <NewsLetter />

      <Partner />
    </>
  );
};

export default Home;
