import { Link } from "react-router-dom";
import img from "../../../public/download.png";
const Error = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-5 mt-20">
      <h1 className="text-3xl font-bold">Oops!</h1>
      <h1 className="text-2xl font-bold">Page is not found</h1>
      <img className="" src={img} alt="" />
      <Link to="/" className="btn bg-orange-400 text-xl font-bold text-white">
        Back to home
      </Link>
    </div>
  );
};

export default Error;
