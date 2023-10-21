import bannerImg from "../assets/Img/banner3.jpg";
const Banner = () => {
  return (
    <div className="border">
      <img
        className="w-full shadow-lg h-52 object-cover md:object-fill md:h-[75vh] dark:brightness-50"
        src={bannerImg}
        alt=""
      />
    </div>
  );
};

export default Banner;
