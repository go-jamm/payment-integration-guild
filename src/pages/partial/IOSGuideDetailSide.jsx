import React, { useState, useEffect, useContext } from "react";
import { makeStyles } from "@mui/styles";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import CircleIcon from "@mui/icons-material/Circle";
import { MenuContext } from "../../context/MenuContext";
import img  from "../../assets/images/flow-ios.png";

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
  const sampleTestCodeData = `class ViewController: UIViewController, FastPayDelegate {
    
    override func viewDidLoad() {
        super.viewDidLoad()
        
    }

    @IBAction func showAction(_ sender: UIButton){
        callSDK()
    }
    
    func callSDK(){
        let testObj = Fastpay(storeId: "1953_693", storePassword: "Password100@", orderId: "order240", amount: 500, currency: .IQD,uri: "appfpclientfastpaysdktest3")
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
    
    func fastPayProcessStatus(with status: FPFrameworkStatus) {
        print(status)
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
            <ListItemText primary="FastpayMerchantSDK.xcframework.zip" />
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
        <p className={classes.title}>Features</p>
        <hr />
        <p className={classes.detailFontStyle}>
          1. Make payment transaction using Fastpay App.
          <br />
          2. Check the status of the payments which you make.
          <br />
          3. Verify payment with OTP.
          <br />
          3. Framework status provided by callbacks.
          <br />
          4. Application redirect with required data while using fastpay
          personal applciation.
        </p>
      </section>

      <p className={classes.title}>Framework flow</p>
      <div className="">
        <img src={img} alt="flow" style={{ width: "100%" }} />
      </div>

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
            text={`let testObj = Fastpay(storeId: "*****", storePassword: "****", orderId: "*****", amount: 500, currency: .IQD, uri: :"appfpclientfastpaysdktest3")`}
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
          Start your work with that. Use .Production for production release and
          use .SandBox for development test.
        </p>
        <div className={classes.sectionMarginBottom}>
          <CopyBlock
            language={"jsx"}
            text={`testObj.start(in: self, for: .Production)`}
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
      <p className={classes.detailFontStyle}>Call back Uri</p>
      <p className={classes.detailFontStyle}>
        Step
        <br />
        1. Create URI Create a URI with a unique name (our suggestion is to
        provide your app name with prefix text "appfpclient", for example, if
        your app name is "FaceLook", your URI should be appfpclientFaceLook)
        <br />
        2. Add URI to your info.plist Now add this URI to your app info.plist
        file
      </p>
      <div className={classes.sectionMarginBottom}>
        <CopyBlock
          language={"jsx"}
          text={`<key>CFBundleURLTypes</key>
 <array>
   <dict>
     <key>CFBundleURLSchemes</key>
     <array>
       <string>appfpclientfastpaysdktest3</string>
     </array>
   </dict>
 </array>`}
          showLineNumbers={true}
          theme={dracula}
          wrapLines={true}
          codeBlock
        />
      </div>
      <p className={classes.detailFontStyle}>
        3. Add this String extension to your code base
      </p>
      <div className={classes.sectionMarginBottom}>
        <CopyBlock
          language={"jsx"}
          text={`extension String{
  func splitQueryString() -> [String: String] {
    var keyValuePairs = [String: String]()
    let components = self.components(separatedBy: "&")
    for component in components {
      let keyValue = component.components(separatedBy: "=")
      if keyValue.count == 2 {
        let key = keyValue[0]
        let value = keyValue[1].removingPercentEncoding ?? ""
        keyValuePairs[key] = value
      }
    }
    return keyValuePairs
  }
}`}
          showLineNumbers={true}
          theme={dracula}
          wrapLines={true}
          codeBlock
        />
      </div>

      <p className={classes.detailFontStyle}>
        4. Handle incoming URLs When another app opens a URL containing your
        custom scheme, the system launches your app, if necessary, and brings it
        to the foreground. The system delivers the URL to your app by calling
        your app delegate’s application(_:open:options:) method. Add code to the
        method to parse the contents of the URL and take appropriate actions. To
        ensure the URL is parsed correctly, use NSURLComponents APIs to extract
        the components. Obtain additional information about the URL, such as
        which app opened it, from the system-provided options dictionary.
      </p>
      <div className={classes.sectionMarginBottom}>
        <CopyBlock
          language={"jsx"}
          text={`func application(_ app: UIApplication, open url: URL, options: [UIApplication.OpenURLOptionsKey : Any] = [:]) -> Bool {
        // Handle the URL here
        print("Received URL: \(url)")
        return true
}`}
          showLineNumbers={true}
          theme={dracula}
          wrapLines={true}
          codeBlock
        />
      </div>

      <p className={classes.detailFontStyle}>
        If your app has opted into Scenes, and your app isn’t running, the
        system delivers the URL to the scene(:willConnectTo:options:) delegate
        method after launch, and to scene(:openURLContexts:) when your app opens
        a URL while running or suspended in memory. Add this Method to Your
        Scene Delegate. Whenever your transaction completes/fails from FastPay
        App, you will be navigated here with the result.
      </p>
      <div className={classes.sectionMarginBottom}>
        <CopyBlock
          language={"jsx"}
          text={`func scene(_ scene: UIScene, openURLContexts URLContexts: Set<UIOpenURLContext>) {
  guard let url = URLContexts.first?.url else {
    return
  }
}`}
          showLineNumbers={true}
          theme={dracula}
          wrapLines={true}
          codeBlock
        />
      </div>

      <p className={classes.detailFontStyle}>
        Please replace appfpclientfastpaysdktest3 with your created URI (which
        is added to your info.plist file too) The below code is for data
        retrieval:
      </p>
      <div className={classes.sectionMarginBottom}>
        <CopyBlock
          language={"jsx"}
          text={`if let scheme = url.scheme, scheme.lowercased() == "appfpclientfastpaysdktest3".lowercased() {
          let query            = url.query
          let data             = query?.splitQueryString()
          let transactionStatus  = data?["transactionStatus"] // failed/success
          let transactionId      = data?["transactionId"]
          let amount           = data?["amount"]
          let orderId           = data?["orderId"]
          let transactionTime    = data?["transactionTime"]
          let currency          = data?["currency"]
          let customerMobileNo = data?["customerMobileNo"]
          let customerName    = data?["customerName"]
          let status            = data?["status"]
      print("Transaction completed with \(transactionStatus ?? "No Status found")")
}`}
          showLineNumbers={true}
          theme={dracula}
          wrapLines={true}
          codeBlock
        />
      </div>

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

      <p className={classes.title}>FPFrameworkStatus</p>
      <p className={classes.detailFontStyle}>
        In this callback, you will get Framework processing statuses, like when
        you redirect to the FastPay app or continue to Framework, or when
        Framework is cancelled by the user. Status is given below:
      </p>
      <div className={classes.sectionMarginBottom}>
        <CopyBlock
          language={"jsx"}
          text={` public enum FPFrameworkStatus: Int{
   case INIT
   case PAYMENT_WITH_FASTPAY_APP
   case PAYMENT_WITH_FASTPAY_SDK
   case CANCEL
 }`}
          showLineNumbers={true}
          theme={dracula}
          wrapLines={true}
          codeBlock
        />
      </div>
      <p className={classes.detailFontStyle}>
        N.B: For Xcode 13.0 use "FastpayMerchantSDK.framework.zip" and for XCode
        <br />
        13.2 or latter use "FastpayMerchantSDK.framework(xcode13.2).zip"
      </p>

      <p className={classes.detailFontStyle}>
        For details or clearification you can get help from document pdf.
      </p>
    </div>
  );
};

export default IOSGuideDetailSide;
