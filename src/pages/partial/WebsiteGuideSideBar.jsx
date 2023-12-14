import React, { useContext } from "react";
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

export default function WebsiteGuildSideBar() {
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
          topic === "how-it-works" ? classes.menuItemActive : null
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
              topic === "initiation-of-transaction"
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
              topic === "handling-payment-notification"
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
              topic === "service-confirmation"
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
          topic === "integration-steps" ? classes.menuItemActive : null
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
              topic === "initiate-payment-sub"
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
              topic === "validate-payment-sub"
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
              topic === "update-your-transaction"
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
              topic === "enable-most-advanced-IPN"
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
          topic === "base-url" ? classes.menuItemActive : null
        }`}
        onClick={() => fnActive("base-url")}
      >
        <ListItemText primary="Base URL" />
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
      {/* <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton
            disableRipple={true}
            sx={{ pl: 4 }}
            className={`${classes.menuSubItem} ${
              topic === "initiate-payment-api"
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
              topic === "validate-payment-api"
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
              <ListItemButton
                disableRipple={true}
                sx={{ pl: 4 }}
                className={`${classes.menuSubItem2} ${
                  topic === "refund-a-payment"
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
                disableRipple={true}
                sx={{ pl: 4 }}
                className={`${classes.menuSubItem2} ${
                  topic === "refund-validation"
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
      </Collapse> */}
    </List>
  );
}
