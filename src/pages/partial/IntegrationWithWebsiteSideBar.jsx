import React, { useState, useEffect } from "react";
import ListSubheader from "@mui/material/ListSubheader";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import DraftsIcon from "@mui/icons-material/Drafts";
import SendIcon from "@mui/icons-material/Send";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import CircleIcon from "@mui/icons-material/Circle";

import DoubleArrowIcon from "@mui/icons-material/DoubleArrow";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import SquareIcon from "@mui/icons-material/Square";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  menuItem: {
    color: "#212F3D",
    padding: "5px 16px",
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

    padding: "0px 32px",
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

export default function IntegrationWithWebsiteSideBar({
  active,
  setActive,
  clickedOn,
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
    <List
    //   sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
    //   component="nav"
    //   aria-labelledby="nested-list-subheader"
    //   subheader={
    //     <ListSubheader component="div" id="nested-list-subheader">
    //       Nested List Items
    //     </ListSubheader>
    //   }
    >
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
          active === "how-it-works" ? classes.menuItemActive : null
        }`}
        onClick={() => fnActive("how-it-works")}
      >
        <ListItemText primary="How It Works" />
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton
            disableRipple={true}
            sx={{ pl: 4 }}
            className={`${classes.menuSubItem} ${
              active === "initiation-of-transaction"
                ? classes.menuSubItemActive
                : null
            }`}
            onClick={() => fnActive("initiation-of-transaction")}
          >
            <ListItemIcon>
              <ArrowForwardIosIcon />
            </ListItemIcon>
            <ListItemText primary="Initiation of Transaction" />
          </ListItemButton>
          <ListItemButton
            disableRipple={true}
            sx={{ pl: 4 }}
            className={`${classes.menuSubItem} ${
              active === "handling-payment-notification"
                ? classes.menuSubItemActive
                : null
            }`}
            onClick={() => fnActive("handling-payment-notification")}
          >
            <ListItemIcon>
              <ArrowForwardIosIcon />
            </ListItemIcon>
            <ListItemText primary="Handling Payment Notification" />
          </ListItemButton>
          <ListItemButton
            disableRipple={true}
            sx={{ pl: 4 }}
            className={`${classes.menuSubItem} ${
              active === "service-confirmation"
                ? classes.menuSubItemActive
                : null
            }`}
            onClick={() => fnActive("service-confirmation")}
          >
            <ListItemIcon>
              <ArrowForwardIosIcon />
            </ListItemIcon>
            <ListItemText primary="Service Confirmation" />
          </ListItemButton>
        </List>
      </Collapse>
      <ListItemButton
        disableRipple={true}
        className={`${classes.menuItem} ${
          active === "integration-steps" ? classes.menuItemActive : null
        }`}
        onClick={() => fnActive("integration-steps")}
      >
        <ListItemText primary="Integration Steps" />
        {/* {open ? <ExpandLess /> : <ExpandMore />} */}
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton
            disableRipple={true}
            sx={{ pl: 4 }}
            className={`${classes.menuSubItem} ${
              active === "initiate-payment-sub"
                ? classes.menuSubItemActive
                : null
            }`}
            onClick={() => fnActive("initiate-payment-sub")}
          >
            <ListItemIcon>
              <ArrowForwardIosIcon />
            </ListItemIcon>
            <ListItemText primary="Initiate Payment" />
          </ListItemButton>
          <ListItemButton
            disableRipple={true}
            sx={{ pl: 4 }}
            className={`${classes.menuSubItem} ${
              active === "validate-payment-sub"
                ? classes.menuSubItemActive
                : null
            }`}
            onClick={() => fnActive("validate-payment-sub")}
          >
            <ListItemIcon>
              <ArrowForwardIosIcon />
            </ListItemIcon>
            <ListItemText primary="Validate Payment" />
          </ListItemButton>
          <ListItemButton
            disableRipple={true}
            sx={{ pl: 4 }}
            className={`${classes.menuSubItem} ${
              active === "update-your-transaction"
                ? classes.menuSubItemActive
                : null
            }`}
            onClick={() => fnActive("update-your-transaction")}
          >
            <ListItemIcon>
              <ArrowForwardIosIcon />
            </ListItemIcon>
            <ListItemText primary="Update your transaction" />
          </ListItemButton>
          <ListItemButton
            disableRipple={true}
            sx={{ pl: 4 }}
            className={`${classes.menuSubItem} ${
              active === "enable-most-advanced-IPN"
                ? classes.menuSubItemActive
                : null
            }`}
            onClick={() => fnActive("enable-most-advanced-IPN")}
          >
            <ListItemIcon>
              <ArrowForwardIosIcon />
            </ListItemIcon>
            <ListItemText primary="Enable most advanced IPN" />
          </ListItemButton>
        </List>
      </Collapse>
      <ListItemButton
        disableRipple={true}
        className={`${classes.menuItem} ${
          active === "base-url" ? classes.menuItemActive : null
        }`}
        onClick={() => fnActive("base-url")}
      >
        <ListItemText primary="Base URL" />
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
              active === "initiate-payment-api"
                ? classes.menuSubItemActive
                : null
            }`}
            onClick={() => fnActive("initiate-payment-api")}
          >
            <ListItemIcon>
              <ArrowForwardIosIcon />
            </ListItemIcon>
            <ListItemText primary="Initiate Payment API" />
          </ListItemButton>
          <ListItemButton
            disableRipple={true}
            sx={{ pl: 4 }}
            className={`${classes.menuSubItem} ${
              active === "validate-payment-api"
                ? classes.menuSubItemActive
                : null
            }`}
            onClick={() => fnActive("validate-payment-api")}
          >
            <ListItemIcon>
              <ArrowForwardIosIcon />
            </ListItemIcon>
            <ListItemText primary="Validate Payment API" />
          </ListItemButton>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItemButton
                style={{ paddingLeft: "50px" }}
                disableRipple={true}
                sx={{ pl: 4 }}
                className={`${classes.menuSubItem} ${
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
              <ListItemButton
                disableRipple={true}
                style={{ paddingLeft: "50px" }}
                sx={{ pl: 4 }}
                className={`${classes.menuSubItem} ${
                  active === "validating-a-payment"
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
              <ListItemButton
                style={{ paddingLeft: "50px" }}
                disableRipple={true}
                sx={{ pl: 4 }}
                className={`${classes.menuSubItem} ${
                  active === "refund-a-payment"
                    ? classes.menuSubItemActive
                    : null
                }`}
                onClick={() => fnActive("refund-a-payment")}
              >
                <ListItemIcon>
                  <ArrowForwardIosIcon />
                </ListItemIcon>
                <ListItemText primary="Refund A Payment" />
              </ListItemButton>
              <ListItemButton
                style={{ paddingLeft: "50px" }}
                disableRipple={true}
                sx={{ pl: 4 }}
                className={`${classes.menuSubItem} ${
                  active === "refund-validation"
                    ? classes.menuSubItemActive
                    : null
                }`}
                onClick={() => fnActive("refund-validation")}
              >
                <ListItemIcon>
                  <ArrowForwardIosIcon />
                </ListItemIcon>
                <ListItemText primary="Refund Validation" />
              </ListItemButton>
            </List>
          </Collapse>
        </List>
      </Collapse>
    </List>
  );
}
