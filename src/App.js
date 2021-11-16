import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/header';
import Footer from './components/footer';
import HomePage from './components/home-page';
import ExamplePage from './components/example-page';
import ErrorPage from './components/error-page';
import './App.css';

function App() {
  return (
    <BrowserRouter basename='/traffic-isobar/'>
      <Header />
      <Routes>
        <Route path='/' exact element={<HomePage />} />
        <Route path='/example' element={<ExamplePage />} />
        <Route path='*' element={<ErrorPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App;
