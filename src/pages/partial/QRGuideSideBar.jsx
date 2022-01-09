import React, { useState, useEffect, useContext } from "react";
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


export default function QRGuideSideBar() {
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
          topic === "synopsis" || topic === null ? classes.menuItemActive : null
        }`}
        onClick={() => fnActive("synopsis")}
      >
        <ListItemText primary="Synopsis" />
      </ListItemButton>
      <ListItemButton
        disableRipple={true}
        className={`${classes.menuItem} ${
          topic === "apis" ? classes.menuItemActive : null
        }`}
        onClick={() => fnActive("apis")}
      >
        <ListItemText primary="APIs" />
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton
            disableRipple={true}
            sx={{ pl: 4 }}
            className={`${classes.menuSubItem} ${
              topic === "qr-generation-api" ? classes.menuSubItemActive : null
            }`}
            onClick={() => fnActive("qr-generation-api")}
          >
            <ListItemIcon>
              <ArrowForwardIosIcon />
            </ListItemIcon>
            <ListItemText primary="QR Generation API" />
          </ListItemButton>
          <ListItemButton
            disableRipple={true}
            sx={{ pl: 4 }}
            className={`${classes.menuSubItem} ${
              topic === "payment-payment-api" ? classes.menuSubItemActive : null
            }`}
            onClick={() => fnActive("payment-payment-api")}
          >
            <ListItemIcon>
              <ArrowForwardIosIcon />
            </ListItemIcon>
            <ListItemText primary="Payment Validation API" />
          </ListItemButton>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItemButton
                disableRipple={true}
                sx={{ pl: 4 }}
                className={`${classes.menuSubItem2} ${
                  topic === "grab-the-notification"
                    ? classes.menuSubItemActive
                    : null
                }`}
                onClick={() => fnActive("grab-the-notification")}
              >
                <ListItemIcon>
                  <ArrowForwardIosIcon />
                </ListItemIcon>
                <ListItemText primary="Grab The Notification" />
              </ListItemButton>
              <ListItemButton
                disableRipple={true}
                sx={{ pl: 4 }}
                className={`${classes.menuSubItem2} ${
                  topic === "validating-a-payment"
                    ? classes.menuSubItemActive
                    : null
                }`}
                onClick={() => fnActive("validating-a-payment")}
              >
                <ListItemIcon>
                  <ArrowForwardIosIcon />
                </ListItemIcon>
                <ListItemText primary="Validating A Payment" />
              </ListItemButton>
            </List>
          </Collapse>
          <ListItemButton
            disableRipple={true}
            sx={{ pl: 4 }}
            className={`${classes.menuSubItem} ${
              topic === "refund-a-payment" ? classes.menuSubItemActive : null
            }`}
            onClick={() => fnActive("refund-a-payment")}
          >
            <ListItemIcon>
              <ArrowForwardIosIcon />
            </ListItemIcon>
            <ListItemText primary="Refund A Payment" />
          </ListItemButton>
        </List>
      </Collapse>
      <ListItemButton
        disableRipple={true}
        className={`${classes.menuItem} ${
          topic === "test-credentials" ? classes.menuItemActive : null
        }`}
        onClick={() => fnActive("test-credentials")}
      >
        <ListItemText primary="Test Credentials" />
      </ListItemButton>
      <ListItemButton
        disableRipple={true}
        className={`${classes.menuItem} ${
          topic === "live-credentials" ? classes.menuItemActive : null
        }`}
        onClick={() => fnActive("live-credentials")}
      >
        <ListItemText primary="Live Credentials" />
      </ListItemButton>
      <ListItemButton
        disableRipple={true}
        className={`${classes.menuItem} ${
          topic === "swagger-documentation" ? classes.menuItemActive : null
        }`}
        onClick={() => fnActive("swagger-documentation")}
      >
        <ListItemText primary="Swagger Documentation" />
      </ListItemButton>
    </List>
  );
}
