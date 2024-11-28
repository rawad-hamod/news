import { Alert, Container, Grid2 } from "@mui/material";
import React from "react";
import {  useSelector } from "react-redux";

import NewsCard from "../components/NewsCard";
function Favorites() {
  const favorites = useSelector((state) => state.news.favorites);
  

  
console.log(favorites[0])
  return (
    <div>
      <Container
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          gap: "15px",
          margin: "10px auto",
        }}
      >
        {favorites.length > 0 ? (
          <Grid2 container spacing={2}>
            {favorites.map((data, index) => {
              return (
                <Grid2 item xs={3} key={index}>
                  <NewsCard data={data} 
                  displayFavoriteBtn={false}
                  displayReadLaterBtn={false}/>
                </Grid2>
              );
            })}
          </Grid2>
        ) : (
          <Alert severity="info" sx={{ marginTop: "20vh", fontSize: "24px" }}>
            no favorites added
          </Alert>
        )}
      </Container>
    </div>
  );
}

export default Favorites;
