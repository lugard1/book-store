import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/UI/Layout';
import Home from './pages/HomePage';
import Categories from './pages/CategoriesPage';
import './App.css';

const App = () => (
  <Layout>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/categories" element={<Categories />} />
    </Routes>
  </Layout>
);

export default App;
