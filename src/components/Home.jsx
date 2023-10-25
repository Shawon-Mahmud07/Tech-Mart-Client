import { useLoaderData } from "react-router-dom";
import Banner from "./Banner";
import Feature from "./Feature";

import Support from "./Support";
import BrandCards from "./BrandCards";

const Home = () => {
  const brandCards = useLoaderData();
  return (
    <div className="dark:bg-[#0F172A] ">
      <Banner></Banner>
      <BrandCards brandCards={brandCards}></BrandCards>
      <Support></Support>
      <Feature></Feature>
      
    </div>
  );
};

export default Home;
