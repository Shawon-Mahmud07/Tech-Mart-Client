import support from "../assets/Img/undraw_Instant_support_re_s7un.png";

const Support = () => {
  return (
    <div className="mt-10 md:mt-20 ">
      <div className="flex flex-col md:flex-row rounded-md items-center ">
        <div className="w-11/12 -ml-8 md:-ml-0 md:w-6/12">
          <img
            className="w-full h-full dark:rounded-3xl dark:brightness-50 dark:mx-4 "
            src={support}
            alt=""
          />
        </div>
        <div className="w-full md:w-6/12 text-center bg-[#E6E6E6] dark:bg-[#1e2432]  rounded-md py-3 md:py-36">
          <h2 className="text-xl md:text-3xl text-[#29276B] dark:brightness-200  font-semibold">
            24/7 Support
          </h2>
          <p className=" text-base md:text-lg font-serif dark:text-white">
            Always in your Service
          </p>
        </div>
      </div>
    </div>
  );
};

export default Support;
