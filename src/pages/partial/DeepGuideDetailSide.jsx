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

const DeepGuideDetailSide = () => {
  const classes = useStyles();
  const { fastPayMenuList, addList } = useContext(MenuContext);
  const { addActiveId, fastPayActiveId } = useContext(ActiveMenuContext);
  let history = useHistory();
  const topic = fastPayActiveId.id;
  const [activeUseEffect, setActiveUseEffect] = useState(false);

  const installationCode = `dependencies:
  fastpay-react-package: ^1.0.4
  # To handle callbacks (Redirection) from fastpay wallet application.
  url-parse: ^1.5.10`;

  const importCode = `import PackageStackNavigator from 'fastpay-react-package' 
        <Stack.Screen
          name="Package"
          component={PackageStackNavigator}
          options={{headerShown: false}}
        />
/*  
* 
* Add this code on init method in other page
*/

import startFunction from 'fastpay-react-package/FastPayCons';
import UrlParse from 'url-parse';
const instantiateFastPaySDK = () => {
    const values = {
      storeId: '749315_520',
      storePassword: 'Password100@',
      orderId: 'Order123',
      amount: 300,
      currency: {code: 'IQD'},
      uri_ios: 'appfpclientTestThePack',
      uri_android: 'sdk://fastpay-sdk.com/callback',
      callback: callbackFunction,
    };
  };`;

  const RegisterCallbackScheme = `<activity     android:name=".ui.PaymentCallbackActivity"     android:exported="true"> 
 
    <intent-filter android:label="FastPay Callback"> 
        <action android:name="android.intent.action.VIEW" /> 
        <category android:name="android.intent.category.DEFAULT" /> 
        <category android:name="android.intent.category.BROWSABLE" /> 
         
        <!-- Replace with your client URI --> 
        <data             android:scheme="appfpclientMyApp"             android:host="fast-pay.cash" /> 
    </intent-filter> 
</activity> 
`;

  const initiatePaymentCode = `import startFunction from 'fastpay-react-package/FastPayCons';
import UrlParse from 'url-parse';

const instantiateFastPaySDK = () => {
  const values = {
    storeId: '749315_520',
    storePassword: 'Password100@',
    orderId: \`Order123\`,
    amount: 300,
    currency: {code: 'IQD'},
    uri_ios: 'appfpclientTestThePack',
    uri_android: 'sdk://fastpay-sdk.com/callback',
    callback: callbackFunction,
  };
};`;

  const LaunchFastPayApp = `fun openFastPayApp(context: Context, deepLinkUrl: String) {     try { 
        // Attempt to open FastPay App directly         val intent = Intent(Intent.ACTION_VIEW, Uri.parse(deepLinkUrl)) 
        intent.flags = Intent.FLAG_ACTIVITY_NEW_TASK 
        context.startActivity(intent) 
        Log.d("FastPaySDK", "Opened FastPay app via deep link.") 
    } catch (e: ActivityNotFoundException) { 
        // FastPay app not installed → redirect to Play Store 
        Log.w("FastPaySDK", "FastPay app not found. Redirecting to Play Store.") 
        val playStoreIntent = Intent( 
            Intent.ACTION_VIEW, 
            
Uri.parse("https://play.google.com/store/apps/details?id=com.fastpay
.app")         ) 
        playStoreIntent.flags = Intent.FLAG_ACTIVITY_NEW_TASK 
        context.startActivity(playStoreIntent) 
    } } 
`;

  const ExampleCallbackURI = `appfpclientMyApp://fast-pay.cash?transactionStatus=success&transactionId=ORD789&amo unt=1000`;

  const HandleThisCallback = `class PaymentCallbackActivity : AppCompatActivity() { 
 
    override fun onCreate(savedInstanceState: Bundle?) {         super.onCreate(savedInstanceState)         handlePaymentCallback(intent) 
    } 
 
    override fun onNewIntent(intent: Intent?) {         super.onNewIntent(intent)         handlePaymentCallback(intent) 
    } 
 
    private fun handlePaymentCallback(intent: Intent?) {         intent?.data?.let { uri ->             val transactionStatus = uri.getQueryParameter("transactionStatus")             val transactionId = uri.getQueryParameter("transactionId")             val amount = uri.getQueryParameter("amount") 
 
            Log.d("FastPaySDK", "Transaction: $transactionId - Status: $transactionStatus")             when (transactionStatus) { 
                "success" -> showSuccessUI(transactionId, amount) 
                "failed" -> showFailureUI(transactionId)                 else -> showPendingUI(transactionId) 
            } 
        } 
    } 
 
    private fun showSuccessUI(transactionId: String?, amount: String?) { 
        Toast.makeText(this, "Payment Successful: $amount", Toast.LENGTH_LONG).show() 
    } 
 
    private fun showFailureUI(transactionId: String?) { 
        Toast.makeText(this, "Payment Failed", Toast.LENGTH_LONG).show() 
    } 
 
    private fun showPendingUI(transactionId: String?) { 
        Toast.makeText(this, "Payment Pending", Toast.LENGTH_LONG).show() 
    } 
} 
`;

  const deepLinkFormate = `appFpp://fast-pay.cash/qrpay?qrdata=<qrToken>&clientUri=appfpclient<clientUri>&transacti onId=<orderId> `;

  const startPaymentCode = `startFunction({
  navigate: (screenName, params) => {
    navigation.navigate('Package', {
      screen: screenName,
      params: params,
    });
  },
  values,
  environment: 'Sandbox',
});`;

  const callbackHandlingCode = `import UrlParse from 'url-parse';

useEffect(() => {
  const handleOpenURL = event => {
    console.log('Received URL:', event.url);
    const parsedUrl = new UrlParse(event.url, true);
    const params = parsedUrl.query;
    
    const {
      transactionStatus,
      transactionId,
      orderId,
      amount,
      currency,
      customerMobileNo,
      customerName,
      status,
      transactionTime,
    } = params;
    
    console.log('Received URL:', event.url);
    console.log('Transaction Status:', transactionStatus);
    console.log('Transaction ID:', transactionId);
    console.log('Order ID:', orderId);
    console.log('Amount:', amount);
    console.log('Currency:', currency);
    console.log('Customer Mobile No:', customerMobileNo);
    console.log('Customer Name:', customerName);
    console.log('Status:', status);
    console.log('Transaction Time:', transactionTime);
  };

  const handleOpenURLListener = Linking.addEventListener(
    'url',
    handleOpenURL,
  );

  Linking.getInitialURL().then(url => {
    console.log('Received URL:', url);
    if (url) {
      handleOpenURL({url});
    }
  });

  return () => {
    handleOpenURLListener.remove();
  };
}, []);`;

  const androidManifestCode = `<application
  <activity
    android:name=".MainActivity"...>
    ...
    <intent-filter>
      <action android:name="android.intent.action.MAIN"/>
      <category android:name="android.intent.category.LAUNCHER"/>
    </intent-filter>
    <intent-filter>
      <data android:scheme="sdk" android:host="fastpay-sdk.com" android:pathPrefix="/callback"/>
      <action android:name="android.intent.action.VIEW" />
      <category android:name="android.intent.category.DEFAULT" />
      <category android:name="android.intent.category.BROWSABLE" />
    </intent-filter>
    ...
  </activity>
  ...
</application>`;

  const iosInfoPlistCode = `<key>CFBundleURLTypes</key>
<array>
  <dict>
    <key>CFBundleURLSchemes</key>
    <array>
      <string>appfpclientFastpayReactNativeSdk</string>
    </array>
  </dict>
</array>`;

  const iosDelegateCode = `#import <React/RCTLinkingManager.h>

- (BOOL)application:(UIApplication *)application openURL:(NSURL *)url
    options:(NSDictionary<UIApplicationOpenURLOptionsKey,id> *)options
{
  return [RCTLinkingManager application:application openURL:url options:options];
}`;

  const callbackUrlPattern = `callback URI pattern (SUCCESS): sdk://your.website.com/further/paths?status=success&transaction_id=XXXX&order_id=XXXX&amount=XXX&currency=XXX&mobile_number=XXXXXX&time=XXXX&name=XXXX

callback URI pattern (FAILED): sdk://your.website.com/further/paths?status=failed&order_id=XXXXX`;

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
      <section className={classes.sectionMarginBottom} id="android">
        <p className={classes.title}>
          FastPay Merchant Payment SDK Android Integration Guide (Kotlin)
        </p>
        <hr />
      </section>

      <section className={classes.sectionMarginBottom} id="overview">
        <p className={classes.subTitle}>Overview</p>
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
              The <strong>FastPay Merchant Payment SDK</strong> enables your
              Android app to initiate payments through the{" "}
              <strong>FastPay App</strong> using a <strong>deep link</strong>.
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
              If the <strong>FastPay App</strong> is installed — the user is
              redirected directly to the <strong>payment page</strong>
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
              If not installed — the deep link automatically redirects to{" "}
              <strong>Google Play Store</strong> to install the FastPay App
            </ListItemText>
          </ListItem>
        </List>

        <p className={classes.tableTitle}>Deep Link Format</p>
        <div>
          <CopyBlock
            language={"jsx"}
            text={deepLinkFormate}
            showLineNumbers={false}
            theme={dracula}
            wrapLines={true}
            codeBlock
          />
        </div>
      </section>

      <section className={classes.sectionMarginBottom} id="IntegrationSteps">
        <p className={classes.subTitle}>Integration Steps</p>
        <hr />
        <p className={classes.tableTitle}>
          1. Register Callback Scheme in Manifest:
        </p>
        <p>
          In your <strong>AndroidManifest.xml</strong>, register your app’s
          callback URI scheme. This is where FastPay App will redirect after the
          payment is completed.{" "}
        </p>
        <div className={classes.copyBlockStyle}>
          <CopyBlock
            language={"javascript"}
            text={RegisterCallbackScheme}
            showLineNumbers={true}
            theme={dracula}
            wrapLines={true}
            codeBlock
          />
        </div>

        <p className={classes.tableTitle}>
          2. Launch FastPay App Using Deep Link
        </p>
        <p>Use the following Kotlin snippet to trigger the FastPay App:</p>
        <div className={classes.copyBlockStyle}>
          <CopyBlock
            language={"javascript"}
            text={LaunchFastPayApp}
            showLineNumbers={true}
            theme={dracula}
            wrapLines={true}
            codeBlock
          />
        </div>

        <p className={classes.subTitle}>This method automatically: </p>
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
              Opens the <strong>FastPay App</strong> when installed
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
              Redirects to <strong>Google Play Store</strong> when not installed
            </ListItemText>
          </ListItem>
        </List>

        <p className={classes.tableTitle}>3. Handle Callback After Payment</p>
        <p>
          When payment completes, the FastPay App redirects to your app with
          transaction details. Example callback URI
        </p>
        <div className="">
          <CopyBlock
            language={"jsx"}
            text={ExampleCallbackURI}
            showLineNumbers={false}
            theme={dracula}
            wrapLines={true}
            codeBlock
          />
        </div>

        <p>Handle this callback in your activity: </p>
        <div className={classes.copyBlockStyle}>
          <CopyBlock
            language={"javascript"}
            text={HandleThisCallback}
            showLineNumbers={true}
            theme={dracula}
            wrapLines={true}
            codeBlock
          />
        </div>
      </section>

      <section className={classes.sectionMarginBottom} id="ios">
        <p className={classes.title}>
          FastPay App Navigation (Handoff + Fallback) - FastPay Developer
        </p>
        <hr />
      </section>

      <section className={classes.sectionMarginBottom} id="introduction">
        <p>
          This summarizes how the SDK navigates to the FastPay app and what
          happens if the app is not available.
        </p>

        <p className={classes.subTitle}>Where</p>
        <List>
          <ListItem
            disableRipple={true}
            sx={{ pl: 4 }}
            className={classes.ItemStyle}
          >
            <ListItemIcon>
              <CircleIcon />
            </ListItemIcon>
            <ListItemText>FPAuthViewController.initialization()</ListItemText>
          </ListItem>
        </List>

        <p className={classes.subTitle}>Deep Link</p>

        <List>
          <ListItem disableRipple sx={{ pl: 4 }} className={classes.ItemStyle}>
            <ListItemIcon>
              <CircleIcon />
            </ListItemIcon>
            <ListItemText
              primary={
                <>
                  Format:{" "}
                  <code>
                    appFpp://fast-pay.cash/qrpay?qrdata=&#123;qrToken&#125;&clientUri=appfpclient&#123;clientUri&#125;&transactionId=&#123;orderId&#125;
                  </code>
                </>
              }
            />
          </ListItem>

          <ListItem disableRipple sx={{ pl: 4 }} className={classes.ItemStyle}>
            <ListItemIcon>
              <CircleIcon />
            </ListItemIcon>
            <ListItemText
              primary={
                <>
                  Built only when the initiation API returns{" "}
                  <code>qrToken</code>.
                </>
              }
            />
          </ListItem>
        </List>

        <p className={classes.subTitle}>Logic</p>
        <List>
          <p>1. Try to open the URL via </p>
          <ListItem disableRipple sx={{ pl: 4 }} className={classes.ItemStyle}>
            <ListItemIcon>
              <CircleIcon />
            </ListItemIcon>
            <ListItemText primary="`UIApplication.shared.open`." />
          </ListItem>
          <p>2. If open succeeds</p>
          <ListItem disableRipple sx={{ pl: 4 }} className={classes.ItemStyle}>
            <ListItemIcon>
              <CircleIcon />
            </ListItemIcon>
            <ListItemText
              primary={
                <>
                  Notify{" "}
                  <code>
                    delegate?.fastPayProcessStatus(.PAYMENT_WITH_FASTPAY_APP)
                  </code>
                  <br />
                  Dismiss SDK UI, then open the URL again after dismissal to
                  complete handoff.
                </>
              }
            />
          </ListItem>
          <p>3. If open fails (app missing/unreachable)</p>
          <ListItem disableRipple sx={{ pl: 4 }} className={classes.ItemStyle}>
            <ListItemIcon>
              <CircleIcon />
            </ListItemIcon>
            <ListItemText
              primary={
                <>
                  Notify{" "}
                  <code>
                    delegate?.fastPayProcessStatus(.PAYMENT_WITH_FASTPAY_SDK)
                  </code>
                  <br />
                  Keep user in SDK and render QR using the same{" "}
                  <code>qrToken</code>.
                </>
              }
            />
          </ListItem>

          <p>4. If no <code>qrToken</code> returned, skip deep link and remain
                  in SDK flow.</p>
        </List>

        <p className={classes.subTitle}>Integration Notes (concise)</p>
        <List>
          <ListItem disableRipple sx={{ pl: 4 }} className={classes.ItemStyle}>
            <ListItemIcon>
              <CircleIcon />
            </ListItemIcon>
            <ListItemText
              primary={`Ensure your app registers the callback scheme you expect to receive: appfpclient<yourSuffix>`}
            />
          </ListItem>
          <ListItem disableRipple sx={{ pl: 4 }} className={classes.ItemStyle}>
            <ListItemIcon>
              <CircleIcon />
            </ListItemIcon>
            <ListItemText
              primary={`Optional: add appFpp to LSApplicationQueriesSchemes if you plan to use canOpenURL checks.`}
            />
          </ListItem>
        </List>

        {/* <p className={classes.subTitle}>SDK Navigates</p>
        <hr />
        <div className={classes.copyBlockStyle}>
          <CopyBlock
            language={"javascript"}
            text={callbackHandlingCode}
            showLineNumbers={true}
            theme={dracula}
            wrapLines={true}
            codeBlock
          />
        </div> */}
      </section>

      {/* <section className={classes.sectionMarginBottom} id="setup">
        <p className={classes.title}>Setup</p>
        <hr />
      </section> */}

      <section className={classes.sectionMarginBottom} id="lient-app-callback">
        <p className={classes.subTitle}>Client App Callback (URI)</p>
        <hr />
        <p className={classes.detailFontStyle}>
          Follow these steps in your client app to receive results when FastPay
          finishes.
        </p>

        <p className={classes.subTitle}>1. Create a URI</p>
        <List>
          <ListItem disableRipple sx={{ pl: 4 }} className={classes.ItemStyle}>
            <ListItemIcon>
              <CircleIcon />
            </ListItemIcon>
            <ListItemText
              primary={`Use a unique custom scheme, recommended format: appfpclient<YourAppName>`}
            />
          </ListItem>
          <ListItem disableRipple sx={{ pl: 4 }} className={classes.ItemStyle}>
            <ListItemIcon>
              <CircleIcon />
            </ListItemIcon>
            <ListItemText primary={`Example: appfpclientFaceLook`} />
          </ListItem>
        </List>

        <p className={classes.subTitle}>2. Add URI to Info.plist</p>
        <p>Add your scheme under CFBundleURLTypes.</p>
        <CopyBlock
          language={"jsx"}
          text={`<key>CFBundleURLTypes</key>
<array>
  <dict>
    <key>CFBundleURLSchemes</key>
    <array>
      <string>appfpclientYourApp</string>
    </array>
  </dict>
</array>`}
          showLineNumbers={true}
          theme={dracula}
          wrapLines={true}
          codeBlock
        />
        <p>Replace appfpclientYourApp with your actual scheme.</p>

        <p className={classes.subTitle}>3. Helper for parsing query string</p>
        <CopyBlock
          language={"jsx"}
          text={`extension String {
  func splitQueryString() -> [String: String] {
    var keyValuePairs: [String: String] = [:]
    for component in components(separatedBy: "&") {
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

        <p className={classes.subTitle}>4. Handle incoming URLs</p>
        <List>
          <ListItem disableRipple sx={{ pl: 4 }} className={classes.ItemStyle}>
            <ListItemIcon>
              <CircleIcon />
            </ListItemIcon>
            <ListItemText primary={`AppDelegate (apps without Scenes):`} />
          </ListItem>
        </List>
        <CopyBlock
          language={"jsx"}
          text={`func application(_ app: UIApplication, open url: URL, options: [UIApplication.OpenURLOptionsKey: Any] = [:]) -> Bool {
  // Handle the URL here
  print("Received URL: \(url)")
  return true
}`}
          showLineNumbers={true}
          theme={dracula}
          wrapLines={true}
          codeBlock
        />

        <List>
          <ListItem disableRipple sx={{ pl: 4 }} className={classes.ItemStyle}>
            <ListItemIcon>
              <CircleIcon />
            </ListItemIcon>
            <ListItemText primary={`SceneDelegate (apps using Scenes):`} />
          </ListItem>
        </List>
        <CopyBlock
          language={"jsx"}
          text={`func scene(_ scene: UIScene, openURLContexts URLContexts: Set<UIOpenURLContext>) {
  guard let url = URLContexts.first?.url else { return }

  // Replace with your actual scheme
  let expectedScheme = "appfpclientYourApp".lowercased()

  if let scheme = url.scheme, scheme.lowercased() == expectedScheme {
    let data = url.query?.splitQueryString()
    let transactionStatus  = data?["transactionStatus"] // failed/success
    let transactionId      = data?["transactionId"]
    let amount             = data?["amount"]
    let orderId            = data?["orderId"]
    let transactionTime    = data?["transactionTime"]
    let currency           = data?["currency"]
    let customerMobileNo   = data?["customerMobileNo"]
    let customerName       = data?["customerName"]
    let status             = data?["status"]

    print("Transaction completed with \(transactionStatus ?? "No Status found")")
    // TODO: Update your UI/state based on the result
  }
}`}
          showLineNumbers={true}
          theme={dracula}
          wrapLines={true}
          codeBlock
        />
        <p>Replace appfpclientYourApp everywhere with the exact scheme you added to your Info.plist.</p>
      </section>

      {/* <section className={classes.sectionMarginBottom} id="ios-setup">
        <p className={classes.subTitle}>IOS setup</p>
        <hr />
        <p className={classes.detailFontStyle}>
          Add the callback uri to the manifest file as shown below.
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
              provide your app name with prefix text "appfpclient", for example,
              if your app name is "FaceLook", your URI should be
              appfpclientFaceLook)
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
              Add URI to your info.plist Now add this URI to your app info.plist
              file
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

        <p className={classes.tableTitle}>Add URI to your AppDelegate.mm</p>
        <p className={classes.detailFontStyle}>
          Now add this URI to your app info.plist file
        </p>
        <div className={classes.copyBlockStyle}>
          <CopyBlock
            language={"objectivec"}
            text={iosDelegateCode}
            showLineNumbers={true}
            theme={dracula}
            wrapLines={true}
            codeBlock
          />
        </div>
      </section> */}

      {/* <section className={classes.sectionMarginBottom} id="payment-result">
        <p className={classes.subTitle}>Payment Result</p>
        <hr />
        
        <p className={classes.detailFontStyle}>
          <strong>event.url</strong> contains these params:
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
              <strong>status:</strong> Payment status weather it is success /
              failed.
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
              <strong>amount:</strong> Payment amount for the transaction.
              "1000"
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
              <strong>currency:</strong> Payment currency for the transaction.
              (IQD)
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
              <strong>customerName:</strong> Payee name for a successful
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
              <strong>customerMobileNo:</strong> Number: Payee name for a
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
              <strong>transactionTime:</strong> Payment occurrence time as the
              timestamp.
            </ListItemText>
          </ListItem>
        </List>

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
      </section> */}

      {/* <section className={classes.sectionMarginBottom} id="troubleshooting">
        <p className={classes.title}>Troubleshooting</p>
        <hr />
        <p className={classes.detailFontStyle}>
          If you face any issue, please contact our support team.
        </p>
      </section>

      <section className={classes.sectionMarginBottom} id="license">
        <p className={classes.title}>License</p>
        <hr />
        <p className={classes.detailFontStyle}>MIT License</p>
      </section> */}
    </div>
  );
};

export default DeepGuideDetailSide;
