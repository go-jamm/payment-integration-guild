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

export default function DeepGuideSideBar() {
  const classes = useStyles();
  const [openSetup, setOpenSetup] = React.useState(true);
  const [openUsage, setOpenUsage] = React.useState(true);
  const [openPaymentHandling, setOpenPaymentHandling] = React.useState(true);
  const [openFlutter, setOpenFlutter] = React.useState(true);

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

  const handleFlutterClick = () => {
    setOpenFlutter(!openFlutter);
  };

  return (
    <List>
      <ListItemButton
        disableRipple={true}
        className={`${classes.menuItem} ${
          topic === "android" || topic === "initiate-sdk" || topic === "examples"
            ? classes.menuItemActive
            : null
        }`}
        onClick={() => {
          fnActive("android");
          handleUsageClick();
        }}
      >
        <ListItemText primary="Android" />
      </ListItemButton>
      <Collapse in={openUsage} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton
            disableRipple={true}
            sx={{ pl: 4 }}
            className={`${classes.menuSubItem} ${
              topic === "overview" ? classes.menuSubItemActive : null
            }`}
            onClick={() => fnActive("overview")}
          >
            <ListItemIcon>
              <ArrowForwardIosIcon />
            </ListItemIcon>
            <ListItemText primary="Overview" />
          </ListItemButton>
          <ListItemButton
            disableRipple={true}
            sx={{ pl: 4 }}
            className={`${classes.menuSubItem} ${
              topic === "IntegrationSteps" ? classes.menuSubItemActive : null
            }`}
            onClick={() => fnActive("IntegrationSteps")}
          >
            <ListItemIcon>
              <ArrowForwardIosIcon />
            </ListItemIcon>
            <ListItemText primary="Integration Steps" />
          </ListItemButton>
        </List>
      </Collapse>

      <ListItemButton
        disableRipple={true}
        className={`${classes.menuItem} ${
          topic === "ios" ||
          topic === "introduction" ||
          topic === "payment-result"
            ? classes.menuItemActive
            : null
        }`}
        onClick={() => {
          fnActive("ios");
          handlePaymentHandlingClick();
        }}
      >
        <ListItemText primary="iOS" />
      </ListItemButton>
      <Collapse in={openPaymentHandling} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton
            disableRipple={true}
            sx={{ pl: 4 }}
            className={`${classes.menuSubItem} ${
              topic === "introduction" ? classes.menuSubItemActive : null
            }`}
            onClick={() => fnActive("introduction")}
          >
            <ListItemIcon>
              <ArrowForwardIosIcon />
            </ListItemIcon>
            <ListItemText primary="Introduction" />
          </ListItemButton>
          <ListItemButton
            disableRipple={true}
            sx={{ pl: 4 }}
            className={`${classes.menuSubItem} ${
              topic === "lient-app-callback" ? classes.menuSubItemActive : null
            }`}
            onClick={() => fnActive("lient-app-callback")}
          >
            <ListItemIcon>
              <ArrowForwardIosIcon />
            </ListItemIcon>
            <ListItemText primary="Client App Callback" />
          </ListItemButton>
        </List>
      </Collapse>

      <ListItemButton
        disableRipple={true}
        className={`${classes.menuItem} ${
          topic === "flutter" || topic === "intoduction" || topic === "examples"
            ? classes.menuItemActive
            : null
        }`}
        onClick={() => {
          fnActive("flutter");
          handleFlutterClick();
        }}
      >
        <ListItemText primary="Flutter" />
      </ListItemButton>
      <Collapse in={openFlutter} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton
            disableRipple={true}
            sx={{ pl: 4 }}
            className={`${classes.menuSubItem} ${
              topic === "intoduction" ? classes.menuSubItemActive : null
            }`}
            onClick={() => fnActive("intoduction")}
          >
            <ListItemIcon>
              <ArrowForwardIosIcon />
            </ListItemIcon>
            <ListItemText primary="Intoduction" />
          </ListItemButton>
          <ListItemButton
            disableRipple={true}
            sx={{ pl: 4 }}
            className={`${classes.menuSubItem} ${
              topic === "IntegrationStepsFlutter" ? classes.menuSubItemActive : null
            }`}
            onClick={() => fnActive("IntegrationStepsFlutter")}
          >
            <ListItemIcon>
              <ArrowForwardIosIcon />
            </ListItemIcon>
            <ListItemText primary="Integration Steps" />
          </ListItemButton>
          <ListItemButton
            disableRipple={true}
            sx={{ pl: 4 }}
            className={`${classes.menuSubItem} ${
              topic === "callBackUrl" ? classes.menuSubItemActive : null
            }`}
            onClick={() => fnActive("callBackUrl")}
          >
            <ListItemIcon>
              <ArrowForwardIosIcon />
            </ListItemIcon>
            <ListItemText primary="Call Back Url" />
          </ListItemButton>
        </List>
      </Collapse>
    </List>
  );
}
