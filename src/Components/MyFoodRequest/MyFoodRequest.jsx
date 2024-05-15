import { useContext, useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { AuthContext } from "../../Provider/AuthProvider/AuthProvider";

const MyFoodRequest = () => {
  const { user } = useContext(AuthContext);

  const [requestedItems, setRequestedItem] = useState([]);
  useEffect(() => {
    fetch("https://assignment-11-server-kappa-khaki.vercel.app/requestedFood")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setRequestedItem(data);
      });
  }, []);
  console.log(user);
  console.log(requestedItems);
  return (
    <div className="my-14">
      <Helmet>
        <title>deliciousFood|myFoodRequest</title>
      </Helmet>
      <h1 className="text-xl font-bold md:text-3xl text-center mb-5 bg-slate-200 py-3 rounded-lg">
        Here you see All your requests
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {requestedItems
          .filter((item) => item.userId == user.uid)
          ?.map((item) => (
            <div key={item._id} className="card bg-base-200 shadow-xl ">
              <div className="card-body">
                <h2 className="card-title">
                  <span className="font-bold">Donar Name:</span>
                  {item.donatorName}
                </h2>
                <p className="text-xl">
                  <span className=" font-bold">Location:</span>
                  {item.pickupLocation}
                </p>
                <div className="card-actions justify-end">
                  <div className="badge badge-outline">
                    <span className="font-bold">Expire Date:</span>
                    {item.expireDateTime}
                  </div>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default MyFoodRequest;
