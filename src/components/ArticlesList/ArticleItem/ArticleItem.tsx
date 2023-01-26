import { FC } from 'react';
import Highlighter from 'react-highlight-words';
import { Link } from 'react-router-dom';
import { Article } from '../../../types/Article';
import { Card, CardMedia, CardContent, CardActions, Typography, Button } from '@mui/material';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import Grid2 from '@mui/material/Unstable_Grid2/Grid2';
import { formatDate } from '../../../helpers/formatDate';
import './ArticleItem.scss';

type Props = {
  article: Article;
  searchWords: string[];
}

export const ArticleItem: FC<Props> = ({ article, searchWords }) => {
  const { id, title, summary, imageUrl, publishedAt } = article;
  
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
            { formatDate(publishedAt) }
          </Typography>
          <Typography gutterBottom variant="h5" component="h2" sx={{ mb: '20px' }}>
            <Highlighter
              highlightClassName="highlited"
              searchWords={searchWords}
              autoEscape={true}
              textToHighlight={title}
            />
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ mb: '20px', fontSize: '16px' }}>
          <Highlighter
              highlightClassName="highlited"
              searchWords={searchWords}
              autoEscape={true}
              textToHighlight={summary}
            />
          </Typography>
        </CardContent>
        <CardActions sx={{ mt: 'auto' }}>
          <Link to={`/articles/${id}`}>
            <Button
              size="small"
              sx={{
                textTransform: 'none',
                color: '#000',
                fontSize: '16px',
                fontWeight: '700'
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