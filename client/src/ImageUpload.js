import Box from "@mui/material/Box";
import * as React from "react";
import { Button, TextField } from "@material-ui/core";
import { useState } from "react";

function ImageUpload({handleImageUpload,  }){
    const [cloudImage, setCloudImage] = useState(null)


return(
    <Box
    component="form"
    onSubmit={(e) => handleImageUpload(e, cloudImage )}
    sx={{
        "& .MuiTextField-root": { m: 1, width: "25ch" },
        "& .MuiButton-root": { m: 1, width: "15ch" },
    }}
    style={{ marginLeft: "40vw" }}
    noValidate
    autoComplete="off"
    >
        <TextField
        id="upload"
        label="Image"
        
        type="file"
        defaultValue={cloudImage}
        accept='image/*'
        onChange={(e) => setCloudImage(e.target.files[0])}
        
        />
        <br/>
     <Button variant="outlined" type='submit'> Submit</Button>
    </Box>
)

}

export default ImageUpload