import Layout from '../components/Layout'
import '../styles/globals.css'
import "tailwindcss/tailwind.css";
import React from 'react';
import ReactPlayer from "react-player";

function MyApp({ Component, pageProps }) {
  return (

<>

    <Layout>
      <Component {...pageProps} />
    </Layout>

    </>
  );
}

export default MyApp
