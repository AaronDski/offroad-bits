// import useStyles from './Styles'
import { useState } from "react";
import { useHistory } from "react-router-dom";
import { TextField } from "@material-ui/core";
import Button from "@mui/material/Button";
import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

function Login({ setUser, onLogin }) {
  const history = useHistory();
  const [login, setLogin] = useState(true);
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const handleClick = () => {
    setLogin((login) => !login);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const userCred = {
      username: userName,
      password: password,
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
    <Box
      component="form"
      onSubmit={(e) => handleSubmit(e)}
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
          label="Password"
          type="password"
          autoComplete="current-password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <Grid item>
          <Button
            variant="contained"
            color={login ? "primary" : "secondary"}
            type="submit"
          >
            {login ? "Log In" : "Sign Up"}
          </Button>
        </Grid>
        <Grid item>
          {login ? "No account?" : "Already have an account?"}
          <Button
            variant="text"
            color={login ? "secondary" : "primary"}
            size="small"
            onClick={handleClick}
          >
            {login ? "Sign Up" : "Log In"}
          </Button>
        </Grid>{" "}
      </div>
    </Box>
  );
}

export default Login;
