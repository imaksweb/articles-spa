import { Provider } from 'react-redux';
import store from './app/store';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { createTheme, ThemeProvider } from '@mui/material';
import { HomePage } from './pages/HomePage';
import './App.scss';
import { ArticleDetails } from './components/ArticleDetails';

const theme = createTheme({
  typography: {
    fontFamily: [
      'Montserrat',
      'sans-serif'
    ].join(",")
  }
});

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Provider store={store}>
          <ThemeProvider theme={theme}>
            <Routes>
              <Route path="/articles/:id" element={<ArticleDetails />} />
              <Route path="/" element={<HomePage />} />
            </Routes>
          </ThemeProvider>
        </Provider>  
      </BrowserRouter>
    </div>
  )
};

export default App;
