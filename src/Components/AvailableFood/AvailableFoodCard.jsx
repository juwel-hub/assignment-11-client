import { Link } from "react-router-dom";

const AvailableFoodCard = ({ food }) => {
  const {
    _id,
    foodName,
    donatorImage,
    donatorName,
    expireDateTime,
    foodImage,
    foodQuantity,
    foodStatus,
    pickupLocation,
    additionalNotes,
  } = food;
  return (
    <div className="card bg-base-100 border">
      <figure className="px-10 pt-10">
        <img src={foodImage} alt="Shoes" className="rounded-xl" />
      </figure>
      <div className="card-body ">
        <p className="text-orange-400">{foodStatus}</p>
        <h2 className="card-title font-bold text-3xl">{foodName}</h2>
        <p className="text-xl">
          <span className=" font-semibold mr-3">Quantity:</span>
          {foodQuantity}
        </p>
        <p className="text-xl">
          <span className=" font-semibold mr-3">Location:</span>{" "}
          {pickupLocation}
        </p>
        <p>
          {" "}
          <span className=" font-semibold mr-3">Additional Notes:</span>
          {additionalNotes}
        </p>
        <p className="text-xl">
          <span className=" font-semibold mr-3">Expire Date:</span>{" "}
          {expireDateTime}
        </p>
        <div className="md:flex items-center justify-between gap-10">
          <img className="w-10 h-10 rounded-full" src={donatorImage} alt="" />
          <p className="text-xl font-bold">
            <span className=" font-semibold mr-3">Donar Name:</span>
            {donatorName}
          </p>
        </div>
        <div className="card-actions flex items-center justify-end">
          <Link
            to={`/singleFoodDetails/${_id}`}
            className="btn font-bold text-white text-xl bg-orange-400"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AvailableFoodCard;
