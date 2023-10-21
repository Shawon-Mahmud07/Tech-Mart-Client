import car from "../assets/Img/car.webp";
import card from "../assets/Img/card.webp";
import return1 from "../assets/Img/return.webp";

const Feature = () => {
  return (
    <div className="mt-10 md:mt-20 py-5 mx-4 md:mx-0 md:py-24 border-2 border-[#a9a7a7] rounded-3xl md:dark:mx-4">
      <div className="flex flex-col md:flex-row justify-evenly items-center  space-y-5 md:space-y-0">
        <div className=" flex gap-5 ">
          <div className="rounded-full bg-[#29276B]  p-2 md:p-3">
            <img
              className="w-8 h-8 md:w-10 md:h-10 rounded-md "
              src={car}
              alt=""
            />
          </div>
          <div>
            <h1 className="text-lg md:text-2xl font-semibold text-[#29276B] dark:brightness-200">
              Free Shipping
            </h1>
            <p className="text-sm md:text-base font-medium dark:text-white">
              Capped at $39 per order
            </p>
          </div>
        </div>
        <div className=" flex gap-5">
          <div className="rounded-full bg-[#29276B]  p-2 md:p-3">
            <img
              className="w-8 h-8 md:w-10 md:h-10 rounded-md "
              src={card}
              alt=""
            />
          </div>
          <div>
            <h1 className="text-lg md:text-2xl font-semibold text-[#29276B] dark:brightness-200">
              Card Payments
            </h1>
            <p className="text-sm md:text-base font-medium dark:text-white">
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
            <h1 className="text-lg md:text-2xl font-semibold text-[#29276B] dark:brightness-200">
              Easy Returns
            </h1>
            <p className="text-sm md:text-base font-medium dark:text-white">
              Shop With Confidence
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feature;
