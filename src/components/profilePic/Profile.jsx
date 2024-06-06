import { Box } from "@mui/material";

const Profile = () => {
  return (
    <Box
      sx={{
        width: {
          lg: "400px",
          md: "230px",
          sm: "180px",
          xs: "150px"
        },
        height: {
          lg: "400px",
          md: "230px",
          sm: "180px",
          xs: "150px"
        },
        border: "1px solid white",
        borderRadius: "50%",
        background: 'white'
      }}
    >
      <img
        src="./assets/profile-pic.gif"
        alt="profilepic"
        style={{ width: "100%", height: "100%", borderRadius: "50%", objectFit: "contain",  }}
      />
    </Box>
  );
};

export default Profile;
