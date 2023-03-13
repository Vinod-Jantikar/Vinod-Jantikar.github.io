import { Box, Grid, Typography } from "@mui/material";
import {
  AiFillHtml5,
  BsGit,
  DiMongodb,
  FaNodeJs,
  IoLogoCss3,
  RiReactjsFill,
  SiExpress,
  SiJavascript,
  SiJest,
  SiMui,
  SiRedux,
  TbBrandTypescript,
} from "../../icons";
import { styled } from "@mui/material/styles";

const SkillBox = styled(Box)({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  width: "150px",
  height: "150px",
  borderRadius: "50%",
  backgroundColor: "black",
  padding: "5px",
  boxShadow: "rgb(38, 57, 77) 0px 20px 30px -10px",
  margin: "5px auto",
});

const Skills = () => {
  return (
    <Box
    id="skills"
      textAlign="center"
      sx={{
        width: {
          xs: "90%",
          sm: "90%",
          md: "60%",
          lg: "60%",
        },
        margin: "50px auto",
      }}
    >
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
        My Skills
      </Typography>

      <Grid container>
        <Grid item xs={3}>
          <SkillBox
            sx={{
              width: {
                lg: "150px",
                md: "120px",
                sm: "100px",
                xs: "80px",
              },
              height: {
                lg: "150px",
                md: "120px",
                sm: "100px",
                xs: "80px",
              },
            }}
          >
            <RiReactjsFill size="40px" style={{ color: "aqua" }} />
            <Typography
              sx={{
                fontSize: {
                  lg: 20,
                  md: 20,
                  sm: 15,
                  xs: 10,
                },
              }}
            >
              React
            </Typography>
          </SkillBox>
        </Grid>

        <Grid item xs={3}>
          <SkillBox
            sx={{
              width: {
                lg: "150px",
                md: "120px",
                sm: "100px",
                xs: "80px",
              },
              height: {
                lg: "150px",
                md: "120px",
                sm: "100px",
                xs: "80px",
              },
            }}
          >
            <SiRedux size="40px" style={{ color: "purple" }} />
            <Typography
              sx={{
                fontSize: {
                  lg: 20,
                  md: 20,
                  sm: 15,
                  xs: 10,
                },
              }}
            >
              Redux
            </Typography>
          </SkillBox>
        </Grid>

        <Grid item xs={3}>
          <SkillBox
            sx={{
              width: {
                lg: "150px",
                md: "120px",
                sm: "100px",
                xs: "80px",
              },
              height: {
                lg: "150px",
                md: "120px",
                sm: "100px",
                xs: "80px",
              },
            }}
          >
            <FaNodeJs size="40px" style={{ color: "greenyellow" }} />
            <Typography
              sx={{
                fontSize: {
                  lg: 20,
                  md: 20,
                  sm: 15,
                  xs: 10,
                },
              }}
            >
              NodeJS
            </Typography>
          </SkillBox>
        </Grid>

        <Grid item xs={3}>
          <SkillBox
            sx={{
              width: {
                lg: "150px",
                md: "120px",
                sm: "100px",
                xs: "80px",
              },
              height: {
                lg: "150px",
                md: "120px",
                sm: "100px",
                xs: "80px",
              },
            }}
          >
            <SiExpress size="40px" style={{ color: "whiteSmoke" }} />
            <Typography
              sx={{
                fontSize: {
                  lg: 20,
                  md: 20,
                  sm: 15,
                  xs: 10,
                },
              }}
            >
              ExpressJS
            </Typography>
          </SkillBox>
        </Grid>

        <Grid item xs={3}>
          <SkillBox
            sx={{
              width: {
                lg: "150px",
                md: "120px",
                sm: "100px",
                xs: "80px",
              },
              height: {
                lg: "150px",
                md: "120px",
                sm: "100px",
                xs: "80px",
              },
            }}
          >
            <DiMongodb size="40px" style={{ color: "greenyellow" }} />
            <Typography
              sx={{
                fontSize: {
                  lg: 20,
                  md: 20,
                  sm: 15,
                  xs: 10,
                },
              }}
            >
              MongoDB
            </Typography>
          </SkillBox>
        </Grid>

        <Grid item xs={3}>
          <SkillBox
            sx={{
              width: {
                lg: "150px",
                md: "120px",
                sm: "100px",
                xs: "80px",
              },
              height: {
                lg: "150px",
                md: "120px",
                sm: "100px",
                xs: "80px",
              },
            }}
          >
            <SiJavascript size="40px" style={{ color: "yellow" }} />
            <Typography
              sx={{
                fontSize: {
                  lg: 20,
                  md: 20,
                  sm: 15,
                  xs: 10,
                },
              }}
            >
              JavaScript
            </Typography>
          </SkillBox>
        </Grid>

        <Grid item xs={3}>
          <SkillBox
            sx={{
              width: {
                lg: "150px",
                md: "120px",
                sm: "100px",
                xs: "80px",
              },
              height: {
                lg: "150px",
                md: "120px",
                sm: "100px",
                xs: "80px",
              },
            }}
          >
            <TbBrandTypescript size="40px" style={{ color: "blueviolet" }} />
            <Typography
              sx={{
                fontSize: {
                  lg: 20,
                  md: 20,
                  sm: 15,
                  xs: 10,
                },
              }}
            >
              TypeScript
            </Typography>
          </SkillBox>
        </Grid>

        <Grid item xs={3}>
          <SkillBox
            sx={{
              width: {
                lg: "150px",
                md: "120px",
                sm: "100px",
                xs: "80px",
              },
              height: {
                lg: "150px",
                md: "120px",
                sm: "100px",
                xs: "80px",
              },
            }}
          >
            <SiJest size="40px" style={{ color: "maroon" }} />
            <Typography
              sx={{
                fontSize: {
                  lg: 20,
                  md: 20,
                  sm: 15,
                  xs: 10,
                },
              }}
            >
              Jest
            </Typography>
          </SkillBox>
        </Grid>
        <Grid item xs={3}>
          <SkillBox
            sx={{
              width: {
                lg: "150px",
                md: "120px",
                sm: "100px",
                xs: "80px",
              },
              height: {
                lg: "150px",
                md: "120px",
                sm: "100px",
                xs: "80px",
              },
            }}
          >
            <AiFillHtml5 size="40px" style={{ color: "orange" }} />
            <Typography
              sx={{
                fontSize: {
                  lg: 20,
                  md: 20,
                  sm: 15,
                  xs: 10,
                },
              }}
            >
              HTML
            </Typography>
          </SkillBox>
        </Grid>
        <Grid item xs={3}>
          <SkillBox
            sx={{
              width: {
                lg: "150px",
                md: "120px",
                sm: "100px",
                xs: "80px",
              },
              height: {
                lg: "150px",
                md: "120px",
                sm: "100px",
                xs: "80px",
              },
            }}
          >
            <IoLogoCss3 size="40px" style={{ color: "blue" }} />
            <Typography
              sx={{
                fontSize: {
                  lg: 20,
                  md: 20,
                  sm: 15,
                  xs: 10,
                },
              }}
            >
              CSS
            </Typography>
          </SkillBox>
        </Grid>

        <Grid item xs={3}>
          <SkillBox
            sx={{
              width: {
                lg: "150px",
                md: "120px",
                sm: "100px",
                xs: "80px",
              },
              height: {
                lg: "150px",
                md: "120px",
                sm: "100px",
                xs: "80px",
              },
            }}
          >
            <BsGit size="40px" style={{ color: "yellow" }} />
            <Typography
              sx={{
                fontSize: {
                  lg: 20,
                  md: 20,
                  sm: 15,
                  xs: 10,
                },
              }}
            >
              Git
            </Typography>
          </SkillBox>
        </Grid>
        <Grid item xs={3}>
          <SkillBox
            sx={{
              width: {
                lg: "150px",
                md: "120px",
                sm: "100px",
                xs: "80px",
              },
              height: {
                lg: "150px",
                md: "120px",
                sm: "100px",
                xs: "80px",
              },
            }}
          >
            <SiMui size="40px" style={{ color: "blue" }} />
            <Typography
              sx={{
                fontSize: {
                  lg: 20,
                  md: 20,
                  sm: 15,
                  xs: 10,
                },
              }}
            >
              Material Ui
            </Typography>
          </SkillBox>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Skills;
