import React from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import AssignmentIcon from "@material-ui/icons/Assignment";
import AssignmentIndIcon from '@material-ui/icons/AssignmentInd';
import { Link } from "react-router-dom"


const ListItem1 = () => {
  return (

    <div>
      <Link to='/'>
        <ListItem button>
          <ListItemIcon>
            <AssignmentIndIcon />
          </ListItemIcon>
          <ListItemText primary="Departments" />
        </ListItem>
      </Link>

      <Link to='/Report'>
        <ListItem button>
          <ListItemIcon>
            <AssignmentIcon />
          </ListItemIcon>
          <ListItemText primary="Human Resources" />
        </ListItem>
      </Link>




    </div>
  );


}

export default ListItem1;