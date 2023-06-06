import { useSelector } from "react-redux";
import { OpinionCard } from "../common/OpinionCard";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useEffect, useState } from "react";
import axios from "axios";

export const PeopleOpinions = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 2560, min: 768 },
      items: 2,
    },
    tablet: {
      breakpoint: { max: 768, min: 425 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 425, min: 0 },
      items: 1,
    },
  };

  const reviews = useSelector((state) => state.reviews.reviews);
  const isLoading = useSelector((state) => state.products.isLoading);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div>
        <h1></h1>
      </div>
      <Carousel
        responsive={responsive}
        removeArrowOnDeviceType={["tablet", "mobile", "desktop"]}
        keyBoardControl={true}
        autoPlay={true}
        infinite={true}
      >
        {reviews.map((reviews) => (
          <OpinionCard key={reviews.id} reviews={reviews} />
        ))}
      </Carousel>
    </>
  );
};
