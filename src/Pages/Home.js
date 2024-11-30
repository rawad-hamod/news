import React, { useEffect,useCallback } from "react";
import NewsCard from "../components/NewsCard";
import { useDispatch, useSelector } from 'react-redux';
import { setNews} from "../Redux/newsSlice"
import { Grid2 } from "@mui/material";
import { CircularProgress } from "@mui/material";

function Home() {
  const dispatch = useDispatch();
  const news = useSelector(state => state.news.allNews);
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
    <>
        {news.length > 0 ? (
          <Grid2 container 
          
  spacing={2}
 m={2}
  alignItems="center"
  justifyContent="center"
  pb={20}
  >
            {news.map((data) => (
              <Grid2 item xs={12} sm={6} md={3} key={data.id} >
                <NewsCard
                  data={data}
                  displayFavoriteBtn={true}
                  displayReadLaterBtn={true}
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
