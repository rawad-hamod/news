import { Alert,  Grid2 } from "@mui/material";
import React from "react";
import {  useSelector } from "react-redux";

import NewsCard from "../components/NewsCard";
function Favorites() {
  const favorites = useSelector((state) => state.news.favorites);
  
console.log(favorites)
  
console.log(favorites[0])
  return (
    <div>
      
        {favorites.length > 0 ? (
           <Grid2 container 
           m={2}
           spacing={2}
          
           alignItems="center"
           justifyContent="center"
           >
            {favorites.map((data, index) => {
              return (
                <Grid2 item xs={3} key={index}>
                  <NewsCard data={data} 
                  displayFavoriteBtn={true}
                  displayReadLaterBtn={true}/>
                </Grid2>
              );
            })}
          </Grid2>
        ) : (
          <Alert severity="info" sx={{ marginTop: "20vh", fontSize: "24px" }}>
            no favorites added
          </Alert>
        )}
    
    </div>
  );
}

export default Favorites;
