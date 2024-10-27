import React from "react";
import { Provider } from "react-redux";
import { store } from "./app/store";
import AddUser from "./components/AddUser";
import UserList from "./components/UserList";
import { Container, Typography } from "@mui/material";
import "./App.css";
import Header from "./components/Header";

const App = () => {
  return (
    <>
      <Header />
      <br />
      <Provider store={store}>
        <Container>
          <AddUser />
          <UserList />
        </Container>
      </Provider>
    </>
  );
};

export default App;
