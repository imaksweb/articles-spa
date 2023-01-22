import './App.scss';
import { Container } from '@mui/material';
import { FilterInput } from './components/SearchBar';
import { ArticlesList } from './components/ArticlesList';

function App() {
  return (
    <div className="App">
      <Container>
        <FilterInput />
        <ArticlesList />
      </Container>
    </div>
  )
};

export default App;
