import React from "react";
import "./Protfolia.css";
import { Swiper, SwiperSlide } from "swiper/react";
import Sidebar from "../../img/sidebar.png";
import Ecomerce from "../../img/ecommerce.png";
import Hoc from "../../img/hoc.png";
import Musicapp from "../../img/musicapp.png";
import "swiper/css";
function Protfolia() {
    // used swiper library
    return (
        <div className="portfolio" id="Protfolia">
            {/* protfolia header  */}
            <span className="p-header" style={{ color: "var(--orange)" }}>
                Recent Projects{" "}
            </span>
            <span className="p-header">Protfolia</span>
            {/* slider  */}
            <div className="swaper-images">
                <Swiper spaceBetween={30} slidesPerView={3} grabCursor={true} className="portfolio">
                    <SwiperSlide>
                        <img src={Sidebar} alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={Ecomerce} alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={Hoc} alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={Musicapp} alt="" />
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    );
}

export default Protfolia;
