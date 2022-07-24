import { Routes, Route } from 'react-router-dom';

const AppRoutes = () => (
  <Routes>
    <Route path='/' element={<p>This is the main page</p>} />
    <Route path='/creator' element={<p>This is the creator page</p>} />
  </Routes>
);

export default AppRoutes;
