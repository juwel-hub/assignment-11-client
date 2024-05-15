import { Link } from "react-router-dom";

const FeatureFoodCard = ({ item }) => {
  const {
    _id,
    food_name,
    food_image,
    expire_date,
    food_quantity,
    pickup_location,
    additional_notes,
    donator,
  } = item;
  return (
    <div
      data-aos="zoom-in"
      data-aos-duration="1000"
      className="card bg-base-100 border"
    >
      <figure className="px-10 pt-10">
        <img src={food_image} alt="Shoes" className="rounded-xl" />
      </figure>
      <div className="card-body ">
        <h2 className="card-title font-bold text-3xl">{food_name}</h2>
        <p className="text-xl">
          <span className=" font-semibold mr-3">Quantity:</span>
          {food_quantity}
        </p>
        <p className="text-xl">
          <span className=" font-semibold mr-3">Location:</span>{" "}
          {pickup_location}
        </p>
        <p>
          {" "}
          <span className=" font-semibold mr-3">Additional Notes:</span>
          {additional_notes}
        </p>
        <p className="text-xl">
          <span className=" font-semibold mr-3">Expire Date:</span>{" "}
          {expire_date}
        </p>
        <div className="flex items-center justify-between gap-10">
          <img
            className="w-10 h-10 rounded-full"
            src={donator.donator_image}
            alt=""
          />
          <p className="text-xl font-bold">
            <span className=" font-semibold mr-3">Donar Name:</span>
            {donator.donator_name}
          </p>
        </div>
        <div className="card-actions flex items-center justify-end">
          <Link
            to={`/featureDetails/${_id}`}
            className="btn font-bold text-white text-xl bg-orange-400"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FeatureFoodCard;
