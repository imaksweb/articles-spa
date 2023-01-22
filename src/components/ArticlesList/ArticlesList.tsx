import React from 'react';
import Grid2 from '@mui/material/Unstable_Grid2/Grid2';
import { Article } from './Article/Article';

export const ArticlesList = () => {
  return (
    <Grid2 container spacing={6} >
      <Article />
      <Article />
      <Article />
      <Article />
      <Article />
      <Article />
      <Article />
      <Article />
    </Grid2>
  )
}