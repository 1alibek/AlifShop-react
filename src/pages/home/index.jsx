
import MyCarousel from "../../components/swiper";
import Products from "../../components/products";
import Kategoriya from "../../components/kategoriya";
import Header from "../../components/header";

const Home = () => {
 
  return (
    <div className="w-[90%] mx-auto min-[1440px]:w-[1440px]">
    <Header/>
      <Kategoriya />
      <MyCarousel />
      <Products />
    </div>
  );
};

export default Home;
