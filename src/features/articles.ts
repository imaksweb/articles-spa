import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getArticles } from '../api/articles';
import { Article } from '../types/Article';

type ArticlesState = {
  articles: Article[];
  searchWords: string[];
  searchArticles: Article[];
  loading: boolean;
  error: string;
};

const initialState: ArticlesState = {
  articles: [],
  searchWords: [],
  searchArticles: [],
  loading: false,
  error: '',
};

export const init = createAsyncThunk('articles/fetch', () => getArticles());

const articlesSlice = createSlice({
  name: 'articles',
  initialState,
  reducers: {
    filteredArticles: (state, action) => {
      state.searchWords = action.payload.split(' ');
      const inTitle: Article[] = [];
      const inSummary: Article[] = [];

      state.searchWords.forEach((keyword) => {
        state.searchArticles.forEach(article => {
          if (article.title.toLowerCase().includes(keyword.toLowerCase())) {
            inTitle.push(article);
          }

          if (article.summary.toLowerCase().includes(keyword.toLowerCase())) {
            inSummary.push(article);
          }
        });
      });

      const searchResult = [...inTitle, ...inSummary];

      state.articles = [...new Set(searchResult)];
    }
  },
  extraReducers: (builder) => {
    builder.addCase(init.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(init.fulfilled, (state, action) => {
      state.articles = action.payload;
      state.searchArticles = action.payload;
      state.loading = false;
    });
    builder.addCase(init.rejected, (state) => {
      state.loading = false;
      state.error = 'Articles unavailable';
    });
  },
});

export const { filteredArticles } = articlesSlice.actions;
export default articlesSlice.reducer;
