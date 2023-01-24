import { FC } from 'react';
import { Link } from 'react-router-dom';
import { Article } from '../../../types/Article';
import { Card, CardMedia, CardContent, CardActions, Typography, Button } from '@mui/material';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import Grid2 from '@mui/material/Unstable_Grid2/Grid2';

type Props = {
  article: Article;
}

export const ArticleItem: FC<Props> = ({ article }) => {
  const { id, title, summary, url, imageUrl, publishedAt } = article;
  
  return (
    <Grid2 xs={12} sm={6} md={4} alignItems='stretch'>
      <Card sx={{
        display: 'flex',
        flexDirection: 'column',
        height: '100%'
        }}
      >
        <CardMedia
          component="img"
          alt="Article photo"
          height="218"
          image={imageUrl}
          sx={{ mb: '8px' }}
        />
        <CardContent>
          <Typography
            sx={{ 
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              mb: '24px',
              fontSize: '14px',
              fontWeight: 400,
              color: '#363636',
              opacity: 0.6
            }}
          >
            <CalendarTodayIcon fontSize='inherit' />
            June 29th, 2021
          </Typography>
          <Typography gutterBottom variant="h5" component="h2" sx={{ mb: '20px' }}>
            { title }
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ mb: '20px' }}>
            { summary }
          </Typography>
        </CardContent>
        <CardActions sx={{ mt: 'auto' }}>
          <Link to={`/articles/${id}`}>
            <Button
              size="small"
              sx={{
                textTransform: 'none',
                color: '#000'
              }}
            >
              Read more
              <ArrowRightAltIcon />
            </Button>
          </Link>
        </CardActions>
      </Card>
    </Grid2>
  )
}