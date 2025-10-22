import React, { useState, useEffect, useContext } from "react";
import { makeStyles } from "@mui/styles";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import CircleIcon from "@mui/icons-material/Circle";
import { MenuContext } from "../../context/MenuContext";

import { ActiveMenuContext } from "../../context/ActiveMenuContext";
import { useHistory } from "react-router-dom";

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
    fontSize: "18px",
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

const IOSGuideDetailSide = () => {
  const sampleTestCodeData = `class ViewController: UIViewController, FastPayDelegate {\n    \n    override func viewDidLoad() {\n        super.viewDidLoad()\n        \n    }\n\n    @IBAction func showAction(_ sender: UIButton){\n        callSDK()\n    }\n    \n    func callSDK(){ \n        let testObj = Fastpay(storeId: "1953_693", storePassword: "Password100@", orderId: "order240", amount: 500, currency: .IQD) \n        testObj.delegate = self\n        testObj.start(in: self, for: .Sandbox)\n    }\n    \n    func fastpayTransactionSucceeded(with transaction: FPTransaction) {\n\n        if let transactionId = transaction.transactionId, let orderID = transaction.orderId, let billAmount = transaction.amount, let currency = transaction.currency, let customerMobileNo = transaction.customerMobileNo, let name = transaction.customerName, let status = transaction.status, let transactionTime = transaction.transactionTime{\n            print("Transaction ID : \\(transactionId)")\n            print("Order ID : \\(orderID)")\n            print("Amount : \\(orderID)")\n            print("Bill Amount : \\(billAmount)")\n            print("Currency : \\(currency)")\n            print("Mobile Number : \\(customerMobileNo)")\n            print("Name : \\(name)")\n            print("Status : \\(status)")\n            print("Transaction Time : \\(transactionTime)")\n        }\n    }\n    \n    func fastpayTransactionFailed(with orderId: String) {\n        print("Failed Order ID: \\(orderId)")\n    }\n}`;
  const classes = useStyles();
  const { fastPayMenuList, addList } = useContext(MenuContext);
  const { addActiveId, fastPayActiveId } = useContext(ActiveMenuContext);
  let history = useHistory();
  const topic = fastPayActiveId.id;

  const [activeUseEffect, setActiveUseEffect] = useState(false);

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
            addActiveId({ id: sectionId });
          }
        }
      });
    });
    if (fastPayActiveId.id === "") {
      addActiveId({ id: "scaffolding-provided" });
    }
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
          <ListItem
            disableRipple={true}
            sx={{ pl: 4 }}
            className={`${classes.ItemStyle}`}
          >
            <ListItemIcon>
              <CircleIcon />
            </ListItemIcon>

            <a
              href="https://github.com/Fast-Solution-Inc/FastPay-IOS-SDK"
              target="_blank"
            >
              Download SDK
            </a>
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
            text={`start(in: ….)  → your view controller class that you want the SDK to present on\n            storeId → Merchant’s provided store ID.\n            storePassword → Merchant’s provided store password.\n            orderId → Merchant’s provided order ID.\n            amount → Payable amount in the transaction.\n            currency → In which currency order will  perform.`}
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
            text={`transactionId: String? \norderId: String? \namount: Int? \ncurrency: FPCurrency? \ncustomerMobileNo: String? \ncustomerName: String? \nstatus: String? \ntransactionTime: String?`}
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
