import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addUser } from "../features/users/userSlice";
import { Button, TextField, Box } from "@mui/material";

const AddUser = () => {
  const dispatch = useDispatch();
  const [newUser, setNewUser] = useState({
    id: Math.random(), // For simplicity
    name: "",
    email: "",
    age: "",
    phone: "",
    address: "",
    dob: "",
  });

  const handleChange = (e) => {
    setNewUser({
      ...newUser,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addUser(newUser));
    setNewUser({
      id: Math.random(),
      name: "",
      email: "",
      age: "",
      phone: "",
      address: "",
      dob: "",
    });
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ mb: 4 }}>
      <TextField
        name="name"
        label="Name"
        value={newUser.name}
        onChange={handleChange}
        fullWidth
        margin="normal"
      />
      <TextField
        name="email"
        label="Email"
        value={newUser.email}
        onChange={handleChange}
        fullWidth
        margin="normal"
      />
      <TextField
        name="age"
        label="Age"
        value={newUser.age}
        onChange={handleChange}
        fullWidth
        margin="normal"
      />
      <TextField
        name="phone"
        label="Phone"
        value={newUser.phone}
        onChange={handleChange}
        fullWidth
        margin="normal"
      />
      <TextField
        name="address"
        label="Address"
        value={newUser.address}
        onChange={handleChange}
        fullWidth
        margin="normal"
      />
      <TextField
        name="dob"
        label="Date of Birth"
        value={newUser.dob}
        onChange={handleChange}
        fullWidth
        margin="normal"
      />
      <Button
        type="submit"
        variant="contained"
        // color="primary"
        sx={{
          backgroundColor: "#6d60f8", // Custom green color
          "&:hover": {
            backgroundColor: "#4B0082", // Darker shade on hover
          },
        }}
      >
        Add User
      </Button>
    </Box>
  );
};

export default AddUser;
