import React from "react";
import G from "../components/Grid";
import { Button, TextField } from "@material-ui/core";

const Add = () => {
  return (
    <div style={{ paddingTop: "5%" }}>
      <G col={1} gap={30}>
        <div  className="textfield_add">
          <div style={{ marginBottom: "60px" }}>
            <TextField
              className="TextField_style"
              id="outlined-basic"
              label="Name"
              variant="outlined"
            />
          </div>
          <div style={{ marginBottom: "60px" }}>
            <TextField
             
              className="TextField_style"
              id="outlined-basic"
              label="ID"
              variant="outlined"
              InputLabelProps={{ style: { fontSize: 10 } }}
            />
          </div>
          <div style={{ marginBottom: "60px" }}>
            <TextField
              className="TextField_style"
              id="outlined-basic"
              label="Describe"
              variant="outlined"
             
            />
          </div>
        </div>
      </G>

      <div style={{ marginTop: "40px", marginLeft: "20px" }}>
        <Button style={{ backgroundColor: "#00afff" }}>Add</Button>
      </div>
    </div>
  );
};

export default Add;
