import './App.scss';
import { Button } from '@mui/material';

function App() {
  return (
    <div className="App">
      <h1>Vite + React + Typescript + MUI 5</h1>
      <Button variant="contained" color="success">
        Success
      </Button>
      <Button variant="outlined" color="error">
        Error
      </Button>
    </div>
  )
};

export default App;
