import { Fragment } from "react";
import DashboardContent from "../components/DashboardContent";
import DashboardHeader from "../components/DashboardHeader";

export const Dashboard = () => {
  return (
    <Fragment>
      <DashboardHeader />
      <DashboardContent />
    </Fragment>
  );
};
