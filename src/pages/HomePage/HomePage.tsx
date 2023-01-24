import { FC } from 'react';
import { Container } from '@mui/material';
import { SearchBar } from '../../components/SearchBar';
import { ArticlesList } from '../../components/ArticlesList';

export const HomePage: FC = () => {
  return (
    <Container sx={{ mt: '50px' }}>
      <SearchBar />
      <ArticlesList />
    </Container>
  )
}