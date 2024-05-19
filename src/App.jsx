import React from "react";
import "./App.css";
import Background from "./components/Background/Background";
import Navigation from "./components/Navigation/Navigation";
import Hero from "./components/Hero/Hero";
import Rating from "./components/Rating/Rating";
import Purchase from "./components/Purchase/Purchase";
import ApplySection from "./components/ApplySection/ApplySection";
import BrowserSupport from "./components/BrowserSupport/BrowserSupport";
import Features from "./components/Features/Features";
import Footer from "./components/Footer/Footer";

const App = () => {
  return (
    <>
      <div className="pt-8 max-w-[1280px] mx-auto px-2  ">
        <Background />
        <Navigation />
        <Hero />
        <Rating />
        <Purchase />
        <ApplySection />
        <BrowserSupport />
        <Features />
      </div>
      <Footer />
    </>
  );
};

export default App;
