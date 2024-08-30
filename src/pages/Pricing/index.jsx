import React from "react";
import Offer from "./Offer";
import Discover from "../Home/Discover";
import Curve from "../../components/Curve";
import Testimonials from "./components/Testimonials";
import TitleClients from "./components/TitleClients";

export default function Pricing() {
  return (
    <>
      <Offer />
      <Discover />
      <Curve />
      <Testimonials />
      <TitleClients />
    </>
  );
}
