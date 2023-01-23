import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getArticles } from '../api/articles';
import { Article } from '../types/Article';

type ArticlesState = {
  articles: Article[];
  loading: boolean;
  error: string;
};

const initialState: ArticlesState = {
  articles: [],
  loading: false,
  error: '',
};

export const init = createAsyncThunk('articles/fetch', () => getArticles());

const articlesSlice = createSlice({
  name: 'articles',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(init.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(init.fulfilled, (state, action) => {
      state.articles = action.payload;
      state.loading = false;
    });
    builder.addCase(init.rejected, (state) => {
      state.loading = false;
      state.error = 'Articles unvailable';
    });
  },
});

// export const actions = {};
export default articlesSlice.reducer;
