import PropTypes from "prop-types";
import Swal from "sweetalert2";
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Button,
} from "@material-tailwind/react";
const Carts = ({ cart, cartData, setCartData }) => {
  const { name, photo, bName, price, type, rating, _id } = cart;

  const handleDeleteBtn = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://tech-mart-server-seven.vercel.app/carts/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire(
                "Deleted!",
                "Your cart product has been deleted.",
                "success"
              );
              const remaining = cartData.filter((data) => data._id !== _id);
              setCartData(remaining);
            }
          });
      }
    });
  };

  return (
    <div>
      <Card className="w-full  md:h-60 max-w-[38rem] flex-col md:flex-row">
        <CardHeader
          shadow={false}
          floated={false}
          className="m-0 md:w-2/5 shrink-0 rounded-r-none"
        >
          <img
            src={photo}
            alt="card-image"
            className="h-2/3 w-2/3 mx-auto md:h-4/5 md:w-4/5 object-cover"
          />
        </CardHeader>
        <CardBody>
          <Typography variant="h6" className="text-[#29276B] mb-1">
            {name}
          </Typography>
          <Typography variant="h6" className="text-sm mb-1">
            Brand: {bName}
          </Typography>
          <Typography variant="h6" className="text-sm mb-1">
            Type: {type}
          </Typography>
          <Typography variant="h6" className="text-sm mb-1">
            Ratings: {rating}
          </Typography>
          <Typography variant="h6" className="text-sm mb-4">
            Price: {price}
          </Typography>
          <Button
            onClick={() => handleDeleteBtn()}
            className="bg-[#29276B]  font-semibold "
          >
            Delete Cart
          </Button>
        </CardBody>
      </Card>
    </div>
  );
};
Carts.propTypes = {
  cart: PropTypes.object,
  cartData: PropTypes.array,
  setCartData: PropTypes.array,
};
export default Carts;
