// import React, { useState } from "react";

import { useMutation } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider/AuthProvider";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";

function AddFood() {
  const { user } = useContext(AuthContext);
  // const [formData, setFormData] = useState({
  //   foodName: "",
  //   foodImage: "",
  //   foodQuantity: "",
  //   pickupLocation: "",
  //   expireDateTime: "",
  //   additionalNotes: "",
  //   donatorImage: "",
  //   donatorName: "John Doe",
  //   donatorEmail: "",
  //   foodStatus: "available",
  // });

  // const handleChange = (e) => {
  //   setFormData({
  //     ...formData,
  //     [e.target.name]: e.target.value,
  //   });
  // };

  // const foodMutation = useMutation((information) => {
  //   return fetch("https://assignment-11-server-kappa-khaki.vercel.app/foods", {
  //     method: "POST",
  //     headers: {
  //       "content-type": "application/json",
  //     },
  //     body: JSON.stringify(information),
  //   }).then((res) => res.json());
  // });

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const foodName = form.foodName.value;
    const foodImage = form.foodImage.value;
    const foodQuantity = form.foodQuantity.value;
    const pickupLocation = form.pickupLocation.value;
    const expireDateTime = form.expireDateTime.value;
    const additionalNotes = form.additionalNotes.value;
    const donatorImage = form.donatorImage.value;
    const donatorName = form.foodName.value;
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

    fetch("https://assignment-11-server-kappa-khaki.vercel.app/addFoods", {
      method: "POST",
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
    <div className=" min-h-screen w-full mx-auto  my-8 p-6 bg-slate-200 rounded-lg shadow-md">
      <Helmet>
        <title>deliciousFood|addFood</title>
      </Helmet>
      <h2 className="text-2xl font-semibold mb-4">Add Food</h2>
      <form onSubmit={handleSubmit}>
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
                required
                className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-indigo-500"
              />
            </div>
          </div>
        </div>

        <input type="" id="foodStatus" name="foodStatus" value="available" />

        <button
          type="submit"
          className="w-full  text-white font-bold btn rounded bg-orange-400 focus:outline-none"
        >
          Add Food
        </button>
      </form>
    </div>
  );
}

export default AddFood;
