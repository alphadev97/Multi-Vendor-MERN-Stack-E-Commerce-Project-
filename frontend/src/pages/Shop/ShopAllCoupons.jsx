import React from "react";
import DashboardHeader from "../../components/Shop/Layout/DashboardHeader";
import DashboardSideBar from "../../components/Shop/Layout/DashboardSideBar";
import AllCouponCodes from "../../components/Shop/AllCouponCodes.jsx";

const ShopAllCoupons = () => {
  return (
    <div>
      <DashboardHeader />

      <div className="flex justify-between w-full">
        <div className="w-[80px] 800px:w-[330px]">
          <DashboardSideBar active={9} />
        </div>
        <div className="w-full justify-center flex">
          <AllCouponCodes />
        </div>
      </div>
    </div>
  );
};

export default ShopAllCoupons;
