import { Drawer } from "@mui/material";
import React, { useState } from "react";
import MenuNav from "./MenuNav";

const DrawerMenu = ({ handleDrawer, open }) => {
  return (
    <Drawer
      anchor={"left"}
      open={open}
      onClose={handleDrawer}
      sx={{
        "& .MuiDrawer-paper": {
          bgcolor: "black",
          color: "white",
          width: "40%",
          p: "40px",
          
        },
      }}
    >
      <MenuNav sx={{display: "flex", flexDirection: "column"}} />
    </Drawer>
  );
};

export default DrawerMenu;
