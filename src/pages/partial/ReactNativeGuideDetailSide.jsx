import React, { useState, useEffect, useContext } from 'react';
import { makeStyles } from '@mui/styles';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import CircleIcon from '@mui/icons-material/Circle';
import { MenuContext } from '../../context/MenuContext';
import { ActiveMenuContext } from '../../context/ActiveMenuContext';
import { useHistory } from 'react-router-dom';
import { CopyBlock, dracula } from 'react-code-blocks';
import { Alert } from '@mui/material';

const useStyles = makeStyles((theme) => ({
  title: {
    color: '#262D54',
    fontSize: '24px',
    fontWeight: 700,
    margin: 0,
    [theme.breakpoints.down('xl')]: {
      fontSize: '22px',
    },
    [theme.breakpoints.down('md')]: {
      fontSize: '20px',
    },
  },
  subTitle: {
    color: '#262D54',
    fontSize: '20px',
    fontWeight: 700,
    margin: "20px 0 10px 0",
    [theme.breakpoints.down('md')]: {
      fontSize: '15px',
    },
  },
  subTitle2: {
    color: '#262D54',
    fontSize: '18px',
    fontWeight: 700,
    margin: "20px 0 10px 0",
  },
  detailFontStyle: {
    lineHeight: '26px',
    color: '#181c34',
    marginBottom: '35px !important',
    [theme.breakpoints.down('xl')]: {
      fontSize: '14px',
    },
    [theme.breakpoints.down('md')]: {
      fontSize: '12px',
    },
  },
  tableTitle: {
    fontSize: '18px',
    color: '#181c34',
    marginBottom: '35px !important',
    marginTop: '35px !important',
    [theme.breakpoints.down('md')]: {
      fontSize: '15px',
    },
  },
  tableTitle2: {
    fontSize: '20px',
    color: '#181c34',
    marginBottom: '10px !important',
    marginTop: '35px !important',
    [theme.breakpoints.down('md')]: {
      fontSize: '15px',
    },
  },
  ItemStyle: {
    color: '#262D54',
    cursor: 'default',
    padding: '0px 32px !important',
    '& span': {
      fontSize: '16px',
      cursor: 'default',
      [theme.breakpoints.down('xl')]: {
        fontSize: '14px',
      },
      [theme.breakpoints.down('md')]: {
        fontSize: '12px',
      },
    },
    ['& .MuiListItemIcon-root']: {
      minWidth: '24px',
    },
    ['& .MuiSvgIcon-root']: {
      color: '#262D54',
      fontSize: '10px',
      [theme.breakpoints.down('md')]: {
        fontSize: '6px',
      },
    },
  },
  ItemStyleTwo: {
    color: '#000',
    cursor: 'default',
    padding: '0px 32px !important',
    '& span': {
      fontSize: '16px',
      cursor: 'default',
      [theme.breakpoints.down('xl')]: {
        fontSize: '14px',
      },
      [theme.breakpoints.down('md')]: {
        fontSize: '12px',
      },
    },
    ['& .MuiListItemIcon-root']: {
      minWidth: '24px',
    },
    ['& .MuiSvgIcon-root']: {
      color: '#262D54',
      fontSize: '10px',
      [theme.breakpoints.down('md')]: {
        fontSize: '6px',
      },
    },
  },
  sectionMarginBottom: {
    marginBottom: '35px',
  },
  copyBlockStyle: {
    '& button': {
      display: 'none',
    },
  },
}));

const ReactNativeGuideDetailSide = () => {
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
/>`;

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
      if (fastPayMenuList.goTo !== null && fastPayMenuList.goTo !== '') {
        const yOffset = -70;
        const element = document.getElementById(fastPayMenuList.goTo);
        if (element) {
          const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
          window.scrollTo({ top: y, behavior: 'smooth' });
        }
        addList({ goTo: '' });
      }
    }
    setActiveUseEffect(true);
  }, [fastPayMenuList.goTo]);

  useEffect(() => {
    const sections = document.querySelectorAll('section');
    let lastId = topic;
    
    const handleScroll = () => {
      const scrollCheck = window.scrollY;
      sections.forEach((section) => {
        const sectionTop = section.offsetTop - 70;
        const sectionHeight = section.clientHeight;
        const sectionBottom = sectionTop + sectionHeight;
        if (scrollCheck >= sectionTop && scrollCheck <= sectionBottom) {
          const sectionId = section.getAttribute('id');
          if (lastId !== sectionId) {
            lastId = sectionId;
            addActiveId({ id: sectionId });
          }
        }
      });
    };

    document.addEventListener('scroll', handleScroll);
    if (fastPayActiveId.id === '') {
      addActiveId({ id: 'overview' });
    }
    return () => document.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div>
      <br />
      <section className={classes.sectionMarginBottom} id='overview'>
        <p className={classes.title}>FastPay React Native SDK</p>
        <hr />
        <p className={classes.detailFontStyle}>
          Accept payments with FastPay's APIs. Our simple and easy-to-integrate APIs allow for less effort in processing payments. 
          This is an official support channel, but our APIs support both Android and iOS.
        </p>

        <p className={classes.subTitle}>SDK flow</p>
        <img src="https://raw.githubusercontent.com/Fast-Solution-Inc/FastPay-Android-SDK/main/flow.png" alt="SDK flow" style={{ maxWidth: '100%', marginBottom: '15px' }} />

        <p className={classes.subTitle}>Screenshots</p>
        <div style={{ display: 'flex', gap: '10px', marginBottom: '15px' }}>
            <img src="https://raw.githubusercontent.com/Fast-Solution-Inc/FastPay-Android-SDK/main/1.jpg" alt="Screenshot 1" style={{ maxWidth: '30%' }} />
            <img src="https://raw.githubusercontent.com/Fast-Solution-Inc/FastPay-Android-SDK/main/2.jpg" alt="Screenshot 2" style={{ maxWidth: '30%' }} />
            <img src="https://raw.githubusercontent.com/Fast-Solution-Inc/FastPay-Android-SDK/main/3.jpg" alt="Screenshot 3" style={{ maxWidth: '30%' }} />
        </div>
        
        <p className={classes.subTitle}>Quick Glance</p>
        <List>
          <ListItem disableRipple={true} sx={{ pl: 2 }} className={classes.ItemStyleTwo}>
            <ListItemText>
              • This plugin is official. <a href='https://developer.fast-pay.iq/' target='_blank' rel='noopener noreferrer'>FastPay Developers Portal</a>
            </ListItemText>
          </ListItem>
          <ListItem disableRipple={true} sx={{ pl: 2 }} className={classes.ItemStyleTwo}>
            <ListItemText>• You need to contact FastPay to get a storeID and Password.</ListItemText>
          </ListItem>
        </List>
      </section>

      <section className={classes.sectionMarginBottom} id='installation'>
        <p className={classes.title}>Installation</p>
        <hr />
        <div className={classes.copyBlockStyle}>
          <CopyBlock language={'yaml'} text={installationCode} showLineNumbers={true} theme={dracula} wrapLines={true} codeBlock />
        </div>
      </section>

      <section className={classes.sectionMarginBottom} id='setup'>
        <p className={classes.title}>Setup</p>
        <hr />
      </section>

      <section className={classes.sectionMarginBottom} id='android-setup'>
        <p className={classes.subTitle}>Android setup</p>
        <hr />
        <p className={classes.detailFontStyle}>
          Add the callback uri to the AndroidManifest file as shown below.
        </p>
        <div className={classes.copyBlockStyle}>
          <CopyBlock language={'xml'} text={androidManifestCode} showLineNumbers={true} theme={dracula} wrapLines={true} codeBlock />
        </div>
      </section>

      <section className={classes.sectionMarginBottom} id='ios-setup'>
        <p className={classes.subTitle}>IOS setup</p>
        <hr />
        <p className={classes.detailFontStyle}>
          Add the callback uri to the manifest file as shown below.
        </p>
        <List component='div' disablePadding>
          <ListItem disableRipple={true} sx={{ pl: 4 }} className={classes.ItemStyle}>
            <ListItemIcon><CircleIcon /></ListItemIcon>
            <ListItemText>Create URI Create a URI with a unique name (our suggestion is to provide your app name with prefix text "appfpclient", for example, if your app name is "FaceLook", your URI should be appfpclientFaceLook)</ListItemText>
          </ListItem>
          <ListItem disableRipple={true} sx={{ pl: 4 }} className={classes.ItemStyle}>
            <ListItemIcon><CircleIcon /></ListItemIcon>
            <ListItemText>Add URI to your info.plist Now add this URI to your app info.plist file</ListItemText>
          </ListItem>
        </List>
        <div className={classes.copyBlockStyle}>
          <CopyBlock language={'xml'} text={iosInfoPlistCode} showLineNumbers={true} theme={dracula} wrapLines={true} codeBlock />
        </div>

        <p className={classes.tableTitle}>Add URI to your AppDelegate.mm</p>
        <p className={classes.detailFontStyle}>
          Now add this URI to your app info.plist file
        </p>
        <div className={classes.copyBlockStyle}>
          <CopyBlock language={'objectivec'} text={iosDelegateCode} showLineNumbers={true} theme={dracula} wrapLines={true} codeBlock />
        </div>
      </section>

      <section className={classes.sectionMarginBottom} id='usage'>
        <p className={classes.title}>Usage</p>
        <hr />
      </section>

      <section className={classes.sectionMarginBottom} id='initiate-sdk'>
        <p className={classes.subTitle}>Initiate FastPaySDK</p>
        <hr />
        <List component='div' disablePadding>
          <ListItem disableRipple={true} sx={{ pl: 4 }} className={classes.ItemStyle}>
            <ListItemIcon><CircleIcon /></ListItemIcon>
            <ListItemText><strong>Store ID:</strong> Merchant's Store Id to initiate transaction</ListItemText>
          </ListItem>
          <ListItem disableRipple={true} sx={{ pl: 4 }} className={classes.ItemStyle}>
            <ListItemIcon><CircleIcon /></ListItemIcon>
            <ListItemText><strong>Store Password:</strong> Merchant's Store password to initiate transaction</ListItemText>
          </ListItem>
          <ListItem disableRipple={true} sx={{ pl: 4 }} className={classes.ItemStyle}>
            <ListItemIcon><CircleIcon /></ListItemIcon>
            <ListItemText><strong>Order ID:</strong> Order ID/Bill number for the transaction, this value should be unique in every transaction</ListItemText>
          </ListItem>
          <ListItem disableRipple={true} sx={{ pl: 4 }} className={classes.ItemStyle}>
            <ListItemIcon><CircleIcon /></ListItemIcon>
            <ListItemText><strong>Amount:</strong> Payable amount in the transaction ex: "1000"</ListItemText>
          </ListItem>
          <ListItem disableRipple={true} sx={{ pl: 4 }} className={classes.ItemStyle}>
            <ListItemIcon><CircleIcon /></ListItemIcon>
            <ListItemText><strong>Environment:</strong> Payment Environment to initiate transaction</ListItemText>
          </ListItem>
          <ListItem disableRipple={true} sx={{ pl: 4 }} className={classes.ItemStyle}>
            <ListItemIcon><CircleIcon /></ListItemIcon>
            <ListItemText><strong>Call back Uri's:</strong> When the SDK redirect to the fastpay application for payment and after payment cancel or failed it throws a callback with this uri. It is used for deeplinking with the client app for catching callbacks from fastpay application. Both android and ios has platform specific call back uri's.</ListItemText>
          </ListItem>
          <ListItem disableRipple={true} sx={{ pl: 4 }} className={classes.ItemStyle}>
            <ListItemIcon><CircleIcon /></ListItemIcon>
            <ListItemText><strong>Callback( Payment Result, Payment Status, Message):</strong> There are couple of sdk status, status message show scurrent status of the SDK and the result is fastpay SDK payment result.</ListItemText>
          </ListItem>
        </List>
      </section>

      <section className={classes.sectionMarginBottom} id='examples'>
        <p className={classes.subTitle}>Examples</p>
        <hr />
        <p className={classes.detailFontStyle}>
          1. Initiate payment in init method of your React Native project's App.js:
        </p>
        <div className={classes.copyBlockStyle}>
          <CopyBlock language={'javascript'} text={importCode} showLineNumbers={true} theme={dracula} wrapLines={true} codeBlock />
        </div>

        <p className={classes.tableTitle}>Add this code on init method in other page</p>
        <div className={classes.copyBlockStyle}>
          <CopyBlock language={'javascript'} text={initiatePaymentCode} showLineNumbers={true} theme={dracula} wrapLines={true} codeBlock />
        </div>

        <p className={classes.tableTitle}>2. Start the journey by navigating the app to the SDK:</p>
        <div className={classes.copyBlockStyle}>
          <CopyBlock language={'javascript'} text={startPaymentCode} showLineNumbers={true} theme={dracula} wrapLines={true} codeBlock />
        </div>
      </section>

      <section className={classes.sectionMarginBottom} id='payment-handling'>
        <p className={classes.title}>Payment Handling</p>
        <hr />
      </section>

      <section className={classes.sectionMarginBottom} id='callback-uri'>
        <p className={classes.subTitle}>SDK callback Uri</p>
        <hr />
        <div className={classes.copyBlockStyle}>
          <CopyBlock language={'javascript'} text={callbackHandlingCode} showLineNumbers={true} theme={dracula} wrapLines={true} codeBlock />
        </div>
      </section>

      <section className={classes.sectionMarginBottom} id='payment-result'>
        <p className={classes.subTitle}>Payment Result</p>
        <hr />
        <p className={classes.detailFontStyle}>
          When <strong>FastPayRequest</strong> call open FastPay SDK then after payment return <strong>FastpayResult</strong> that contains:
        </p>
        <p className={classes.detailFontStyle}>
          <strong>event.url</strong> contains these params:
        </p>
        <List component='div' disablePadding>
          <ListItem disableRipple={true} sx={{ pl: 4 }} className={classes.ItemStyle}>
            <ListItemIcon><CircleIcon /></ListItemIcon>
            <ListItemText><strong>status:</strong> Payment status weather it is success / failed.</ListItemText>
          </ListItem>
          <ListItem disableRipple={true} sx={{ pl: 4 }} className={classes.ItemStyle}>
            <ListItemIcon><CircleIcon /></ListItemIcon>
            <ListItemText><strong>transactionId:</strong> If payment is successful then a transaction id will be available.</ListItemText>
          </ListItem>
          <ListItem disableRipple={true} sx={{ pl: 4 }} className={classes.ItemStyle}>
            <ListItemIcon><CircleIcon /></ListItemIcon>
            <ListItemText><strong>orderId:</strong> Unique Order ID/Bill number for the transaction which was passed at initiation time.</ListItemText>
          </ListItem>
          <ListItem disableRipple={true} sx={{ pl: 4 }} className={classes.ItemStyle}>
            <ListItemIcon><CircleIcon /></ListItemIcon>
            <ListItemText><strong>amount:</strong> Payment amount for the transaction. "1000"</ListItemText>
          </ListItem>
          <ListItem disableRipple={true} sx={{ pl: 4 }} className={classes.ItemStyle}>
            <ListItemIcon><CircleIcon /></ListItemIcon>
            <ListItemText><strong>currency:</strong> Payment currency for the transaction. (IQD)</ListItemText>
          </ListItem>
          <ListItem disableRipple={true} sx={{ pl: 4 }} className={classes.ItemStyle}>
            <ListItemIcon><CircleIcon /></ListItemIcon>
            <ListItemText><strong>customerName:</strong> Payee name for a successful transaction.</ListItemText>
          </ListItem>
          <ListItem disableRipple={true} sx={{ pl: 4 }} className={classes.ItemStyle}>
            <ListItemIcon><CircleIcon /></ListItemIcon>
            <ListItemText><strong>customerMobileNo:</strong> Number: Payee name for a successful transaction.</ListItemText>
          </ListItem>
          <ListItem disableRipple={true} sx={{ pl: 4 }} className={classes.ItemStyle}>
            <ListItemIcon><CircleIcon /></ListItemIcon>
            <ListItemText><strong>transactionTime:</strong> Payment occurrence time as the timestamp.</ListItemText>
          </ListItem>
        </List>

        <p className={classes.subTitle2}>Callback Uri via app deeplinks results.</p>
        <div className={classes.copyBlockStyle}>
          <CopyBlock language={'text'} text={callbackUrlPattern} showLineNumbers={true} theme={dracula} wrapLines={true} codeBlock />
        </div>
      </section>
      
      <section className={classes.sectionMarginBottom} id='troubleshooting'>
        <p className={classes.title}>Troubleshooting</p>
        <hr />
        <p className={classes.detailFontStyle}>
        If you face any issue, please contact our support team.
        </p>
      </section>

      <section className={classes.sectionMarginBottom} id='license'>
        <p className={classes.title}>License</p>
        <hr />
        <p className={classes.detailFontStyle}>
        MIT License
        </p>
      </section>
    </div>
  );
};

export default ReactNativeGuideDetailSide;