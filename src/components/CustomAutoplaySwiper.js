import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./styles/CustomAutoplaySwiper.css";

import { Autoplay, Pagination, Navigation } from "swiper";

import api from '../api.js';

import React, { useState, useEffect } from 'react';

function renderSlides(cities, imagesPerSlide = 1) {
  let allImages = cities.map((city, index) =>
    <figure key={"figure-" + index}>
      <img alt={city.name} src={api.url + city.image} />
      <figcaption>{city.name}</figcaption>
    </figure>
  );
  return Array.from({ length: Math.ceil(cities.length / imagesPerSlide) }, (_, index) => {
    let slideImages = allImages.splice(0, imagesPerSlide);
    return (<SwiperSlide key={"slide-" + index}><div>{slideImages}</div></SwiperSlide>);
  });
}

export default function CustomAutoplaySwipper() {
  const [cities, setCities] = useState([]);
  useEffect(() => {
    api.obtainCities().then(response => {
      if (response.data.success) {
        setCities(response.data.content.cities);
      }
    });
  });
  return (
    <Swiper
      spaceBetween={30}
      centeredSlides={true}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      modules={[Autoplay, Pagination, Navigation]}
      className="mySwiper"
    >
      {renderSlides(cities, 4)}
    </Swiper>
  );
}
