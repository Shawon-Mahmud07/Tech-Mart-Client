// import { useLoaderData } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import Carts from "./Cart/Carts";

const MyCarts = () => {
  // const cartData = useLoaderData();
  const { user } = useContext(AuthContext);
  const [cartData, setCartData] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/carts/${user?.email}`)
      .then((res) => res.json())
      .then((data) => setCartData(data));
  }, [user?.email]);

  return (
    <div className="mt-5">
      <h2 className="text-center text-xl font-semibold text-[#29276B] ">
        My Cart: ({cartData.length})
      </h2>
      <div className="grid grid-cols-1 gap-8 md:gap-10 md:grid-cols-2 mx-3 mt-4">
        {cartData.map((cart, index) => (
          <Carts key={index} cart={cart}></Carts>
        ))}
      </div>
    </div>
  );
};

export default MyCarts;