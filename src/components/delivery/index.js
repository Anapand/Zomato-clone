import React from "react";
import { restaurants } from "../../data/restaurants";
import Filters from "../common/filters";
import "./delivery.css";
import DeliveryCollections from "./deliveryCollections";
import TopBrands from "./deliveryCollections/topBrands";
import ExploreSection from "./exploreSection";

const deliveryFilters = [
  {
    id: 1,
    icon: <i className="fi fi-rr-settings-sliders absolute-center"></i>,
    title: "Filters",
  },
  {
    id: 2,
    title: "Rating: 4.0+",
  },
  {
    id: 3,
    title: "Safe and Hygienic",
  },
  {
    id: 4,
    title: "Pure Veg",
  },
  {
    id: 5,
    title: "Delivery Time",
    icon: <i className="fi fi-rr-apps-sort absolute-center"></i>,
  },
  {
    id: 6,
    title: "Great Offers",
  },
];
const restaurantList = restaurants;
const Delivery = () => {
  return (
    <div>
      <div className="max-width">
        <Filters filterList={deliveryFilters} />
      </div>
      <DeliveryCollections />
      <TopBrands />
      <ExploreSection
        restaurants={restaurantList}
        collectionName="Delivery Restaurants in Delhi"
      />
    </div>
  );
};

export default Delivery;
