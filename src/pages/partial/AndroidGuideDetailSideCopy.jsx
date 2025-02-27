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
const AndroidGuideDetailSideCopy = () => {
  const android = `android{
    ...
    compileOptions {
        sourceCompatibility JavaVersion.VERSION_1_8
        targetCompatibility JavaVersion.VERSION_1_8
    }
}`;

  const dependencies = `dependencies {
  implementation fileTree(include: ['*.jar','*.aar'], dir: 'libs')
  implementation 'com.journeyapps:zxing-android-embedded:4.1.0'
}`;

  const FastPaySDK = `FastpayRequest request = new FastpayRequest(this, "1111_1111", "password1234",amount, orderId, FastpaySDK.SANDBOX);
startActivityForResult(request.getIntent(), FASTPAY_REQUEST_CODE);`;

  const allprojects = `allprojects {
  repositories {
      google()
      mavenCentral()
  }
}`;

  const importData = `import com.fastpay.payment.model.merchant.FastpayRequest;
import com.fastpay.payment.model.merchant.FastpayResult;`;

  const overrideData = `@Override
protected void onActivityResult(int requestCode, int resultCode, Intent data) {
   super.onActivityResult(requestCode, resultCode, data);

   if (requestCode == FASTPAY_REQUEST_CODE) {
       switch (resultCode) {
           case Activity.RESULT_OK:
               if (data != null && data.hasExtra(FastpayResult.EXTRA_PAYMENT_RESULT)) {
                   FastpayResult result = data.getParcelableExtra(FastpayResult.EXTRA_PAYMENT_RESULT);
                   Log.d("payment_result", result.getTransactionId());
               }
               break;
           case Activity.RESULT_CANCELED:
               if (data != null && data.hasExtra(FastpayRequest.EXTRA_PAYMENT_MESSAGE)) {
                   String message = data.getStringExtra(FastpayRequest.EXTRA_PAYMENT_MESSAGE);
                   Log.d("payment_result", "Canceled : " + message);
               }
               break;
       }
   }`;

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
          This repository provides the following components:
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
            <ListItemText primary="FastpaySDK.aar" />
          </ListItem>
          <ListItem
            disableRipple={true}
            sx={{ pl: 4 }}
            className={`${classes.ItemStyle}`}
          >
            <ListItemIcon>
              <CircleIcon />
            </ListItemIcon>
            <ListItemText primary="Usermanual.pdf (Documentation)" />
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
              href="https://github.com/Fast-Solution-Inc/FastPay-Android-SDK"
              target="_blank"
            >
              Download SDK
            </a>
          </ListItem>
        </List>
      </section>
      <section className={classes.sectionMarginBottom} id="steps">
        <p className={classes.title}>Steps</p>
        <hr />
        <p className={classes.detailFontStyle}>
          Please follow the below steps to integrate the payment SDK to an
          applications.
        </p>
      </section>
      <section className={classes.sectionMarginBottom} id="step-1">
        <p className={classes.subTitle}>Step-1</p>
        <p className={classes.detailFontStyle}>
          Users need to add below dependency to their application module
          build.gradle file :
        </p>
        <div className={classes.copyBlockStyle}>
          <CopyBlock
            language={"jsx"}
            text={android}
            showLineNumbers={true}
            theme={dracula}
            wrapLines={true}
            codeBlock
          />
        </div>
        <br />
        <div className={classes.copyBlockStyle}>
          <CopyBlock
            language={"jsx"}
            text={dependencies}
            showLineNumbers={true}
            theme={dracula}
            wrapLines={true}
            codeBlock
          />
        </div>
      </section>
      <section className={classes.sectionMarginBottom} id="step-2">
        <p className={classes.subTitle}>Step-2</p>
        <p className={classes.detailFontStyle}>
          Users need to add below dependency to their project module
          build.gradle file :
        </p>
        <div className={classes.copyBlockStyle}>
          <CopyBlock
            language={"jsx"}
            text={allprojects}
            showLineNumbers={true}
            theme={dracula}
            wrapLines={true}
            codeBlock
          />
        </div>
      </section>
      <section className={classes.sectionMarginBottom} id="step-3">
        <p className={classes.subTitle}>Step-3 (Implementation)</p>
        <p className={classes.tableTitle}>Import FastPaySDK in your class</p>
        <div className={classes.copyBlockStyle}>
          <CopyBlock
            language={"jsx"}
            text={importData}
            showLineNumbers={true}
            theme={dracula}
            wrapLines={true}
            codeBlock
          />
        </div>
        <p className={classes.tableTitle}>Initiate FastPaySDK</p>
        <List component="div" disablePadding className={classes.listStyle}>
          <ListItem
            disableRipple={true}
            sx={{ pl: 4 }}
            className={`${classes.ItemStyle} `}
          >
            <ListItemIcon>
              <CircleIcon />
            </ListItemIcon>
            <ListItemText>
              <strong>Store ID:</strong> Merchant’s Store Id to initiate
              transaction
            </ListItemText>
          </ListItem>
          <ListItem
            disableRipple={true}
            sx={{ pl: 4 }}
            className={`${classes.ItemStyle} `}
          >
            <ListItemIcon>
              <CircleIcon />
            </ListItemIcon>
            <ListItemText>
              <strong>Store Password:</strong> Merchant’s Store password to
              initiate transaction
            </ListItemText>
          </ListItem>
          <ListItem
            disableRipple={true}
            sx={{ pl: 4 }}
            className={`${classes.ItemStyle} `}
          >
            <ListItemIcon>
              <CircleIcon />
            </ListItemIcon>
            <ListItemText>
              <strong>Order ID/ Bill No:</strong> Order ID/Bill number for the
              transaction, this value should be unique in every transaction
            </ListItemText>
          </ListItem>
          <ListItem
            disableRipple={true}
            sx={{ pl: 4 }}
            className={`${classes.ItemStyle} `}
          >
            <ListItemIcon>
              <CircleIcon />
            </ListItemIcon>
            <ListItemText>
              <strong>Amount:</strong> Payable amount in the transaction ex:
              “1000”
            </ListItemText>
          </ListItem>
          <ListItem
            disableRipple={true}
            sx={{ pl: 4 }}
            className={`${classes.ItemStyle} `}
          >
            <ListItemIcon>
              <CircleIcon />
            </ListItemIcon>
            <ListItemText>
              <strong>Currency:</strong> Payment currency in the transaction
              (Default: IQD)
            </ListItemText>
          </ListItem>
          <ListItem
            disableRipple={true}
            sx={{ pl: 4 }}
            className={`${classes.ItemStyle} `}
          >
            <ListItemIcon>
              <CircleIcon />
            </ListItemIcon>
            <ListItemText>
              <strong>Environment:</strong> Payment Environment to initiate
              transaction (SANDBOX for test & PRODUCTION for real life
              transaction)
            </ListItemText>
          </ListItem>
        </List>
        <br />
        <div className={classes.sectionMarginBottom}>
          <CopyBlock
            language={"jsx"}
            text={FastPaySDK}
            showLineNumbers={true}
            theme={dracula}
            wrapLines={true}
            codeBlock
          />
        </div>
        <div className={classes.sectionMarginBottom}>
          <p className={classes.detailFontStyle}>
            Receive Payment result Implement onActivityResult() overridden
            method to get transaction success & failure result using result
            code. Transaction success result can be receive from FastpayResult
            parcelable model using FastpayResult.EXTRA_PAYMENT_RESULT key and
            failure message can be receive as string using
            FastpayRequest.EXTRA_PAYMENT_MESSAGE key.
          </p>
          <p className={classes.tableTitle}>Payment Success Data definition</p>
          <List component="div" disablePadding className={classes.listStyle}>
            <ListItem
              disableRipple={true}
              sx={{ pl: 4 }}
              className={`${classes.ItemStyle} `}
            >
              <ListItemIcon>
                <CircleIcon />
              </ListItemIcon>
              <ListItemText>
                <strong>Transaction Status:</strong> Payment status weather it
                is success / failed.
              </ListItemText>
            </ListItem>
            <ListItem
              disableRipple={true}
              sx={{ pl: 4 }}
              className={`${classes.ItemStyle} `}
            >
              <ListItemIcon>
                <CircleIcon />
              </ListItemIcon>
              <ListItemText>
                <strong>Transaction ID:</strong> If payment is successful then a
                transaction id will be available.
              </ListItemText>
            </ListItem>
            <ListItem
              disableRipple={true}
              sx={{ pl: 4 }}
              className={`${classes.ItemStyle} `}
            >
              <ListItemIcon>
                <CircleIcon />
              </ListItemIcon>
              <ListItemText>
                <strong>Order ID:</strong> Unique Order ID/Bill number for the
                transaction which was passed at initiation time.
              </ListItemText>
            </ListItem>
            <ListItem
              disableRipple={true}
              sx={{ pl: 4 }}
              className={`${classes.ItemStyle} `}
            >
              <ListItemIcon>
                <CircleIcon />
              </ListItemIcon>
              <ListItemText>
                <strong>Payment Amount:</strong> Payment amount for the
                transaction. “1000”
              </ListItemText>
            </ListItem>
            <ListItem
              disableRipple={true}
              sx={{ pl: 4 }}
              className={`${classes.ItemStyle} `}
            >
              <ListItemIcon>
                <CircleIcon />
              </ListItemIcon>
              <ListItemText>
                <strong>Payment Currency:</strong> Payment currency for the
                transaction. (Default: IQD)
              </ListItemText>
            </ListItem>
            <ListItem
              disableRipple={true}
              sx={{ pl: 4 }}
              className={`${classes.ItemStyle} `}
            >
              <ListItemIcon>
                <CircleIcon />
              </ListItemIcon>
              <ListItemText>
                <strong>Payee Name:</strong> Payee name for a successful
                transaction.
              </ListItemText>
            </ListItem>
            <ListItem
              disableRipple={true}
              sx={{ pl: 4 }}
              className={`${classes.ItemStyle} `}
            >
              <ListItemIcon>
                <CircleIcon />
              </ListItemIcon>
              <ListItemText>
                <strong>Payee Mobile Number:</strong> Payee name for a
                successful transaction.
              </ListItemText>
            </ListItem>
            <ListItem
              disableRipple={true}
              sx={{ pl: 4 }}
              className={`${classes.ItemStyle} `}
            >
              <ListItemIcon>
                <CircleIcon />
              </ListItemIcon>
              <ListItemText>
                <strong>Payment Time:</strong> Payment occurrence time as the
                timestamp.
              </ListItemText>
            </ListItem>
          </List>
        </div>
        <div
          className={`${classes.sectionMarginBottom} ${classes.copyBlockStyle}`}
        >
          <CopyBlock
            language={"jsx"}
            text={overrideData}
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

export default AndroidGuideDetailSideCopy;
