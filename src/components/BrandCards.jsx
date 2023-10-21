import PropTypes from "prop-types";
import BrandCard from "./BrandCard";

const BrandCards = ({ brandCards }) => {
  return (
    <div className="mt-10 md:mt-20 ">
      <h1 className="my-14 text-3xl text-[#29276B] dark:text-white text-center font-semibold  underline">
        Our Brands
      </h1>
      <div className="grid grid-cols-1 gap-10 md:grid-cols-3 md:dark:mx-3 ">
        {brandCards.map((brandCard, index) => (
          <BrandCard key={index} brandCard={brandCard}></BrandCard>
        ))}
      </div>
    </div>
  );
};
BrandCards.propTypes = {
  brandCards: PropTypes.array,
};
export default BrandCards;
