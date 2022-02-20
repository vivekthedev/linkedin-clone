import { Checkbox } from "@material-ui/core";
import { IconButton } from "@mui/material";
import StarBorderOutlinedIcon from "@mui/icons-material/StarBorderOutlined";
import LabelImportantOutlinedIcon from "@mui/icons-material/LabelImportantOutlined";
import "./EmailRow.css";
import React from "react";
import { useHistory } from "react-router-dom";

function EmailRow({ id, title, subject, description, time }) {
  const history = useHistory();
  return (
    <div className='emailRow' onClick={() => history.push("/mail")}>
      <div className='emailRow__options'>
        <Checkbox />
        <IconButton>
          <StarBorderOutlinedIcon />
        </IconButton>

        <IconButton>
          <LabelImportantOutlinedIcon />
        </IconButton>
      </div>
      <h3 className='emailRow__title'>{title}</h3>
      <div className='emailRow__message'>
        <h4>{subject}</h4>
        <h4 className='emailRow__description'>{description}</h4>
      </div>
      <p className='emailRow__time'>{time}1</p>
    </div>
  );
}

export default EmailRow;
