import { useState } from "react";
import { useHistory } from "react-router-dom";
import { TextField } from "@material-ui/core";
import Button from "@mui/material/Button";
import * as React from "react";
import Box from "@mui/material/Box";
import Grid from '@mui/material/Grid';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Input from '@mui/material/Input';
import InputAdornment from '@mui/material/InputAdornment';


function Account({user, handleAddPart}) {
    // console.log(user)

    const renderAcc = user  ? (<p>Hello {user.username}</p>) : (<p>Please login or sign up to view account</p>)

    const history = useHistory();
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState("");
    const [quantity, setQuantity] = useState("");
    const [year, setYear] = useState("");
    const [make, setMake] = useState("");
    const [model, setModel] = useState("");
    const [image, setImage] = useState("");
    const [description, setDescription] = useState("");

    
    


    return (
    <>
    
    {renderAcc}
    
    
    
            <Box
            component="form"
            onSubmit={() => handleAddPart(user, title, price, quantity, year, make, model,  image, description)}
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
                label="Title"
                type="title"
                onChange={(e) => setTitle(e.target.value)}
                />
               <FormControl  sx={{ width: '25ch' }} variant="standard">
                <InputLabel htmlFor="standard-adornment-amount">Asking Price</InputLabel>
                <Input
                id="standard-adornment-amount"
                onChange={(e) => setPrice(e.target.value)}
                startAdornment={<InputAdornment position="start">$</InputAdornment>}
                />
                </FormControl>
                <TextField
                id="outlined-password-input"
                label="Quantity"
                type="quantity"
                onChange={(e) => setQuantity(e.target.value)}
                />
                <TextField
                id="outlined-password-input"
                label="Year"
                type="Year"
                onChange={(e) => setYear(e.target.value)}
                />
                <TextField
                id="outlined-password-input"
                label="Make"
                type="Make"
                onChange={(e) => setMake(e.target.value)}
                />
                <TextField
                id="outlined-password-input"
                label="Model"
                type="Model"
                onChange={(e) => setModel(e.target.value)}
                />
                <TextField
                id="outlined-password-input"
                label="Image Url"
                type="Model"
                onChange={(e) => setImage(e.target.value)}
                />
                <TextField
                id="standard-multiline-static"
                label="Description"
                multiline
                rows={5}
                variant="standard"
                onChange={(e) => setDescription(e.target.value)}

                />
                <Button
                    variant="text"
                    color={"primary"}
                    size="small"
                    type='submit'
                >
                    Add Listing
                </Button>
            </div>
            </Box>
  
    
    
    </>
    
    );



}

export default Account