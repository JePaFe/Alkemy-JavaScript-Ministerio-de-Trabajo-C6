import { useEffect, useState } from "react";
import Ejemplos from "./components/Ejemplos";
import Footer from "./components/Footer";
import NavigationBar from "./components/NavigationBar";
import { Card, CardContent, CardMedia, Grid, Typography } from "@mui/material";
import axios from "axios";

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((response) => setProducts(response.data))
      .catch((error) => console.log(error));
  }, []);
  return (
    <>
      <NavigationBar />
      <Grid container sx={{ my: 3 }}>
        {products.map((product) => (
          <Grid key={`product-${product.id}`} item xs={4}>
            <Card sx={{ maxWidth: 345, margin: "1em auto" }}>
              <CardMedia
                sx={{ height: 140 }}
                image={product.image}
                title={product.title}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {product.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {product.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
      <Footer />
    </>
  );
}

export default App;
