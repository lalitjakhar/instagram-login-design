import React from "react";
import "./Home.css";
import { Box, Button, Container, TextField, Typography } from "@mui/material";
import Instalogo from "../Assets/instagram-logo.png";
import FacebookIcon from "@mui/icons-material/Facebook";
import Appstore from "../Assets/playstore-download.png";
import Playstore from "../Assets/google-play.png";

const ariaLabel = { "aria-label": "description" };
export const Home = () => {
  return (
    <>
      <Container>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            minHeight: "100vh",
            maxHeight: "fit-content",
            gap: 3,
          }}
        >
          <Box
            sx={{
              width: "20rem",
              border: "1px solid grey",
              padding: "25px 50px 25px 50px",
            }}
          >
            <Box className="instagram_content_center">
              <img src={Instalogo} alt="" />
            </Box>
            <Box sx={{ marginTop: "3rem" }}>
              <TextField
                size="small"
                variant="outlined"
                placeholder="Phone number, username, or email"
                inputProps={ariaLabel}
                fullWidth
              ></TextField>
            </Box>
            <Box sx={{ marginTop: "1rem" }}>
              <TextField
                variant="outlined"
                placeholder="Password"
                type="password"
                size="small"
                fullWidth
              ></TextField>
            </Box>
            <Box sx={{ marginTop: "2rem" }}>
              <Button
                variant="contained"
                sx={{ width: "100%", borderRadius: "10px" }}
              >
                Log In
              </Button>
            </Box>
            <Box
              sx={{ marginTop: "1rem", display: "flex", flexDirection: "row" }}
            >
              <Box
                sx={{
                  top: "0.70rem",
                  height: "1px",
                  position: "relative",
                  flexGrow: "1",
                  backgroundColor: "grey",
                }}
              ></Box>
              <Box
                sx={{
                  marginInline: "18px",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <Typography sx={{ color: "grey", fontWeight: "600" }}>
                  OR
                </Typography>
              </Box>
              <Box
                sx={{
                  top: "0.70rem",
                  height: "1px",
                  position: "relative",
                  flexGrow: "1",
                  backgroundColor: "grey",
                }}
              ></Box>
            </Box>
            <Box
              className="instagram_content_center"
              sx={{ marginTop: "1rem", color: "#385185" }}
            >
              <FacebookIcon></FacebookIcon>
              <Button
                variant="text"
                sx={{
                  color: "#385185",
                  fontWeight: "700",
                  textTransform: "capitalize",
                  fontSize: "1rem",
                }}
              >
                Log in with Facebook
              </Button>
            </Box>
            <Box
              className="instagram_content_center"
              sx={{ marginTop: "1rem", color: "#385185" }}
            >
              <Typography sx={{ fontWeight: "600", fontSize: "14px" }}>
                Forgot password?
              </Typography>
            </Box>
          </Box>

          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginBottom: "2rem",
            }}
          >
            <Box
              className="instagram_content_center"
              sx={{
                width: "20rem",
                border: "1px solid grey",
                padding: "25px 50px 25px 50px",
              }}
            >
              <Typography sx={{ color: "black" }}>
                Don't have an account?{" "}
                <span style={{ color: "#005aff", fontWeight: "600" }}>
                  Sign Up
                </span>
              </Typography>
            </Box>
          </Box>
          <Box
            sx={{
              width: "20rem",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              marginBottom: "2rem",
              color: "black",
            }}
          >
            <Box>
              <Typography>Get the app.</Typography>
            </Box>
            <Box className="instagram_content_center">
              <img src={Appstore} alt="" style={{ width: "160px" }} />
              <img src={Playstore} alt="" style={{ width: "160px" }} />
            </Box>
          </Box>
          <Box
            className="instagram_content_center"
            sx={{ gap: 2, color: "grey" }}
          >
            <Typography>Meta</Typography>
            <Typography>About</Typography>
            <Typography>Blog</Typography>
            <Typography>Jobs</Typography>
            <Typography>Help</Typography>
            <Typography>API</Typography>
            <Typography>Privacy</Typography>
            <Typography>Terms</Typography>
            <Typography>Locations</Typography>lalitjakhar/instagram-login
            <Typography>Instagram Lite</Typography>
            <Typography>Threads</Typography>
            <Typography>Contact Uploading & Non-Users</Typography>
            <Typography>Meta Varified</Typography>
          </Box>
          <Box>
            <Typography
              className="instagram_content_center"
              sx={{ color: "gray" }}
            >
              © 2023 Instagram from Meta
            </Typography>
          </Box>
        </Box>
      </Container>
    </>
  );
};
