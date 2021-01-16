import React from "react";
import MetaTags from '../components/MetaTags'
import Products from "../components/Products";
import initialState from "../initialState";

const Home = () => (
  <>
    <MetaTags title='Home' />
    <Products products={initialState.products} />
  </>
  );

export default Home;
