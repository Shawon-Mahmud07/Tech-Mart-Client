import PropTypes from "prop-types";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
const ProductCards = ({ productItem }) => {
  const { name, bName, type, price, rating, photo } = productItem;

  return (
    <div>
      <Card>
        <CardHeader shadow={false} floated={false} className="h-44 md:h-60">
          <img src={photo} className="h-44 md:h-60 w-full object-contain" />
        </CardHeader>
        <CardBody className="h-52 ">
          <div className="mb-2 ">
            <Typography className=" font-semibold text-[#29276B]">
              {name}
            </Typography>
          </div>
          <div>
            <Typography
              color="blue-gray"
              className="text-base font-medium md:text-lg"
            >
              Price: {price}
            </Typography>
            <Typography
              color="blue-gray"
              className="text-base font-medium md:text-lg"
            >
              Brand: {bName}
            </Typography>
            <Typography
              color="blue-gray"
              className="text-base font-medium md:text-lg"
            >
              Type: {type}
            </Typography>
            <Typography
              color="blue-gray"
              className="text-base font-medium md:text-lg"
            >
              Ratings: {rating}
            </Typography>
          </div>
        </CardBody>
        <CardFooter className="pt-0 flex gap-5 justify-center">
          <Button
            ripple={false}
            className=" bg-[#29276B] text-white shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100"
          >
            Details
          </Button>
          <Button
            ripple={false}
            className="  bg-[#29276B] text-white shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100"
          >
            Update
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};
ProductCards.propTypes = {
  productItem: PropTypes.object,
};
export default ProductCards;
