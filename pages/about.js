import React from 'react'
import Head from "next/head";
import HomeLayout from "../layouts/HomeLayout";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import SlideOne from '../components/aboutComponent/SlideOne';

export default function about() {
  return (
    <>
      <Head>
        <title>About Us | Joss Laundry</title>
      </Head>
      <Navbar />


      <SlideOne />


      <Footer />
    </>
  )
}

about.getLayout = (page) => <HomeLayout children={page} />;