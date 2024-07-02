/* eslint-disable react/prop-types */
import AddIcon from "../assets/add-icon.svg";
import Typography from "./Typography";
import { useNavigate } from "react-router-dom";

const SingleNews = ({ heading, img, date, title }) => {
  const navigate = useNavigate();
  const navigateToSingleNews = () => {
    navigate("/news-details");
  };

  return (
    <div className="font-satoshi flex-1">
      <Typography
        color="primary-dark"
        customClassName="uppercase text-md md:text-[16px] mb-3"
        fontWeight="light"
      >
        {heading}
      </Typography>
      <div className="relative">
        <img src={img} alt="" className="md:h-[407px]" />
        <img
          src={AddIcon}
          alt=""
          className="absolute bottom-0 right-0 cursor-pointer"
        />
      </div>
      <div>
        <Typography
          fontWeight="medium"
          customClassName="!text-primary-dark font-satoshi-light text-xs my-3 md:text-lg"
        >
          {date}
        </Typography>
        <Typography
          color="primary-dark"
          fontWeight="light"
          customClassName="capitalize cursor-pointer hover:underline hover:text-primary-main transition text-lg font-satoshi"
          onClick={navigateToSingleNews}
        >
          {title}
        </Typography>
      </div>
    </div>
  );
};

export default SingleNews;
