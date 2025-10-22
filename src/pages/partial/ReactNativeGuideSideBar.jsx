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

export default function ReactNativeGuideSideBar() {
  const classes = useStyles();
  const [openSetup, setOpenSetup] = React.useState(true);
  const [openUsage, setOpenUsage] = React.useState(true);
  const [openPaymentHandling, setOpenPaymentHandling] = React.useState(true);

  const { addList } = useContext(MenuContext);
  const { fastPayActiveId } = useContext(ActiveMenuContext);
  const topic = fastPayActiveId.id;

  const fnActive = (id) => {
    addList({ goTo: id });
  };

  const handleSetupClick = () => {
    setOpenSetup(!openSetup);
  };

  const handleUsageClick = () => {
    setOpenUsage(!openUsage);
  };

  const handlePaymentHandlingClick = () => {
    setOpenPaymentHandling(!openPaymentHandling);
  };

  return (
    <List>
      <ListItemButton
        disableRipple={true}
        className={`${classes.menuItem} ${
          topic === "overview" || topic === null
            ? classes.menuItemActive
            : null
        }`}
        onClick={() => fnActive("overview")}
      >
        <ListItemText primary="Overview" />
      </ListItemButton>

      <ListItemButton
        disableRipple={true}
        className={`${classes.menuItem} ${
          topic === "installation" ? classes.menuItemActive : null
        }`}
        onClick={() => fnActive("installation")}
      >
        <ListItemText primary="Installation" />
      </ListItemButton>

      <ListItemButton
        disableRipple={true}
        className={`${classes.menuItem} ${
          topic === "setup" || topic === "android-setup" || topic === "ios-setup"
            ? classes.menuItemActive
            : null
        }`}
        onClick={() => {fnActive("setup"); handleSetupClick();}}
      >
        <ListItemText primary="Setup" />
      </ListItemButton>

      <Collapse in={openSetup} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton
            disableRipple={true}
            sx={{ pl: 4 }}
            className={`${classes.menuSubItem} ${
              topic === "android-setup" ? classes.menuSubItemActive : null
            }`}
            onClick={() => fnActive("android-setup")}
          >
            <ListItemIcon>
              <ArrowForwardIosIcon />
            </ListItemIcon>
            <ListItemText primary="Android Setup" />
          </ListItemButton>
          <ListItemButton
            disableRipple={true}
            sx={{ pl: 4 }}
            className={`${classes.menuSubItem} ${
              topic === "ios-setup" ? classes.menuSubItemActive : null
            }`}
            onClick={() => fnActive("ios-setup")}
          >
            <ListItemIcon>
              <ArrowForwardIosIcon />
            </ListItemIcon>
            <ListItemText primary="iOS Setup" />
          </ListItemButton>
        </List>
      </Collapse>

      <ListItemButton
        disableRipple={true}
        className={`${classes.menuItem} ${
          topic === "usage" || topic === "initiate-sdk" || topic === "examples" ? classes.menuItemActive : null
        }`}
        onClick={() => {fnActive("usage"); handleUsageClick();}}
      >
        <ListItemText primary="Usage" />
      </ListItemButton>
      <Collapse in={openUsage} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton
            disableRipple={true}
            sx={{ pl: 4 }}
            className={`${classes.menuSubItem} ${
              topic === "initiate-sdk" ? classes.menuSubItemActive : null
            }`}
            onClick={() => fnActive("initiate-sdk")}
          >
            <ListItemIcon>
              <ArrowForwardIosIcon />
            </ListItemIcon>
            <ListItemText primary="Initiate SDK" />
          </ListItemButton>
          <ListItemButton
            disableRipple={true}
            sx={{ pl: 4 }}
            className={`${classes.menuSubItem} ${
              topic === "examples" ? classes.menuSubItemActive : null
            }`}
            onClick={() => fnActive("examples")}
          >
            <ListItemIcon>
              <ArrowForwardIosIcon />
            </ListItemIcon>
            <ListItemText primary="Examples" />
          </ListItemButton>
        </List>
      </Collapse>

      <ListItemButton
        disableRipple={true}
        className={`${classes.menuItem} ${
          topic === "payment-handling" || topic === "callback-uri" || topic === "payment-result" ? classes.menuItemActive : null
        }`}
        onClick={() => {fnActive("payment-handling"); handlePaymentHandlingClick();}}
      >
        <ListItemText primary="Payment Handling" />
      </ListItemButton>
      <Collapse in={openPaymentHandling} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton
            disableRipple={true}
            sx={{ pl: 4 }}
            className={`${classes.menuSubItem} ${
              topic === "callback-uri" ? classes.menuSubItemActive : null
            }`}
            onClick={() => fnActive("callback-uri")}
          >
            <ListItemIcon>
              <ArrowForwardIosIcon />
            </ListItemIcon>
            <ListItemText primary="SDK callback Uri" />
          </ListItemButton>
          <ListItemButton
            disableRipple={true}
            sx={{ pl: 4 }}
            className={`${classes.menuSubItem} ${
              topic === "payment-result" ? classes.menuSubItemActive : null
            }`}
            onClick={() => fnActive("payment-result")}
          >
            <ListItemIcon>
              <ArrowForwardIosIcon />
            </ListItemIcon>
            <ListItemText primary="Payment Result" />
          </ListItemButton>
        </List>
      </Collapse>

      <ListItemButton
        disableRipple={true}
        className={`${classes.menuItem} ${
          topic === "troubleshooting" ? classes.menuItemActive : null
        }`}
        onClick={() => fnActive("troubleshooting")}
      >
        <ListItemText primary="Troubleshooting" />
      </ListItemButton>

      <ListItemButton
        disableRipple={true}
        className={`${classes.menuItem} ${
          topic === "license" ? classes.menuItemActive : null
        }`}
        onClick={() => fnActive("license")}
      >
        <ListItemText primary="License" />
      </ListItemButton>
    </List>
  );
}