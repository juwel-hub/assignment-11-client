import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider/AuthProvider";
import ManageFoodTable from "./ManageFoodTable";

const ManageMyFood = () => {
  const [manageMyFoods, setManageMyFoods] = useState([]);
  const { user } = useContext(AuthContext);
  useEffect(() => {
    if (user?.email) {
      fetch(`http://localhost:5000/manageFood/${user.email}`)
        .then((res) => res.json())
        .then((data) => {
          setManageMyFoods(data);
        })
        .catch((error) => {
          console.error(error);
        });
    }
  }, [user]);

  const handleDelete = (id) => {};
  console.log(manageMyFoods);
  return (
    <div className="overflow-x-auto my-10 bg-slate-200 rounded-2xl">
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th>Name & Image</th>
            <th>Location</th>
            <th>Quantity</th>
            <th></th>
          </tr>
        </thead>
        {manageMyFoods?.map((food) => (
          <ManageFoodTable key={food._id} food={food}></ManageFoodTable>
        ))}
      </table>
    </div>
  );
};

export default ManageMyFood;
