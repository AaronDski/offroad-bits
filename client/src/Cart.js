import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import AddMessage from "./AddMessage";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";

function Cart({ item, user, handleAddMessage, onDelete, onMessDelete }) {
  let list = item.part;
console.log(item)
  return (
    <Card key={item.id} sx={{ minWidth: 275, maxWidth: 400, marginBottom:'3vw' }}>
      <CardContent>
        <Typography sx={{ fontSize: 18 }} color="text.secondary" gutterBottom>
          {item.part.title}
        </Typography>
        <Typography variant="h5" component="div">
          ${item.part.price}
        </Typography>

        <Typography variant="body2">
          {item.part.year}, {item.part.make}, {item.part.model}
          <br />
          {item.part.description}
        </Typography>
        <Typography variant="body2">
          {!item.part.part_messages ? null :
          
          item.part.part_messages.map((message) => {
            // console.log(message)
            return (
              <>
                <Typography variant="body2">
                  From:{" "}
                  {message.user_id === user.id ? 
                     user.username
                    : message.username}
                  <br />
                  Subject: {message.subject}
                  <br />
                  Message: {message.content}
                </Typography>
                {message.user_id !== user.id ? null : (
                  <Button size="small" onClick={() => onMessDelete(message.id)}>
                    <DeleteForeverIcon />
                  </Button>
                )}
              </>
            );
          })}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={() => onDelete(item.id)}>
          Remove From Watchlist
        </Button>
        <AddMessage
          user={user}
          list={list}
          handleAddMessage={handleAddMessage}
        />
      </CardActions>
    </Card>
  );
}

export default Cart;
