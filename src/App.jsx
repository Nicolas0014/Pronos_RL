import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Page404 from '@pages/Page404';
import Layout from './components/Layout';
import Home from './pages/Home';
import './App.scss';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="*" element={<Page404 />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </div>
  );
}

export default App;
