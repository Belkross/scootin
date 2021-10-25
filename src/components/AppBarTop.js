import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Stack from "@mui/material/Stack";

function AppBarTop({ children }) {
  return (
    <AppBar position="sticky" component="header" sx={{ opacity: "0.96" }}>
      <Toolbar>
        <Stack sx={sx_containerStack}>{children}</Stack>
      </Toolbar>
    </AppBar>
  );
}

export default AppBarTop;

const sx_containerStack = {
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-between",
  width: "100%",
};