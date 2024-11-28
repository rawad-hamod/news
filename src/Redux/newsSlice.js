import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  allNews: [],
  favorites: [],
  readLater: [],
  
};
const newsSlice = createSlice({
  name: "news",
  initialState,
  reducers: {
    setNews: (state, action) => {
      state.allNews = action.payload;
    },
    addFavorite: (state, action) => {
      const news = action.payload;
      if (!state.favorites.some((item) => item.id === news.id)) {
        state.favorites.push(news);
      }
    },
    removeFavorite: (state, action) => {
      const newsId = action.payload;
      state.favorites = state.favorites.filter((item) => item.id !== newsId);
    },
    addReadLater: (state, action) => {
      const news = action.payload;
      if (!state.readLater.some((item) => item.id === news.id)) {
        state.readLater.push(news);
      }
    },
    removeReadLater: (state, action) => {
      const newsId = action.payload;
      state.readLater = state.readLater.filter((item) => item.id !== newsId);
    },
  },
});
export const {
  setNews,
  addFavorite,
  removeFavorite,
  addReadLater,
  removeReadLater,
} = newsSlice.actions;
export default newsSlice.reducer;
