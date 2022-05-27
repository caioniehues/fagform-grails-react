import { Fragment } from "react";
import { Box, Typography, makeStyles } from "@material-ui/core";
import DashboardContent from "../components/DashboardContent";
import DashboardHeader from "../components/DashboardHeader";


export const Dashboard = () => {
  return (
    <Fragment>
      <DashboardHeader/>
      <DashboardContent />
    </Fragment>
  );
};
