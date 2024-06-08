import {
  AppBar,
  Box,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import MenuNav from "./MenuNav";
import { BiMenu } from 'react-icons/bi'
import DrawerMenu from "./DrawerMenu";
import { useState } from "react";


const Navbar = () => {
  const [open, setOpen] = useState(false);

  const handleDrawer = () => {
    setOpen(!open);
  };


  return (
    <AppBar
      position="sticky"
      sx={{ backgroundColor: "rgb(252, 16, 86)" }}
      direction={{ xs: "column", sm: "column", md: "row", lg: "row" }}
    >
      <Toolbar>
        <Box sx={{ flexGrow: 1, marginLeft: {xs: "80px", sm: '80px', md: '100px', lg: '100px'} }}>
          <Typography variant="h6" color="rgb(204, 214, 246)" style={{fontWeight: '600', fontSize: '25px'}}>
            Vinod Jantikar
          </Typography>
        </Box>
        <IconButton sx={{ display: { xs: "flex", sm: "flex", md: "none", lg: "none" } }} onClick={handleDrawer}>
          <BiMenu />
        </IconButton>
        <MenuNav sx={{ display: { xs: "none", sm: "none", md: "flex", lg: "flex" } }} />
      </Toolbar>
      <DrawerMenu handleDrawer={handleDrawer} open={open} />
    </AppBar>
  );
};

export default Navbar;
