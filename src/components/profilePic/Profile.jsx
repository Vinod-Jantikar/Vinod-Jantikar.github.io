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
          lg: "350px",
          md: "230px",
          sm: "180px",
          xs: "150px"
        },
      }}
    >
      <img
        src="./assets/pp-no-bg.png"
        alt="profilepic"
        style={{ width: "100%", height: "100%",borderRadius: '50%', objectFit: "contain",  }}
      />
    </Box>
  );
};

export default Profile;
