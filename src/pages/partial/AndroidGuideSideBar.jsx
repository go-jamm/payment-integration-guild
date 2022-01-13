import React, { useEffect, useContext } from "react";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { makeStyles } from "@mui/styles";
import { useLocation } from "react-router-dom";
import { MenuContext } from "../../context/MenuContext";
import { ActiveMenuContext } from "../../context/ActiveMenuContext";

const useStyles = makeStyles((theme) => ({
  menuItem: {
    color: "#212F3D",
    padding: "2px 16px !important",

    "& span": {
      fontSize: "16px",
      [theme.breakpoints.down("xl")]: {
        fontSize: "14px",
      },
      [theme.breakpoints.down("md")]: {
        fontSize: "12px",
      },
    },
  },
  menuItemActive: {
    color: "rgba(15, 188, 249,1.0) !important",
  },
  menuSubItem: {
    color: "#4D5656",

    padding: "2px 32px !important",
    "& span": {
      fontSize: "14px",
      [theme.breakpoints.down("xl")]: {
        fontSize: "12px",
      },
      [theme.breakpoints.down("md")]: {
        fontSize: "10px",
      },
    },
    ["& .MuiListItemIcon-root"]: {
      minWidth: "24px",
    },
    ["& .MuiSvgIcon-root"]: {
      color: "#4D5656",
      fontSize: "12px",
      [theme.breakpoints.down("md")]: {
        fontSize: "10px",
      },
    },
  },
  menuSubItem2: {
    color: "#4D5656",

    padding: "2px 32px 2px 50px !important",
    "& span": {
      fontSize: "14px",
      [theme.breakpoints.down("xl")]: {
        fontSize: "12px",
      },
      [theme.breakpoints.down("md")]: {
        fontSize: "10px",
      },
    },
    ["& .MuiListItemIcon-root"]: {
      minWidth: "24px",
    },
    ["& .MuiSvgIcon-root"]: {
      color: "#4D5656",
      fontSize: "12px",
      [theme.breakpoints.down("md")]: {
        fontSize: "10px",
      },
    },
  },
  menuSubItemActive: {
    color: "rgba(15, 188, 249,1.0) !important",

    ["& .MuiSvgIcon-root"]: {
      color: "rgba(15, 188, 249,1.0) !important",
    },
  },
}));

export default function AndroidGuideSideBar() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);

  const { addList } = useContext(MenuContext);
  const { fastPayActiveId } = useContext(ActiveMenuContext);
  // const search = useLocation().search;
  // const topic = new URLSearchParams(search).get("topic");
  const topic = fastPayActiveId.id; 

  const fnActive = (id) => {
    addList({ goTo: id });
  };
  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <List>
      <ListItemButton
        disableRipple={true}
        className={`${classes.menuItem} ${
          topic === "scaffolding-provided" || topic === null
            ? classes.menuItemActive
            : null
        }`}
        onClick={() => fnActive("scaffolding-provided")}
      >
        <ListItemText primary="Scaffolding Provided" />
      </ListItemButton>
      <ListItemButton
        disableRipple={true}
        className={`${classes.menuItem} ${
          topic === "steps" ? classes.menuItemActive : null
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
              topic === "step-1" ? classes.menuSubItemActive : null
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
              topic === "step-2" ? classes.menuSubItemActive : null
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
              topic === "step-3" ? classes.menuSubItemActive : null
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
