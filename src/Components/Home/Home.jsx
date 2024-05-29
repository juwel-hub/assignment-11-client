import AboutUs from "../AboutUs/AboutUs";
import FeaturedFood from "../FeaturedFoods/FeaturedFood";
import Header from "../Header/Header";
import LatestFood from "../LatestFood/LatestFood";
import Ourteam from "../OurTeams/Ourteam";

const Home = () => {
  return (
    <div>
      <Header></Header>
      <FeaturedFood></FeaturedFood>
      <AboutUs></AboutUs>
      <LatestFood></LatestFood>
      <Ourteam></Ourteam>
    </div>
  );
};

export default Home;
