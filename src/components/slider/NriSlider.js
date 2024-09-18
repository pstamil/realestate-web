import React from "react";
import NRI1 from "./NriSlides/Nri_1.jpg";
import NRI2 from "./NriSlides/Nri_2.jpg";
import NRI3 from "./NriSlides/Nri_3.jpg";
import NRI4 from "./NriSlides/Nri_4.jpg";
import NRI5 from "./NriSlides/Nri_5.jpg";
import SimpleImageSlider from "react-simple-image-slider";
import { Box } from "@mui/material";

const images = [
  { url: `${NRI1}`, loading: "lazy" },
  { url: `${NRI2}`, loading: "lazy" },
  { url: `${NRI3}`, loading: "lazy" },
  { url: `${NRI4}`, loading: "lazy" },
  { url: `${NRI5}`, loading: "lazy" },
];
function NriSlider() {
  return (
    <Box>
      <SimpleImageSlider
        width="100%"
        height="100vh"
        images={images}
        autoPlay={true}
        autoPlayDelay={50}
        slideDuration={1}
        showBullets={true}
      />
    </Box>
  );
}

export default NriSlider;
