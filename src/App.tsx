import { Provider } from 'react-redux';
import store from './app/store';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomePage } from './pages/HomePage';
import './App.scss';
import { ArticleDetails } from './components/ArticleDetails';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Provider store={store}>
          <Routes>
            <Route path="/articles/:id" element={<ArticleDetails />} />
            <Route path="/" element={<HomePage />} />
          </Routes>
        </Provider>  
      </BrowserRouter>
    </div>
  )
};

export default App;
