import { useState } from "react";
// import { useHistory } from "react-router-dom";
import { TextField } from "@material-ui/core";
import Button from "@mui/material/Button";
import * as React from "react";
import Box from "@mui/material/Box";
// import Grid from '@mui/material/Grid';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Input from '@mui/material/Input';
import InputAdornment from '@mui/material/InputAdornment';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { NavLink } from 'react-router-dom'


function EditForm({list, editPartForm, editListing, user,}) {
    const [editForm, setEditForm] = useState({
        user_id: user.id,
        title: list.title,
        price: list.price,
        quantity: list.quantity,
        year: list.year,
        make: list.make,
        model: list.model,
        image: list.image,
        description: list.description
    })
    const [open, setOpen] = React.useState(false);
   

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    function onChangeForm(e) {
        setEditForm({
            ...editForm,
            [e.target.name]: e.target.value
        })
        // console.log(setEditForm)
    }

    return(
        <Box
        component="form"
        onSubmit={(e) => editListing(e, list, user, editForm)}
        style={{ display: "flex", flexDirection: "column" }}
        >
            <div style={{ display: "flex", flexDirection: "column" }}>
            <Button variant="outlined" onClick={handleClickOpen}  >Edit Listing
            </Button>
            <Dialog open={open} onClose={handleClose}
            style={{ display: "flex", flexDirection: "column" }}
            >
                <DialogTitle>Edit</DialogTitle>
                <DialogContent>
                <DialogContentText>
                   
                </DialogContentText>
                
                <TextField
                name="title"
                label="Title"
                type="title"
                value={editForm.title}
                onChange={onChangeForm}
                />
            <FormControl  sx={{ width: '25ch' }} variant="standard">
                <InputLabel htmlFor="standard-adornment-amount">Asking Price</InputLabel>
                <Input
                name="price"
                value={editForm.price}
                defaultValue={editPartForm.price}
                onChange={onChangeForm}
                startAdornment={<InputAdornment position="start">$</InputAdornment>}
                />
            </FormControl>
                <TextField
                name="quantity"
                label="Quantity"
                type="quantity"
                value={editForm.quantity}
                onChange={onChangeForm}
                />
                <TextField
                name="year"
                label="Year"
                type="Year"
                value={editForm.year}
                onChange={onChangeForm}
                />
                <TextField
                name="make"
                label="Make"
                type="Make"
                value={editForm.make}
                onChange={onChangeForm}
                />
                <TextField
                name="model"
                label="Model"
                type="Model"
                value={editForm.model}
                onChange={onChangeForm}
                />
                <TextField
                name="image"
                label="Image Url"
                type="text"
                value={editForm.image}
                onChange={onChangeForm}
                />
                <TextField
                name="description"
                label="Description"
                multiline
                rows={5}
                value={editForm.description}
                onChange={onChangeForm}
                />
                </DialogContent>
                <DialogActions>
                <Button onClick={handleClose}>Cancel</Button>
                <Button type='submit' component={NavLink} to='/watchlist' onClick={(e) => editListing(e, list, user, editForm)}>Submit</Button>
                </DialogActions>
            </Dialog>
            </div>
            </Box>
    )


}


export default EditForm