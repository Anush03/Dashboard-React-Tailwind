// @flow
import * as React from "react";
import DashboardStatsGrid from "./DashboardStartGrid";
import TransactionChart from "./TransactionChart";
import BuyerProfilePieChart from "./BuyerProfileChart";
import RecentOrders from "./RecentOrder";
import PopularProducts from "./PopularProducts";

export default function Dashboard() {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col gap-4">
        <DashboardStatsGrid />
        <div className="flex flex-row gap-4 w-full">
          <TransactionChart />
          <BuyerProfilePieChart />
        </div>
        <div className="flex flex-row gap-4 w-full">
          <RecentOrders />
          <PopularProducts />
        </div>
      </div>
    </div>
  );
}
