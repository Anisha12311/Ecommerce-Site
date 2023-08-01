import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActions } from "@mui/material";
import { Link } from "@mui/material";
import Rating from "@mui/material/Rating";
import "../../Styles/Cart.css";
const ProductCart = ({ category, id }) => {
  return (
    <div style = {{marginBottom : '30px'}}>
      <Card>
        <CardMedia
          component="img"
          height="400"
          image="https://www.pcprofessionals.co.uk/wp-content/uploads/2016/05/Collection.png"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {category}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
          <Rating
            name="half-rating"
            style={{ marginTop: "8px" }}
            defaultValue={5}
            precision={0.5}
            readOnly
          />
          (1)
      
          <Typography gutterBottom variant="h5" component="div">
            $125 {" "} <button className="button-product" role="button">
            See Product
          </button>
          </Typography>
          
        </CardContent>

        <CardActions>
          <Button size="small" color="primary">
            <Link style={{ textDecoration: "none" }} href="">
              Category
            </Link>
          </Button>
        </CardActions>
      </Card>
    </div>
  );
};

export default ProductCart;
