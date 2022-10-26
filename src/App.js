import Home from './components/Home';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import { initializeApp } from "firebase/app";
import Footer from './components/Footer';
import Category from './components/Category';
import ItemDetail from './components/ItemDetail';
import Cart from './components/Cart';
import MyProvider from './components/CartContext';


function App() {

  const firebaseConfig = {
    apiKey: "AIzaSyD9SLDSIhu9rixEZVTVin9YDA1zu4_g888",
    authDomain: "samsung-31b8b.firebaseapp.com",
    projectId: "samsung-31b8b",
    storageBucket: "samsung-31b8b.appspot.com",
    messagingSenderId: "1028009286403",
    appId: "1:1028009286403:web:e5a2930e3c9d19e40d6736",
    measurementId: "G-S8M8QJ1VXY"
  };

  const app = initializeApp(firebaseConfig);
  

  return (
    <BrowserRouter>
    <MyProvider>
    <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Home' element={<Home />} />
        <Route path='/category/:category' element={<Category />} />
        <Route path='/Detail/:id' element={<ItemDetail />} />
        <Route path='/Cart' element={<Cart />} />
      </Routes>
    <Footer />
    </MyProvider>
    </BrowserRouter>
  );
}

export default App;
