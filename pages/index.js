import React from 'react';
import Head from 'next/head';
import { Home } from '../src/containers';
import { GOOGLE_MAPS_API_URL } from '../src/constants';

/**
 * All the home code is on src/
 * In here we can have for example Helmet for each page.
 */
const HomePage = () => {
  return (
    <>
      <Home />
    </>
  );
};

export default HomePage;
