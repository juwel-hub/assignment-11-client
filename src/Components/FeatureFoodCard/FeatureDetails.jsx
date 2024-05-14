import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";

const FeatureDetails = () => {
  const [detailInfo, setDetailInfo] = useState({});
  const data = useLoaderData();
  const { id } = useParams();
  useEffect(() => {
    const singleData = data.find((item) => item._id == id);
    setDetailInfo(singleData);
  }, [data, id]);
  const {
    _id,
    food_name,
    food_image,
    expire_date,
    food_quantity,
    pickup_location,
    additional_notes,
    donator,
  } = detailInfo;
  // console.log(data);
  return (
    <div className="hero min-h-screen bg-base-200 my-10">
      <div className="hero-content flex-col gap-6 lg:flex-row">
        <img src={food_image} className="md:w-[500px] rounded-lg shadow-2xl" />
        <div>
          <h1 className="text-5xl my-3 font-bold">{food_name}</h1>
          <p className="text-xl ">
            <span className=" font-semibold mr-3">Quantity:</span>
            {food_quantity}
          </p>
          <p className="text-xl my-3">
            <span className=" font-semibold mr-3">Expire Date:</span>
            {expire_date}
          </p>
          <p className="text-xl">
            <span className=" font-semibold mr-3">Location:</span>
            {pickup_location}
          </p>
          <p className="text-xl my-3">
            <span className=" font-semibold mr-3">Quantity:</span>
            {food_quantity}
          </p>
          <p className="text-xl">
            <span className=" font-semibold mr-3">additional Note:</span>
            {additional_notes}
          </p>
        </div>
      </div>
    </div>
  );
};

export default FeatureDetails;
