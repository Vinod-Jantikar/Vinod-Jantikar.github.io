import { Box, Button, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const MenuNav = ({ sx }) => {
  return (
    <Box sx={{ ...sx }}>
      <Button sx={{ fontSize: 15, color: "rgb(204, 214, 246)", p: "20px" }}>
        
        <a href="#home" style={{ textDecoration: "none", color: "rgb(204, 214, 246)"}}>
          Home
        </a>
        </Button>
      <Button sx={{ fontSize: 15, color: "rgb(204, 214, 246)",p: "20px" }}>
        {" "}
        <a
          href="#about"
          style={{ textDecoration: "none", color: "rgb(204, 214, 246)"}}
        >
          About Me
        </a>
      </Button>
      <Button sx={{ fontSize: 15, color: "rgb(204, 214, 246)",p: "20px" }}>
        {" "}
        <a
          href="#skills"
          style={{ textDecoration: "none", color: "rgb(204, 214, 246)" }}
        >
          Skills
        </a>{" "}
      </Button>
      <Button sx={{ fontSize: 15, color: "rgb(204, 214, 246)", p: "20px" }}>
        {" "}
        <a
          href="#projects"
          style={{ textDecoration: "none", color: "rgb(204, 214, 246)" }}
        >
          Projects{" "}
        </a>
      </Button>
      <Button sx={{ fontSize: 15, color: "rgb(204, 214, 246)" , p: "20px"}}>
        {" "}
        <a
          href="#contact"
          style={{ textDecoration: "none", color: "rgb(204, 214, 246)" }}
        >
          {" "}
          Contact
        </a>
      </Button>
      <Button sx={{ fontSize: 15, color: "rgb(204, 214, 246)", p: "20px" }}>
        <Link
          to="https://drive.google.com/file/d/1NPYhWL2GzZnlaPPyFR_UzxmcAFvJVUaX/view?usp=sharing"
          target="_blank"
          style={{ textDecoration: "none", color: "rgb(204, 214, 246)" }}
        >
          Resume
        </Link>
      </Button>
    </Box>
  );
};

export default MenuNav;
