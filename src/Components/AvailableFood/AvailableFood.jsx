import { useEffect, useState } from "react";
import AvailableFoodCard from "./AvailableFoodCard";

const AvailableFood = () => {
  const [availableFoods, setAvailableFoods] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/addFoods")
      .then((res) => res.json())
      .then((data) => {
        setAvailableFoods(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);
  console.log(availableFoods);

  return (
    <div className="my-10">
      <div className="flex flex-1  justify-center">
        <h1 className="text-2xl font-bold text-center mb-8 bg-orange-300 py-3 w-[500px] rounded-lg ">
          User Added Food Available Here
        </h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {availableFoods?.map((food) => (
          <AvailableFoodCard key={food._id} food={food}></AvailableFoodCard>
        ))}
      </div>
    </div>
  );
};

export default AvailableFood;
