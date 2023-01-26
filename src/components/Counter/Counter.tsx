import { FC, useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import * as articlesActions from '../../features/articles';
import Grid2 from '@mui/material/Unstable_Grid2/Grid2';
import { Typography, Box } from '@mui/material';

export const Counter: FC = () => {
  const dispatch = useAppDispatch();
  const { articles } = useAppSelector(state => state.articles);

  useEffect(() => {
    dispatch(articlesActions.init());
  }, []);
  
  return (
    <Grid2 container sx={{ mb: 4 }}>
      <Grid2 xs={12}>
        <Box sx={{ borderBottom: '1px solid #eaeaea', py: '5px' }}>
          <Typography sx={{ fontWeight: '700' }}>
            Results: { articles.length }
          </Typography>
        </Box>
      </Grid2>
    </Grid2>
  )
}