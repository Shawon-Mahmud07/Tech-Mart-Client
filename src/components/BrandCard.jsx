import {
  Card,
  CardHeader,
  CardFooter,
  Typography,
} from "@material-tailwind/react";
import PropTypes from "prop-types";
const BrandCard = ({ brandCard }) => {
  const { title, image_url } = brandCard;
  return (
    <div>
      <Card className="md:mt-6  cursor-pointer dark:bg-gray-900 mx-3 md:mx-0">
        <CardHeader className="relative h-56">
          <img
            className="w-full h-full hover:scale-90 dark:brightness-50 "
            src={image_url}
          />
        </CardHeader>

        <CardFooter className=" text-center ">
          <Typography className="text-2xl text-[#29276B] dark:bg-gray-700 dark:text-white font-medium bg-[#ede8e8] rounded-xl hover:text-[#F04923] dark:hover:text-[#F04923] py-1 ">
            {title}
          </Typography>
        </CardFooter>
      </Card>
    </div>
  );
};
BrandCard.propTypes = {
  brandCard: PropTypes.object,
};
export default BrandCard;
