import { useContext } from "react";
import { Helmet } from "react-helmet-async";

import Swal from "sweetalert2";
import { AuthContext } from "../../Provider/AuthProvider/AuthProvider";

const ManageFoodTable = ({ food, handleDelete }) => {
  const { user } = useContext(AuthContext);
  const {
    _id,
    foodImage,
    foodName,
    donatorImage,
    donatorName,
    expireDateTime,
    pickupLocation,
    foodQuantity,
    additionalNotes,
  } = food;
  console.log(food);
  const handleUpdate = (e) => {
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

    fetch(`https://assignment-11-server-kappa-khaki.vercel.app/update/${_id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(information),
    })
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
    <tbody>
      <Helmet>
        <title>deliciousFood|ManageFoodTable</title>
      </Helmet>
      {/* row 1 */}
      <tr>
        <td>
          <div className="flex items-center gap-3">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img src={foodImage} alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
            <div>
              <div className="font-bold">{foodName}</div>
              <div className="text-sm opacity-50">{expireDateTime}</div>
            </div>
          </div>
        </td>
        <td>{pickupLocation}</td>
        <td>{foodQuantity}</td>
        <th>
          {/* <button
            onClick={() => setModal(true)}
            className="btn bg-orange-400 text-white btn-xs"
          >
            Update
          </button> */}
          {/* Open the modal using document.getElementById('ID').showModal() method */}
          <button
            className="btn bg-orange-400 text-white btn-xs"
            onClick={() =>
              document.getElementById(`my_modal_${_id}`).showModal()
            }
          >
            Update
          </button>
          <dialog id={`my_modal_${_id}`} className="modal">
            <div className="modal-box">
              <div className=" min-h-screen w-full mx-auto  my-8 p-6 bg-slate-200 rounded-lg shadow-md">
                <h2 className="text-2xl font-semibold mb-4">Add Food</h2>
                <form onSubmit={handleUpdate}>
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
                    value="available"
                  />

                  <button
                    type="submit"
                    className="w-full  text-white font-bold btn rounded bg-orange-400 focus:outline-none"
                  >
                    Update
                  </button>
                </form>
              </div>
              <div className="modal-action">
                <form method="dialog">
                  {/* if there is a button in form, it will close the modal */}
                  <button className="btn">Close</button>
                </form>
              </div>{" "}
            </div>
          </dialog>
        </th>
        <th>
          <button
            onClick={() => handleDelete(_id)}
            className="btn bg-red-400 text-white btn-xs"
          >
            Delete
          </button>
        </th>
      </tr>
    </tbody>
  );
};

export default ManageFoodTable;
