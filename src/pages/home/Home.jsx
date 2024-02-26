import React from "react";
import { Fragment } from "react";
import Sidebar from "../../components/sideBar/Sidebar";
import OrderBar from "../../components/orderBar/OrderBar";
import HomeMain from "../../components/pagesMain/homeMain/HomeMain";

const Home = () => {
  return (
    <Fragment>
      <Sidebar />
      <HomeMain />
      <OrderBar />
    </Fragment>
  );
};

export default Home;
