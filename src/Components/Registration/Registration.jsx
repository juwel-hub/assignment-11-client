import { Link } from "react-router-dom";
import register from "../../../public/register.jpg";
const Registration = () => {
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content  ">
        <div className="text-center lg:text-left">
          <img className="md:w-[400px]" src={register} alt="" />
        </div>
        <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form className="card-body">
            <h1 className="text-4xl text-center mt-50  font-bold">
              Please Register!
            </h1>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-xl font-bold">Name</span>
              </label>
              <input
                type="name"
                placeholder="Name"
                name="name"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-xl font-bold">Photo URL</span>
              </label>
              <input
                type="text"
                placeholder="Photo URL"
                name="image"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-xl font-bold">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                name="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-xl font-bold">Password</span>
              </label>
              <input
                type="password"
                placeholder="password"
                name="password"
                className="input input-bordered"
                required
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn bg-orange-400 text-white text-xl font-bold">
                Register
              </button>
            </div>
          </form>
          <div className="flex items-center justify-center text-xl pb-10">
            <h1>Already Have account? Please:</h1>
            <Link
              className="text-black font-bold underline ml-2 hover:text-orange-500"
              to="/login"
            >
              Login
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registration;
