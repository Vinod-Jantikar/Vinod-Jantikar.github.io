import { Box, Button, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const Intro = () => {
  return (
    <Box>
      <Typography
        sx={{
          fontSize: {
            lg: 35,
            md: 30,
            sm: 20,
            xs: 15,
          },
        }}
      >
        Hello <span>&#128075;</span>
      </Typography>
      <Typography
        sx={{
          fontSize: {
            lg: 35,
            md: 30,
            sm: 20,
            xs: 15,
          },
        }}
      >
        I'm <span className="name">Jantikar Vinod</span>
      </Typography>
      <Typography
        sx={{
          fontSize: {
            lg: 35,
            md: 30,
            sm: 20,
            xs: 15,
          },
        }}
      >
        Full Stack Web Developer
      </Typography>
      <Button
        variant="outlined"
        sx={{
          padding: "10px 20px",
          borderColor: "rgb(252, 16, 86)",
          fontSize: "15px",
        }}
      >
        <Link
          to="https://drive.google.com/file/d/17NkN2FnWouoINHC7l4_C5hHvqWO8PU1B/view?usp=share_link"
          target="_blank"
          style={{ textDecoration: "none", color: "rgb(204, 214, 246)" }}
        >
          Resume
        </Link>
      </Button>
    </Box>
  );
};

export default Intro;
