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
import { CopyBlock, dracula } from "react-code-blocks";
import { Alert } from "@mui/material";

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
    margin: "20px 0 10px 0",
    [theme.breakpoints.down("md")]: {
      fontSize: "15px",
    },
  },
  subTitle2: {
    color: "#262D54",
    fontSize: "18px",
    fontWeight: 700,
    margin: "20px 0 10px 0",
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
  tableTitle2: {
    fontSize: "20px",
    color: "#181c34",
    marginBottom: "10px !important",
    marginTop: "35px !important",
    [theme.breakpoints.down("md")]: {
      fontSize: "15px",
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
  ItemStyleTwo: {
    color: "#000",
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
  sectionMarginBottom: {
    marginBottom: "35px",
  },
  copyBlockStyle: {
    "& button": {
      display: "none",
    },
  },
}));

const FlutterGuideDetailSide = () => {
  const classes = useStyles();
  const { fastPayMenuList, addList } = useContext(MenuContext);
  const { addActiveId, fastPayActiveId } = useContext(ActiveMenuContext);
  let history = useHistory();
  const topic = fastPayActiveId.id;
  const [activeUseEffect, setActiveUseEffect] = useState(false);

  const installationCode = `fastpay_merchant: ^1.3.0
#To handle callbacks (Redirection) from fastpay wallet application.
app_links: ^4.0.0`;

  const initiatePaymentCode = `import 'package:fastpay_merchant/fastpay_flutter_sdk.dart'; 
import 'package:fastpay_merchant/models/fastpay_payment_request.dart';    
 /* * * Add this code on init method */ 
FastpayFlutterSdk.instance.fastpayPaymentRequest = FastpayPaymentRequest(
      "******STORE ID*****"",       // (Required) Replace with your actual store ID
      "******STORE PASSWORD****"",   // (Required) Replace with your actual store password
      "450",                      // AMOUNT
      "YOUR ORDER ID",            // Order ID (replace with your actual order ID)
      "CallBack_URI_Ios",         //IOS callback URI e.g appfpclientFastpayFlutterSdk
      "CallBack_URI_Android",     //Android callback URI e.g sdk://fp.com
      false,                      // isProduction (set to true for production environment)
      (status, message, result) => {  // Callback handler
        debugPrint('MESSAGE: \$message');
        debugPrint('RESULT: \${result.toString()}');
      },
    );`;

  const startPaymentCode = `/* * * Use this code to navigate to flutter SDK. Set the context same as the Navigator is using. If you are using the Getx navigation try to use "Get.context" */ 
FastpayFlutterSdk.instance.context = context; 
Navigator.of(context).push(MaterialPageRoute(builder: (_) => const SdkInitializeScreen()));`;

  const callbackHandlingCode = `//Using app_links
import 'package:app_links/app_links.dart';
Future<void> _handleIncomingIntent() async {
    final _appLinks = AppLinks();
    final appLink = await _appLinks.getInitialAppLink();
      if (appLink != null) {
        var uri = Uri.parse(appLink.toString());
        debugPrint(' here you can redirect from url as per your need ');
      }
      _linkSubscription = _appLinks.uriLinkStream.listen((uriValue) {
        debugPrint('Redirect URI:.................\$uriValue');
      },onError: (err){
        debugPrint('====>>> error : \$err');
      },onDone: () {
        _linkSubscription?.cancel();
      },);
  }`;

  const androidManifestCode = `<intent-filter>
    <action android:name="android.intent.action.VIEW" />
    <category android:name="android.intent.category.DEFAULT" />
    <category android:name="android.intent.category.BROWSABLE" />
    <data
      android:scheme="sdk"
      android:host="fp.com" />
  </intent-filter>`;

  const iosInfoPlistCode = `<key>CFBundleURLTypes</key>
  <array>
  <dict>
  <key>CFBundleURLSchemes</key>
  <array>
  <string>appfpclientFastpayFlutterSdk</string> //Your given URI from SDK initialization request
  </array>
  </dict>
  </array>`;

  const callbackUrlPattern = `callback URI pattern (SUCCESS): appfpclientFastpayFlutterSdk/further/paths?status=success&transaction_id=XXXX&order_id=XXXX&amount=XXX&currency=XXX&mobile_number=XXXXXX&time=XXXX&name=XXXX
callback URI pattern (FAILED): appfpclientFastpayFlutterSdk/further/paths?status=failed&order_id=XXXXX`;

  const sdkStatusCode = `enum SDKStatus{    
INIT,
PAYMENT_WITH_FASTPAY_SDK,
PAYMENT_WITH_FASTPAY_APP, 
CANCEL, 
SUCCESS, 
FAILED
}`;

  useEffect(() => {
    if (activeUseEffect === true) {
      if (fastPayMenuList.goTo !== null && fastPayMenuList.goTo !== "") {
        const yOffset = -70;
        const element = document.getElementById(fastPayMenuList.goTo);
        if (element) {
          const y =
            element.getBoundingClientRect().top + window.pageYOffset + yOffset;
          window.scrollTo({ top: y, behavior: "smooth" });
        }
        addList({ goTo: "" });
      }
    }
    setActiveUseEffect(true);
  }, [fastPayMenuList.goTo]);

  useEffect(() => {
    const sections = document.querySelectorAll("section");
    let lastId = topic;

    const handleScroll = () => {
      const scrollCheck = window.scrollY;
      sections.forEach((section) => {
        const sectionTop = section.offsetTop - 70;
        const sectionHeight = section.clientHeight;
        const sectionBottom = sectionTop + sectionHeight;
        if (scrollCheck >= sectionTop && scrollCheck <= sectionBottom) {
          const sectionId = section.getAttribute("id");
          if (lastId !== sectionId) {
            lastId = sectionId;
            addActiveId({ id: sectionId });
          }
        }
      });
    };

    document.addEventListener("scroll", handleScroll);
    if (fastPayActiveId.id === "") {
      addActiveId({ id: "overview" });
    }
    return () => document.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div>
      <br />
      <section className={classes.sectionMarginBottom} id="overview">
        <p className={classes.title}>FastPay Developers Arena</p>
        <hr />
        <p className={classes.detailFontStyle}>
          Accept payments with FastPay's APIs. Our simple and easy-to-integrate
          APIs allow for less effort in processing payments. This is an official
          support channel, but our APIs support both Android and iOS.
          <br />
          <a href="https://pub.dev/packages/fastpay_merchant" target="_blank">
            SDK Installation Guide
          </a>
        </p>

        <p className={classes.subTitle}>SDK flow</p>
        <img
          src="https://raw.githubusercontent.com/Fast-Solution-Inc/FastPay-Android-SDK/main/flow.png"
          alt="SDK flow"
          style={{ maxWidth: "100%", marginBottom: "15px" }}
        />

        <p className={classes.subTitle}>Screenshots</p>
        <div style={{ display: "flex", gap: "10px", marginBottom: "15px" }}>
          <img
            src="https://raw.githubusercontent.com/Fast-Solution-Inc/FastPay-Android-SDK/main/1.jpg"
            alt="Screenshot 1"
            style={{ maxWidth: "30%" }}
          />
          <img
            src="https://raw.githubusercontent.com/Fast-Solution-Inc/FastPay-Android-SDK/main/2.jpg"
            alt="Screenshot 2"
            style={{ maxWidth: "30%" }}
          />
          <img
            src="https://raw.githubusercontent.com/Fast-Solution-Inc/FastPay-Android-SDK/main/3.jpg"
            alt="Screenshot 3"
            style={{ maxWidth: "30%" }}
          />
        </div>

        <p className={classes.subTitle}>Quick Glance</p>
        <List>
          <ListItem
            disableRipple={true}
            sx={{ pl: 2 }}
            className={classes.ItemStyleTwo}
          >
            <ListItemText>
              • This plugin is official.{" "}
              <a
                href="https://developer.fast-pay.iq/"
                target="_blank"
                rel="noopener noreferrer"
              >
                FastPay Developers Portal
              </a>
            </ListItemText>
          </ListItem>
          <ListItem
            disableRipple={true}
            sx={{ pl: 2 }}
            className={classes.ItemStyleTwo}
          >
            <ListItemText>
              • You need to contact FastPay to get a storeID and Password.
            </ListItemText>
          </ListItem>
        </List>
      </section>

      <section className={classes.sectionMarginBottom} id="installation">
        <p className={classes.title}>Installation</p>
        <hr />
        <div className={classes.copyBlockStyle}>
          <CopyBlock
            language={"yaml"}
            text={installationCode}
            showLineNumbers={true}
            theme={dracula}
            wrapLines={true}
            codeBlock
          />
        </div>
        <Alert severity="warning">
          iOS only supports real device you can't test it on simulator because
          FastPay SDK not support simulator
        </Alert>
      </section>

      <section className={classes.sectionMarginBottom} id="initiate-sdk">
        <p className={classes.title}>Initiate FastPaySDK</p>
        <hr />
        <List component="div" disablePadding>
          <ListItem
            disableRipple={true}
            sx={{ pl: 4 }}
            className={classes.ItemStyle}
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
            className={classes.ItemStyle}
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
            className={classes.ItemStyle}
          >
            <ListItemIcon>
              <CircleIcon />
            </ListItemIcon>
            <ListItemText>
              <strong>Order ID:</strong> Order ID/Bill number for the
              transaction, this value should be unique in every transaction
            </ListItemText>
          </ListItem>
          <ListItem
            disableRipple={true}
            sx={{ pl: 4 }}
            className={classes.ItemStyle}
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
            className={classes.ItemStyle}
          >
            <ListItemIcon>
              <CircleIcon />
            </ListItemIcon>
            <ListItemText>
              <strong>IOS callback URI:</strong> IOS callback URI for getting
              payment info when user pay with Fastpay application.
            </ListItemText>
          </ListItem>
          <ListItem
            disableRipple={true}
            sx={{ pl: 4 }}
            className={classes.ItemStyle}
          >
            <ListItemIcon>
              <CircleIcon />
            </ListItemIcon>
            <ListItemText>
              <strong>Callback( Sdk status, message, FastpayResult):</strong>{" "}
              There are four sdk status (e.g.{" "}
              <em>FastpayRequest.SDKStatus.INIT</em>) , status message show
              scurrent status of the SDK and the result is fastpay SDK payment
              result.
            </ListItemText>
          </ListItem>
        </List>
        <div className={classes.copyBlockStyle}>
          <CopyBlock
            language={"dart"}
            text={sdkStatusCode}
            showLineNumbers={true}
            theme={dracula}
            wrapLines={true}
            codeBlock
          />
        </div>
      </section>

      <section className={classes.sectionMarginBottom} id="examples">
        <p className={classes.title}>Examples</p>
        <hr />
        <p className={classes.detailFontStyle}>
          1. Initiate payment in init method of your flutter widget:
        </p>
        <div className={classes.copyBlockStyle}>
          <CopyBlock
            language={"dart"}
            text={initiatePaymentCode}
            showLineNumbers={true}
            theme={dracula}
            wrapLines={true}
            codeBlock
          />
        </div>

        <p className={classes.tableTitle}>
          2. Start the journey by navigating the app to the SDK:
        </p>
        <div className={classes.copyBlockStyle}>
          <CopyBlock
            language={"dart"}
            text={startPaymentCode}
            showLineNumbers={true}
            theme={dracula}
            wrapLines={true}
            codeBlock
          />
        </div>
      </section>

      <section className={classes.sectionMarginBottom} id="callback-uri">
        <p className={classes.title}>
          SDK callback Uri (IOS only,{" "}
          <em>
            <strong>OPTIONAL</strong>
          </em>
          )
        </p>
        <hr />
        <Alert severity="warning">
          This will reinitiate the whole application with applinks data from the
          top page of the navigation queue. Thats means, after payment from the
          fastpay app, it will redirect to your app with the data.
        </Alert>
        <div className={classes.copyBlockStyle}>
          <CopyBlock
            language={"dart"}
            text={callbackHandlingCode}
            showLineNumbers={true}
            theme={dracula}
            wrapLines={true}
            codeBlock
          />
        </div>
      </section>

      <section className={classes.sectionMarginBottom} id="setup">
        <p className={classes.title}>Setup</p>
        <hr />
      </section>

      <section className={classes.sectionMarginBottom} id="android-setup">
        <p className={classes.subTitle}>Android Setup</p>
        <hr />
        <p className={classes.detailFontStyle}>
          Add the callback uri to the <code>manifest</code> file as shown below
        </p>
        <div className={classes.copyBlockStyle}>
          <CopyBlock
            language={"xml"}
            text={androidManifestCode}
            showLineNumbers={true}
            theme={dracula}
            wrapLines={true}
            codeBlock
          />
        </div>
      </section>

      <section className={classes.sectionMarginBottom} id="ios-setup">
        <p className={classes.subTitle}>IOS setup</p>
        <hr />
        <p className={classes.detailFontStyle}>
          Add the callback uri to the <code>info.plist</code> file as shown
          below.
        </p>
        <List component="div" disablePadding>
          <ListItem
            disableRipple={true}
            sx={{ pl: 4 }}
            className={classes.ItemStyle}
          >
            <ListItemIcon>
              <CircleIcon />
            </ListItemIcon>
            <ListItemText>
              Create URI Create a URI with a unique name (our suggestion is to
              provide your app name with prefix text
              "appfpclientFastpayFlutterSdk", for example, if your app name is
              "FaceLook", your URI should be appfpclientFaceLook)
            </ListItemText>
          </ListItem>
          <ListItem
            disableRipple={true}
            sx={{ pl: 4 }}
            className={classes.ItemStyle}
          >
            <ListItemIcon>
              <CircleIcon />
            </ListItemIcon>
            <ListItemText>
              Add URI to your <code>info.plist</code> Now add this URI to your
              app info.plist file
            </ListItemText>
          </ListItem>
        </List>
        <div className={classes.copyBlockStyle}>
          <CopyBlock
            language={"xml"}
            text={iosInfoPlistCode}
            showLineNumbers={true}
            theme={dracula}
            wrapLines={true}
            codeBlock
          />
        </div>
      </section>

      <section style={{ marginBottom: '20px' }}>
        <p className={classes.subTitle2}>
          Callback Uri via app deeplinks results.
        </p>
        <div className={classes.copyBlockStyle}>
          <CopyBlock
            language={"text"}
            text={callbackUrlPattern}
            showLineNumbers={true}
            theme={dracula}
            wrapLines={true}
            codeBlock
          />
        </div>
      </section>

      <section className={classes.sectionMarginBottom} id="payment-result">
        <p className={classes.title}>Payment Result</p>
        <hr />
        <p className={classes.detailFontStyle}>
          <strong>FastpayPaymentResponse</strong> class contains these params:
        </p>
        <List component="div" disablePadding>
          <ListItem
            disableRipple={true}
            sx={{ pl: 4 }}
            className={classes.ItemStyle}
          >
            <ListItemIcon>
              <CircleIcon />
            </ListItemIcon>
            <ListItemText>
              <strong>isSuccess:</strong> return true for a successful
              transaction else false.
            </ListItemText>
          </ListItem>
          <ListItem
            disableRipple={true}
            sx={{ pl: 4 }}
            className={classes.ItemStyle}
          >
            <ListItemIcon>
              <CircleIcon />
            </ListItemIcon>
            <ListItemText>
              <strong>errorMessage:</strong> if transaction failed return failed
              result
            </ListItemText>
          </ListItem>
          <ListItem
            disableRipple={true}
            sx={{ pl: 4 }}
            className={classes.ItemStyle}
          >
            <ListItemIcon>
              <CircleIcon />
            </ListItemIcon>
            <ListItemText>
              <strong>transactionStatus:</strong> Payment status weather it is
              success / failed.
            </ListItemText>
          </ListItem>
          <ListItem
            disableRipple={true}
            sx={{ pl: 4 }}
            className={classes.ItemStyle}
          >
            <ListItemIcon>
              <CircleIcon />
            </ListItemIcon>
            <ListItemText>
              <strong>transactionId:</strong> If payment is successful then a
              transaction id will be available.
            </ListItemText>
          </ListItem>
          <ListItem
            disableRipple={true}
            sx={{ pl: 4 }}
            className={classes.ItemStyle}
          >
            <ListItemIcon>
              <CircleIcon />
            </ListItemIcon>
            <ListItemText>
              <strong>orderId:</strong> Unique Order ID/Bill number for the
              transaction which was passed at initiation time.
            </ListItemText>
          </ListItem>
          <ListItem
            disableRipple={true}
            sx={{ pl: 4 }}
            className={classes.ItemStyle}
          >
            <ListItemIcon>
              <CircleIcon />
            </ListItemIcon>
            <ListItemText>
              <strong>paymentAmount:</strong> Payment amount for the
              transaction. “1000”
            </ListItemText>
          </ListItem>
          <ListItem
            disableRipple={true}
            sx={{ pl: 4 }}
            className={classes.ItemStyle}
          >
            <ListItemIcon>
              <CircleIcon />
            </ListItemIcon>
            <ListItemText>
              <strong>paymentCurrency:</strong> Payment currency for the
              transaction. (IQD)
            </ListItemText>
          </ListItem>
          <ListItem
            disableRipple={true}
            sx={{ pl: 4 }}
            className={classes.ItemStyle}
          >
            <ListItemIcon>
              <CircleIcon />
            </ListItemIcon>
            <ListItemText>
              <strong>payeeName:</strong> Payee name for a successful
              transaction.
            </ListItemText>
          </ListItem>
          <ListItem
            disableRipple={true}
            sx={{ pl: 4 }}
            className={classes.ItemStyle}
          >
            <ListItemIcon>
              <CircleIcon />
            </ListItemIcon>
            <ListItemText>
              <strong>payeeMobileNumber:</strong> Number: Payee name for a
              successful transaction.
            </ListItemText>
          </ListItem>
          <ListItem
            disableRipple={true}
            sx={{ pl: 4 }}
            className={classes.ItemStyle}
          >
            <ListItemIcon>
              <CircleIcon />
            </ListItemIcon>
            <ListItemText>
              <strong>paymentTime:</strong> Payment occurrence time as the
              timestamp.
            </ListItemText>
          </ListItem>
        </List>
      </section>
    </div>
  );
};

export default FlutterGuideDetailSide;
