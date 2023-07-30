import React from "react";
import Navbar from "../components/Navbar";
import HeroBanner from "../components/HeroBanner";
import ContentSection from "../components/ContentSection";
import AdminDashboard from "../components/AdminDashboard";

const Home = () => {
  return (
    <>
      <Navbar />
      <HeroBanner />
      <ContentSection />
      <AdminDashboard />
    </>
  );
};

export default Home;
