import React, { useState, useEffect } from "react";
import { makeStyles } from "@mui/styles";
import steps from "../../assets/images/steps.png";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import CircleIcon from "@mui/icons-material/Circle";

import { padding } from "@mui/system";
import { a11yLight, CopyBlock, dracula } from "react-code-blocks";

const useStyles = makeStyles({
  title: {
    color: "#262D54",
    fontSize: "20px",
    fontWeight: 700,
  },
  detailFontStyle: {
    lineHeight: "22px",
    color: "#181c34",
  },
  tableStyle: {
    // background: "darkkhaki",
    background: "rgba(15, 188, 249,0.1)",
    "& th": {
      color: "#262D54",
      fontSize: "18px",
    },
  },

  alertStyle: {
    background: "#F5B7B1",
    padding: "20px 10px",
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
    },
  },
  alertItem: {
    color: "#E74C3C",
    cursor: "default",
    padding: "0px 32px",

    "& span": {
      fontSize: "16px",
      cursor: "default",
    },
    ["& .MuiListItemIcon-root"]: {
      minWidth: "24px",
    },
    ["& .MuiSvgIcon-root"]: {
      color: "#E74C3C",
      fontSize: "12px",
    },
  },
});
const GuildDetailSide = ({
  setActive,
  clickedOn,
  code,
  language,
  showLineNumbers,
}) => {
  const baseUrlData = [
    { Environment: "Staging", BaseURL: "https://staging-sdk.fast-pay.iq" },
    { Environment: "Production", BaseURL: "https://sdk.fast-pay.iq" },
  ];
  const sample = ` "code": 200,
  "messages": [
      "Payment Initiation request processed successfully."
  ],
  "data": {
      "redirect_url": "http://pgw.fast-pay.cash/pay?token=7b192dc5-1b48-491a-a1d7xxx"
  }`;

  const classes = useStyles();
  const [activeUseEffect, setActiveUseEffect] = useState(false);

  useEffect(() => {
    if (activeUseEffect === true) {
      const yOffset = -10;
      const element = document.getElementById(clickedOn);

      element.scrollTo({ top: 0, behavior: "smooth" });
      const y =
        element.getBoundingClientRect().top + window.pageYOffset + yOffset;

      window.scrollTo({ top: y, behavior: "smooth" });
      if (clickedOn === "Contact") {
        setTimeout(() => {
          setActive(clickedOn);
        }, 1500);
      }
    }
    setActiveUseEffect(true);
  }, [clickedOn]);
  useEffect(() => {
    const sections = document.querySelectorAll("section");
    document.addEventListener("scroll", () => {
      const scrollCheck = window.scrollY;
      // console.log("scrollCheck", scrollCheck);
      let sectionId;
      sections.forEach((section) => {
        const sectionTop = section.offsetTop - 70;
        // console.log("sectionTop", sectionTop, sectionTop-50);
        // const sectionHeight = section.clientHeight;
        // console.log("sectionHeight", sectionHeight);

        if (scrollCheck >= sectionTop) {
          sectionId = section.getAttribute("id");
          setActive(sectionId);
          // console.log("sectionId", sectionId);
        }
      });
    });

    // console.log("body", window.screen.availHeight);
  }, []);

  return (
    <div>
      <section id="synopsis">
        <p className={classes.title}>Synopsis</p>
        <hr />

        <p className={classes.detailFontStyle}>
          Let’s say, La Reve is a merchant that sell clothes online and want to
          use FastPay as a payment method along with other payment options e.g.
          PayPal, VISA etc. To be eligible for accepting payment through FastPay
          gateway, it is a prerequisite for La Reve to become a merchant of
          FastPay upon contacting the FastPay Merchant Acquisition Team.
          Merchant Acquisition Team will create a merchant account for La Reve
          along with other necessary information. Once the account creation is
          done, La Reve will receive system-generated credentials through email
          along with API integration documentation.
        </p>
        <p className={classes.detailFontStyle}>
          Upon first time successful login to merchant web panel i.e.
          merchant.fast-pay.cash using valid login credentials La Reve will be
          prompted to update their password. Once the password update operation
          is done the system will redirect logged in-store user to their
          dedicated dashboard where they can do necessary operations dedicated
          to online merchants like -
        </p>
        <br />
      </section>
      <section id="how-it-works">
        <p className={classes.title}>How It Work</p>
        <img src={steps} width="100%" />
        <p className={classes.detailFontStyle}>
          The above steps can be categorised in three sections based on the
          development process described below.
        </p>
        <p className={classes.title}>Initiation of Transaction:</p>
        <p className={classes.detailFontStyle}>
          The Steps 1, 2 and 3 are used to make request for a new transaction.
          After getting confirmation of checkout from customer, merchant server
          sends a request to FastPay server to get an unique URL to redirect
          customer to. If required credentials and data are valid, then FastPay
          provides a Redirect URL to Merchant System. After receiving the
          Redirect URL, Merchant System redirects the customer to unique payment
          gateway URL that is received as a response to the initiation request.
        </p>
        <p className={classes.title}>Handling Payment Notification:</p>
        <p className={classes.detailFontStyle}>
          Steps 4 & 5 describes how payment notification should be handled in
          merchant side. For any notification, FastPay will send HTTP message in
          POST method called IPN message to the IPN URL which is to be
          configured by the Merchant using Merchant Web Panel i.e.
          merchant.fast-pay.cash. After receiving the message, merchant
          developer must validate the message using Transaction Validation API
          of FastPay PGW.
        </p>
        <p className={classes.title}>Service Confirmation:</p>
        <p className={classes.detailFontStyle}>
          At Step 5, FastPay will redirect the customer to merchant’s website
          URL i.e. success_url or cancel_url or fail_url based on transaction
          status. At this stage, Merchant will display the notification of
          service confirmation in case of Success, otherwise, service denial in
          case of failure or cancellation of payment.
        </p>
        <br />
      </section>
      <section id="integration-steps">
        <p className={classes.title}>Integration Steps</p>
        <hr />
      
      </section>
      <section id="initiate-payment-sub">
        <p className={classes.title}>Initiate Payment</p>
        <p className={classes.detailFontStyle}>
          Provide Information about your customer and order to FastPay along
          with your store id to initiate the payment. Rest of the payment
          process will be done by FastPay.
        </p>
       
      </section>
      <section id="validate-payment-sub">
        <p className={classes.title}>Validate Payment</p>
        <p className={classes.detailFontStyle}>
          After successfully receiving the payment, FastPay PGW will redirect
          back the customer to the merchant website as per Success, Failed or
          Cancel status. You must validate the order with our validation API
          usingstore_id, store_password and order_id.
        </p>
    
      </section>
      <section id="update-your-transaction">
        <p className={classes.title}>Update your transaction</p>
        <p className={classes.detailFontStyle}>
          After validation of the transaction that you have received, depending
          on the status you have to update your transaction in your Database.
          The status will be Success, Failed or Cancelled depending on payment
          status.
        </p>
         
      </section>
      <section id="enable-most-advanced-IPN">
        <p className={classes.title}>Enable most advanced IPN</p>
        <p className={classes.detailFontStyle}>
          If somehow your consumer pays your payable amount to PGW side and
          FastPay accept it as Success, but your Website/Connectivity/Customer
          Network got downtime and is unable to update the payment at your side
          you can use IPN (Instant Payment Notification) . It will send a
          notification to your provided IPN URL in FastPay Merchant Dashboard to
          notify you and your database even if your user is unable to return
          back to your website
        </p>
        <div className={classes.alertStyle}>
          <List component="div" disablePadding>
            <ListItemButton
              disableRipple={true}
              sx={{ pl: 4 }}
              className={`${classes.alertTitle}`}
            >
              <ListItemText primary="Security Check:" />
            </ListItemButton>
            <ListItemButton
              disableRipple={true}
              sx={{ pl: 4 }}
              className={`${classes.alertItem} `}
            >
              <ListItemIcon>
                <CircleIcon />
              </ListItemIcon>
              <ListItemText primary="Track your order by transaction ID and check it in your database for existence" />
            </ListItemButton>
            <ListItemButton
              disableRipple={true}
              sx={{ pl: 4 }}
              className={`${classes.alertItem}`}
            >
              <ListItemIcon>
                <CircleIcon />
              </ListItemIcon>
              <ListItemText primary="Must validate amount and incoming amount from your Database." />
            </ListItemButton>
            <ListItemButton
              disableRipple={true}
              sx={{ pl: 4 }}
              className={`${classes.alertItem} `}
            >
              <ListItemIcon>
                <CircleIcon />
              </ListItemIcon>
              <ListItemText primary="Check for the status - Success, Failed, Cancel to update your order status." />
            </ListItemButton>
          </List>
        </div>
        <br />
      </section>
      <section id="payment-environment">
        <p className={classes.title}>Payment Environment</p>
        <hr />
        <p className={classes.title}>Base URL</p>
        <TableContainer component={Paper}>
          <Table sx={{ Width: 650 }} aria-label="simple table">
            <TableHead className={classes.tableStyle}>
              <TableRow>
                <TableCell>Environment</TableCell>
                <TableCell>Base URL</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {baseUrlData.map((row, i) => (
                <TableRow
                  key={i}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell>{row.Environment}</TableCell>
                  <TableCell>{row.BaseURL}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <br />
      </section>
      <section id="initiate-payment">
        <p className={classes.title}>APIs</p>
        <hr />
        <p className={classes.title}>Initiate Payment API</p>
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
                <TableCell>/api/v1/public/pgw/payment/initiation</TableCell>
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
        <br />
        <p className={classes.detailFontStyle}>Request Body:</p>
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
                <TableCell>store_id</TableCell>
                <TableCell> alphanumeric (8-32)</TableCell>
                <TableCell>Merchant Store ID. e.g. Aarong101</TableCell>
                <TableCell>Yes</TableCell>
              </TableRow>
              <TableRow
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell>store_password</TableCell>
                <TableCell> alphanumeric (8-32)</TableCell>
                <TableCell>Merchant Password ID. e.g. Aarong001</TableCell>
                <TableCell>Yes</TableCell>
              </TableRow>
              <TableRow
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell>order_password</TableCell>
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
                <TableCell>cart</TableCell>
                <TableCell> JSON</TableCell>
                <TableCell>
                  {" "}
                  Invoice in example JSON format as below.
                  <br />
                  <div>
                    <CopyBlock
                      language={"jsx"}
                      text={sample}
                      showLineNumbers={false}
                      theme={a11yLight}
                      wrapLines={false}
                      codeBlock 
                    />
                  </div>
                  
                </TableCell>
                <TableCell>Yes</TableCell>
              </TableRow>
              <TableRow
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell>bill_amount</TableCell>
                <TableCell> integer</TableCell>
                <TableCell> Total Payable. Minimum amount: 1000</TableCell>
                <TableCell>Yes</TableCell>
              </TableRow>
              <TableRow
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell>currency</TableCell>
                <TableCell> string (3)</TableCell>
                <TableCell>
                  Currency in which customer will be charged. e.g. IQD
                </TableCell>
                <TableCell>Yes</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
        <br />
        <p className={classes.detailFontStyle}>Sample Response:</p>
        <div>
          <CopyBlock
            language={"jsx"}
            text={sample}
            showLineNumbers={true}
            theme={dracula}
            wrapLines={true}
            codeBlock
          />
        </div>
        <br />
      </section>
      <section id="validate-payment">
        <p className={classes.title}>Payment Validation API</p>
        <hr />
        <p className={classes.detailFontStyle}>
          It is important to validate the transaction notification for security
          purposes.
        </p>
      
      </section>
      <section id="grab-the-notification">
        <p className={classes.title}>Step 1: Grap The Notification</p>
        <p className={classes.detailFontStyle}>
          As IPN URL is already set in the panel, almost all of the payment
          notifications will reach towards IPN URL prior to user redirection to
          the merchant website. So, it requires validation for amount and
          transaction properly to get rid of a fraudulent transaction.
        </p>
        <p className={classes.detailFontStyle}>
          The IPN will send a POST request to your IPN URL with the below data
        </p>
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
                <TableCell>store_id</TableCell>
                <TableCell> alphanumeric (8-32)</TableCell>
                <TableCell>Merchant Store ID. e.g. Aarong101</TableCell>
                <TableCell>Yes</TableCell>
              </TableRow>
              <TableRow
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell>store_password</TableCell>
                <TableCell> alphanumeric (8-32)</TableCell>
                <TableCell>Merchant Password ID. e.g. Aarong001</TableCell>
                <TableCell>Yes</TableCell>
              </TableRow>
              <TableRow
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell>order_password</TableCell>
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
                <TableCell>cart</TableCell>
                <TableCell> JSON</TableCell>
                <TableCell> Invoice in example JSON format as below.</TableCell>
                <TableCell>Yes</TableCell>
              </TableRow>
              <TableRow
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell>bill_amount</TableCell>
                <TableCell> integer</TableCell>
                <TableCell> Total Payable. Minimum amount: 1000</TableCell>
                <TableCell>Yes</TableCell>
              </TableRow>
              <TableRow
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell>currency</TableCell>
                <TableCell> string (3)</TableCell>
                <TableCell>
                  Currency in which customer will be charged. e.g. IQD
                </TableCell>
                <TableCell>Yes</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
        <br />
      </section>
      <section id="validating-a-payment">
        <p className={classes.title}>Step 2: Validating A Payment</p>
        <p className={classes.detailFontStyle}>
          No matter it’s an IPN notification at your IPN URL or Successful
          Redirection to your Success URL with order_id as URL Parameter, it is
          mandatory to validate a payment using Validation API to get rid of
          fraudulent activities.
        </p>

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
                <TableCell>store_id</TableCell>
                <TableCell> alphanumeric (8-32)</TableCell>
                <TableCell>Merchant Store ID. e.g. Aarong101</TableCell>
                <TableCell>Yes</TableCell>
              </TableRow>
              <TableRow
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell>store_password</TableCell>
                <TableCell> alphanumeric (8-32)</TableCell>
                <TableCell>Merchant Password ID. e.g. Aarong001</TableCell>
                <TableCell>Yes</TableCell>
              </TableRow>
              <TableRow
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell>order_password</TableCell>
                <TableCell> alphanumeric (8-32)</TableCell>
                <TableCell>
                  {" "}
                  Merchant Generated Unique Order ID. e.g. ARONGORD1001
                </TableCell>
                <TableCell>Yes</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
        <br />
        <br />
        <p className={classes.detailFontStyle}>Request Body:</p>
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
                <TableCell>store_id</TableCell>
                <TableCell> alphanumeric (8-32)</TableCell>
                <TableCell>Merchant Store ID. e.g. Aarong101</TableCell>
                <TableCell>Yes</TableCell>
              </TableRow>
              <TableRow
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell>store_password</TableCell>
                <TableCell> alphanumeric (8-32)</TableCell>
                <TableCell>Merchant Password ID. e.g. Aarong001</TableCell>
                <TableCell>Yes</TableCell>
              </TableRow>
              <TableRow
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell>order_password</TableCell>
                <TableCell> alphanumeric (8-32)</TableCell>
                <TableCell>
                  {" "}
                  Merchant Generated Unique Order ID. e.g. ARONGORD1001
                </TableCell>
                <TableCell>Yes</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
        <br />
      </section>
      <section id="refund-a-payment">
        <p className={classes.title}>Refund A Payment</p>
        <hr />
        <p className={classes.detailFontStyle}>
          FastPay Merchants can refund the transactions to their customers that
          are generated by the payment receive process. This API will help
          merchants to refund without using a mobile app or web interface, so
          this API does not require a regular AUTH token instead it uses
          STORE_ID and STORE_PASSWORD for authentication. This API also requires
          ORDER_ID to identify the transactions which will be refunded. There
          are other fields required such as recipient mobile number or MSISDN
          and AMOUNT. For each successful full refund both sender or receiver
          will not get any notification.
        </p>
        <br />
      </section>
      <section id="initiate-payment-api">
        <p className={classes.title}>Initiate Payment API</p>
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
                <TableCell>store_id</TableCell>
                <TableCell> alphanumeric (8-32)</TableCell>
                <TableCell>Merchant Store ID. e.g. Aarong101</TableCell>
                <TableCell>Yes</TableCell>
              </TableRow>
              <TableRow
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell>store_password</TableCell>
                <TableCell> alphanumeric (8-32)</TableCell>
                <TableCell>Merchant Password ID. e.g. Aarong001</TableCell>
                <TableCell>Yes</TableCell>
              </TableRow>
              <TableRow
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell>order_password</TableCell>
                <TableCell> alphanumeric (8-32)</TableCell>
                <TableCell>
                  {" "}
                  Merchant Generated Unique Order ID. e.g. ARONGORD1001
                </TableCell>
                <TableCell>Yes</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>

        <br />
        <p className={classes.detailFontStyle}>Request Body:</p>
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
                <TableCell>store_id</TableCell>
                <TableCell> alphanumeric (8-32)</TableCell>
                <TableCell>Merchant Store ID. e.g. Aarong101</TableCell>
                <TableCell>Yes</TableCell>
              </TableRow>
              <TableRow
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell>store_password</TableCell>
                <TableCell> alphanumeric (8-32)</TableCell>
                <TableCell>Merchant Password ID. e.g. Aarong001</TableCell>
                <TableCell>Yes</TableCell>
              </TableRow>
              <TableRow
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell>order_password</TableCell>
                <TableCell> alphanumeric (8-32)</TableCell>
                <TableCell>
                  {" "}
                  Merchant Generated Unique Order ID. e.g. ARONGORD1001
                </TableCell>
                <TableCell>Yes</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
        <br />
      </section>
      <section id="refund-validation">
        <p className={classes.title}>Refund Validation</p>
        <p className={classes.detailFontStyle}>
          Merchant can refund their transaction and check the status of your
          refund using ORDER_ID. API returns a boolean response based on
          validation status TRUE or FALSE, true means refund done, false means
          not refunded yet.
        </p>
        <p className={classes.title}>Request Endpoint:</p>
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
                <TableCell>store_id</TableCell>
                <TableCell> alphanumeric (8-32)</TableCell>
                <TableCell>Merchant Store ID. e.g. Aarong101</TableCell>
                <TableCell>Yes</TableCell>
              </TableRow>
              <TableRow
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell>store_password</TableCell>
                <TableCell> alphanumeric (8-32)</TableCell>
                <TableCell>Merchant Password ID. e.g. Aarong001</TableCell>
                <TableCell>Yes</TableCell>
              </TableRow>
              <TableRow
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell>order_password</TableCell>
                <TableCell> alphanumeric (8-32)</TableCell>
                <TableCell>
                  {" "}
                  Merchant Generated Unique Order ID. e.g. ARONGORD1001
                </TableCell>
                <TableCell>Yes</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
        <br />
        <p className={classes.detailFontStyle}>Request Body:</p>
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
                <TableCell>store_id</TableCell>
                <TableCell> alphanumeric (8-32)</TableCell>
                <TableCell>Merchant Store ID. e.g. Aarong101</TableCell>
                <TableCell>Yes</TableCell>
              </TableRow>
              <TableRow
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell>store_password</TableCell>
                <TableCell> alphanumeric (8-32)</TableCell>
                <TableCell>Merchant Password ID. e.g. Aarong001</TableCell>
                <TableCell>Yes</TableCell>
              </TableRow>
              <TableRow
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell>order_password</TableCell>
                <TableCell> alphanumeric (8-32)</TableCell>
                <TableCell>
                  {" "}
                  Merchant Generated Unique Order ID. e.g. ARONGORD1001
                </TableCell>
                <TableCell>Yes</TableCell>
              </TableRow>
            </TableBody>
          </Table>
          <br />{" "}
        </TableContainer>
        <br />
        <p className={classes.detailFontStyle}>Sample Response:</p>
        <div>
          <CopyBlock
            language={"jsx"}
            text={sample}
            showLineNumbers={true}
            theme={dracula}
            wrapLines={true}
            codeBlock
          />
        </div>
        <br />
        <br />
        <div className={classes.alertStyle}>
          <List component="div" disablePadding>
            <ListItemButton
              disableRipple={true}
              sx={{ pl: 4 }}
              className={`${classes.alertTitle}`}
            >
              <ListItemText primary="Security Check:" />
            </ListItemButton>
            <ListItemButton
              disableRipple={true}
              sx={{ pl: 4 }}
              className={`${classes.alertItem} `}
            >
              <ListItemIcon>
                <CircleIcon />
              </ListItemIcon>
              <ListItemText primary="Track your order by transaction ID and check it in your database for existence" />
            </ListItemButton>
            <ListItemButton
              disableRipple={true}
              sx={{ pl: 4 }}
              className={`${classes.alertItem}`}
            >
              <ListItemIcon>
                <CircleIcon />
              </ListItemIcon>
              <ListItemText primary="Must validate amount and incoming amount from your Database." />
            </ListItemButton>
            <ListItemButton
              disableRipple={true}
              sx={{ pl: 4 }}
              className={`${classes.alertItem} `}
            >
              <ListItemIcon>
                <CircleIcon />
              </ListItemIcon>
              <ListItemText primary="Check for the status - Success, Failed, Cancel to update your order status." />
            </ListItemButton>
          </List>
        </div>
      </section>
    </div>
  );
};

export default GuildDetailSide;
