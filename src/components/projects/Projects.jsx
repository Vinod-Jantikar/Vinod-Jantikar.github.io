import React from "react";
import ProjectCard from "../projectCard/ProjectCard";
import { projectData } from "../../constant";
import { Box, Grid, Typography } from "@mui/material";

const Projects = () => {
  return (
    <Box id="projects" style={{ marginTop: "80px",  }}>
      <Typography  textAlign="center" sx={{
          fontSize: {
            lg: 30,
            md: 30,
            sm: 25,
            xs: 15,
          }}}>
        Projects
      </Typography>
      <Grid container spacing="40px" justifyContent="center" marginTop="15px" >
        {projectData.map((project) => (
          <Grid item xs={9} md={5} sm={9} lg={5}>
            <ProjectCard project={project} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Projects;
