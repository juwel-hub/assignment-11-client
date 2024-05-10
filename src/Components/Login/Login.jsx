import { Link } from "react-router-dom";
import login from "../../../public/login.jpg";
// import SocialLogin from "../../socialProvider/SocialLogin";
// import { useContext } from "react";
// import { AuthContext } from "../../Provider/AuthProvider/AuthProvider";
import { useForm } from "react-hook-form";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider/AuthProvider";
import SocialLogin from "../../socialProvider/SocialLogin";
const Login = () => {
  const { signIn } = useContext(AuthContext);
  // const location = useLocation();
  // const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    // watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const { email, password } = data;
    signIn(email, password)
      .then((res) => {
        console.log(res);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content  lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <img className="lg:w-[400px] md:w-[400px]" src={login} alt="" />
        </div>
        <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <h1 className="text-4xl text-center mt-10 font-bold">Login now!</h1>
          <form onSubmit={handleSubmit(onSubmit)} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text text-xl font-bold">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                name="email"
                className="input input-bordered"
                {...register("email", { required: true })}
              />
              {errors.email && <span>This field is required</span>}
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
                {...register("password", { required: true })}
              />
              {errors.email && <span>This field is required</span>}
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn bg-orange-400 text-white text-xl font-bold">
                Login
              </button>
            </div>
          </form>
          <div className="flex items-center justify-center text-xl pb-10">
            <h1>New here? Please: </h1>
            <Link
              className="text-black font-bold underline ml-2 hover:text-orange-500"
              to="/register"
            >
              Register
            </Link>
          </div>
          <SocialLogin></SocialLogin>
        </div>
      </div>
    </div>
  );
};

export default Login;
