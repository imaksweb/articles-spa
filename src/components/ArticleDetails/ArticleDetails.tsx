import { FC, useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Container, Box, CardMedia, Paper, Button, Typography } from '@mui/material';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import { Article } from '../../types/Article';
import { getArticle } from '../../api/articles';
import { Loader } from '../Loader';
import { Alert } from '@mui/material';
import './ArticleDetails.scss';

export const ArticleDetails: FC = () => { 
  const [currentArticle, setCurrentArticle] = useState<Article | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const { id } = useParams();

  const loadArticle = async () => {
    if (!id) {
      return;
    }

    try {
      setLoading(true);

      const articleFromServer = await getArticle(+id);

      setCurrentArticle(articleFromServer);
    } catch (error) {
      setError(true);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    loadArticle();
  }, []);

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return (
      <>
        <Alert severity="error">Article unavailable</Alert>
        <Link to={'/'}>
            <Button
              size="small"
              sx={{
                fontSize: '16px',
                fontWeight: '700',
                color: '#000',
                textTransform: 'none',
              }}
            >
              <KeyboardBackspaceIcon />
              Back to homepage
            </Button>
          </Link>
      </>
    )
  }
 
  return (
    <Box component="main">
      <CardMedia
        component="img"
        height="245"
        image={currentArticle?.imageUrl}
        alt="test123"
      />
      <Container>
        <Box sx={{ translate: '0 -100px' }} className='ArticleDetails'>
          <Paper sx={{ padding: '35px 75px', mb: '35px' }}>
            <Typography align='center' variant='h5' component='h1' sx={{ mb: '50px' }}>
              { currentArticle?.title }
            </Typography>
            <Typography variant='body2' sx={{ fontSize: '18px' }}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima dolor tempora ab voluptatem cumque ea rem natus odio quaerat quod? Amet earum fugiat aspernatur error! Aliquid saepe repellat vitae iusto, sequi doloremque corrupti quibusdam dolore deleniti, veniam voluptate maxime exercitationem qui doloribus. Earum non dolorem necessitatibus animi voluptatibus, est minima ipsa delectus ratione esse exercitationem commodi odio sit facilis qui quisquam cum iusto hic quaerat quas autem alias beatae, aliquam harum! Consequatur in alias ratione est, cupiditate quos itaque quasi dolores repellat temporibus molestias, praesentium odio ipsum error ullam molestiae dicta, perferendis nulla. Asperiores labore distinctio, magni dolores adipisci temporibus, quibusdam repellendus praesentium sunt hic explicabo vero quod repudiandae iusto autem modi atque cumque veritatis? Reiciendis cupiditate et magni ipsa quisquam architecto cum, enim itaque officiis eum eaque commodi adipisci veniam laborum! A, est et. Nulla tempora doloremque rem possimus eaque necessitatibus, maiores minima porro expedita voluptatem eius explicabo nobis ex fuga et esse distinctio unde magni odit tempore hic eligendi quidem. Modi non ex, libero veritatis soluta rem omnis deserunt et quasi tenetur obcaecati possimus sit cum earum reiciendis officia pariatur perferendis eius alias. Repellendus facilis, fuga quidem excepturi officia libero vitae voluptate, laboriosam praesentium soluta perferendis ipsa nulla labore cupiditate odio quaerat porro optio obcaecati. A magnam ipsa delectus praesentium voluptatibus saepe debitis, ab quidem, deserunt modi mollitia necessitatibus id possimus iste ea sed, omnis assumenda voluptates magni quam nobis temporibus alias quis. Accusamus tempora consequatur tenetur at esse, repellat maxime omnis, numquam architecto nemo excepturi eum itaque minus vel, dolore in. Error officia quidem asperiores placeat quae voluptas incidunt vero ea neque praesentium recusandae, deleniti libero sapiente esse numquam pariatur sequi quisquam quas repellendus ullam doloremque! Fugiat neque voluptates consequatur numquam sit tempore natus, reiciendis atque placeat magnam omnis earum, voluptas, enim consequuntur beatae. Assumenda necessitatibus quisquam exercitationem corrupti ipsa dolore ea quaerat eveniet est cupiditate mollitia fugiat quidem voluptatem illo, similique debitis officia odit dicta reiciendis. Quae tempora voluptate excepturi, sunt magnam natus id ut expedita provident sint aperiam cumque cupiditate quod, repellat corporis. Fugiat fuga a esse architecto iste harum similique deleniti error? Unde enim, porro non similique nostrum voluptatem magni reprehenderit, asperiores facilis veritatis sapiente obcaecati facere nam eaque eius fugit ratione praesentium ducimus, distinctio doloremque vero. Nostrum vero a porro ipsum in, perspiciatis placeat odio.
            </Typography>
          </Paper>
          <Link to={'/'}>
            <Button
              size="small"
              sx={{
                fontSize: '16px',
                fontWeight: '700',
                color: '#000',
                textTransform: 'none',
              }}
            >
              <KeyboardBackspaceIcon />
              Back to homepage
            </Button>
          </Link>
        </Box>
      </Container>
    </Box>
  );
}
