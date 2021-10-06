// import useStyles from './Styles'
import { useState } from "react";
import { useHistory } from "react-router-dom";
import { TextField } from "@material-ui/core";
import Button from "@mui/material/Button";
import * as React from "react";
import Box from "@mui/material/Box";

function Signup({ setUser }) {
  const history = useHistory();
  const [login, setLogin] = useState(false);
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const handleClick = () => {
    setLogin((login) => !login);
    console.log("clicked");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("submited");

    const userCred = {
      user_name: userName,
      password: password,
      name: name,
    };

    if (login) {
      fetch(`/login`, {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userCred),
      })
        .then((r) => r.json())
        .then((data) => {
          if (data.error === undefined) {
            setUser(data);
            history.push("/account");
            console.log(data);
          } else {
            alert(data.error);
          }
        });
    } else {
      fetch(`/users`, {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userCred),
      })
        .then((r) => r.json())
        .then((data) => {
          if (data.error === undefined) {
            setUser(data);
            history.push("/account");
          } else {
            alert(data.error);
          }
        });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <Box
        component="form"
        sx={{
          "& .MuiTextField-root": { m: 1, width: "25ch" },
          "& .MuiButton-root": { m: 1, width: "15ch" },
        }}
        style={{ marginLeft: "40vw" }}
        noValidate
        autoComplete="off"
      >
        <div style={{ display: "flex", flexDirection: "column" }}>
          <TextField
            id="outlined-password-input"
            label="UserName"
            type="UserName"
            onChange={(e) => setUserName(e.target.value)}
          />
          <TextField
            id="outlined-password-input"
            label="Name"
            type="name"
            onChange={(e) => setName(e.target.value)}
          />
          <TextField
            id="outlined-password-input"
            label="Password"
            type="password"
            autoComplete="current-password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button variant="outlined" onClick={handleClick}>
            Login
          </Button>
        </div>
      </Box>
    </form>
  );
}

export default Signup;
