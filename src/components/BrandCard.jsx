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
      <Card className="md:mt-6  cursor-pointer">
        <CardHeader className="relative h-56">
          <img className="w-full h-full hover:scale-90 " src={image_url} />
        </CardHeader>

        <CardFooter className=" text-center ">
          <Typography className="text-2xl text-[#29276B] font-semibold bg-[#ede8e8] rounded-xl hover:text-[#F04923] py-1 ">
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
