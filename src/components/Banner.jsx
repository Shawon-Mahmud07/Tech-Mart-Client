import bannerImg from "../assets/Img/banner3.jpg";
const Banner = () => {
  return (
    <div>
      <img
        className="w-full shadow-lg h-52 object-cover md:object-fill md:h-[75vh]"
        src={bannerImg}
        alt=""
      />
    </div>
  );
};

export default Banner;
