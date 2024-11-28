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

function NewsCard({ data, displayFavoriteBtn, displayReadLaterBtn }) {
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
  }
  function toggleReadLater(newsItem, e) {
    if (e.target !== null) {
      if (!readLater.some((item) => item.id === newsItem.id)) {
        dispatch(addReadLater(newsItem));
      } else {
        removeReadLater(removeReadLater(newsItem.id));
      }
    }
  }
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader>
        <Typography variant="body1" color="secondary">
          {data.author}
        </Typography>
        <Typography variant="body1" color="secondary">
          {data.author}
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
          variant="body1"
          component="div"
          sx={{ fontWight: "bold" }}
        >
          {data.title}
        </Typography>
        <Typography variant="body2" sx={{ color: "text.secondary" }}>
          {data.descrition}
        </Typography>
      </CardContent>
      <CardActions>
        <Link href={data.url}>
          <Button size="small" variant="contained">
            Learn More
          </Button>
        </Link>
        {displayReadLaterBtn=== true && (
          <Button
            size="small"
            variant="contained"
            onClick={(e) => {
              toggleReadLater(data, e);
            }}
          >
            Read later
          </Button>
        )}
        {displayFavoriteBtn ===true && (
          <Button
            size="small"
            variant="contained"
            onClick={(e) => {
              toggleFavorites(data, e);
            }}
          >
            favorites
          </Button>
        )}
      </CardActions>
    </Card>
  );
}

export default NewsCard;
