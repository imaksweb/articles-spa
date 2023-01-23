import { FC, useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import * as articlesActions from '../../features/articles';
import Grid2 from '@mui/material/Unstable_Grid2/Grid2';
import { Article } from './Article/Article';

export const ArticlesList: FC = () => {
  const dispatch = useAppDispatch();
  const { articles, loading, error } = useAppSelector(state => state.articles);
  
  useEffect(() => {
    dispatch(articlesActions.init());
  }, []);
  
  return (
    <Grid2 container spacing={6} >
      {articles.map(article => (
        <Article />
      ))}
    </Grid2>
  )
}