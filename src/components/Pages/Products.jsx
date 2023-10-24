import { Carousel, IconButton } from "@material-tailwind/react";
import img1 from "../../assets/Img/banner.png";
import img2 from "../../assets/Img/banner2.png";
import img3 from "../../assets/Img/banner3.png";
import { useLoaderData } from "react-router-dom";
import ProductCards from "./ProductCards/ProductCards";

const Products = () => {
  const brandProducts = useLoaderData();
  console.log(brandProducts);

  return (
    <div>
      <Carousel
        className="rounded-sm h-[35vh] md:h-[60vh]"
        prevArrow={({ handlePrev }) => (
          <IconButton
            variant="text"
            color="white"
            size="lg"
            onClick={handlePrev}
            className="!absolute top-2/4 left-4 -translate-y-2/4"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
              />
            </svg>
          </IconButton>
        )}
        nextArrow={({ handleNext }) => (
          <IconButton
            variant="text"
            color="white"
            size="lg"
            onClick={handleNext}
            className="!absolute top-2/4 !right-4 -translate-y-2/4"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
              />
            </svg>
          </IconButton>
        )}
      >
        <img src={img1} alt="image 1" className="h-full w-full object-fill" />
        <img src={img2} alt="image 2" className="h-full w-full object-fill" />
        <img src={img3} alt="image 3" className="h-full w-full object-fill" />
      </Carousel>

      <div className=" grid grid-cols-1 gap-10 mx-5 md:mx-10 md:grid-cols-3 mt-5">
        {brandProducts.map((productItem, index) => (
          <ProductCards productItem={productItem} key={index}></ProductCards>
        ))}
      </div>
    </div>
  );
};

export default Products;
