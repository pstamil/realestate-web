import React from "react";
import home from "./homeSlides/home.jpg";
import home1 from "./homeSlides/home1.jpg";
import home2 from "./homeSlides/home2.jpg";
import home3 from "./homeSlides/home3.jpg";
import home4 from "./homeSlides/home4.jpg";
import SimpleImageSlider from "react-simple-image-slider";
import { Box } from "@mui/material";

const images = [
  { url: `${home}`, loading: "lazy" },
  { url: `${home1}`, loading: "lazy" },
  { url: `${home2}`, loading: "lazy" },
  { url: `${home3}`, loading: "lazy" },
  { url: `${home4}`, loading: "lazy" },
];
function HomeSlider() {
  return (
    <Box>
      <SimpleImageSlider
        width="100%"
        height={650}
        images={images}
        autoPlay={true}
        autoPlayDelay={50}
        slideDuration={1}
      />
    </Box>
  );
}

export default HomeSlider;
