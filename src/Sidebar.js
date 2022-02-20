import { Button, IconButton } from "@mui/material";
import React from "react";
import "./Sidebar.css";
import AddIcon from "@mui/icons-material/Add";
import SidebarOption from "./SidebarOption";
import InboxIcon from "@mui/icons-material/Inbox";
import StarRateIcon from "@mui/icons-material/StarRate";
import AccessAlarmIcon from "@mui/icons-material/AccessAlarm";
import LabelImportantIcon from "@mui/icons-material/LabelImportant";
import NoteIcon from "@mui/icons-material/Note";
import NearMeIcon from "@mui/icons-material/NearMe";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import PersonIcon from "@mui/icons-material/Person";
import DuoIcon from "@mui/icons-material/Duo";
import PhoneIcon from "@mui/icons-material/Phone";

function Sidebar() {
  return (
    <div className='sidebar'>
      <Button
        className='sidebar__compose'
        startIcon={<AddIcon fontSize='large' />}>
        Compose
      </Button>

      <SidebarOption
        Icon={InboxIcon}
        title='Inbox'
        number={54}
        selected={false}
      />

      <SidebarOption
        Icon={StarRateIcon}
        title='Starred'
        number={54}
        selected={true}
      />

      <SidebarOption
        Icon={AccessAlarmIcon}
        title='Snnozed'
        number={54}
        selected={false}
      />

      <SidebarOption
        Icon={LabelImportantIcon}
        title='Important'
        number={54}
        selected={false}
      />

      <SidebarOption
        Icon={NoteIcon}
        title='Drafts'
        number={54}
        selected={false}
      />
      <SidebarOption
        Icon={NearMeIcon}
        title='Sent'
        number={54}
        selected={false}
      />
      <SidebarOption
        Icon={ExpandMoreIcon}
        title='More'
        number={""}
        selected={false}
      />
      <div className='sidebar__footer'>
        <IconButton>
          <PersonIcon />
        </IconButton>
        <IconButton>
          <DuoIcon />
        </IconButton>
        <IconButton>
          <PhoneIcon />
        </IconButton>
      </div>
    </div>
  );
}

export default Sidebar;
