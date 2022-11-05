import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { OptionContextProvider } from './context/dataContext';
import Home from './pages/Home';

const Router = () => {
  return (
    <OptionContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </OptionContextProvider>
  );
};

export default Router;
