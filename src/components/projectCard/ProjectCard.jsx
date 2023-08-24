import { Link } from "react-router-dom";
import { Box, Button, Stack, Typography } from "@mui/material";

const ProjectCard = ({ project }) => {
  return (
    <Box
      sx={{
        boxSizing: "border-box",
        boxShadow: "rgb(38, 57, 77) 0px 20px 30px -10px",
        padding: "15px",
      }}
    >
      <Typography variant="h6" sx={{ margin: "5px 0" }}>
        {project.projectName}
      </Typography>
      <img
        src={project.imgUrl}
        alt="project-homepage-pic"
        style={{ width: "100%", height: "250px" }}
      />
      <Typography>{project.summary}</Typography>
      <Typography variant="body1" sx={{marginTop: "10px"}}>Tech Stacks:</Typography> 
      {project.techStacks.map((tech) => (
        <span style={{ padding: "2px" }}> {tech},</span>
      ))}
      <Stack
        direction="row"
        justifyContent="space-around"
        alignItems="center"
        margin="30px 0"
      >
        <Button
          variant="outlined"
          sx={{
            padding: "10px 20px",
            borderColor: "rgb(252, 16, 86)",
            fontSize: "15px",
          }}
        >
          {" "}
          <Link
            to={project.githubLink}
            target="_blank"
            style={{ textDecoration: "none", color: "rgb(204, 214, 246)" }}
          >
            {" "}
            GitHub
          </Link>
        </Button>
        <Button
          variant="outlined"
          sx={{
            padding: "10px 30px",
            borderColor: "rgb(252, 16, 86)",
            fontSize: "15px",
          }}
        >
          <Link
            to={project.deployedLink}
            target="_blank"
            style={{ textDecoration: "none", color: "rgb(204, 214, 246)" }}
          >
            View
          </Link>{" "}
        </Button>
      </Stack>
    </Box>
  );
};

export default ProjectCard;
