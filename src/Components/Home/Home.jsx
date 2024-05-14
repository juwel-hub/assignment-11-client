import AboutUs from "../AboutUs/AboutUs";
import FeaturedFood from "../FeaturedFoods/FeaturedFood";
import Header from "../Header/Header";
import Ourteam from "../OurTeams/Ourteam";

const Home = () => {
  return (
    <div>
      <Header></Header>
      <FeaturedFood></FeaturedFood>
      <AboutUs></AboutUs>
      <Ourteam></Ourteam>
    </div>
  );
};

export default Home;
