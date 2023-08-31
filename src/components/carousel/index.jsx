import styles from "./carousel.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import Slider1 from "../../images/slider1.jpg";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Bordered from "../../images/Bordered Plant.jpg";
import Bordered2 from "../../images/borderedplant.jpg";
import Bordered1 from "../../images/bordered1.jpg";

function Carousel() {
  return (
    <div className={styles.carousel}>
      <h2 className={styles.carousel_title}>Flowers</h2>
      <Swiper
        pagination={{
          type: "progressbar",
        }}
        navigation={true}
        slidesPerView={4}
        modules={[Pagination, Navigation]}
        className={styles.mySwiper}
      >
        <SwiperSlide>
          <div className={styles.slider}>
            <img src={Slider1} alt="" className={styles.slider_Img} />
            <article className={styles.slider_title}>Jasmine Flowers</article>
            <p className={styles.slider_Price}>$258</p>
          </div>
        </SwiperSlide>
        <SwiperSlide><div className={styles.slider}>
            <img src={Bordered} alt="" className={styles.slider_Img} />
            <article className={styles.slider_title}>Lily Flowers</article>
            <p className={styles.slider_Price}>$258</p>
          </div></SwiperSlide>
        <SwiperSlide><div className={styles.slider}>
            <img src={Bordered1} alt="" className={styles.slider_Img} />
            <article className={styles.slider_title}>Rose Flowers</article>
            <p className={styles.slider_Price}>$2158</p>
          </div></SwiperSlide>
        <SwiperSlide><div className={styles.slider}>
            <img src={Bordered2} alt="" className={styles.slider_Img} />
            <article className={styles.slider_title}>Amaris Flowers</article>
            <p className={styles.slider_Price}>$2538</p>
          </div></SwiperSlide>
        <SwiperSlide><div className={styles.slider}>
            <img src={Slider1} alt="" className={styles.slider_Img} />
            <article className={styles.slider_title}>Supreme Flowers</article>
            <p className={styles.slider_Price}>$252</p>
          </div></SwiperSlide>
        <SwiperSlide><div className={styles.slider}>
            <img src={Bordered2} alt="" className={styles.slider_Img} />
            <article className={styles.slider_title}>Arema Flowers</article>
            <p className={styles.slider_Price}>$255</p>
          </div></SwiperSlide>
        <SwiperSlide><div className={styles.slider}>
            <img src={Bordered1} alt="" className={styles.slider_Img} />
            <article className={styles.slider_title}>Mine Flowers</article>
            <p className={styles.slider_Price}>$2586</p>
          </div></SwiperSlide>
        <SwiperSlide><div className={styles.slider}>
            <img src={Slider1} alt="" className={styles.slider_Img} />
            <article className={styles.slider_title}>NotMine Flowers</article>
            <p className={styles.slider_Price}>$2358</p>
          </div></SwiperSlide>
        <SwiperSlide><div className={styles.slider}>
            <img src={Bordered} alt="" className={styles.slider_Img} />
            <article className={styles.slider_title}>Yours Flowers</article>
            <p className={styles.slider_Price}>$458</p>
          </div></SwiperSlide>
        <SwiperSlide><div className={styles.slider}>
            <img src={Slider1} alt="" className={styles.slider_Img} />
            <article className={styles.slider_title}>Jasmine Flowers</article>
            <p className={styles.slider_Price}>$258</p>
          </div></SwiperSlide>
      </Swiper>
    </div>
  );
}

export default Carousel;
