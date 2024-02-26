import React, { Fragment, useState } from "react";
import "./index.css";
import searchIcon from "../../../assets/img/icons/order.svg";

const HomeMain = () => {
  const [showSearchBar, setShowSearchBar] = useState(false);

  const handleSearchIconClick = () => {
    setShowSearchBar(true);
  };

  return (
    <Fragment>
      <main>
        <section className="main-head">
          <div className="name-date">
            <span>Jaegar Resto</span>
            <p>Tuesday, 2 Feb 2021</p>
          </div>
          <div className="search-bar">
            <img src={searchIcon} alt="" onClick={handleSearchIconClick} />
            <input
              type="search"
              name="search"
              id="search-product"
              placeholder="Search for food, coffee, etc.."
            />
          </div>
        </section>
        {/* <section className="meal-types">ul>li*</section> */}
      </main>
    </Fragment>
  );
};

export default HomeMain;
