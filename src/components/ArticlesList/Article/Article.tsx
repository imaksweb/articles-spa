import { Card, CardMedia, CardContent, CardActions, Typography, Button } from '@mui/material';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import Grid2 from '@mui/material/Unstable_Grid2/Grid2';
import React from 'react';

export const Article = () => {
  return (
    <Grid2 xs={12} sm={6} md={4}>
      <Card>
        <CardMedia
          component="img"
          alt="green iguana"
          height="200"
          image="https://via.placeholder.com/150"
        />
        <CardContent>
          <Typography
            sx={{ 
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              fontSize: '14px',
              fontWeight: 400,
              color: '#363636',
              opacity: 0.6 
            }}
          >
            <CalendarTodayIcon fontSize='inherit' />
            June 29th, 2021
          </Typography>
          <Typography gutterBottom variant="h5" component="h2">
            Lizard
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" sx={{ textTransform: 'none', color: '#000' }}>
            Read more
            <ArrowRightAltIcon />
          </Button>
        </CardActions>
      </Card>
    </Grid2>
  )
}