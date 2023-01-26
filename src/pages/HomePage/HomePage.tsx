import { FC } from 'react';
import { Container } from '@mui/material';
import { SearchBar } from '../../components/SearchBar';
import { ArticlesList } from '../../components/ArticlesList';
import { Counter } from '../../components/Counter';

export const HomePage: FC = () => {
  return (
    <Container sx={{ mt: '50px' }}>
      <SearchBar />
      <Counter />
      <ArticlesList />
    </Container>
  )
}