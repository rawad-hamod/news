import React, { useEffect, useState, useCallback } from "react";
import NewsCard from "../components/NewsCard";
import { useDispatch, useSelector } from 'react-redux';
import { setNews , addFavorite} from "../Redux/newsSlice"
import { Container, Grid2 } from "@mui/material";
import { CircularProgress } from "@mui/material";

function Home() {
  const dispatch = useDispatch();
  const news = useSelector(state => state.news.allNews);

 

  // Memoize the toggle actions
  
  const getNews = useCallback(() => {
    fetch(`https://newsapi.org/v2/everything?q=Apple&sortBy=popularity&apiKey=e29c9dac114441be9cd5fd9f84b3f63f`)
      .then(res => res.json())
      .then((data) => {
        const enrichedNews = data.articles.map((newsItem,index) => ({
          ...newsItem,
          isReadLater: false,
          isFavorite: false,
          id:index
        }));
        dispatch(setNews(enrichedNews.reverse()));
        console.log("iread get news")
      })
      .catch(err => console.error('Error fetching news:', err));
  }, [dispatch]);

  useEffect(() => {
    getNews();
  
  }, [getNews]);

  return (
    
      <Container
      maxWidth="xlg"
      alignItems="center"
      justify="center"
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "15px",
          margin:"30px auto 30px auto",
        }}
      >
        {news.length > 0 ? (
          <Grid2 container spacing={2}>
            {news.map((data) => (
              <Grid2 item xs={12} sm={6} md={3} key={data.id}>
                <NewsCard
                  data={data}
                  displayFavoriteBtn={true}
                  displayReadLaterBtn={true}
                />
              </Grid2>
            ))}
          </Grid2>
        ) : (
          <CircularProgress size={70} sx={{ marginTop: "30vh" }} />
        )}
      </Container>
 
  );
}

export default Home;
