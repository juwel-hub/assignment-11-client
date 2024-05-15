import { FaLinkedin } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6";
import { FaSquareWhatsapp } from "react-icons/fa6";

const Ourteam = () => {
  return (
    <div className="my-10">
      <h1 className="text-3xl font-bold text-center">This is Our Team</h1>
      <p className="text-center my-3">
        This our exparts who manage this community so if you want to <br />
        connect our team please contact
      </p>
      <div className="md:flex m-3 items-center gap-5 justify-around">
        <div
          data-aos="flip-left"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000"
          className="border border-orange-300"
        >
          <img
            src="https://i.ibb.co/dcXfVNW/man-isolated-showing-emotions-end-gestures.png"
            alt=""
          />
          <p className="my-3 font-bold ml-3">Contact With:</p>
          <div className="flex items-center gap-3 mb-3 justify-center text-xl">
            <a href="">
              <FaLinkedin />
            </a>
            <a href="">
              <FaTwitter />
            </a>
            <a href="">
              {" "}
              <FaSquareWhatsapp />
            </a>
          </div>
        </div>
        <div
          data-aos="flip-left"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000"
          className="border border-orange-300 my-3"
        >
          <img
            src="https://i.ibb.co/hZ9VRXx/young-handsome-man-wearing-casual-tshirt-blue-background-happy-face-smiling-with-crossed-arms-lookin.png"
            alt=""
          />
          <p className="my-3 font-bold ml-3">Contact With:</p>
          <div className="flex items-center gap-3 mb-3 justify-center text-xl">
            <a href="">
              <FaLinkedin />
            </a>
            <a href="">
              <FaTwitter />
            </a>
            <a href="">
              {" "}
              <FaSquareWhatsapp />
            </a>
          </div>
        </div>
        <div
          data-aos="flip-left"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000"
          className="border border-orange-300"
        >
          <img
            src="https://i.ibb.co/7JTmbB2/close-up-young-successful-man-smiling-camera-standing-casual-outfit-against-blue-background.png"
            alt=""
          />
          <p className="my-3 font-bold ml-3">Contact With:</p>
          <div className="flex items-center gap-3 mb-3 justify-center text-xl">
            <a href="">
              <FaLinkedin />
            </a>
            <a href="">
              <FaTwitter />
            </a>
            <a href="">
              {" "}
              <FaSquareWhatsapp />
            </a>
          </div>
        </div>
        <div
          data-aos="flip-left"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000"
          className="border border-orange-300 mt-3"
        >
          <img
            src="https://i.ibb.co/Hpd7FzC/inside-portrait-confident-young-man-white-clothes-posing-with-charming-smile-isolated-wall.png"
            alt=""
          />
          <p className="my-3 font-bold ml-3">Contact With:</p>
          <div className="flex items-center gap-3 mb-3 justify-center text-xl">
            <a href="">
              <FaLinkedin />
            </a>
            <a href="">
              <FaTwitter />
            </a>
            <a href="">
              {" "}
              <FaSquareWhatsapp />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ourteam;
