import React from "react";
import Rating from "@mui/material/Rating";

import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from '@mui/material/FormControlLabel';

const label = { inputProps: { "aria-label": "Checkbox demo" } };
const Review = () => {
  return (
    <div>
      {" "}
      <h3>Rating</h3>
      {Array.from({ length: 5 }).map((_, idx) => (
        <div style={{ display: "flex" }} key = {idx}>
          <Checkbox {...label} />
          <Rating
            name="half-rating"
            style={{ marginLeft: "10px", marginTop: "8px" }}
            defaultValue={5 - idx}
            precision={0.5}
            readOnly
          />
        </div>
      ))}
    <h3>Category</h3>
     {Array.from({ length: 5 }).map((_, idx) => (
        <div style={{ display: "flex" }} key = {idx}>
               <FormControlLabel control={<Checkbox />} label= "Category " />
        </div>
      ))}
    </div>
  );
};

export default Review;
