import {
  BsFillPhoneFill,
  FaGithub,
  FaLinkedin,
  ImLocation2,
  MdMail,
} from "../../icons";
import { Link } from "react-router-dom";
// import "./Contact.css";
import { Box, Stack, Typography } from "@mui/material";

const Contact = () => {
  return (
    <Box id="contact" marginTop="40px">
      <Typography
        variant="h5"
        style={{ textAlign: "center", margin: "40px 0" }}
      >
        Get In Touch
      </Typography>
      <Stack
        direction={{xs: "column", sm: "row", md: "row", lg: "row"}}
        justifyContent="center"
        alignItems="center"
        spacing={2}
      >
        <Stack direction="row" spacing={1}>
          <MdMail size="20px" />
          <Typography variant="body2">vinodjantikar999@gmail.com</Typography>
        </Stack>

        <Stack direction="row" spacing={1}>
          <BsFillPhoneFill size="20px" />
          <Typography variant="body2">9483977282</Typography>
        </Stack>
        <Stack direction="row" spacing={1}>
          <ImLocation2 size="20px" />
          <Typography variant="body2">Bidar, Karnataka</Typography>
        </Stack>
      </Stack>

      <Stack
        direction="row"
        justifyContent={"center"}
        alignItems={"center"}
        spacing={3}
        margin="20px 0"
      >
        <Link to="https://github.com/Vinod-Jantikar" target="_blank">
          <FaGithub size="30px" color="white" />
        </Link>
        <Link
          to="https://www.linkedin.com/in/vinod-jantikar?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BAuxoi1HsQIem5mrCrlI8NQ%3D%3D"
          target="_blank"
        >
          <FaLinkedin size="30px" color="white" />
        </Link>
      </Stack>
      <Box textAlign="center">
        <Typography> By: Jantikar Vinod</Typography>
      </Box>
    </Box>
  );
};

export default Contact;
