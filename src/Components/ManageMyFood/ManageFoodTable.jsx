import { useState } from "react";
import { Helmet } from "react-helmet-async";

const ManageFoodTable = ({ food, handleDelete }) => {
  const [modal, setModal] = useState(false);
  const {
    _id,
    foodImage,
    foodName,
    expireDateTime,
    pickupLocation,
    foodQuantity,
  } = food;
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
          <button
            onClick={() => setModal(true)}
            className="btn bg-orange-400 text-white btn-xs"
          >
            Update
          </button>
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
