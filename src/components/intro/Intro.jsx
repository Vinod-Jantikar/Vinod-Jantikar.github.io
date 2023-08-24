import { Box, Button, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineCloudDownload } from "react-icons/ai";

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
          marginTop: "20px"
        }}
      >
        <Link
          to="./files/Jantikar-Vinod-Resume.pdf"
          target="_blank"
          download
          style={{
            textDecoration: "none",
            color: "rgb(204, 214, 246)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "5px",
          }}
        >
          <AiOutlineCloudDownload size={30} />
          Resume
        </Link>
      </Button>
    </Box>
  );
};

export default Intro;
