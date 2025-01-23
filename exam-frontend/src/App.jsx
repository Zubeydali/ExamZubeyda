
import './App.css'
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Home from './pages/Home/Home';
import NoPage from './components/notfound/NoPage';
import Details from './components/detail/Details';

function App() {


  return (
    <>
       <HelmetProvider>

       <BrowserRouter>

      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="Details/:id" element={< Details/>} />
          {/* <Route path="contact" element={<Contact />} /> */}
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>

       </HelmetProvider>
    </>
  )
}

export default App
