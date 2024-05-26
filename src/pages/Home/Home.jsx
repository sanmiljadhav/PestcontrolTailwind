import React from "react";
// import Navbar from "./components/Navbar/Navbar";
import Navbar from "../../components/Navbar/Navbar";
import Aboutus from "../../components/Aboutus/Aboutus";
import Pestprobems from "../../components/Pestprobems/Pestprobems";
import Services from "../../components/services/Services";
import Footer from "../../components/Footer/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Aboutus />
      <Pestprobems />
      <Services />
      <Footer />
    </>
  );
}
