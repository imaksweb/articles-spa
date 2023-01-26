import { FC, useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import * as articlesActions from '../../features/articles';
import Grid2 from '@mui/material/Unstable_Grid2/Grid2';
import { Alert } from '@mui/material';
import { ArticleItem } from './ArticleItem/ArticleItem';
import { Loader } from '../Loader';

export const ArticlesList: FC = () => {
  const dispatch = useAppDispatch();
  const { articles, loading, error, searchWords } = useAppSelector(state => state.articles);
  
  useEffect(() => {
    dispatch(articlesActions.init());
  }, []);
  
  if (loading) {
    return <Loader />
  }

  if (error) {
    return <Alert severity="error">{error}</Alert>
  }

  return (
    <Grid2 container spacing={6} >
      {articles.map(article => (
        <ArticleItem
          key={article.id}
          article={article}
          searchWords={searchWords}
        />
      ))}
    </Grid2>
  )
}