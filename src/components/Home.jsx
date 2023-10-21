import { useLoaderData } from "react-router-dom";
import Banner from "./Banner";
import Feature from "./Feature";
import Footer from "./Footer";
import NavBar from "./Navbar";
import Support from "./Support";
import BrandCards from "./BrandCards";

const Home = () => {
  const brandCards = useLoaderData();
  return (
    <div className="dark:bg-black">
      <NavBar></NavBar>
      <Banner></Banner>
      <BrandCards brandCards={brandCards}></BrandCards>
      <Support></Support>
      <Feature></Feature>
      <Footer></Footer>
    </div>
  );
};

export default Home;
