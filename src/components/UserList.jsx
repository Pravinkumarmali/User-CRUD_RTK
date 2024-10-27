import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteUser } from "../features/users/userSlice";
import UpdateUser from "./UpdateUser";

import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Button,
  Paper,
  TablePagination,
  TableSortLabel,
  TextField,
  Box,
  Typography,
} from "@mui/material";

const UserList = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users.users);

  // Local states for pagination, sorting, and search
  const [searchQuery, setSearchQuery] = useState("");
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [order, setOrder] = useState("asc");
  const [orderBy, setOrderBy] = useState("name");

  // Handle pagination
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  // Sorting function
  const handleRequestSort = (property) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  const sortUsers = (users, comparator) => {
    return users.sort(comparator);
  };

  const getComparator = (order, orderBy) => {
    return order === "desc"
      ? (a, b) => (b[orderBy] < a[orderBy] ? -1 : 1)
      : (a, b) => (a[orderBy] < b[orderBy] ? -1 : 1);
  };

  // Filtering users based on search query
  const filteredUsers = users.filter(
    (user) =>
      user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      user.email.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const sortedAndFilteredUsers = sortUsers(
    filteredUsers,
    getComparator(order, orderBy)
  );

  const handleDelete = (id) => {
    dispatch(deleteUser(id));
  };

  return (
    <>
      <Typography variant="h4">User Data List</Typography>
      <Box mb={2}>
        <TextField
          label="Search"
          variant="outlined"
          fullWidth
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </Box>

      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              {["Name", "Email", "Age", "Phone", "Address", "DOB"].map(
                (field) => (
                  <TableCell key={field}>
                    <TableSortLabel
                      active={orderBy === field}
                      direction={orderBy === field ? order : "asc"}
                      onClick={() => handleRequestSort(field)}
                    >
                      {field.charAt(0).toUpperCase() + field.slice(1)}
                    </TableSortLabel>
                  </TableCell>
                )
              )}
              <TableCell>
                <b>Actions</b>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {sortedAndFilteredUsers
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((user) => (
                <TableRow key={user.id}>
                  <TableCell>{user.name}</TableCell>
                  <TableCell>{user.email}</TableCell>
                  <TableCell>{user.age}</TableCell>
                  <TableCell>{user.phone}</TableCell>
                  <TableCell>{user.address}</TableCell>
                  <TableCell>
                    {new Date(user.dob).toLocaleDateString()}
                  </TableCell>
                  <TableCell>
                    <UpdateUser user={user} />
                    <Button
                      variant="contained"
                      onClick={() => handleDelete(user.id)}
                      sx={{
                        backgroundColor: "#DC143C", // Custom green color
                        "&:hover": {
                          backgroundColor: "#8B0000", // Darker shade on hover
                        },
                      }}
                    >
                      Delete
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>

      {/* Pagination */}
      <TablePagination
        component="div"
        count={filteredUsers.length}
        page={page}
        onPageChange={handleChangePage}
        rowsPerPage={rowsPerPage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </>
  );
};

export default UserList;

// import React from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { deleteUser } from "../redux/userSlice";
// import UpdateUser from "./UpdateUser";
// import {
//   Table,
//   TableBody,
//   TableCell,
//   TableContainer,
//   TableHead,
//   TableRow,
//   Button,
//   Paper,
// } from "@mui/material";

// const UserList = () => {
//   const dispatch = useDispatch();
//   const users = useSelector((state) => state.users.users);

//   const handleDelete = (id) => {
//     dispatch(deleteUser(id));
//   };

//   return (
//     <TableContainer component={Paper}>
//       <Table>
//         <TableHead>
//           <TableRow>
//             <TableCell>Name</TableCell>
//             <TableCell>Email</TableCell>
//             <TableCell>Age</TableCell>
//             <TableCell>Phone</TableCell>
//             <TableCell>Address</TableCell>
//             <TableCell>Date of Birth</TableCell>
//             <TableCell>Actions</TableCell>
//           </TableRow>
//         </TableHead>
//         <TableBody>
//           {users.map((user) => (
//             <TableRow key={user.id}>
//               <TableCell>{user.name}</TableCell>
//               <TableCell>{user.email}</TableCell>
//               <TableCell>{user.age}</TableCell>
//               <TableCell>{user.phone}</TableCell>
//               <TableCell>{user.address}</TableCell>
//               <TableCell>{new Date(user.dob).toLocaleDateString()}</TableCell>
//               <TableCell>
//                 <Button
//                   variant="contained"
//                   color="secondary"
//                   onClick={() => handleDelete(user.id)}
//                 >
//                   Delete
//                 </Button>
//                 <UpdateUser user={user} />
//               </TableCell>
//             </TableRow>
//           ))}
//         </TableBody>
//       </Table>
//     </TableContainer>
//   );
// };

// export default UserList;
