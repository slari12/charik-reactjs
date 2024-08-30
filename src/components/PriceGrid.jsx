import React from "react";
import price from "../constants/price.json";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faShareNodes,
  faMagnifyingGlassDollar,
  faCartArrowDown,
  faDatabase,
  faMagnifyingGlassPlus,
  faAddressCard,
  faEnvelopesBulk,
  faGhost,
  faCopy,
  faScaleBalanced,
  faBook,
} from "@fortawesome/free-solid-svg-icons";
import {
  faLinkedinIn,
  faInternetExplorer,
} from "@fortawesome/free-brands-svg-icons";
import { faCircle } from "@fortawesome/free-regular-svg-icons";

const iconMap = {
  faShareNodes,
  faMagnifyingGlassDollar,
  faCartArrowDown,
  faDatabase,
  faMagnifyingGlassPlus,
  faAddressCard,
  faEnvelopesBulk,
  faGhost,
  faLinkedinIn,
  faInternetExplorer,
  faCopy,
  faCircle,
  faScaleBalanced,
  faBook,
};

export default function PriceGrid() {
  return (
    <div className="lg:grid grid-rows-3 grid-cols-3 gap-4">
      <div className="flex">
        <div className="grid_left">
          <div className="white_icon icon">
            <FontAwesomeIcon
              icon={faShareNodes}
              size="2xl"
              style={{ color: "#f53f71" }}
            />
          </div>
        </div>
        <div className="grid_right">
          <p className="grid_item_b">Made for HubSpot</p>
          <p className="grid_item_text font-light">
            The finest integration experience you'll encounter with HubSpot
          </p>
        </div>
      </div>
      {price.map((price) => (
        <div className="flex" key={price.id}>
          <div className="grid_left">
            <div className="gradient_icon icon">
              <FontAwesomeIcon
                icon={iconMap[price.icon]}
                size="2xl"
                style={{ color: "#ffffff" }}
              />
            </div>
          </div>
          <div className="grid_right">
            <p className="grid_item_b">{price.title}</p>
            <p className="grid_item_text font-light">{price.content}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
