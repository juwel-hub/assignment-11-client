const AboutUs = () => {
  return (
    <div
      data-aos="fade-right"
      data-aos-offset="300"
      data-aos-easing="ease-in-sine"
      className="bg-slate-200 my-10"
    >
      <h1 className="text-4xl font-bold text-center my-5 pt-5"> About Us</h1>
      <div className="md:flex items-center gap-3 justify-between px-5 w-full">
        <div className="w-2/4">
          <h1 className="text-3xl font-bold ">About Our Food</h1>
          <h1 className="mb-3">Where Quantity Meet Awesome service.</h1>

          <ul>
            <li className=" text-xl font-bold">Super Quantity Food</li>
            <li>
              Our community must make ensure that food must be healthy and
              nutraus.
            </li>
          </ul>
          <ul>
            <li className=" text-xl font-bold mt-3">Well Reputation</li>
            <li>
              Our Reputation very well everywhare and our team everytime work
              for it every time.
            </li>
          </ul>
          <button className="btn bg-orange-400 my-3 text-white text-xl">
            More About Us
          </button>
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
