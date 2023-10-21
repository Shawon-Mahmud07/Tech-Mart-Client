import car from "../assets/Img/car.webp";
import card from "../assets/Img/card.webp";
import return1 from "../assets/Img/return.webp";

const Feature = () => {
  return (
    <div className="mt-10 md:mt-20 py-5 mx-4 md:mx-0 md:py-24 border-2 border-gray-600 rounded-2xl">
      <div className="flex flex-col md:flex-row justify-evenly items-center  space-y-5 md:space-y-0">
        <div className=" flex gap-5 ">
          <div className="rounded-full bg-[#29276B] p-2 md:p-3">
            <img
              className="w-8 h-8 md:w-10 md:h-10 rounded-md "
              src={car}
              alt=""
            />
          </div>
          <div>
            <h1 className="text-lg md:text-2xl font-semibold text-[#29276B]">
              Free Shipping
            </h1>
            <p className="text-sm md:text-base font-medium">
              Capped at $39 per order
            </p>
          </div>
        </div>
        <div className=" flex gap-5">
          <div className="rounded-full bg-[#29276B] p-2 md:p-3">
            <img
              className="w-8 h-8 md:w-10 md:h-10 rounded-md "
              src={card}
              alt=""
            />
          </div>
          <div>
            <h1 className="text-lg md:text-2xl font-semibold text-[#29276B]">
              Card Payments
            </h1>
            <p className="text-sm md:text-base font-medium">
              12 Months Installments
            </p>
          </div>
        </div>
        <div className=" flex gap-5">
          <div className="rounded-full bg-[#29276B] p-2 md:p-3">
            <img
              className="w-8 h-8 md:w-10 md:h-10 rounded-md "
              src={return1}
              alt=""
            />
          </div>
          <div>
            <h1 className="text-lg md:text-2xl font-semibold text-[#29276B]">
              Easy Returns
            </h1>
            <p className="text-sm md:text-base font-medium">
              Shop With Confidence
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feature;
