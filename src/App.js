import React from "react";

import { Route, Routes } from "react-router-dom";
import FavoritesPage from "./pages/Favorites";
import SearchPage from "./pages/Search";

import Layout from "./components/layout/Layout";
import HeaderAppBar from "./components/layout/HeaderAppBar";
import FooterNavigation from "./components/layout/FooterNavigation";

const App = () => {
  return (
    <>
      <HeaderAppBar />
      <Routes>
        <Route path="/" element={<SearchPage />} />
        <Route path="/search" element={<SearchPage />} />

        <Route path="/favorites" element={<FavoritesPage />} />
      </Routes>
      <FooterNavigation />
    </>
  );
};

export default App;
