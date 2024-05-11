import { useLoaderData } from "react-router-dom";

const FeatureDetails = () => {
  const data = useLoaderData();

  const {
    _id,
    food_name,
    food_image,
    expire_date,
    food_quantity,
    pickup_location,
    additional_notes,
    donator,
  } = data;
  console.log(data);
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row">
        <img src={food_image} className="max-w-sm rounded-lg shadow-2xl" />
        <div>
          <h1 className="text-5xl font-bold">{food_name}</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <button className="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default FeatureDetails;
