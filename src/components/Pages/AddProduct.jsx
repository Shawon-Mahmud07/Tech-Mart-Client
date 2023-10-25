import { Input } from "@material-tailwind/react";
import { Button } from "@material-tailwind/react";
import Swal from "sweetalert2";
import { Form } from "react-router-dom";

const AddProduct = () => {
  const handleFormSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const bName = form.bName.value;
    const type = form.type.value;
    const price = form.price.value;
    const rating = form.rating.value;
    const details = form.details.value;
    const photo = form.photo.value;
    const newProduct = {
      name,
      bName,
      type,
      price,
      rating,
      details,
      photo,
    };

    // send data to the server
    fetch(
      "https://tech-mart-server-phsoeaama-shawon-mahmud-s-projects.vercel.app/products",
      {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(newProduct),
      }
    )
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
          form.reset();
        }
      });
  };
  return (
    <div>
      <div>
        <div className="w-full md:max-w-4xl mx-auto py-10 md:mt-16 border md:p-10 bg-[#F4F3F0] rounded-md ">
          <div className="text-center">
            <h2 className="text-2xl text-[#29276B] font-semibold">
              Add New Product
            </h2>
          </div>
          <Form onSubmit={handleFormSubmit}>
            <div className="my-5">
              <div className="flex flex-col gap-3 md:gap-0  md:flex-row">
                <div className="  w-9/12 mx-auto md:w-1/2 md:px-3">
                  <h2 className="mb-3">Name</h2>
                  <Input
                    className="bg-[#FFFFFF]"
                    name="name"
                    label="Enter product name"
                    required
                  />
                </div>

                <div className=" w-9/12 mx-auto md:w-1/2 md:px-3">
                  <h2 className="mb-3">Brand Name</h2>
                  <Input
                    className="bg-[#FFFFFF]"
                    name="bName"
                    label="Enter brand name"
                    required
                  />
                </div>
              </div>
            </div>
            <div className="my-5">
              <div className="flex flex-col gap-3 md:gap-0 md:flex-row">
                <div className=" w-9/12 mx-auto md:w-1/2 md:px-3">
                  <h2 className="mb-3">Type</h2>
                  <Input
                    className="bg-[#FFFFFF]"
                    name="type"
                    label="Phone/Monitor/Headphone/Other"
                    required
                  />
                </div>

                <div className=" w-9/12 mx-auto md:w-1/2 md:px-3">
                  <h2 className="mb-3">Price</h2>
                  <Input
                    className="bg-[#FFFFFF]"
                    name="price"
                    label="Enter price"
                    required
                  />
                </div>
              </div>
            </div>
            <div className="my-5">
              <div className="flex flex-col gap-3 md:gap-0 md:flex-row">
                <div className=" w-9/12 mx-auto md:w-1/2 md:px-3">
                  <h2 className="mb-3">Rating</h2>
                  <Input
                    className="bg-[#FFFFFF]"
                    name="rating"
                    label="Enter rating(0-5)"
                    required
                  />
                </div>

                <div className=" w-9/12 mx-auto md:w-1/2 md:px-3">
                  <h2 className="mb-3">Details</h2>
                  <Input
                    className="bg-[#FFFFFF]"
                    name="details"
                    label="Enter product details"
                    required
                  />
                </div>
              </div>
            </div>
            <div className="my-5">
              <div>
                <div className=" w-9/12 mx-auto md:w-full  md:px-4">
                  <h2 className="mb-3">Photo</h2>
                  <Input
                    className="bg-[#FFFFFF]"
                    name="photo"
                    label="Enter photo URL"
                    required
                  />
                </div>
              </div>
            </div>
            <div className="px-4">
              <Button
                type="submit"
                className="bg-[#29276B] text-white"
                fullWidth
              >
                Add Product
              </Button>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;
