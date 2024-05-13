const AboutUs = () => {
  return (
    <div className="bg-slate-200 my-10">
      <h1 className="text-xl font-bold text-center my-5 pt-5"> About Us</h1>
      <div className="flex items-center justify-between w-full">
        <div className="w-2/4">
          <h1>Our services</h1>
          <p></p>
        </div>
        <div className="w-2/4">
          <img
            className=" rounded-full"
            src="https://i.ibb.co/NNzf09b/portrait-joyful-young-man-white-shirt.jpg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
