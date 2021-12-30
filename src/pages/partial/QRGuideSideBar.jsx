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

export default function QRGuideSideBar({ active, setClickedOn }) {
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
          active === "synopsis" ? classes.menuItemActive : null
        }`}
        onClick={() => fnActive("synopsis")}
      >
        <ListItemText primary="Synopsis" />
      </ListItemButton>
      <ListItemButton
        disableRipple={true}
        className={`${classes.menuItem} ${
          active === "apis" ? classes.menuItemActive : null
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
              active === "qr-generation-api" ? classes.menuSubItemActive : null
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
              active === "payment-payment-api"
                ? classes.menuSubItemActive
                : null
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
                  active === "grab-the-notification"
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
            </List>
          </Collapse>
          <ListItemButton
            disableRipple={true}
            sx={{ pl: 4 }}
            className={`${classes.menuSubItem} ${
              active === "refund-a-payment" ? classes.menuSubItemActive : null
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
          active === "test-credentials" ? classes.menuItemActive : null
        }`}
        onClick={() => fnActive("test-credentials")}
      >
        <ListItemText primary="Test Credentials" />
      </ListItemButton>
      <ListItemButton
        disableRipple={true}
        className={`${classes.menuItem} ${
          active === "live-credentials" ? classes.menuItemActive : null
        }`}
        onClick={() => fnActive("live-credentials")}
      >
        <ListItemText primary="Live Credentials" />
      </ListItemButton>
      <ListItemButton
        disableRipple={true}
        className={`${classes.menuItem} ${
          active === "swagger-documentation" ? classes.menuItemActive : null
        }`}
        onClick={() => fnActive("swagger-documentation")}
      >
        <ListItemText primary="Swagger Documentation" />
      </ListItemButton>
    </List>
  );
}
