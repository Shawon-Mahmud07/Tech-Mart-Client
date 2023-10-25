import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Button,
} from "@material-tailwind/react";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";

const ProductDetails = () => {
  const { user } = useContext(AuthContext);
  const productObj = useLoaderData();
  const { name, photo, details, bName, price, type, rating } = productObj;

  const addToCart = { ...productObj, email: user.email };
  const handleAddToCart = () => {
    // send data to the server
    fetch("https://tech-mart-server-seven.vercel.app/carts", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(addToCart),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            title: "success!",
            text: "Product Added Successfully",
            icon: "success",
            confirmButtonText: "Close",
          });
        }
      });
  };

  return (
    <div>
      <Card className="w-full md:flex-row mt-5 md:mt-10">
        <CardHeader
          shadow={false}
          floated={false}
          className="m-0 w-11/12 mx-auto md:w-2/5 shrink-0 "
        >
          <img
            src={photo}
            alt="card-image"
            className="md:h-[80vh] w-full object-cover"
          />
        </CardHeader>
        <CardBody>
          <Typography variant="h6" color="gray" className="mb-4 uppercase">
            Brand: {bName}
          </Typography>
          <Typography className="mb-1 font-medium text-2xl md:font-semibold text-[#29276B]">
            {name}
          </Typography>
          <div className="flex gap-6">
            <Typography variant="h6" color="blue-gray" className="mb-1">
              Type: {type}
            </Typography>
            <Typography variant="h6" color="blue-gray" className="mb-1">
              Ratings: {rating}
            </Typography>
          </div>
          <Typography variant="h6" color="blue-gray" className="mb-1">
            Price: {price}
          </Typography>
          <Typography variant="h6" color="blue-gray" className="mb-2 underline">
            Description:
          </Typography>

          <Typography color="gray" className="mb-8 text-justify font-normal">
            {details}
          </Typography>
          <Button
            onClick={() => handleAddToCart()}
            className="text-white bg-[#29276B]"
            fullWidth
          >
            Add to Cart
          </Button>
        </CardBody>
      </Card>
    </div>
  );
};

export default ProductDetails;
