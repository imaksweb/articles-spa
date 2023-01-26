import { FC } from 'react';
import { TextField, InputAdornment } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import Grid2 from '@mui/material/Unstable_Grid2/Grid2';
import { useAppDispatch } from '../../app/hooks';
import * as articlesActions from '../../features/articles';

export const SearchBar: FC = () => {
  const dispatch = useAppDispatch();

  const filterArticles = (searchText: string) => {
    dispatch(articlesActions.filteredArticles(searchText));
  }

  return (
    <Grid2 container sx={{ mb: 4 }} >
      <Grid2 xs={12} md={6}>
        <TextField
          type='search'
          label='Filter by keywords'
          fullWidth
          size='small'
          onChange={e => filterArticles(e.target.value)}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
        />
      </Grid2>
    </Grid2>
  )
}