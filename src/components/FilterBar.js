import React from "react";
import "../styles/FilterBar.css";
const FilterBar = ({ setFilter }) => {
  return (
    <div className="filter-bar">
      <select onChange={(e) => setFilter(e.target.value)}>
        <option value="all">جميع المنتجات</option>
        <option value="toys">ألعاب الأطفال</option>
        <option value="clothes">ملابس الأطفال</option>
        <option value="chairs">مستلزمات الأطفال</option>
      </select>
    </div>
  );
};

export default FilterBar;
