import React from "react";

const FilterSort = ({ onSizeChange }) => {
  const handleCheckboxChange = (e) => {
    onSizeChange(e.target.value); 
  };

  return (
    <div className="filter-sort center">
      <details className="filter">
        <summary className="filter__summary">
          <span className="filter__heading">FILTER</span>
          <svg
            width="15.000000"
            height="10.000000"
            viewBox="0 0 15 10"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
          >
            <path
              id="Vector"
              d="M0.83 10L4.16 10C4.62 10 5 9.62 5 9.16C5 8.7 4.62 8.33 4.16 8.33L0.83 8.33C0.37 8.33 0 8.7 0 9.16C0 9.62 0.37 10 0.83 10ZM0 0.83C0 1.29 0.37 1.66 0.83 1.66L14.16 1.66C14.62 1.66 15 1.29 15 0.83C15 0.37 14.62 0 14.16 0L0.83 0C0.37 0 0 0.37 0 0.83ZM0.83 5.83L9.16 5.83C9.62 5.83 10 5.45 10 5C10 4.54 9.62 4.16 9.16 4.16L0.83 4.16C0.37 4.16 0 4.54 0 5C0 5.45 0.37 5.83 0.83 5.83Z"
              fill="#000000"
              fillOpacity="1.000000"
              fillRule="nonzero"
            />
          </svg>
        </summary>
        <div className="filter__content">
          {["CATEGORY", "BRAND", "DESIGNER"].map((filterType) => (
            <details className="filter__item" key={filterType}>
              <summary className="filter__head">{filterType}</summary>
              <div className="filter__link-box">
                {[
                  "Accessories",
                  "Bags",
                  "Denim",
                  "Hoodies & Sweatshirts",
                  "Jackets & Coats",
                  "Polos",
                  "Shirts",
                  "Shoes",
                  "Sweater & Knits",
                  "T-Shirts",
                  "Tanks",
                ].map((item, index) => (
                  <a href="#" className="filter__link" key={index}>
                    {item}
                  </a>
                ))}
              </div>
            </details>
          ))}
        </div>
      </details>

      <div className="sort">
        {["TRENDING NOW", "SIZE", "PRICE"].map((sortType, index) => (
          <details className="sort__details" key={index}>
            <summary className="sort__summary">
              <span className="sort__heading">{sortType}</span>
              <svg
                width="10.020004"
                height="5.003906"
                viewBox="0 0 10.02 5.00391"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
              >
                <path
                  id="Vector"
                  d="M5 5C4.83 5 4.67 4.94 4.54 4.83L0.25 1.26C0.11 1.14 0.02 0.96 0 0.78C-0.02 0.59 0.04 0.4 0.16 0.25C0.28 0.11 0.46 0.02 0.64 0C0.83 -0.02 1.02 0.04 1.17 0.16L5 3.36L8.83 0.27C8.9 0.22 8.98 0.17 9.07 0.14C9.16 0.12 9.26 0.11 9.35 0.12C9.45 0.13 9.54 0.16 9.62 0.2C9.7 0.25 9.78 0.31 9.83 0.38C9.9 0.46 9.95 0.54 9.98 0.63C10.01 0.73 10.02 0.83 10.01 0.93C10 1.02 9.97 1.12 9.93 1.2C9.88 1.29 9.81 1.37 9.73 1.42L5.45 4.88C5.32 4.97 5.16 5.01 5 5Z"
                  fill="#6F6E6E"
                  fillOpacity="1.000000"
                  fillRule="nonzero"
                />
              </svg>
            </summary>
            {sortType === "SIZE" && (
              <div className="sort__box">
                {["XS", "S", "L", "XL"].map((size, idx) => (
                  <div className="sort__check" key={idx}>
                    <input
                      id={`sort__check${idx}`}
                      type="checkbox"
                      value={size}
                      onChange={handleCheckboxChange}
                    />
                    <label htmlFor={`sort__check${idx}`}>{size}</label>
                  </div>
                ))}
              </div>
            )}
          </details>
        ))}
      </div>
    </div>
  );
};

export default FilterSort;
