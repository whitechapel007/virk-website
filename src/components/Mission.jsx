import Typography from "./Typography";

const Mission = () => {
  return (
    <section className="delivery h-[540px] font-merriweather md:h-[800px]">
      <div className="h-full bg-[#1612127a] px-2 py-10  md:px-10 md:py-20 md:pt-24">
        <div className="mx-auto flex h-full flex-col justify-center gap-8 md:flex-row md:justify-between md:gap-14">
          <Typography customClassName="text-white text-headline-l md:text-[58px] md:font-normal md:leading-[87px] whitespace-nowrap tracking-[1.5%] !font-medium md:text-display-m text-[#F4F2EF] flex-1 opacity-9">
            We’re on a mission to deliver <br /> impactful and compassionate <br /> legal
            advocacy with integrity  <br />that’s second to none.
          </Typography>
          <Typography
            customClassName="text-white text-[28px] font-satoshi text-[#F4F2EF] flex-1 opacity-9 leading-[42px]"
            fontWeight="regular"
            variant="title-m"
          >
            Our clients most often come to us based on recommendations from
            doctors and other health care professionals, other lawyers, and most
            importantly from our current and former clients
          </Typography>
        </div>
      </div>
    </section>
  );
};

export default Mission;
