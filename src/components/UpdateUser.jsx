import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { updateUser } from "../features/users/userSlice";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  TextField,
} from "@mui/material";

const UpdateUser = ({ user }) => {
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const [updatedUser, setUpdatedUser] = useState(user);

  const handleChange = (e) => {
    setUpdatedUser({
      ...updatedUser,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = () => {
    dispatch(updateUser(updatedUser));
    setOpen(false);
  };

  return (
    <>
      <Button
        onClick={() => setOpen(true)}
        variant="outlined"
        sx={{
          mr: 2,
          color: "white",
          backgroundColor: "#2E8B57", // Custom green color
          "&:hover": {
            backgroundColor: "#006400", // Darker shade on hover
          },
        }}
      >
        Update
      </Button>
      <Dialog open={open} onClose={() => setOpen(false)}>
        <DialogTitle>Update User</DialogTitle>
        <DialogContent>
          <TextField
            name="name"
            label="Name"
            value={updatedUser.name}
            onChange={handleChange}
            fullWidth
            margin="normal"
          />
          <TextField
            name="email"
            label="Email"
            value={updatedUser.email}
            onChange={handleChange}
            fullWidth
            margin="normal"
          />
          <TextField
            name="age"
            label="Age"
            value={updatedUser.age}
            onChange={handleChange}
            fullWidth
            margin="normal"
          />
          <TextField
            name="phone"
            label="Phone"
            value={updatedUser.phone}
            onChange={handleChange}
            fullWidth
            margin="normal"
          />
          <TextField
            name="address"
            label="Address"
            value={updatedUser.address}
            onChange={handleChange}
            fullWidth
            margin="normal"
          />
          <TextField
            name="dob"
            label="Date of Birth"
            value={updatedUser.dob}
            onChange={handleChange}
            fullWidth
            margin="normal"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpen(false)}>Cancel</Button>
          <Button onClick={handleSubmit} variant="contained" color="primary">
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default UpdateUser;
