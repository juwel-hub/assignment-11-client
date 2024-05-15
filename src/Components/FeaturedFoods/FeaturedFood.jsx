import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import FeatureFoodCard from "../FeatureFoodCard/FeatureFoodCard";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

const FeaturedFood = () => {
  AOS.init();
  const [featureItem, setFeatureItem] = useState();
  useQuery({
    queryKey: ["featureFood"],
    queryFn: async () => {
      const res = await fetch(
        `https://assignment-11-server-kappa-khaki.vercel.app/featureFood`
      );
      const data = await res.json();
      setFeatureItem(data);
      // console.log(data);
    },
  });
  // console.log(featureItem);
  return (
    <div className="mt-10">
      <h1 data-aos="fade-right" className="text-4xl font-bold text-center">
        Featured Food
      </h1>
      <p data-aos="fade-left" className="my-3 text-center">
        This is my Featured section in this section we represent many <br />
        type of food that very testy and healthy.
      </p>
      <div className="grid m-3 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-5">
        {featureItem?.map((item) => (
          <FeatureFoodCard key={item.id} item={item}></FeatureFoodCard>
        ))}
      </div>
      <div className="flex items-center justify-center">
        <Link to="/availableFood">
          <a href="" className="btn text-xl text-white bg-amber-400">
            Show All
          </a>
        </Link>
      </div>
    </div>
  );
};

export default FeaturedFood;
