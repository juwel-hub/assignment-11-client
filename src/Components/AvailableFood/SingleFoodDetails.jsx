import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";

const SingleFoodDetails = () => {
  const [foodDetailsInfo, setFoodDetailsInfo] = useState({});
  const details = useLoaderData();
  console.log(details);

  const { id } = useParams();

  useEffect(() => {
    const singleData = details?.find((foodItem) => foodItem._id == id);
    setFoodDetailsInfo(singleData);
  }, [details, id]);
  const {
    foodName,
    donatorImage,
    donatorName,
    expireDateTime,
    foodImage,
    foodQuantity,
    foodStatus,
    pickupLocation,
    additionalNotes,
  } = foodDetailsInfo;
  console.log(foodDetailsInfo);
  return (
    <div className="hero min-h-screen bg-base-200 my-10">
      <div className="hero-content flex-col gap-6 lg:flex-row">
        <img src={foodImage} className="md:w-[500px] rounded-lg shadow-2xl" />
        <div>
          <p className="text-orange-300">{foodStatus}</p>
          <h1 className="text-5xl my-3 font-bold">{foodName}</h1>
          <p className="text-xl ">
            <span className=" font-semibold mr-3">Quantity:</span>
            {foodQuantity}
          </p>
          <p className="text-xl my-3">
            <span className=" font-semibold mr-3">Expire Date:</span>
            {expireDateTime}
          </p>
          <p className="text-xl">
            <span className=" font-semibold mr-3">Location:</span>
            {pickupLocation}
          </p>
          <p className="text-xl my-3">
            <span className=" font-semibold mr-3">Quantity:</span>
            {foodQuantity}
          </p>
          <p className="text-xl">
            <span className=" font-semibold mr-3">additional Note:</span>
            {additionalNotes}
          </p>
          <div className="md:flex items-center justify-between gap-10">
            <img className="w-20 h-20 rounded-full" src={donatorImage} alt="" />
            <p className="text-xl font-bold">
              <span className=" font-semibold mr-3">Donar Name:</span>
              {donatorName}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleFoodDetails;
