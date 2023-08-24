import { Box, Stack, Typography } from "@mui/material";


const About = () => {
  return (
    <Box id="about">
      <Typography  textAlign="center" marginBottom="40px" sx={{
          fontSize: {
            lg: 30,
            md: 30,
            sm: 25,
            xs: 15,
          }}}>
        About me
      </Typography>
      <Stack
        direction={{xs: "column", sm: "column", md: "row", lg: "row"}}
        spacing={3}
        justifyContent="center"
        alignItems="center"
      >
        <Box width={{xs: "90%", sm: "90%", md: "45%", lg: "40%"}}>
          <img src="./assets/icon-1.png" alt="icon" style={{ width: "100%" }} />
        </Box>
        <Box width={{xs: "90%", sm: "90%", md: "45%", lg: "45%"}}>
          <Typography  sx={{
          fontSize: {
            lg: 20,
            md: 20,
            sm: 20,
            xs: 15,
          },
        }}>
            Aspiring full stack developer with a specialization in ReactJS,
            NodeJS, ExpressJS, MongoDB, Redux, JavaScript, TypeScript, HTML and
            CSS. Keenly interested in problem-solving and making user-centric
            products, self-motivated and curious. Looking forward to honing my
            skills in a challenging work environment.
          </Typography>
          <br />
          <Typography  sx={{
          fontSize: {
            lg: 30,
            md: 30,
            sm: 25,
            xs: 15,
          }}}>Here's what I do</Typography>
          <br />
          <Typography  sx={{
          fontSize: {
            lg: 20,
            md: 20,
            sm: 20,
            xs: 15,
          },
        }}>
            &#10024; Develop highly interactive User Interfaces and Backend for
            web applications
          </Typography>
          <Typography  sx={{
          fontSize: {
            lg: 20,
            md: 20,
            sm: 20,
            xs: 15,
          },
        }}>
            &#10024; Building responsive website front end using ReactJS
          </Typography>
          <Typography  sx={{
          fontSize: {
            lg: 20,
            md: 20,
            sm: 20,
            xs: 15,
          },
        }}>
            &#10024; Creating application's backend in NodeJS, ExpressJS and
            MongoDB
          </Typography>
        </Box>
      </Stack>
    </Box>
  );
};

export default About;
