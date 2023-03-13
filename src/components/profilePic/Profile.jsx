import { Box } from "@mui/material";

const Profile = () => {
  return (
    <Box
      sx={{
        width: {
          lg: "250px",
          md: "230px",
          sm: "180px",
          xs: "150px"
        },
        height: {
          lg: "250px",
          md: "230px",
          sm: "180px",
          xs: "150px"
        },
        border: "1px solid white",
        borderRadius: "50%",
      }}
    >
      <img
        src="./assets/profile.jpg"
        alt="profilepic"
        style={{ width: "100%", height: "100%", borderRadius: "50%",  }}
      />
    </Box>
  );
};

export default Profile;
