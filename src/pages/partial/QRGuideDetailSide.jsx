import React, { useState, useEffect, useContext } from "react";
import { makeStyles } from "@mui/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import CircleIcon from "@mui/icons-material/Circle";
import parameter from "../../assets/images/parameter.png";
import parameter2 from "../../assets/images/parameter2.png";
import { MenuContext } from "../../context/MenuContext";
import { useHistory, useLocation } from "react-router-dom";
import { a11yLight, CopyBlock, dracula } from "react-code-blocks";

const useStyles = makeStyles((theme) => ({
  title: {
    color: "#262D54",
    fontSize: "24px",
    fontWeight: 700,
    margin: 0,
    [theme.breakpoints.down("xl")]: {
      fontSize: "22px",
    },
    [theme.breakpoints.down("md")]: {
      fontSize: "20px",
    },
  },
  subTitle: {
    color: "#262D54",
    fontSize: "20px",
    fontWeight: 700,
    margin: 0,
    [theme.breakpoints.down("md")]: {
      fontSize: "15px",
    },
  },
  subTitle2: {
    color: "#262D54",
    fontSize: "18px",
    fontWeight: 700,
    margin: 0,
  },
  detailFontStyle: {
    lineHeight: "26px",
    color: "#181c34",
    marginBottom: "35px !important",
    [theme.breakpoints.down("xl")]: {
      fontSize: "14px",
    },
    [theme.breakpoints.down("md")]: {
      fontSize: "12px",
    },
  },
  tableTitle: {
    fontSize: "20px",
    color: "#181c34",
    marginBottom: "35px !important",
    marginTop: "35px !important",
    [theme.breakpoints.down("md")]: {
      fontSize: "15px",
    },
  },
  tableStyle: {
    background: "rgba(15, 188, 249,0.1)",
    "& th": {
      color: "#262D54",
      fontSize: "18px",
      [theme.breakpoints.down("md")]: {
        fontSize: "14px",
      },
    },
  },

  alertStyle: {
    background: "#FADBD8",
    padding: "20px 0px 30px",
    borderRadius: "10px",
  },
  alertTitle: {
    color: "#E74C3C",
    cursor: "default",
    padding: "0px 32px",
    "& span ": {
      fontSize: "18px",
      fontWeight: 700,
      cursor: "default",
      [theme.breakpoints.down("md")]: {
        fontSize: "14px",
      },
    },
  },
  ItemStyle: {
    color: "#262D54",
    cursor: "default",
    padding: "0px 32px !important",

    "& span": {
      fontSize: "16px",
      cursor: "default",
      [theme.breakpoints.down("xl")]: {
        fontSize: "14px",
      },
      [theme.breakpoints.down("md")]: {
        fontSize: "12px",
      },
    },
    ["& .MuiListItemIcon-root"]: {
      minWidth: "24px",
    },
    ["& .MuiSvgIcon-root"]: {
      color: "#262D54",
      fontSize: "10px",
      [theme.breakpoints.down("md")]: {
        fontSize: "6px",
      },
    },
  },
  alertItem: {
    color: "#E74C3C",
    cursor: "default",
    padding: "0px 32px !important",

    "& span": {
      fontSize: "16px",
      cursor: "default",
      [theme.breakpoints.down("xl")]: {
        fontSize: "14px",
      },
      [theme.breakpoints.down("md")]: {
        fontSize: "12px",
      },
    },
    ["& .MuiListItemIcon-root"]: {
      minWidth: "24px",
    },
    ["& .MuiSvgIcon-root"]: {
      color: "#E74C3C",
      fontSize: "10px",
      [theme.breakpoints.down("md")]: {
        fontSize: "8px",
      },
    },
  },
  sectionMarginBottom: {
    marginBottom: "35px",
  },
  copyBlockStyle: {
    "& button": {
      display: "none",
    },
  },
}));
const QRGuideDetailSide = () => {
  const sample = `{
 "code": 200,
 "messages": "QR generation request was successful",
 "errors": []
 "data": "https://*************.***********.com/AAA/BBB.png"
}`;

  const sample2 = `{
  "code": 200,
  "messages": "Payment was successful.",
  "errors": []
  "data": {
      "gw_transaction_id": "xxxxxxxxxxxxx",
      "merchant_order_id": "xxxxxxxxxxxxx",
      "received_amount": 250,
      "currency": "IQD",
      "status": "success",
      "customer_name": "John Doe",
      "customer_mobile_number": "+964xxxxxxxxxx",
      "at": ""2021-03-02 13:39:20""
  }
}`;

  const sample3 = `{
  "code": 200,
  "messages": "Refund was successful.",
  "errors": []
  "data": {
    "summary":{
      "recipient":{
        "name": "John Doe",
        "mobile_number": "+964xxxxxxxxxx",
        "avatar": "https://xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx.png"
      }
      "invoice_id": "xxxxxxxxxx"
    }
  }
}`;

  const classes = useStyles();
  const [activeUseEffect, setActiveUseEffect] = useState(false);
  const { fastPayMenuList, addList } = useContext(MenuContext);
  let history = useHistory();
  const search = useLocation().search;
  const topic = new URLSearchParams(search).get("topic");
  useEffect(() => {
    if (activeUseEffect === true) {
      if (fastPayMenuList.goTo !== null && fastPayMenuList.goTo !== "") {
        const yOffset = -70;

        const element = document.getElementById(fastPayMenuList.goTo);

        // element.scrollTo({ top: 0, behavior: "smooth" });
        const y =
          element.getBoundingClientRect().top + window.pageYOffset + yOffset;

        window.scrollTo({ top: y, behavior: "smooth" });
        addList({ goTo: "" });
      }
      setTimeout(() => {
        if (
          fastPayMenuList.goTo === "live-credentials" ||
          fastPayMenuList.goTo === "swagger-documentation"
        ) {
          history.push({
            search: `?topic=${fastPayMenuList.goTo}`,
          });
        }
      }, 1000);
    }

    setActiveUseEffect(true);
  }, [fastPayMenuList.goTo]);
  useEffect(() => {
    const sections = document.querySelectorAll("section");
    let lastId = topic;
    document.addEventListener("scroll", () => {
      const scrollCheck = window.scrollY;
      let sectionId;

      sections.forEach((section) => {
        const sectionTop = section.offsetTop - 70;

        const sectionHeight = section.clientHeight;
        const sectionBottom = sectionTop + sectionHeight;

        if (scrollCheck >= sectionTop && scrollCheck <= sectionBottom) {
          sectionId = section.getAttribute("id");
          if (lastId !== sectionId) {
            lastId = sectionId;
            history.push({
              search: `?topic=${sectionId}`,
            });
          }
        }
      });
    });

    if (topic !== "synopsis") {
      if (topic !== null) {
        addList({ goTo: topic });
      }
    }
  }, []);

  return (
    <div>
      <br />
      <section className={classes.sectionMarginBottom} id="synopsis">
        <p className={classes.title}>Synopsis</p>
        <hr />
        <p className={classes.detailFontStyle}>
          Let’s say, <strong>“Smart Vending”</strong> is a merchant that sell
          products using vending machine and want to use{" "}
          <strong>FastPay</strong> as a payment methodc. To be eligible for
          accepting payment through <strong>FastPay</strong> gateway, it is a
          prerequisite for <strong>“Smart Vending”</strong> to become a merchant
          of <strong>FastPay</strong> upon contacting the{" "}
          <strong>
            Fastpay Merchant Acquisition Team . Merchant Acquisition Team
          </strong>{" "}
          will create a merchant account for <strong>“Smart Vending”</strong>{" "}
          along with other necessary information. Once the account creation is
          done, <strong>“Smart Vending”</strong> will receive system-generated
          credentials through email along with API integration documentation.
        </p>
        <p className={classes.detailFontStyle}>
          Upon first time successful login to merchant web panel i.e.
        </p>
        <div className={classes.sectionMarginBottom}>
          <List component="div" disablePadding className={classes.listStyle}>
            <ListItem
              disableRipple={true}
              sx={{ pl: 4 }}
              className={`${classes.ItemStyle} `}
            >
              <ListItemText>
                <a
                  className={classes.detailFontStyle}
                  style={{ textDecoration: "none", cursor: "pointer" }}
                  target="_blank"
                  href="https://dev-merchant.fast-pay.cash"
                >
                  <strong> Sandbox -</strong> https://dev-merchant.fast-pay.cash
                </a>
              </ListItemText>
            </ListItem>
            <ListItem
              disableRipple={true}
              sx={{ pl: 4 }}
              className={`${classes.ItemStyle}`}
            >
              <ListItemText>
                <a
                  className={classes.detailFontStyle}
                  style={{ textDecoration: "none", cursor: "pointer" }}
                  target="_blank"
                  href="https://merchant.fast-pay.cash"
                >
                  <strong> Production -</strong> https://merchant.fast-pay.cash
                </a>
              </ListItemText>
            </ListItem>
          </List>
        </div>
        <p className={classes.detailFontStyle}>
          using valid login credentials <strong>“Smart Vending”</strong> will be
          prompted to update their password. Once the password update operation
          is done the system will redirect logged in-store user to their
          dedicated dashboard where they can do necessary operations dedicated
          to merchants like -
        </p>
        <List component="div" disablePadding className={classes.listStyle}>
          <ListItem
            disableRipple={true}
            sx={{ pl: 4 }}
            className={`${classes.ItemStyle} `}
          >
            <ListItemIcon>
              <CircleIcon />
            </ListItemIcon>
            <ListItemText primary="Refund Payment." />
          </ListItem>
          <ListItem
            disableRipple={true}
            sx={{ pl: 4 }}
            className={`${classes.ItemStyle}`}
          >
            <ListItemIcon>
              <CircleIcon />
            </ListItemIcon>
            <ListItemText primary="Transaction History." />
          </ListItem>
          <ListItem
            disableRipple={true}
            sx={{ pl: 4 }}
            className={`${classes.ItemStyle} `}
          >
            <ListItemIcon>
              <CircleIcon />
            </ListItemIcon>
            <ListItemText primary="Store Configuration." />
          </ListItem>
          <ListItem
            disableRipple={true}
            sx={{ pl: 4 }}
            className={`${classes.ItemStyle} `}
          >
            <ListItemIcon>
              <CircleIcon />
            </ListItemIcon>
            <ListItemText primary="Account Information etc." />
          </ListItem>
        </List>
        <p className={classes.detailFontStyle}>
          Clicking on <strong>Store Configuration</strong> will redirect the
          user to the <strong>Store Configuration</strong> page where they can
          set up their store related information like{" "}
          <code>store_password</code> , <code>success_url</code> ,{" "}
          <code>cancel_url</code> , <code>fail_url</code> ,<code>ipn_url</code>{" "}
          .
        </p>
        <p className={classes.detailFontStyle}>
          <code>store_id</code> and <code>store_url</code> fields will be
          pre-filled and available in read-only mode.
        </p>
      </section>
      <section className={classes.sectionMarginBottom} id="apis">
        <p className={classes.title}>APIs</p>
        <hr />
      </section>
      <section className={classes.sectionMarginBottom} id="qr-generation-api">
        <p className={`${classes.subTitle} ${classes.sectionMarginBottom}`}>
          QR Generation API
        </p>
        <TableContainer component={Paper}>
          <Table sx={{ Width: 650 }} aria-label="simple table">
            <TableHead className={classes.tableStyle}>
              <TableRow>
                <TableCell>URL</TableCell>
                <TableCell>Method</TableCell>
                <TableCell>Headers</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell>
                  /api/v1/public/vending/qr
                  <br /> <br />
                  <a
                    className={classes.detailFontStyle}
                    style={{ textDecoration: "none", cursor: "pointer" }}
                    target="_blank"
                    href="https://dev-qr.fast-pay.cash"
                  >
                    <strong>Sandbox Base URL:</strong>{" "}
                    https://dev-qr.fast-pay.cash
                  </a>
                  <br /> <br />
                  <a
                    className={classes.detailFontStyle}
                    style={{ textDecoration: "none", cursor: "pointer" }}
                    target="_blank"
                    href="https://qr.fast-pay.cash"
                  >
                    <strong> Production Base URL:</strong>{" "}
                    https://qr.fast-pay.cash
                  </a>
                </TableCell>
                <TableCell>POST</TableCell>
                <TableCell>
                  Accept: application/json
                  <br />
                  Content-Type: application/json
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>

        <p className={classes.tableTitle}>Request Body:</p>
        <TableContainer component={Paper}>
          <Table sx={{ Width: 650 }} aria-label="simple table">
            <TableHead className={classes.tableStyle}>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell>Type & Length</TableCell>
                <TableCell>Description</TableCell>
                <TableCell>Required</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell>storeId</TableCell>
                <TableCell> alphanumeric (8-32)</TableCell>
                <TableCell>Merchant Store ID. e.g. Aarong101</TableCell>
                <TableCell>Yes</TableCell>
              </TableRow>
              <TableRow
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell>storePassword</TableCell>
                <TableCell> alphanumeric (8-32)</TableCell>
                <TableCell>Merchant Password. e.g. A$Rong001</TableCell>
                <TableCell>Yes</TableCell>
              </TableRow>
              <TableRow
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell>orderID</TableCell>
                <TableCell> alphanumeric (8-32)</TableCell>
                <TableCell>
                  Merchant Generated Unique Order Id. e.g. ARONGORD1001
                </TableCell>
                <TableCell>Yes</TableCell>
              </TableRow>
              <TableRow
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell>billAmount</TableCell>
                <TableCell>integer</TableCell>
                <TableCell>Total Payable. Minimum amount: 1000</TableCell>
                <TableCell>Yes</TableCell>
              </TableRow>
              <TableRow
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell>currency</TableCell>
                <TableCell>string (3)</TableCell>
                <TableCell>
                  Currency in which customer will be charged. e.g. IQD
                </TableCell>
                <TableCell>Yes</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
        <br />
        <img
          src={parameter}
          style={{ display: "block", margin: "auto", maxWidth: "250px" }}
          className={classes.sectionMarginBottom}
        />
        <p className={classes.tableTitle}>Sample Success Response:</p>
        <div className={classes.copyBlockStyle}>
          <CopyBlock
            language={"jsx"}
            text={sample}
            showLineNumbers={true}
            theme={dracula}
            wrapLines={true}
            codeBlock
          />
        </div>
      </section>
      <section className={classes.sectionMarginBottom} id="payment-payment-api">
        <p className={classes.subTitle}>Payment Validation API</p>
        <p className={classes.detailFontStyle}>
          It is important to validate the transaction notification for security
          purposes.
        </p>
      </section>
      <section
        className={classes.sectionMarginBottom}
        id="grab-the-notification"
      >
        <p className={classes.subTitle}>Step 1: Grab the notification</p>
        <p className={classes.detailFontStyle}>
          As <strong>IPN URL</strong> already set in panel, payment notification
          will reach towards <strong>IPN URL</strong> as soon as the payment is
          done upon scanning the QR by the customer using his own Personal
          FastPay App. So, it requires validation for amount and transaction
          properly to get rid of fraudulent transaction.
        </p>
        <p className={classes.detailFontStyle}>
          The IPN will send a POST request to your IPN URL with below data -
        </p>
        <div className={classes.sectionMarginBottom}>
          <TableContainer component={Paper}>
            <Table sx={{ Width: 650 }} aria-label="simple table">
              <TableHead className={classes.tableStyle}>
                <TableRow>
                  <TableCell>Parameters</TableCell>
                  <TableCell>Type</TableCell>
                  <TableCell>Sample Value</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell>gw_transaction_id</TableCell>
                  <TableCell> alphanumeric</TableCell>
                  <TableCell>CUL1NUB731</TableCell>
                </TableRow>
                <TableRow
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell>merchant_order_id</TableCell>
                  <TableCell> alphanumeric</TableCell>
                  <TableCell>LAREVEORD1005</TableCell>
                </TableRow>
                <TableRow
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell>received_amount</TableCell>
                  <TableCell> decimal</TableCell>
                  <TableCell>5000.00</TableCell>
                </TableRow>
                <TableRow
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell>currency</TableCell>
                  <TableCell> string</TableCell>
                  <TableCell>IQD</TableCell>
                </TableRow>
                <TableRow
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell>status</TableCell>
                  <TableCell> string</TableCell>
                  <TableCell>Success</TableCell>
                </TableRow>
                <TableRow
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell>customer_name</TableCell>
                  <TableCell> string</TableCell>
                  <TableCell>John Doe</TableCell>
                </TableRow>
                <TableRow
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell>customer_mobile_number</TableCell>
                  <TableCell> string</TableCell>
                  <TableCell>+964xxxxxxxxxx</TableCell>
                </TableRow>
                <TableRow
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell>at</TableCell>
                  <TableCell> datetime (Y-m-d H:i:s)</TableCell>
                  <TableCell>2020-11-26 13:54:01</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      </section>
      <section
        className={classes.sectionMarginBottom}
        id="validating-a-payment"
      >
        <p className={classes.subTitle}>Step 2: Validating A Payment</p>
        <p className={classes.detailFontStyle}>
          It is mandatory to validate a payment using Validation API to get rid
          of fraudulent activities.
        </p>
        <TableContainer component={Paper}>
          <Table sx={{ Width: 650 }} aria-label="simple table">
            <TableHead className={classes.tableStyle}>
              <TableRow>
                <TableCell>URL</TableCell>
                <TableCell>Method</TableCell>
                <TableCell>Headers</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell>
                  /api/v1/public/vending/validate
                  <br /> <br />
                  <a
                    className={classes.detailFontStyle}
                    style={{ textDecoration: "none", cursor: "pointer" }}
                    target="_blank"
                    href="https://dev-qr.fast-pay.cash"
                  >
                    <strong>Sandbox Base URL:</strong>{" "}
                    https://dev-qr.fast-pay.cash
                  </a>
                  <br /> <br />
                  <a
                    className={classes.detailFontStyle}
                    style={{ textDecoration: "none", cursor: "pointer" }}
                    target="_blank"
                    href="https://qr.fast-pay.cash"
                  >
                    <strong> Production Base URL:</strong>{" "}
                    https://qr.fast-pay.cash
                  </a>
                </TableCell>
                <TableCell>POST</TableCell>
                <TableCell>
                  Accept: application/json
                  <br />
                  Content-Type: application/json
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>

        <p className={classes.tableTitle}>Request Body:</p>
        <TableContainer component={Paper}>
          <Table sx={{ Width: 650 }} aria-label="simple table">
            <TableHead className={classes.tableStyle}>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell>Type & Length</TableCell>
                <TableCell>Description</TableCell>
                <TableCell>Required</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell>storeId</TableCell>
                <TableCell> alphanumeric (8-32)</TableCell>
                <TableCell>Merchant Store ID. e.g. Aarong101</TableCell>
                <TableCell>Yes</TableCell>
              </TableRow>
              <TableRow
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell>storePassword</TableCell>
                <TableCell> alphanumeric (8-32)</TableCell>
                <TableCell>Merchant Password. e.g. A$Rong001</TableCell>
                <TableCell>Yes</TableCell>
              </TableRow>
              <TableRow
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell>orderId</TableCell>
                <TableCell> alphanumeric (8-32)</TableCell>
                <TableCell>
                  Merchant Generated Unique Order ID. e.g. ARONGORD1001
                </TableCell>
                <TableCell>Yes</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
        <br />
        <img
          src={parameter2}
          style={{ display: "block", margin: "auto", maxWidth: "250px" }}
        />
        <p className={classes.tableTitle}>Sample Response:</p>
        <div className={classes.copyBlockStyle}>
          <CopyBlock
            language={"jsx"}
            text={sample2}
            showLineNumbers={true}
            theme={dracula}
            wrapLines={true}
            codeBlock
          />
        </div>
      </section>
      <section className={classes.sectionMarginBottom} id="refund-a-payment">
        <p className={classes.subTitle}>Refund A Payment</p>

        <p className={classes.detailFontStyle}>
          FastPay Merchants can refund the transactions to their customers that
          are generated by payment receive process. This api will help merchants
          to refund without using mobile app or web interface, so this api does
          not require regular AUTH token instead it uses STORE_ID and
          STORE_PASSWORD for authentication. This api also require ORDER_ID to
          identify the transactions which will be refunded.There are other
          fields required such as recipient mobile number or MSISDN and AMOUNT.
          For each success full refund both sender or receiver will not get any
          notification.
        </p>

        <p className={`${classes.tableTitle}`}>Refund Payment API :</p>
        <TableContainer component={Paper}>
          <Table sx={{ Width: 650 }} aria-label="simple table">
            <TableHead className={classes.tableStyle}>
              <TableRow>
                <TableCell>URL</TableCell>
                <TableCell>Method</TableCell>
                <TableCell>Headers</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell>
                  /api/v1/public/payment/refund
                  <br /> <br />
                  <a
                    className={classes.detailFontStyle}
                    style={{ textDecoration: "none", cursor: "pointer" }}
                    target="_blank"
                    href="https://dev-qr.fast-pay.cash"
                  >
                    <strong>Sandbox Base URL:</strong>{" "}
                    https://dev-qr.fast-pay.cash
                  </a>
                  <br /> <br />
                  <a
                    className={classes.detailFontStyle}
                    style={{ textDecoration: "none", cursor: "pointer" }}
                    target="_blank"
                    href="https://qr.fast-pay.cash"
                  >
                    <strong> Production Base URL:</strong>{" "}
                    https://qr.fast-pay.cash
                  </a>
                </TableCell>
                <TableCell>POST</TableCell>
                <TableCell>
                  Accept: application/json
                  <br />
                  Content-Type: application/json
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>

        <p className={classes.tableTitle}>Request Body:</p>
        <TableContainer component={Paper}>
          <Table sx={{ Width: 650 }} aria-label="simple table">
            <TableHead className={classes.tableStyle}>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell>Type & Length</TableCell>
                <TableCell>Description</TableCell>
                <TableCell>Required</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell>storeId</TableCell>
                <TableCell> alphanumeric (8-32)</TableCell>
                <TableCell>Merchant Store ID. e.g. Aarong101</TableCell>
                <TableCell>Yes</TableCell>
              </TableRow>
              <TableRow
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell>storePassword</TableCell>
                <TableCell> alphanumeric (8-32)</TableCell>
                <TableCell>Merchant Password. e.g. A$Rong001</TableCell>
                <TableCell>Yes</TableCell>
              </TableRow>
              <TableRow
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell>orderId</TableCell>
                <TableCell> alphanumeric (8-32)</TableCell>
                <TableCell>
                  {" "}
                  Merchant Generated Unique Order ID. e.g. ARONGORD1001
                </TableCell>
                <TableCell>Yes</TableCell>
              </TableRow>
              <TableRow
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell>msisdn</TableCell>
                <TableCell>string</TableCell>
                <TableCell>
                  Receiver(Customer) Phone Number (+964xxxxxxxxxx)
                </TableCell>
                <TableCell>Yes</TableCell>
              </TableRow>
              <TableRow
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell>amount</TableCell>
                <TableCell>integer</TableCell>
                <TableCell>Amount to be refunded</TableCell>
                <TableCell>Yes</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>

        <p className={classes.tableTitle}>Sample Response:</p>
        <div className={classes.copyBlockStyle}>
          <CopyBlock
            language={"jsx"}
            text={sample3}
            showLineNumbers={true}
            theme={dracula}
            wrapLines={false}
            codeBlock
          />
        </div>
      </section>
      <section className={classes.sectionMarginBottom} id="test-credentials">
        <p className={classes.title}>Test Credentials</p>
        <hr className={classes.sectionMarginBottom} />
        <div className={classes.sectionMarginBottom}>
          <TableContainer component={Paper}>
            <Table sx={{ Width: 650 }} aria-label="simple table">
              <TableHead className={classes.tableStyle}>
                <TableRow>
                  <TableCell colSpan={2}>
                    Merchant FastPay Account Credentials (Test A/C)
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell>Mobile Number</TableCell>
                  <TableCell>+9640168881111</TableCell>
                </TableRow>
                <TableRow
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell>Password</TableCell>
                  <TableCell>Password1@</TableCell>
                </TableRow>
                <TableRow
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell>Store ID</TableCell>
                  <TableCell>1000007066_485</TableCell>
                </TableRow>
                <TableRow
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell>Store Password</TableCell>
                  <TableCell>Password100@</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </div>
        <div className={classes.sectionMarginBottom}>
          <TableContainer component={Paper}>
            <Table sx={{ Width: 650 }} aria-label="simple table">
              <TableHead className={classes.tableStyle}>
                <TableRow>
                  <TableCell colSpan={2}>
                    Personal FastPay Account Credentials (Test A/C)
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell>Mobile Number</TableCell>
                  <TableCell>+9641814214731</TableCell>
                </TableRow>
                <TableRow
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell>Password</TableCell>
                  <TableCell>Password1@</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      </section>
      <section className={classes.sectionMarginBottom} id="live-credentials">
        <p className={classes.title}>Live Credentials</p>
        <hr />
        <p className={classes.detailFontStyle}>
          For live credentials contact with FastPay Support Team.
        </p>
        <div className={classes.alertStyle}>
          <List component="div" disablePadding>
            <ListItem
              disableRipple={true}
              sx={{ pl: 4 }}
              className={`${classes.alertTitle}`}
            >
              <ListItemText primary="Security Check:" />
            </ListItem>
            <ListItem
              disableRipple={true}
              sx={{ pl: 4 }}
              className={`${classes.alertItem} `}
            >
              <ListItemIcon>
                <CircleIcon />
              </ListItemIcon>
              <ListItemText>
                Track your order by transaction ID and check it in your database
                for existence.
              </ListItemText>
            </ListItem>
            <ListItem
              disableRipple={true}
              sx={{ pl: 4 }}
              className={`${classes.alertItem}`}
            >
              <ListItemIcon>
                <CircleIcon />
              </ListItemIcon>
              <ListItemText>
                Must validate amount and incoming amount from your Database.
              </ListItemText>
            </ListItem>
            <ListItem
              disableRipple={true}
              sx={{ pl: 4 }}
              className={`${classes.alertItem}`}
            >
              <ListItemIcon>
                <CircleIcon />
              </ListItemIcon>
              <ListItemText>
                Check for the status - Success, Failed, Cancel to update your
                order status.
              </ListItemText>
            </ListItem>
          </List>
        </div>
      </section>
      <section
        className={classes.sectionMarginBottom}
        id="swagger-documentation"
      >
        <p className={`${classes.title} `}>Swagger Documentation</p>
        <br />
        <a
          className={classes.detailFontStyle}
          style={{ textDecoration: "none", cursor: "pointer" }}
          target="_blank"
          href="https://dev-qr.fast-pay.cash/swagger-ui.html"
        >
          <i>https://dev-qr.fast-pay.cash/swagger-ui.html</i>
        </a>
      </section>
    </div>
  );
};

export default QRGuideDetailSide;
