import React, { useState, useEffect } from "react";
import { makeStyles } from "@mui/styles";
import steps from "../../assets/images/steps.jpg";
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

import { a11yLight, CopyBlock, dracula } from "react-code-blocks";

const useStyles = makeStyles({
  title: {
    color: "#262D54",
    fontSize: "24px",
    fontWeight: 700,
    margin: 0,
  },
  subTitle: {
    color: "#262D54",
    fontSize: "20px",
    fontWeight: 700,
    margin: 0,
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
  },
  tableTitle: {
    fontSize: "20px",
    color: "#181c34",
    marginBottom: "35px !important",
    marginTop: "35px !important",
  },
  tableStyle: {
    background: "rgba(15, 188, 249,0.1)",
    "& th": {
      color: "#262D54",
      fontSize: "18px",
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
    },
  },
  ItemStyle: {
    color: "#262D54",
    cursor: "default",
    padding: "0px 32px !important",

    "& span": {
      fontSize: "16px",
      cursor: "default",
    },
    ["& .MuiListItemIcon-root"]: {
      minWidth: "24px",
    },
    ["& .MuiSvgIcon-root"]: {
      color: "#262D54",
      fontSize: "10px",
    },
  },
  alertItem: {
    color: "#E74C3C",
    cursor: "default",
    padding: "0px 32px !important",

    "& span": {
      fontSize: "16px",
      cursor: "default",
    },
    ["& .MuiListItemIcon-root"]: {
      minWidth: "24px",
    },
    ["& .MuiSvgIcon-root"]: {
      color: "#E74C3C",
      fontSize: "10px",
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
});
const IOSGuideDetailSide = ({ setActive, clickedOn }) => {
  const sampleTestCodeData = `class ViewController: UIViewController, FastPayDelegate {
    
    override func viewDidLoad() {
        super.viewDidLoad()
        
    }

    @IBAction func showAction(_ sender: UIButton){
        callSDK()
    }
    
    func callSDK(){
        let testObj = Fastpay(storeId: "1953_693", storePassword: "Password100@", orderId: "order240", amount: 500, currency: .IQD)
        testObj.delegate = self
        testObj.start(in: self, for: .Sandbox)
    }
    
    func fastpayTransactionSucceeded(with transaction: FPTransaction) {

        if let transactionId = transaction.transactionId, let orderID = transaction.orderId, let billAmount = transaction.amount, let currency = transaction.currency, let customerMobileNo = transaction.customerMobileNo, let name = transaction.customerName, let status = transaction.status, let transactionTime = transaction.transactionTime{
            print("Transaction ID : \(transactionId)")
            print("Order ID : \(orderID)")
            print("Amount : \(orderID)")
            print("Bill Amount : \(billAmount)")
            print("Currency : \(currency)")
            print("Mobile Number : \(customerMobileNo)")
            print("Name : \(name)")
            print("Status : \(status)")
            print("Transaction Time : \(transactionTime)")
        }
    }
    
    func fastpayTransactionFailed(with orderId: String) {
        print("Failed Order ID: \(orderId)")
    }
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
      <br />
      <section
        className={classes.sectionMarginBottom}
        id="scaffolding-provided"
      >
        <p className={classes.title}>Scaffolding Provided</p>
        <hr />
        <p className={classes.detailFontStyle}>
          This repository provides the following components that are common to
          our open source projects:
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
            <ListItemText primary="FastpayMerchantSDK.framework.zip" />
          </ListItem>
          <ListItem
            disableRipple={true}
            sx={{ pl: 4 }}
            className={`${classes.ItemStyle}`}
          >
            <ListItemIcon>
              <CircleIcon />
            </ListItemIcon>
            <ListItemText primary="FastPaySDKDocumentation.pdf" />
          </ListItem>
        </List>
      </section>
      <section className={classes.sectionMarginBottom} id="get-started">
        <p className={classes.title}>Get Started</p>
        <hr />
        <p className={classes.detailFontStyle}>
          Drag and drop the framework file in your project. Check ‘Copy items if
          needed’ and select your target.
        </p>
        <p className={classes.detailFontStyle}>
          After successfully adding the framework file in your project, select
          project file from Xcode’s Project Navigator and follow the selections
          below:
        </p>
        <p className={classes.detailFontStyle}>
          Target → General → Framework, Libraries and Embedded Content and then
          select ​Embed & Sign​ for the added framework as shown below
        </p>
      </section>
      <section className={classes.sectionMarginBottom} id="implementation">
        <p className={classes.title}>Implementation</p>
        <hr />
        <p className={classes.detailFontStyle}>
          Import FastpayMerchantSDK in your class
        </p>
        <div className={classes.sectionMarginBottom}>
          <CopyBlock
            language={"jsx"}
            text={`import FastpayMerchantSDK`}
            showLineNumbers={true}
            theme={dracula}
            wrapLines={true}
            codeBlock
          />
        </div>
        <p className={classes.detailFontStyle}>
          Make your class conform to FastPayDelegate delegate
        </p>
        <div className={classes.sectionMarginBottom}>
          <CopyBlock
            language={"jsx"}
            text={`class ViewController: UIViewController, FastPayDelegate {`}
            showLineNumbers={true}
            theme={dracula}
            wrapLines={true}
            codeBlock
          />
        </div>
        <p className={classes.detailFontStyle}>
          Initialize the instance of FastPay
        </p>
        <div className={classes.sectionMarginBottom}>
          <CopyBlock
            language={"jsx"}
            text={`let testObj = Fastpay(storeId: "*****", storePassword: "****", orderId: "*****", amount: 500, currency: .IQD)`}
            showLineNumbers={true}
            theme={dracula}
            wrapLines={true}
            codeBlock
          />
        </div>
        <p className={classes.detailFontStyle}>
          Set your class as delegate for FastPayDelegate
        </p>
        <div className={classes.sectionMarginBottom}>
          <CopyBlock
            language={"jsx"}
            text={`testObj.delegate = self`}
            showLineNumbers={true}
            theme={dracula}
            wrapLines={true}
            codeBlock
          />
        </div>
        <p className={classes.detailFontStyle}>
          Parameters to pass when initiating
        </p>
        <div className={classes.sectionMarginBottom}>
          <CopyBlock
            language={"jsx"}
            text={`start(in: ….)  → your view controller class that you want the SDK to present on
            storeId → Merchant’s provided store ID.
            storePassword → Merchant’s provided store password.
            orderId → Merchant’s provided order ID.
            amount → Payable amount in the transaction.
            currency → In which currency order will  perform.`}
            showLineNumbers={true}
            theme={dracula}
            wrapLines={true}
            codeBlock
          />
        </div>
        <div className={classes.sectionMarginBottom}>
          <CopyBlock
            language={"jsx"}
            text={`Fastpay(storeId: "*****", storePassword: "****", orderId: "*****", amount: 500, currency: .IQD)`}
            showLineNumbers={true}
            theme={dracula}
            wrapLines={true}
            codeBlock
          />
        </div>

        <p className={classes.detailFontStyle}>
          Implement FastPaySDK delegate method to get transaction result
        </p>
        <p className={classes.detailFontStyle}>For Success Case</p>
        <div className={classes.sectionMarginBottom}>
          <CopyBlock
            language={"jsx"}
            text={`func fastpayTransactionSucceeded(with transaction: FPTransaction) {}`}
            showLineNumbers={true}
            theme={dracula}
            wrapLines={true}
            codeBlock
          />
        </div>
        <p className={classes.detailFontStyle}>
          You will get the following data from transaction object in the
          delegate function
        </p>
        <div className={classes.sectionMarginBottom}>
          <CopyBlock
            language={"jsx"}
            text={`transactionId: String? 
orderId: String? 
amount: Int? 
currency: FPCurrency? 
customerMobileNo: String? 
customerName: String? 
status: String? 
transactionTime: String?`}
            showLineNumbers={true}
            theme={dracula}
            wrapLines={true}
            codeBlock
          />
        </div>
      </section>
      <section className={classes.sectionMarginBottom} id="sample-test-code">
        <p className={classes.title}>Sample Test Code</p>
        <hr className={classes.sectionMarginBottom} />

        <div className={classes.copyBlockStyle}>
          <CopyBlock
            language={"jsx"}
            text={sampleTestCodeData}
            showLineNumbers={true}
            theme={dracula}
            wrapLines={true}
            codeBlock
          />
        </div>
      </section>
    </div>
  );
};

export default IOSGuideDetailSide;
