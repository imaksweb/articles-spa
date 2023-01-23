import { configureStore } from '@reduxjs/toolkit';

import articlesReducer from '../features/articles';

// import currentTodoReducer from '../features/currentTodo';
// import filterReducer from '../features/filter';
// import todosReducer from '../features/todos';

export const store = configureStore({
  reducer: {
    articles: articlesReducer
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;