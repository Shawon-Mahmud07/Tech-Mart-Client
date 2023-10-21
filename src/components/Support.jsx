import support from "../assets/Img/undraw_Instant_support_re_s7un.png";

const Support = () => {
  return (
    <div className="mt-10 md:mt-20 ">
      <div className="flex flex-col md:flex-row rounded-md items-center ">
        <div className="w-full md:w-6/12">
          <img className="w-full h-full " src={support} alt="" />
        </div>
        <div className="w-full md:w-6/12 text-center bg-[#ececec] rounded-md py-3 md:py-36">
          <h2 className="text-xl md:text-3xl text-[#29276B] font-semibold">
            24/7 Support
          </h2>
          <p className=" text-base md:text-lg font-serif">
            Always in your Service
          </p>
        </div>
      </div>
    </div>
  );
};

export default Support;
