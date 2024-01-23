// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import Image1 from "../assets/details/health1.jpg";
import Image2 from "../assets/details/doctors.jpg";
import Image3 from "../assets/details/health2.jpg";
import Image4 from "../assets/details/health3.jpg";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./index.css";

// import required modules
import { Pagination, Navigation } from "swiper/modules";

const index = () => {
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Navigation, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={Image1} alt="health care 1" class="swiper-img" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Image2} alt="health care 2" class="swiper-img" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Image3} alt="health care 3" class="swiper-img" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Image4} alt="health care 4" class="swiper-img" />
        </SwiperSlide>
      </Swiper>
    </>
  );
};
export default index;
