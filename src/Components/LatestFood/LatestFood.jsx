import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { useEffect, useState } from "react";

const LatestFood = () => {
  const [latestData, setLatestData] = useState([]);
  useEffect(() => {
    fetch("latest.json")
      .then((res) => res.json())
      .then((data) => {
        setLatestData(data);
      });
  }, []);
  return (
    <div className="my-10">
      <h1 className="text-4xl font-bold text-center ">Latest food</h1>

      <p className="text-center mt-3 mb-8">
        Here we will try to see Our up coming latest food and public review
      </p>
      <div>
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          {latestData.map((item) => (
            <div key={item.id}>
              <SwiperSlide>
                <img src={item.image} alt="" />
              </SwiperSlide>
            </div>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default LatestFood;
