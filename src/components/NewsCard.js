import { useDispatch, useSelector } from "react-redux";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Link,
  Typography,
} from "@mui/material";
import {
  addFavorite,
  removeFavorite,
  addReadLater,
  removeReadLater,
} from "../Redux/newsSlice";
function NewsCard({ data }) {
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.news.favorites);
  const readLater = useSelector((state) => state.news.readLater);


  function toggleFavorites(newsItem, e) {
    if (e.target !== null) {
      if (!favorites.some((item) => item.id === newsItem.id)) {
        dispatch(addFavorite(newsItem));
      } else {
        dispatch(removeFavorite(newsItem.id));
      }
    }
  };
  

  function toggleReadLater(newsItem, e) {
    if (e.target !== null) {
      if (!readLater.some((item) => item.id === newsItem.id)) {
        dispatch(addReadLater(newsItem));
      } else {
        dispatch(removeReadLater(newsItem.id));
      }
    }
  }
  return (
    <Card sx={{ width: "345px" ,height:"500px", position:"relative"}}>
      <CardHeader>
        <Typography variant="body1">
          {data.author}
        </Typography>
        <Typography variant="body1" >
          {data.publishedAt}
        </Typography>
      </CardHeader>

      <CardMedia
        component="img"
        sx={{ height: 200 }}
        image={data.urlToImage}
        title="green iguana"
      />
      <CardContent>
        <Typography
          gutterBottom
          variant="h6"
          component="div"
         
        >
          {data.title}
        </Typography>
        <Typography variant="body2" sx={{ color: "text.secondary" , maxHeight:150 , overflow:"clip"}}>
          {data.description}
        </Typography>
      </CardContent>
      <CardActions sx={{position:"absolute" , bottom:"15px"}}>
        <Link href={data.url}>
          <Button size="small" variant="contained" >
           read more
          </Button>
        </Link>
        
          <Button
            size="small"
            variant="contained"
            
            onClick={(e) => {
              toggleReadLater(data, e);
            }}
          >
          readLater
          </Button>
       
        
          <Button
            size="small"
            variant="contained"
           
            onClick={(e) => {
              toggleFavorites(data, e);
            }}
          >
          favorites
          </Button>
        
      </CardActions>
    </Card>
  );
}

export default NewsCard;
