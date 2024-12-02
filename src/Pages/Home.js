import React, { useEffect, useCallback } from "react";
import NewsCard from "../components/NewsCard";
import { useDispatch, useSelector } from "react-redux";
import { setNews } from "../Redux/newsSlice";
import { Grid2 } from "@mui/material";
import { CircularProgress } from "@mui/material";
// https://newsapi.org/v2/everything?q=Apple&sortBy=popularity&apiKey=e29c9dac114441be9cd5fd9f84b3f63f
function Home() {
  const dispatch = useDispatch();
  const news = useSelector((state) => state.news.allNews);
  const getNews = useCallback(() => {
    fetch(
      `https://api.thenewsapi.com/v1/news/top?api_token=GOMV8kh9CnGmtNkQ8WCfdGvP5WZCi7mEtGXpyOxd&locale=us&limit=3`
    )
      .then((res) => res.json())
      .then((data) => 
        dispatch(setNews(data.data)))
 
  .catch((err) => console.error("Error fetching news:", err));
  }, [dispatch]);

  useEffect(() => {
    getNews();
  }, [getNews]);

  return (
    <>
      {news.length > 0 ? (
        <Grid2
          container
          spacing={2}
          m={2}
          alignItems="center"
          justifyContent="center"
          pb={20}
        >
          {news.map((data) => (
            <Grid2 item xs={12} sm={6} md={3} key={data.uuid}>
              <NewsCard
                data={data}
               
              />
            </Grid2>
          ))}
        </Grid2>
      ) : (
        <CircularProgress size={70} sx={{ margin: "30vh 50vw" }} />
      )}
    </>
  );
}

export default Home;
