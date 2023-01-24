import React from 'react';
import { TextField, InputAdornment } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import Grid2 from '@mui/material/Unstable_Grid2/Grid2';

export const SearchBar = () => {
  return (
    <Grid2 container sx={{ mb: 6 }} >
      <Grid2 xs={12} md={6}>
        <TextField
        type='search'
        label='Filter by keywords'
        fullWidth
        size='small'
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