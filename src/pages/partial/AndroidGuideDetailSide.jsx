import React, { useState, useEffect, useContext } from 'react';
import { makeStyles } from '@mui/styles';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import CircleIcon from '@mui/icons-material/Circle';
import img from '../../assets/images/flow.png';
import { MenuContext } from '../../context/MenuContext';
import { ActiveMenuContext } from '../../context/ActiveMenuContext';
import { useHistory } from 'react-router-dom';
import { a11yLight, CopyBlock, dracula } from 'react-code-blocks';
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
    margin: 0,
    [theme.breakpoints.down('md')]: {
      fontSize: '15px',
    },
  },
  subTitle2: {
    color: '#262D54',
    fontSize: '18px',
    fontWeight: 700,
    margin: 0,
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
    // fontWeight: 700,
    color: '#181c34',
    marginBottom: '10px !important',
    marginTop: '35px !important',
    [theme.breakpoints.down('md')]: {
      fontSize: '15px',
    },
  },
  tableStyle: {
    background: 'rgba(15, 188, 249,0.1)',
    '& th': {
      color: '#262D54',
      fontSize: '18px',
      [theme.breakpoints.down('md')]: {
        fontSize: '14px',
      },
    },
  },

  alertStyle: {
    background: '#FADBD8',
    padding: '20px 0px 30px',
    borderRadius: '10px',
  },
  alertTitle: {
    color: '#E74C3C',
    cursor: 'default',
    padding: '0px 32px',
    '& span ': {
      fontSize: '18px',
      fontWeight: 700,
      cursor: 'default',
      [theme.breakpoints.down('md')]: {
        fontSize: '14px',
      },
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
  alertItem: {
    color: '#E74C3C',
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
      color: '#E74C3C',
      fontSize: '10px',
      [theme.breakpoints.down('md')]: {
        fontSize: '8px',
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
const AndroidGuideDetailSide = () => {
  const android = `dependencies {
   ...
   implementation("com.fastpay:merchant-sdk:LATEST_VERSION")
 }`;

  const allprojects = `allprojects {
    repositories {
        ...
        maven {
            url = uri("https://maven.pkg.github.com/FastPaySDK/FastpayAndroidSDK")
            credentials {
                username = "YOUR_GITHUB_USERNAME" // Replace with your GitHub username
                password = "YOUR_GITHUB_PERSONAL_ACCESS_TOKEN" // Replace with your GitHub PAT
            }
        }
    }
}`;

  const License = `Copyright (C) 2025 Fastpay Technologies

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.`;

  const FastPaySDK = ` public enum SDKStatus{
       INIT,
       PAYMENT_WITH_FASTPAY_APP,
       PAYMENT_WITH_FASTPAY_SDK,
       CANCEL
   }`;

  const URL = `callback URI pattern (SUCCESS): sdk://your.website.com/further/paths?status=success&transaction_id=XXXX&order_id=XXXX&amount=XXX&currency=XXX&mobile_number=XXXXXX&time=XXXX&name=XXXX
callback URI pattern (FAILED): sdk://your.website.com/further/paths?status=failed&order_id=XXXXX
`;

  const CallbackUrl = `String amount = getIntent().getData().getQueryParameter("amount");
String orderId = getIntent().getData().getQueryParameter("order_id");
String status = getIntent().getData().getQueryParameter("status");
String transaction_id = getIntent().getData().getQueryParameter("transaction_id");
`;

  const PaymentProcess = `FastpayRequest request = new FastpayRequest(this, "*******", "*******",
                        amount, orderId, FastpaySDK.SANDBOX, "sdk://your.website.com/further/paths", (sdkStatus, message) -> Toast.makeText(SDKTestActivity.this,message,Toast.LENGTH_LONG).show());
request.startPaymentIntent(SDKTestActivity.this,sdkResultLauncher);
`;

  const dependencyResolutionManagement = `dependencyResolutionManagement {
   repositories {
        ...
        maven {
            url = uri("https://maven.pkg.github.com/FastPaySDK/FastpayAndroidSDK")
            credentials {
                username = "YOUR_GITHUB_USERNAME" // Replace with your GitHub username
                password = "YOUR_GITHUB_PERSONAL_ACCESS_TOKEN" // Replace with your GitHub PAT
            }
        }
   }
}`;

  const activity = `<activity android:name=".YourPaymentResultActivity">
    <intent-filter>
        <data android:scheme="sdk" android:host="your.website.com" android:pathPrefix="/further/paths" />
        <action android:name="android.intent.action.VIEW" />
        <category android:name="android.intent.category.DEFAULT" />
        <category android:name="android.intent.category.BROWSABLE" />
    </intent-filter>
</activity>`;

  const payments = `<data android:scheme="myapp" android:host="payments" 
android:pathPrefix="/callback" />`;

  const importData = `import com.fastpay.payment.model.merchant.FastpayRequest;
import com.fastpay.payment.model.merchant.FastpayResult;`;

  const overrideData = `private ActivityResultLauncher<Intent> sdkResultLauncher;

@Override
protected void onCreate(Bundle savedInstanceState) {
   super.onCreate(savedInstanceState);

   sdkResultLauncher = registerForActivityResult(
           new ActivityResultContracts.StartActivityForResult(),
           result -> {
              Intent data = result.getData();
              if (result.getResultCode() == Activity.RESULT_OK) {
                 if (data != null) {
                    FastpayResult fastpayResult = data.getParcelableExtra(FastpayResult.EXTRA_PAYMENT_RESULT);
                    if (fastpayResult != null) {
                       // Handle successful payment
                       Toast.makeText(this, "Payment Success! Transaction ID: " + fastpayResult.getTransactionId(), Toast.LENGTH_LONG).show();
                    }
                 }
              } else if (result.getResultCode() == Activity.RESULT_CANCELED) {
                 // Handle canceled or failed payment
                 String message = data != null ? data.getStringExtra(FastpayRequest.EXTRA_PAYMENT_MESSAGE) : "No message";
                 Toast.makeText(this, "Payment Canceled/Failed: " + message, Toast.LENGTH_LONG).show();
              }
           }
   );
}`;

  const classes = useStyles();
  const { fastPayMenuList, addList } = useContext(MenuContext);
  const { addActiveId, fastPayActiveId } = useContext(ActiveMenuContext);
  let history = useHistory();
  const topic = fastPayActiveId.id;
  const [activeUseEffect, setActiveUseEffect] = useState(false);

  useEffect(() => {
    if (activeUseEffect === true) {
      if (fastPayMenuList.goTo !== null && fastPayMenuList.goTo !== '') {
        const yOffset = -70;

        const element = document.getElementById(fastPayMenuList.goTo);

        // element.scrollTo({ top: 0, behavior: "smooth" });
        const y =
          element.getBoundingClientRect().top + window.pageYOffset + yOffset;

        window.scrollTo({ top: y, behavior: 'smooth' });
        addList({ goTo: '' });
      }
    }
    setActiveUseEffect(true);
  }, [fastPayMenuList.goTo]);
  useEffect(() => {
    const sections = document.querySelectorAll('section');
    let lastId = topic;
    document.addEventListener('scroll', () => {
      const scrollCheck = window.scrollY;
      let sectionId;

      sections.forEach((section) => {
        const sectionTop = section.offsetTop - 70;

        const sectionHeight = section.clientHeight;
        const sectionBottom = sectionTop + sectionHeight;

        if (scrollCheck >= sectionTop && scrollCheck <= sectionBottom) {
          sectionId = section.getAttribute('id');
          if (lastId !== sectionId) {
            lastId = sectionId;
            addActiveId({ id: sectionId });
          }
        }
      });
    });
    if (fastPayActiveId.id === '') {
      addActiveId({ id: 'scaffolding-provided' });
    }
  }, []);

  return (
    <div>
      <br />
      <section
        className={classes.sectionMarginBottom}
        id='scaffolding-provided'
      >
        <p className={classes.title}>Scaffolding Provided</p>
        <hr />
        <p className={classes.detailFontStyle}>
          This repository provides the following components:
        </p>
        <List component='div' disablePadding className={classes.listStyle}>
          <ListItem
            disableRipple={true}
            sx={{ pl: 4 }}
            className={`${classes.ItemStyle} `}
          >
            <ListItemIcon>
              <CircleIcon />
            </ListItemIcon>
            <ListItemText primary='FastpaySDK.aar' />
          </ListItem>
          <ListItem
            disableRipple={true}
            sx={{ pl: 4 }}
            className={`${classes.ItemStyle}`}
          >
            <ListItemIcon>
              <CircleIcon />
            </ListItemIcon>
            <ListItemText primary='Usermanual.pdf (Documentation)' />
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
              href='https://github.com/Fast-Solution-Inc/FastPay-Android-SDK'
              target='_blank'
            >
              SDK Installation Guide
            </a>
          </ListItem>
        </List>
      </section>

      <section
        className={classes.sectionMarginBottom}
        id='scaffolding-provided'
      >
        <p className={classes.title}>Features</p>
        <hr />
        <List>
          <ListItem
            disableRipple={true}
            sx={{ pl: 2 }}
            className={classes.ItemStyleTwo}
          >
            <ListItemText>
              1. Make payment transaction using Fastpay App.
            </ListItemText>
          </ListItem>
          <ListItem
            disableRipple={true}
            sx={{ pl: 2 }}
            className={classes.ItemStyleTwo}
          >
            <ListItemText>
              2. Check the status of the payments which you make.
            </ListItemText>
          </ListItem>
          <ListItem
            disableRipple={true}
            sx={{ pl: 2 }}
            className={classes.ItemStyleTwo}
          >
            <ListItemText>3. Verify payment with OTP.</ListItemText>
          </ListItem>
          <ListItem
            disableRipple={true}
            sx={{ pl: 2 }}
            className={classes.ItemStyleTwo}
          >
            <ListItemText>
              4. SDK status provided by SDK callbacks.
            </ListItemText>
          </ListItem>
          <ListItem
            disableRipple={true}
            sx={{ pl: 2 }}
            className={classes.ItemStyleTwo}
          >
            <ListItemText>
              5. Application redirect with required data while using fastpay
              personal applciation.
            </ListItemText>
          </ListItem>
        </List>
        <p className={classes.title} style={{ marginTop: '20px' }}>
          SDK flow
        </p>
        <img src={img} alt='flow' style={{ width: '100%' }} />
      </section>

      <section className={classes.sectionMarginBottom} id='step-1'>
        <p className={classes.title} style={{ marginTop: '20px' }}>
          Initialization
        </p>
        <hr />
        <p className={classes.detailFontStyle}>
          Please follow the below steps to integrate the payment SDK to an
          applications.
        </p>
        <p className={classes.subTitle}>Step-1</p>
        <p className={classes.detailFontStyle}>
          Users need to add below dependency to their app level build.gradle
          file :
        </p>
        <div className={classes.copyBlockStyle}>
          <CopyBlock
            language={'jsx'}
            text={android}
            showLineNumbers={true}
            theme={dracula}
            wrapLines={true}
            codeBlock
          />
        </div>
      </section>

      <section className={classes.sectionMarginBottom} id='step-2'>
        <p className={classes.subTitle}>Step-2 Gradle Configuration</p>
        <p className={classes.subTitle2} style={{ marginTop: '20px' }}>
          For Gradle 7.0 and Higher:
        </p>
        <p className={classes.detailFontStyle}>
          If you're using Gradle version 7.0 or higher, you can utilize the
          dependencyResolutionManagement block in your settings.gradle file to
          centralize dependency management configurations. Open your
          settings.gradle file. If you don't already have a
          dependencyResolutionManagement block, add it to the file:
        </p>
        <div className={classes.copyBlockStyle}>
          <CopyBlock
            language={'jsx'}
            text={dependencyResolutionManagement}
            showLineNumbers={true}
            theme={dracula}
            wrapLines={true}
            codeBlock
          />
        </div>
        <p className={classes.subTitle2} style={{ marginTop: '20px' }}>
          For Gradle Versions Prior to 7.0:
        </p>
        <p className={classes.detailFontStyle}>
          If you're using a Gradle version earlier than 7.0, you'll need to add
          the repository to the buildscript block in your build.gradle file at
          the project level. Open the build.gradle file located in the root
          directory of your project. Inside the buildscript block, add the maven
          repository:
        </p>
        <div className={classes.copyBlockStyle}>
          <CopyBlock
            language={'jsx'}
            text={allprojects}
            showLineNumbers={true}
            theme={dracula}
            wrapLines={true}
            codeBlock
          />
        </div>
      </section>

      <section className={classes.sectionMarginBottom} id='step-3'>
        <p className={classes.subTitle}>Step-3 (Implementation)</p>
        <p className={classes.tableTitle}>Import FastPaySDK in your class</p>
        <div className={classes.copyBlockStyle}>
          <CopyBlock
            language={'jsx'}
            text={importData}
            showLineNumbers={true}
            theme={dracula}
            wrapLines={true}
            codeBlock
          />
        </div>
        <p className={classes.tableTitle}>Initiate FastPaySDK</p>
        <List component='div' disablePadding className={classes.listStyle}>
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
              transaction).
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
              <strong>Call back Uri:</strong> When the SDK redirect to the
              fastpay application for payment and after payment cancel or failed
              it throws a callback with this uri. It is used for deeplinking
              with the client app for catching callbacks from fastpay
              application.
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
              <strong>Callback( Sdk status, message):</strong> There are four
              sdk status (e.g. FastpayRequest.SDKStatus.INIT) and status
              message.
            </ListItemText>
          </ListItem>
        </List>
        <br />
        <div className={classes.sectionMarginBottom}>
          <CopyBlock
            language={'jsx'}
            text={FastPaySDK}
            showLineNumbers={true}
            theme={dracula}
            wrapLines={true}
            codeBlock
          />
        </div>
        <p className={classes.tableTitle}>Call back Uri</p>
        <div className={classes.sectionMarginBottom}>
          <CopyBlock
            language={'jsx'}
            text={URL}
            showLineNumbers={true}
            theme={dracula}
            wrapLines={true}
            codeBlock
          />
        </div>
        <p className={classes.tableTitle}>Initiate Payment Process</p>
        <div className={classes.sectionMarginBottom}>
          <CopyBlock
            language={'jsx'}
            text={PaymentProcess}
            showLineNumbers={true}
            theme={dracula}
            wrapLines={true}
            codeBlock
          />
        </div>
        {/* <ListItem
          disableRipple={true}
          sx={{ pl: 1 }}
          className={`${classes.ItemStyle} `}
        >
          <ListItemIcon>
            <CircleIcon />
          </ListItemIcon>
          <ListItemText>Receive Payment result</ListItemText>
        </ListItem> */}

        <div className={classes.sectionMarginBottom}>
          <p className={classes.tableTitle2}>Receive Payment result</p>
          <p className={classes.detailFontStyle}>
            Create sdkResultLauncher to get transaction success & failure result
            using result code. Transaction success result can be receive from
            FastpayResult parcelable model using
            FastpayResult.EXTRA_PAYMENT_RESULT key and failure message can be
            receive as string using FastpayRequest.EXTRA_PAYMENT_MESSAGE key.
          </p>
          <p className={classes.tableTitle}>Payment Success Data definition</p>
          <List component='div' disablePadding className={classes.listStyle}>
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
                <strong>Payment Currency:</strong> Payment currency for the
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
            language={'jsx'}
            text={overrideData}
            showLineNumbers={true}
            theme={dracula}
            wrapLines={true}
            codeBlock
          />
        </div>
      </section>

      <section className={classes.sectionMarginBottom} id='step-4'>
        <p className={classes.subTitle}>
          Step-4 Register Callback URL in AndroidManifest.xml
        </p>
        <p className={classes.detailFontStyle}>
          To handle the payment result via deep linking, register the callback
          URL in your AndroidManifest.xml. Replace your-deeplink-url with your
          own scheme and host.
        </p>
        <div className={classes.copyBlockStyle}>
          <CopyBlock
            language={'jsx'}
            text={activity}
            showLineNumbers={true}
            theme={dracula}
            wrapLines={true}
            codeBlock
          />
        </div>
        {/* <ListItem
          disableRipple={true}
          sx={{ pl: 1, mt: 3, mb: 2 }}
          className={`${classes.ItemStyle} `}
        >
          <ListItemIcon>
            <CircleIcon style={{ color: "blue" }} />
          </ListItemIcon>
          <ListItemText>
            Example: If your callback URL is myapp://payments/callback, use:
          </ListItemText>
        </ListItem> */}
        <p className={classes.tableTitle}>
          Example: If your callback URL is myapp://payments/callback, use:
        </p>
        <div className={classes.copyBlockStyle}>
          <CopyBlock
            language={'jsx'}
            text={payments}
            showLineNumbers={true}
            theme={dracula}
            wrapLines={true}
            codeBlock
          />
        </div>
        {/* <ListItem
          disableRipple={true}
          sx={{ pl: 1, mt: 3, mb: 2 }}
          className={`${classes.ItemStyle} `}
        >
          <ListItemIcon>
            <CircleIcon style={{ color: "blue" }} />
          </ListItemIcon>
          <ListItemText>
            Replace .YourPaymentResultActivity with the actual activity that
            will process the payment response.
          </ListItemText>
        </ListItem> */}
        <p className={classes.tableTitle}>
          Replace .YourPaymentResultActivity with the actual activity that will
          process the payment response.
        </p>
        {/* <ListItem
          disableRipple={true}
          sx={{ pl: 1, mt: 3, mb: 2 }}
          className={`${classes.ItemStyle} `}
        >
          <ListItemIcon>
            <CircleIcon />
          </ListItemIcon>
          <ListItemText>
            Result from Call backUrl (Please use it onCreate or onResume)
          </ListItemText>
        </ListItem> */}
        <p className={classes.tableTitle}>
          Result from Call backUrl (Please use it onCreate or onResume)
        </p>
        <div className={classes.copyBlockStyle}>
          <CopyBlock
            language={'jsx'}
            text={CallbackUrl}
            showLineNumbers={true}
            theme={dracula}
            wrapLines={true}
            codeBlock
          />
        </div>
        <Alert
          sx={{
            pl: 1,
            mt: 3,
            mb: 3,
            borderLeft: '4px solid gray',
            background: 'none',
            fontWeight: 700,
            color: 'gray',
          }}
          severity='warning'
        >
          Be sure to use try catch
        </Alert>
        <p className={classes.subTitle}>License</p>

        <hr style={{ marginBottom: '20px' }} />

        <div className={classes.copyBlockStyle}>
          <CopyBlock
            language={'jsx'}
            text={License}
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

export default AndroidGuideDetailSide;
