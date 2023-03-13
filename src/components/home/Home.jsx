import { Box, Stack } from "@mui/material";
import About from "../about/About";
import Contact from "../contact/Contact";
import Intro from "../intro/Intro";
import Navbar from "../navbar/Navbar";
import Profile from "../profilePic/Profile";
import Projects from "../projects/Projects";
import Skills from "../skills/Skills";
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
      <Box>
        <Contact />
      </Box>
    </Box>
  );
};

export default Home;
