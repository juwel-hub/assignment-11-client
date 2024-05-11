import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import FeatureFoodCard from "../FeatureFoodCard/FeatureFoodCard";

const FeaturedFood = () => {
  const [featureItem, setFeatureItem] = useState();
  useQuery({
    queryKey: ["featureFood"],
    queryFn: async () => {
      const res = await fetch(`http://localhost:5000/featureFood`);
      const data = await res.json();
      setFeatureItem(data);
      // console.log(data);
    },
  });
  console.log(featureItem);
  return (
    <div className="mt-10">
      <h1 className="text-4xl font-bold text-center">Featured Food</h1>
      <p className="my-3 text-center">
        This is my Featured section in this section we represent many <br />
        type of food that very testy and healthy.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-5">
        {featureItem?.map((item) => (
          <FeatureFoodCard key={item.id} item={item}></FeatureFoodCard>
        ))}
      </div>
    </div>
  );
};

export default FeaturedFood;
