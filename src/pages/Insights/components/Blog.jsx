import React from "react";
import Card from "../../../components/Card";

export default function Blog() {
  return (
    <div className="outer_header bg-white">
      <div className="container ">
        <div className="lg:grid grid-cols-3 grid-rows-3 lg:gap-4 p-4 lg:cols-gap-0 cols-gap-4">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </div>
  );
}
