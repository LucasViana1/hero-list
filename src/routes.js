import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';

const Router = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" exact element={<Home />} />
    </Routes>
  </BrowserRouter>
);

export default Router;
