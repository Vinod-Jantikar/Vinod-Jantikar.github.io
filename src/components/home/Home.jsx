import { Box, Stack, Typography } from "@mui/material";
import About from "../about/About";
import Contact from "../contact/Contact";
import Intro from "../intro/Intro";
import Navbar from "../navbar/Navbar";
import Profile from "../profilePic/Profile";
import Projects from "../projects/Projects";
import Skills from "../skills/Skills";
import GitHubCalendar from "react-github-calendar";
import "./Home.css";

const Home = () => {
  return (
    <Box>
      <Navbar />
      <Stack
        direction="row"
        justifyContent="space-evenly"
        alignItems="center"
        marginTop="50px"
      >
        <Intro />
        <Profile />
      </Stack>
      <Box className="about_section">
        <About />
      </Box>
      <Box>
        <Skills />
      </Box>
      <Box>
        <Projects />
      </Box>
      <Box marginTop="20px">
        <Typography
          textAlign="center"
          marginBottom="40px"
          sx={{
            fontSize: {
              lg: 30,
              md: 30,
              sm: 25,
              xs: 15,
            },
          }}
        >
          GitHub Stats
        </Typography>
        <GitHubCalendar username="Vinod-Jantikar" style={{ margin: "auto" }} />
      </Box>
      <Box sx={{width: "50%" , margin: " 30px auto"}}>
        <img
          src="https://github-stats-alpha.vercel.app/api?username=Vinod-Jantikar&cc=000&tc=ccd6f6&bc=fc1056"
          alt="git stats"
          width="100%"
        />
      </Box>
      <Box>
        <Contact />
      </Box>
    </Box>
  );
};

export default Home;
