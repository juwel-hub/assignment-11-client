import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider/AuthProvider";
import ManageFoodTable from "./ManageFoodTable";
import Swal from "sweetalert2";

const ManageMyFood = () => {
  const [manageMyFoods, setManageMyFoods] = useState([]);

  const { user } = useContext(AuthContext) || {};
  useEffect(() => {
    if (user?.email) {
      fetch(`http://localhost:5000/manageFood/${user.email}`, {
        credentials: "include",
      })
        .then((res) => res.json())
        .then((data) => {
          setManageMyFoods(data);
        })
        .catch((error) => {
          console.error(error);
        });
    }
  }, [user]);

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/deleteData/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
              });
              setManageMyFoods((previousItem) => {
                return previousItem.filter((item) => item._id !== id);
              });
            }
          });
      }
    });
  };
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
          <ManageFoodTable
            key={food._id}
            food={food}
            handleDelete={handleDelete}
          ></ManageFoodTable>
        ))}
      </table>
    </div>
  );
};

export default ManageMyFood;
