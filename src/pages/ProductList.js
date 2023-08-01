import React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import SortCategory from "../Components/Product/SortCategory";
import Filter from "../Components/Product/Filter";
import Review from "../Components/Product/Review";
import ColorRam from "../Components/Product/ColorRam";
import ProductCart from "../Components/Product/ProductCart";
import PaginationProduct from "../Components/Product/PaginationProduct";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  padding: "20px 20px 20px 20px",
  color: theme.palette.text.secondary,
}));
const catories = [
  'Books','Laptop','Phone','Watch','HeadPhone','Table'
]
const ProductList = () => {
  return (
    <div>
      <Box sx={{ flexGrow: 1, padding: "20px 20px 20px", overflow: "hidden" }}>
        <Grid container spacing={2}>
          <Grid item xs={4}>
            <Item>
              <div style={{ overflow: "hidden" }}>
                <SortCategory />
              </div>

              <div
                style={{
                  border: "1px solid rgb(226 234 241)",
                  margin: "10px 0px 10px 0px",
                }}
              ></div>

              <div >
                <Filter />
              </div>

              <div
                style={{
                  border: "1px solid rgb(226 234 241)",
                  margin: "10px 0px 10px 0px",
                }}
              ></div>

              <div
                style={{ overflow: "hidden", maxHeight: "calc(100vh - 150px)" }}
              >
                <Review />
              </div>
              
              <div
                style={{ overflow: "hidden", maxHeight: "calc(100vh - 150px)" }}
              >
                
                <ColorRam />
              </div>
            </Item>
          </Grid>
          
          <Grid item xs={8} spacing={4}>
            <Item style = {{marginBottom : "20px"}}>
              {catories.map((catories,idx) => (
                <ProductCart key = {idx} category={catories}/>
              ))}
              <PaginationProduct/></Item>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default ProductList;
