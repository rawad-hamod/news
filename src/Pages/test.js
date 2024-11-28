import React, { useEffect, useState } from "react";
import NewsCard from "../components/NewsCard";
import { useDispatch, useSelector } from 'react-redux';
import { setNews, addFavorite, removeFavorite, addReadLater, removeReadLater } from "../Redux/newsSlice"
import { Container, Grid2 } from "@mui/material";
import { CircularProgress } from "@mui/material";

function Home (){
  const dispatch = useDispatch();
  const news = useSelector(state => state.news.allNews);
  const favorites = useSelector(state => state.news.favorites);
  const readLater = useSelector(state => state.news.readLater);

  const handleAddFavorite = (newsItem) => {
    dispatch(addFavorite(newsItem));
  };

  const handleRemoveFavorite = (newsId) => {
    dispatch(removeFavorite(newsId));
  };

  const handleAddReadLater = (newsItem) => {
    dispatch(addReadLater(newsItem));
  };

  const handleRemoveReadLater = (newsId) => {
    dispatch(removeReadLater(newsId));
  };
  const toggleFavorites = (newsId ,newsItem)=>{
    favorites.some(item => item.id === newsItem.id)
    ? handleRemoveFavorite(newsItem)
    : handleAddFavorite(newsItem)
              }
 
  const toggleReadLater = (newsId , newsItem)=>{
    readLater.some(item => item.id === newsItem.id)
    ? handleRemoveReadLater(newsItem)
    : handleAddReadLater(newsItem)
     }


 


  function addExtraKeys(newsArray) {
    return newsArray.map((newsItem, index) => {
      return {
        ...newsItem,
        id: `news_${index + 1}`,
        isReadLater: false,
        isFavorite: false,
      };
    });
  }

  const getNews = () => {
    fetch(
      `https://newsapi.org/v2/everything?q=Apple&sortBy=popularity&apiKey=e29c9dac114441be9cd5fd9f84b3f63f`
    ).then((res) =>
      res.json().then((data) => dispatch(setNews(addExtraKeys(data.articles.reverse()))))
    );
  };

  useEffect(() => {
    getNews();
  }, []);

  return (
    <div>
      <Container
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          gap: "15px",
          margin:"10px auto"
        }}
      >
        {news.length > 0 ? (
          <Grid2 container spacing={2}>
            {news.map((data, index) => {
              return (
                <Grid2 item xs={3} key={index}>
                  <NewsCard data={data} onClickFavorites={toggleFavorites} onClickReadLater={toggleReadLater} />
                </Grid2>
              );
            })}
          </Grid2>
        ) : (
          <CircularProgress size={70} sx={{marginTop:"30vh"}}/>
        )}
      </Container>
    </div>
  );
}

export default Home;
