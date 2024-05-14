import { useContext, useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../Provider/AuthProvider/AuthProvider";

const SingleFoodDetails = () => {
  const { user } = useContext(AuthContext);
  const [foodDetailsInfo, setFoodDetailsInfo] = useState({});
  const details = useLoaderData();
  console.log(details);

  const { id } = useParams();

  useEffect(() => {
    const singleData = details?.find((foodItem) => foodItem._id == id);
    setFoodDetailsInfo(singleData);
  }, [details, id]);
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
  } = foodDetailsInfo;
  console.log(foodDetailsInfo);

  // add single food to database and show my request page
  const handleSingleFood = (e) => {
    e.preventDefault();
    const form = e.target;
    const foodName = form.foodName.value;
    const foodImage = form.foodImage.value;
    const foodQuantity = form.foodQuantity.value;
    const pickupLocation = form.pickupLocation.value;
    const expireDateTime = form.expireDateTime.value;
    const additionalNotes = form.additionalNotes.value;
    const donatorImage = form.donatorImage.value;
    const donatorName = form.donatorName.value;
    const foodStatus = form.foodStatus.value;
    const email = user.email;
    const information = {
      foodName,
      foodImage,
      foodQuantity,
      pickupLocation,
      expireDateTime,
      additionalNotes,
      donatorImage,
      foodStatus,
      email,
      donatorName,
    };
    // console.log(information);

    fetch(
      `https://assignment-11-server-kappa-khaki.vercel.app/singleFoodUpdate${_id}`,
      {
        method: "put",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(information),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        if (data.insertedId) {
          Swal.fire({
            title: "success!",
            text: "Data added successfully",
            icon: "success",
            confirmButtonText: "Cool",
          });
        }
      });
  };
  return (
    <div className="hero min-h-screen bg-base-200 my-10">
      <div className="hero-content flex-col gap-6 lg:flex-row">
        <img src={foodImage} className="md:w-[500px] rounded-lg shadow-2xl" />
        <div className="flex items-center gap-5">
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

            <p className="text-xl my-3">
              <span className=" font-semibold mr-3">Quantity:</span>
              {foodQuantity}
            </p>
            <p className="text-xl">
              <span className=" font-semibold mr-3">additional Note:</span>
              {additionalNotes}
            </p>
          </div>
          <div className="">
            <h1 className="text-2xl font-bold mb-3">Donor Information:</h1>
            <p className="text-xl font-bold">
              <span className=" font-semibold mr-3">Donar Name:</span>
              {donatorName}
            </p>
            <p className="text-xl">
              <span className=" font-semibold mr-3">Location:</span>
              {pickupLocation}
            </p>
          </div>
        </div>
        <div>
          {/* Open the modal using document.getElementById('ID').showModal() method */}
          <button
            className="btn bg-orange-400 text-xl font-bold text-white"
            onClick={() =>
              document.getElementById(`my_modal_${_id}`).showModal()
            }
          >
            Request
          </button>
          <dialog id={`my_modal_${_id}`} className="modal">
            <div className="modal-box">
              <div className=" min-h-screen w-full mx-auto  my-8 p-6 bg-slate-200 rounded-lg shadow-md">
                <h2 className="text-2xl font-semibold mb-4">Add Food</h2>
                <form onSubmit={handleSingleFood}>
                  <div className="md:flex items-center justify-center gap-5">
                    <div className="w-[50%]">
                      <div className="mb-4">
                        <label
                          htmlFor="foodName"
                          className="block font-medium text-gray-700"
                        >
                          Food Name:
                        </label>
                        <input
                          type="text"
                          id="foodName"
                          name="foodName"
                          defaultValue={foodName}
                          disabled
                          placeholder="Food Name"
                          required
                          className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-indigo-500"
                        />
                      </div>

                      <div className="mb-4">
                        <label
                          htmlFor="foodImage"
                          className="block font-medium text-gray-700"
                        >
                          Food Image URL:
                        </label>
                        <input
                          type="text"
                          id="foodImage"
                          placeholder="Food Image"
                          defaultValue={foodImage}
                          disabled
                          name="foodImage"
                          required
                          className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-indigo-500"
                        />
                      </div>

                      <div className="mb-4">
                        <label
                          htmlFor="foodQuantity"
                          className="block font-medium text-gray-700"
                        >
                          Food Quantity:
                        </label>
                        <input
                          type="text"
                          id="foodQuantity"
                          defaultValue={foodQuantity}
                          disabled
                          name="foodQuantity"
                          required
                          className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-indigo-500"
                        />
                      </div>

                      <div className="mb-4">
                        <label
                          htmlFor="pickupLocation"
                          className="block font-medium text-gray-700"
                        >
                          Pickup Location:
                        </label>
                        <input
                          type="text"
                          id="pickupLocation"
                          name="pickupLocation"
                          defaultValue={pickupLocation}
                          disabled
                          required
                          className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-indigo-500"
                        />
                      </div>
                    </div>
                    <div className="w-[50%]">
                      <div className="mb-4">
                        <label
                          htmlFor="expireDateTime"
                          className="block font-medium text-gray-700"
                        >
                          Expired Date/Time:
                        </label>
                        <input
                          type="datetime-local"
                          id="expireDateTime"
                          name="expireDateTime"
                          defaultValue={expireDateTime}
                          disabled
                          required
                          className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-indigo-500"
                        />
                      </div>{" "}
                      <div className="mb-4">
                        <label
                          htmlFor="additionalNotes"
                          className="block font-medium text-gray-700"
                        >
                          Additional Notes:
                        </label>
                        <textarea
                          id="additionalNotes"
                          name="additionalNotes"
                          defaultValue={additionalNotes}
                          className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-indigo-500"
                        ></textarea>
                      </div>
                      <div className="mb-4">
                        <label
                          htmlFor="donatorImage"
                          className="block font-medium text-gray-700"
                        >
                          Donator Image URL:
                        </label>
                        <input
                          type="text"
                          id="donatorImage"
                          name="donatorImage"
                          defaultValue={donatorImage}
                          disabled
                          required
                          className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-indigo-500"
                        />
                      </div>
                      <div className="mb-4">
                        <label
                          htmlFor="donatorName"
                          className="block font-medium text-gray-700"
                        >
                          Donator Name:
                        </label>
                        <input
                          type="text"
                          id="donatorName"
                          name="donatorName"
                          defaultValue={donatorName}
                          disabled
                          required
                          className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-indigo-500"
                        />
                      </div>
                    </div>
                  </div>

                  <input
                    type=""
                    id="foodStatus"
                    name="foodStatus"
                    value="Requested"
                  />

                  <button
                    type="submit"
                    className="w-full  text-white font-bold btn rounded bg-orange-400 focus:outline-none"
                  >
                    Request
                  </button>
                </form>
              </div>
              <div className="modal-action">
                <form method="dialog">
                  {/* if there is a button in form, it will close the modal */}
                  <button className="btn">Close</button>
                </form>
              </div>
            </div>
          </dialog>
        </div>
      </div>
    </div>
  );
};

export default SingleFoodDetails;
