import React from "react";
import FilterItem from "./filteritems";
import "./filters.css";

const Filters = ({ filterList }) => {
  return (
    <div className="filters">
      {filterList &&
        filterList.map((filter) => {
          return <FilterItem filter={filter} key={filter.id} />;
        })}
    </div>
  );
};

export default Filters;
