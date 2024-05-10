const Header = () => {
  return (
    <div
      className="hero min-h-screen bg-base-200"
      style={{
        backgroundImage: "url(https://i.ibb.co/zGsHKXs/images.jpg)",
      }}
    >
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img
          src="https://i.ibb.co/C6CKcJ7/images-2.jpg"
          className="max-w-sm rounded-lg shadow-2xl"
        />
        <div>
          <h1 className="text-5xl font-bold text-white">30% off Now!</h1>
          <p className="py-6 text-white">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <button className="btn bg-orange-400">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Header;
