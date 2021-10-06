import { useState } from "react";
import { TextField } from "@material-ui/core";
import Button from "@mui/material/Button";
import * as React from "react";
import Box from "@mui/material/Box";
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

function AddMessage ({ handleAddMessage, user, list }) {
 const [messContent, setMessContent] = useState('')
 const [messSub, setMessSub] = useState('')
 console.log(messContent)

 const [open, setOpen] = React.useState(false);
   

 const handleClickOpen = () => {
     setOpen(true);
 };

 const handleClose = () => {
     setOpen(false);
 };

    return(
        <>
        <Box
        component="form"
        onSubmit={(e) => handleAddMessage(e, user, list, messContent, messSub)}
        >
            <div style={{ display: "flex", flexDirection: "column" }}>
            <Button variant="outlined" onClick={handleClickOpen}>Send A Message
            </Button>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>Create Message</DialogTitle>
                <DialogContent>
                <DialogContentText>
                   
                </DialogContentText>
                
                <TextField
                name="subject"
                label="Subject"
                type="text"
                value={messSub}
                onChange={(e) => setMessSub(e.target.value) }
                />
                <TextField
                name="content"
                label="Message"
                type="text"
                multiline
                rows={5}
                value={messContent}
                onChange={(e) => setMessContent(e.target.value) }
                />
            
                </DialogContent>
                <DialogActions>
                <Button onClick={handleClose}>Cancel</Button>
                <Button type='submit' onClick={() => console.log('add mess')} >Send</Button>
                </DialogActions>
            </Dialog>
            </div>
            </Box>
        
        
        </>
    )
}


export default AddMessage