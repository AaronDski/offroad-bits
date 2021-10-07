import { useState } from "react";
import { TextField } from "@material-ui/core";
import Button from "@mui/material/Button";
import * as React from "react";
import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Input from "@mui/material/Input";
import InputAdornment from "@mui/material/InputAdornment";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import EditForm from "./EditForm";
import ImageUpload from "./ImageUpload";
import AddMessage from "./AddMessage";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";

function Account({
  user,
  handleAddPart,
  full,
  removeListing,
  editListing,
  editPartForm,
  setEditPartForm,
  handleAddMessage,
  onMessDelete,
}) {
  const renderAcc = user ? (
    <p>Hello {user.username}</p>
  ) : (
    <p>Please login or sign up to view account</p>
  );

  const [title, setTitle] = useState("");
  const [price, setPrice] = useState(0);
  const [quantity, setQuantity] = useState(0);
  const [year, setYear] = useState(0);
  const [make, setMake] = useState("");
  const [model, setModel] = useState("");
  const [description, setDescription] = useState("");
  const [imageURL, setImageURL] = useState("");

  function handleImageUpload(e, cloudImage) {
    e.preventDefault();
    console.log(cloudImage);
    const formData = new FormData();
    formData.append("file", cloudImage);
    formData.append("upload_preset", "UPLOADBITS");
    formData.append("cloud_name", "dkkvfuaso");

    fetch("https://api.cloudinary.com/v1_1/dkkvfuaso/image/upload", {
      method: "POST",
      body: formData,
    })
      .then((r) => r.json())
      .then((data) => setImageURL(data.url));

    console.log(imageURL);
  }

  const userListings = full.filter((listing) => listing.user.id === user.id);

  const disListings =
    userListings === []
      ? null
      : userListings.map((list) => {
          console.log(list);
          return (
            <div key={list.id}>
              <Card sx={{ minWidth: 275, maxWidth: 400 }}>
                <CardContent>
                  <Typography
                    sx={{ fontSize: 14 }}
                    color="text.secondary"
                    gutterBottom
                  >
                    {list.title}
                  </Typography>
                  <Typography variant="h5" component="div">
                    ${list.price}
                  </Typography>

                  <Typography variant="body2">
                    {list.year}, {list.make}, {list.model}
                    <br />
                    {list.description}
                  </Typography>
                  <Typography variant="body2">
                    {list.part_messages.map((message) => {
                      return (
                        <>
                          <Typography variant="body2">
                            From:{message.username}
                            <br />
                            {message.subject}
                            <br />
                            {message.content}
                          </Typography>
                          {message.user_id !== user.id ? null : (
                            <Button
                              size="small"
                              onClick={() => onMessDelete(message.id)}
                            >
                              <DeleteForeverIcon />
                            </Button>
                          )}
                        </>
                      );
                    })}
                  </Typography>
                </CardContent>
                <CardActions>
                  <EditForm
                    list={list}
                    editPartForm={editPartForm}
                    editListing={editListing}
                    user={user}
                    setEditPartForm={setEditPartForm}
                  />
                </CardActions>
                <CardActions>
                  <Button
                    size="small"
                    variant="outlined"
                    onClick={() => removeListing(list.id)}
                  >
                    Remove Listing
                  </Button>
                </CardActions>
                <AddMessage
                  user={user}
                  list={list}
                  handleAddMessage={handleAddMessage}
                />
              </Card>
            </div>
          );
        });

  console.log(imageURL);
  return (
    <div>
      {renderAcc}

      <ImageUpload handleImageUpload={handleImageUpload} />

      <Box
        component="form"
        onSubmit={(e) =>
          handleAddPart(
            e,
            user,
            title,
            price,
            quantity,
            year,
            make,
            model,
            imageURL,
            description
          )
        }
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
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <FormControl sx={{ width: "25ch" }} variant="standard">
            <InputLabel htmlFor="standard-adornment-amount">
              Asking Price
            </InputLabel>
            <Input
              id="standard-adornment-amount"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              startAdornment={
                <InputAdornment position="start">$</InputAdornment>
              }
            />
          </FormControl>
          <TextField
            id="outlined-password-input"
            label="Quantity"
            type="quantity"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
          />
          <TextField
            id="outlined-password-input"
            label="Year"
            type="Year"
            value={year}
            onChange={(e) => setYear(e.target.value)}
          />
          <TextField
            id="outlined-password-input"
            label="Make"
            type="Make"
            value={make}
            onChange={(e) => setMake(e.target.value)}
          />
          <TextField
            id="outlined-password-input"
            label="Model"
            type="Model"
            value={model}
            onChange={(e) => setModel(e.target.value)}
          />

          <TextField
            id="standard-multiline-static"
            label="Description"
            multiline
            rows={5}
            value={description}
            variant="standard"
            onChange={(e) => setDescription(e.target.value)}
          />

          <Button variant="text" color={"primary"} size="small" type="submit">
            Add Listing
          </Button>
          {disListings}
        </div>
      </Box>
    </div>
  );
}

export default Account;
