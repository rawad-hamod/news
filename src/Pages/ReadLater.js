import { Alert, Container, Grid2 } from "@mui/material";
import React from "react";
import {  useSelector } from "react-redux";

import NewsCard from "../components/NewsCard";
function ReadLater() {
  const readLater = useSelector((state) => state.news.readLater);
  

  

  return (
    <div>
      
        {readLater.length > 0 ? (
           <Grid2 container 
          
           spacing={2}
           m={2}
           alignItems="center"
           justifyContent="center"
           >
            {readLater.map((data, index) => {
              return (
                <Grid2 item xs={3} key={index}>
                  <NewsCard data={data}
                  />
                </Grid2>
              );
            })}
          </Grid2>
        ) : (
          <Alert severity="info" sx={{ marginTop: "20vh", fontSize: "24px" }}>
            no read later added
          </Alert>
        )}
     
    </div>
  );
}

export default ReadLater;
