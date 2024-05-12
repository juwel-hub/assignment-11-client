import { useEffect, useState } from "react";

const AvailableFood = () => {
  const [availableFoods, setAvailableFoods] = useState();

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
    <div>
      <h1>available Food</h1>
    </div>
  );
};

export default AvailableFood;
