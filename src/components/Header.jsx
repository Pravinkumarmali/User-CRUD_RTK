import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import logo from "../assets/notepad.png";
import "./Header.css";

const Header = () => {
  return (
    <>
      <AppBar
        position="static"
        sx={{
          height: "55px",
          backgroundColor: "#6d60f8",
        }}
        color="primary"
      >
        <Toolbar>
          <Container maxWidth="lg" sx={{ marginBottom: "7px" }}>
            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="center"
            >
              <div className="brandName">
                <img className="logo" src={logo} alt="logo" />

                <Typography
                  variant="h6"
                  component="div"
                  sx={{ fontWeight: "600" }}
                >
                  User Management System
                </Typography>
              </div>
              <Box>
                <Button to="/" color="inherit">
                  Home
                </Button>
                <Button color="inherit">About</Button>
                <Button color="inherit">Profile</Button>
              </Box>
            </Box>
          </Container>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Header;

<Typography variant="h4" gutterBottom></Typography>;
