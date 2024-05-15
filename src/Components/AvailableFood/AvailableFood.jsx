import { useState, useEffect } from "react";
import AvailableFoodCard from "./AvailableFoodCard"; // Assuming you have a component for rendering food cards
import { Helmet } from "react-helmet-async";

const AvailableFoods = () => {
  const [toggleClas, setToggleClass] = useState(true);
  const [availableFoods, setAvailableFoods] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [sortOrder, setSortOrder] = useState("asc"); // Set initial sort order to ascending

  const handleLayout = () => {
    setToggleClass();
  };
  useEffect(() => {
    fetch("https://assignment-11-server-kappa-khaki.vercel.app/addFoods")
      .then((res) => res.json())
      .then((data) => {
        setAvailableFoods(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const handleSearchInputChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const toggleSortOrder = () => {
    setSortOrder(sortOrder === "asc" ? "desc" : "asc");
  };

  const filteredFoods = availableFoods.filter((food) => {
    return food.foodName.toLowerCase().includes(searchQuery.toLowerCase());
  });

  const sortedFoods = filteredFoods.sort((a, b) => {
    if (sortOrder === "asc") {
      return new Date(a.expireDateTime) - new Date(b.expireDateTime);
    } else {
      return new Date(b.expireDateTime) - new Date(a.expireDateTime);
    }
  });

  return (
    <div className="my-10">
      <Helmet>
        <title>deliciousFood|availableFood</title>
      </Helmet>
      <div className="flex flex-1  justify-center">
        <h1 className="text-2xl font-bold text-center bg-slate-200 mb-8  py-3 w-[500px] rounded-lg ">
          User Added Food Available Here
        </h1>
      </div>
      <div className="flex items-center justify-around my-5">
        <label className="input input-bordered flex items-center gap-2">
          <input
            type="text"
            className="grow w-1/2"
            placeholder="Search"
            value={searchQuery}
            onChange={handleSearchInputChange}
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="w-4 h-4 opacity-70"
          >
            <path
              fillRule="evenodd"
              d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
              clipRule="evenodd"
            />
          </svg>
        </label>
        <button
          className="m-1 btn bg-orange-400 text-xl font-bold text-white"
          onClick={toggleSortOrder}
        >
          Sorting By Expiry Date ({sortOrder.toUpperCase()})
        </button>
        <button onClick={() => handleLayout(false)} className="btn">
          Change Layout
        </button>
      </div>
      <div
        className={
          toggleClas
            ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
            : "grid grid-cols-2 gap-5"
        }
      >
        {sortedFoods
          .filter((food) => food.foodStatus !== "Requested")
          .map((food) => (
            <AvailableFoodCard key={food._id} food={food}></AvailableFoodCard>
          ))}
      </div>
    </div>
  );
};

export default AvailableFoods;
