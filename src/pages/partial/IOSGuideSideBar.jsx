import React, { useState, useEffect } from "react";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  menuItem: {
    color: "#212F3D",
    padding: "2px 16px !important",

    "& span": {
      fontSize: "16px",
    },
  },
  menuItemActive: {
    // color: "#FC2861",
    color: "rgba(15, 188, 249,1.0) !important",
  },
  menuSubItem: {
    color: "#4D5656",

    padding: "2px 32px !important",
    "& span": {
      fontSize: "14px",
    },
    ["& .MuiListItemIcon-root"]: {
      minWidth: "24px",
    },
    ["& .MuiSvgIcon-root"]: {
      color: "#4D5656",
      fontSize: "12px",
    },
  },
  menuSubItem2: {
    color: "#4D5656",

    padding: "2px 32px 2px 50px !important",
    "& span": {
      fontSize: "14px",
    },
    ["& .MuiListItemIcon-root"]: {
      minWidth: "24px",
    },
    ["& .MuiSvgIcon-root"]: {
      color: "#4D5656",
      fontSize: "12px",
    },
  },
  menuSubItemActive: {
    color: "rgba(15, 188, 249,1.0) !important",

    ["& .MuiSvgIcon-root"]: {
      color: "rgba(15, 188, 249,1.0) !important",
    },
  },
});

export default function IOSGuideSideBar({
  active,

  setClickedOn,
}) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);

  const fnActive = (id) => {
    setClickedOn(id);
  };
  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <List>
      <ListItemButton
        disableRipple={true}
        className={`${classes.menuItem} ${
          active === "scaffolding-provided" ? classes.menuItemActive : null
        }`}
        onClick={() => fnActive("scaffolding-provided")}
      >
        <ListItemText primary="Scaffolding Provided" />
      </ListItemButton>
      <ListItemButton
        disableRipple={true}
        className={`${classes.menuItem} ${
          active === "steps" ? classes.menuItemActive : null
        }`}
        onClick={() => fnActive("steps")}
      >
        <ListItemText primary="Steps" />
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton
            disableRipple={true}
            sx={{ pl: 4 }}
            className={`${classes.menuSubItem} ${
              active === "step-1"
                ? classes.menuSubItemActive
                : null
            }`}
            onClick={() => fnActive("step-1")}
          >
            <ListItemIcon>
              <ArrowForwardIosIcon />
            </ListItemIcon>
            <ListItemText primary="Step-1" />
          </ListItemButton>
          <ListItemButton
            disableRipple={true}
            sx={{ pl: 4 }}
            className={`${classes.menuSubItem} ${
              active === "step-2"
                ? classes.menuSubItemActive
                : null
            }`}
            onClick={() => fnActive("step-2")}
          >
            <ListItemIcon>
              <ArrowForwardIosIcon />
            </ListItemIcon>
            <ListItemText primary="Step-2" />
          </ListItemButton>
          <ListItemButton
            disableRipple={true}
            sx={{ pl: 4 }}
            className={`${classes.menuSubItem} ${
              active === "step-3"
                ? classes.menuSubItemActive
                : null
            }`}
            onClick={() => fnActive("step-3")}
          >
            <ListItemIcon>
              <ArrowForwardIosIcon />
            </ListItemIcon>
            <ListItemText primary="Step-3 (Implementation)" />
          </ListItemButton>
         
         
        </List>
      </Collapse>
    </List>
  );
}
