import React from "react";
import Header from "../../Components/Header";
import { Box } from "@mui/material";

const index = () => {
  return (
    <>
    <Box m="20px">
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="DASHBOARD" subtitle="WELCOME TO YOUR DASHBOARD" />
    </Box>
      </Box>
    </>
  );
};

export default index;
