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

const useStyles = makeStyles({
  title: {
    color: "#262D54",
    fontSize: "24px",
    fontWeight: 700,
  },
});
const GuildDetailSide = ({ active, setActive, clickedOn, setClickedOn }) => {
  const baseUrlData = [
    { Environment: "Staging", BaseURL: "https://staging-sdk.fast-pay.iq" },
    { Environment: "Production", BaseURL: "https://sdk.fast-pay.iq" },
  ];

  const classes = useStyles();
  const [activeUseEffect, setActiveUseEffect] = useState(false);
  useEffect(() => {
    if (activeUseEffect === true) {
      const yOffset = -70;
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
        <p>
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
        <p>
          Upon first time successful login to merchant web panel i.e.
          merchant.fast-pay.cash using valid login credentials La Reve will be
          prompted to update their password. Once the password update operation
          is done the system will redirect logged in-store user to their
          dedicated dashboard where they can do necessary operations dedicated
          to online merchants like -
        </p>
      </section>
      <section id="how-it-works">
        <p className={classes.title}>How It Work</p>
        <img src={steps} width="100%" />
        <p>
          The above steps can be categorised in three sections based on the
          development process described below.
        </p>
        <p className={classes.title}>Initiation of Transaction:</p>
        <p>
          The Steps 1, 2 and 3 are used to make request for a new transaction.
          After getting confirmation of checkout from customer, merchant server
          sends a request to FastPay server to get an unique URL to redirect
          customer to. If required credentials and data are valid, then FastPay
          provides a Redirect URL to Merchant System. After receiving the
          Redirect URL, Merchant System redirects the customer to unique payment
          gateway URL that is received as a response to the initiation request.
        </p>
        <p className={classes.title}>Handling Payment Notification:</p>
        <p>
          Steps 4 & 5 describes how payment notification should be handled in
          merchant side. For any notification, FastPay will send HTTP message in
          POST method called IPN message to the IPN URL which is to be
          configured by the Merchant using Merchant Web Panel i.e.
          merchant.fast-pay.cash. After receiving the message, merchant
          developer must validate the message using Transaction Validation API
          of FastPay PGW.
        </p>
        <p className={classes.title}>Service Confirmation:</p>
        <p>
          At Step 5, FastPay will redirect the customer to merchant’s website
          URL i.e. success_url or cancel_url or fail_url based on transaction
          status. At this stage, Merchant will display the notification of
          service confirmation in case of Success, otherwise, service denial in
          case of failure or cancellation of payment.
        </p>
      </section>
      <section id="integration-steps">
        <p className={classes.title}>Integration Steps</p>
        <hr />
      </section>
      <section id="initiate-payment-sub">
        <p className={classes.title}>Initiate Payment</p>
        <p>
          Provide Information about your customer and order to FastPay along
          with your store id to initiate the payment. Rest of the payment
          process will be done by FastPay.
        </p>
      </section>
      <section id="validate-payment-sub">
        <p className={classes.title}>Validate Payment</p>
        <p>
          After successfully receiving the payment, FastPay PGW will redirect
          back the customer to the merchant website as per Success, Failed or
          Cancel status. You must validate the order with our validation API
          usingstore_id, store_password and order_id.
        </p>
      </section>
      <section id="update-your-transaction">
        <p className={classes.title}>Update your transaction</p>
        <p>
          After validation of the transaction that you have received, depending
          on the status you have to update your transaction in your Database.
          The status will be Success, Failed or Cancelled depending on payment
          status.
        </p>
      </section>
      <section id="enable-most-advanced-IPN">
        <p className={classes.title}>Enable most advanced IPN</p>
        <p>
          If somehow your consumer pays your payable amount to PGW side and
          FastPay accept it as Success, but your Website/Connectivity/Customer
          Network got downtime and is unable to update the payment at your side
          you can use IPN (Instant Payment Notification) . It will send a
          notification to your provided IPN URL in FastPay Merchant Dashboard to
          notify you and your database even if your user is unable to return
          back to your website
        </p>
      </section>
      <section id="payment-environment">
        <p className={classes.title}>Payment Environment</p>
        <hr />
        <p className={classes.title}>Base URL</p>
        <TableContainer component={Paper}>
          <Table sx={{ Width: 650 }} aria-label="simple table">
            <TableHead>
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
      </section>
      <section id="initiate-payment">
        <p className={classes.title}>APIs</p>
        <hr />
        <p className={classes.title}>Initiate Payment API</p>
        <TableContainer component={Paper}>
          <Table sx={{ Width: 650 }} aria-label="simple table">
            <TableHead>
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
        <p>Request Body:</p>
        <TableContainer component={Paper}>
          <Table sx={{ Width: 650 }} aria-label="simple table">
            <TableHead>
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
                  {/* [
    {
        "name": "Scarf",
        "qty": 1,
        "unit_price": 5000,
        "sub_total": 5000,
    },
    {
        "name": "T-Shirt",
        "qty": 2,
        "unit_price": 10000,
        "sub_total": 20000,
    },
] */}
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
      </section>
      <section id="validate-payment">
        <p className={classes.title}>Payment Validation API</p>
        <hr />
        <p>
          It is important to validate the transaction notification for security
          purposes.
        </p>
      </section>
      <section id="grab-the-notification">
        <p className={classes.title}>Step 1: Grap The Notification</p>
        <p>
          As IPN URL is already set in the panel, almost all of the payment
          notifications will reach towards IPN URL prior to user redirection to
          the merchant website. So, it requires validation for amount and
          transaction properly to get rid of a fraudulent transaction.
        </p>
        <p>
        The IPN will send a POST request to your IPN URL with the below data
        </p>
      </section>
      <section
        style={{ height: "450px", border: "10px solid" }}
        id="validating-a-payment"
      >
        id="validating-a-payment"
      </section>
      <section
        style={{ height: "450px", border: "10px solid" }}
        id="refund-a-payment"
      >
        id="validating-a-payment"
      </section>
      <section
        style={{ height: "450px", border: "10px solid" }}
        id="initiate-payment-api"
      >
        id="initiate-payment-api"
      </section>
      <section
        style={{ height: "450px", border: "10px solid" }}
        id="refund-validation"
      >
        id="refund-validation"
      </section>
    </div>
  );
};

export default GuildDetailSide;
