import React, { useState, useEffect, useContext } from "react";
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
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import CircleIcon from "@mui/icons-material/Circle";
import paymentForm from "../../assets/images/paymentForm.png";
import paymentSuccessful from "../../assets/images/paymentSuccessful.png";
import { a11yLight, CopyBlock, dracula } from "react-code-blocks";
import { MenuContext } from "../../context/MenuContext";
import { ActiveMenuContext } from "../../context/ActiveMenuContext";
import { useHistory } from "react-router-dom";

import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";

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

  tabStyle: {
    background: "rgba(15, 188, 249,0.1)",
  },

  tabTitle: {
    fontWeight: "700 !important",
  },

  alertStyle: {
    background: "#FADBD8",
    padding: "20px 20px 10px 30px",
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
const WebsiteGuideDetailSide = () => {
  const baseUrlData = [
    {
      Environment: "Staging",
      BaseURL: "https://staging-apigw-merchant.fast-pay.iq",
    },
    {
      Environment: "Production",
      BaseURL: "https://apigw-merchant.fast-pay.iq",
    },
  ];
  const cartSampleJSON = `[
    {
      "name":"Scarf",
      "qty":1,
      "unit_price":5000,
      "sub_total":5000
    },
    {
      "name":"T-shirt",
      "qty":2,
      "unit_price":10000,
      "sub_total":20000
    },
  ]`;
  const sample = `{
  "code": 200,
  "messages": [
    "Payment Initiation request processed successfully."
  ],
  "data": {
      "redirect_url": "http://staging-pgw.fast-pay.iq/pay?token=7b192dc5-1b48-491a-a1d7xxx"
}`;

  const sampleJava = `  OkHttpClient client = new OkHttpClient().newBuilder()
    .build();
  MediaType mediaType = MediaType.parse("application/json");
  RequestBody body = new MultipartBody.Builder().setType(MultipartBody.FORM)
    .addFormDataPart("store_id","YOUR_STORE_ID")
    .addFormDataPart("store_password","YOUR_STORE_PASSWORD")
    .addFormDataPart("order_id","YOUR_ORDER_ID")
    .addFormDataPart("bill_amount","25000")
    .addFormDataPart("currency","IQD")
    .addFormDataPart("cart","[{\"name\":\"Scarf\",\"qty\":1,\"unit_price\":5000,\"sub_total\":5000}]")
    .build();
  Request request = new Request.Builder()
    .url("https://staging-apigw-merchant.fast-pay.iq/api/v1/public/pgw/payment/initiation")
    .method("POST", body)
    .addHeader("Accept", "application/json")
    .addHeader("Content-Type", "application/json")
    .build();
  Response response = client.newCall(request).execute();
`;

  const samplePhp = `<?php

$curl = curl_init();

curl_setopt_array($curl, array(
  CURLOPT_URL => 'https://staging-apigw-merchant.fast-pay.iq/api/v1/public/pgw/payment/initiation',
  CURLOPT_RETURNTRANSFER => true,
  CURLOPT_ENCODING => '',
  CURLOPT_MAXREDIRS => 10,
  CURLOPT_TIMEOUT => 0,
  CURLOPT_FOLLOWLOCATION => true,
  CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
  CURLOPT_CUSTOMREQUEST => 'POST',
  CURLOPT_POSTFIELDS => array('store_id' => 'YOUR_STORE_ID','store_password' => 'YOUR_STORE_PASSWORD','order_id' => 'YOUR_ORDER_ID','bill_amount' => '25000','currency' => 'IQD','cart' => '[{"name":"Scarf","qty":1,"unit_price":5000,"sub_total":5000}]'),
  CURLOPT_HTTPHEADER => array(
    'Accept: application/json',
    'Content-Type: application/json'
  ),
));

$response = curl_exec($curl);

curl_close($curl);
echo $response;
`;

  const sampleCurl = `curl --location --request POST 'https://staging-apigw-merchant.fast-pay.iq/api/v1/public/pgw/payment/initiation' \
  --header 'Accept: application/json' \
  --header 'Content-Type: application/json' \
  --form 'store_id="YOUR_STORE_ID"' \
  --form 'store_password="YOUR_STORE_PASSWORD"' \
  --form 'order_id="YOUR_ORDER_ID"' \
  --form 'bill_amount="25000"' \
  --form 'currency="IQD"' \
  --form 'cart="[{\"name\":\"Scarf\",\"qty\":1,\"unit_price\":5000,\"sub_total\":5000}]"'`;

  const samplePython = `  import requests
  import json

  url = "https://staging-apigw-merchant.fast-pay.iq/api/v1/public/pgw/payment/initiation"

  payload={'store_id': 'YOUR_STORE_ID',
  'store_password': 'YOUR_STORE_PASSWORD',
  'order_id': 'YOUR_ORDER_ID',
  'bill_amount': '25000',
  'currency': 'IQD',
  'cart': '[{"name":"Scarf","qty":1,"unit_price":5000,"sub_total":5000}]'}
  files=[

  ]
  headers = {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  }

  response = requests.request("POST", url, headers=headers, data=payload, files=files)

  print(response.text)
  `;

  const sampleNode = `  var axios = require('axios');
  var FormData = require('form-data');
  var data = new FormData();
  data.append('store_id', 'YOUR_STORE_ID');
  data.append('store_password', 'YOUR_STORE_PASSWORD');
  data.append('order_id', 'YOUR_ORDER_ID');
  data.append('bill_amount', '25000');
  data.append('currency', 'IQD');
  data.append('cart', '[{"name":"Scarf","qty":1,"unit_price":5000,"sub_total":5000}]');

  var config = {
    method: 'post',
    url: 'https://staging-apigw-merchant.fast-pay.iq/api/v1/public/pgw/payment/initiation',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      ...data.getHeaders()
    },
    data : data
  };

  axios(config)
  .then(function (response) {
    console.log(JSON.stringify(response.data));
  })
  .catch(function (error) {
    console.log(error);
  });
  `;

  const sampleGo = `  var headers = {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  };
  var request = http.MultipartRequest('POST', Uri.parse('https://staging-apigw-merchant.fast-pay.iq/api/v1/public/pgw/payment/initiation'));
  request.fields.addAll({
    'store_id': 'YOUR_STORE_ID',
    'store_password': 'YOUR_STORE_PASSWORD',
    'order_id': 'YOUR_ORDER_ID',
    'bill_amount': '25000',
    'currency': 'IQD',
    'cart': '[{"name":"Scarf","qty":1,"unit_price":5000,"sub_total":5000}]'
  });

  request.headers.addAll(headers);

  http.StreamedResponse response = await request.send();

  if (response.statusCode == 200) {
    print(await response.stream.bytesToString());
  }
  else {
    print(response.reasonPhrase);
  }
  `;

  const validateSampleData = `{
      "code":200,
      "message": [],
      "data": {
      "gw_merchant_id": "CUL1NUB713",
      "merchant_order_id": "LAREVEORD1005"
      "received_amount": "5000.00",
      "currency": "IQD",
      "status": "Success",
      "customer_name": "John Doe",
      "customer_mobile_number": "+964xxxxxxxxxx",
      "at": "2020-11-26 13:54:01"
    }
  }`;

  const initiatePaymentSampleData = `{
  "code": 200,
  "messages": [],
  "data": {
    "summary": {
      "recipient": {
        "name": "John Doe",
        "mobile_number": "+9640101010101",
        "avatar": "https://revamp.fast-pay.cash/image/revamp.jpg",
      }
      "refund_invoice_id": "AUJHMA1634"
    }
  }`;
  const refundValidationSampleData = `{
  "code": 200,
  "messages": [],
  "data": [
    'order_id': 'LAREVEORD5006',
    'refund_status': true,
    'status_checked_at': '2021-03-01 00:00:05'
  ]
}`;

  const sampleJava_v = `OkHttpClient client = new OkHttpClient().newBuilder()
  .build();
MediaType mediaType = MediaType.parse("application/json");
RequestBody body = new MultipartBody.Builder().setType(MultipartBody.FORM)
  .addFormDataPart("store_id","YOUR_STORE_ID")
  .addFormDataPart("store_password","YOUR_STORE_PASSWORD")
  .addFormDataPart("order_id","YOUR_ORDER_ID")
  .build();
Request request = new Request.Builder()
  .url("https://staging-apigw-merchant.fast-pay.iq/api/v1/public/pgw/payment/validate")
  .method("POST", body)
  .addHeader("Accept", "application/json")
  .addHeader("Content-Type", "application/json")
  .build();
Response response = client.newCall(request).execute();`;

  const samplePhp_v = `<?php

$curl = curl_init();

curl_setopt_array($curl, array(
  CURLOPT_URL => 'https://staging-apigw-merchant.fast-pay.iq/api/v1/public/pgw/payment/validate',
  CURLOPT_RETURNTRANSFER => true,
  CURLOPT_ENCODING => '',
  CURLOPT_MAXREDIRS => 10,
  CURLOPT_TIMEOUT => 0,
  CURLOPT_FOLLOWLOCATION => true,
  CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
  CURLOPT_CUSTOMREQUEST => 'POST',
  CURLOPT_POSTFIELDS => array('store_id' => 'YOUR_STORE_ID','store_password' => 'YOUR_STORE_PASSWORD','order_id' => 'YOUR_ORDER_ID'),
  CURLOPT_HTTPHEADER => array(
    'Accept: application/json',
    'Content-Type: application/json'
  ),
));

$response = curl_exec($curl);

curl_close($curl);
echo $response;
`;

  const sampleCurl_v = `curl --location --request POST 'https://staging-apigw-merchant.fast-pay.iq/api/v1/public/pgw/payment/validate' \
--header 'Accept: application/json' \
--header 'Content-Type: application/json' \
--form 'store_id="YOUR_STORE_ID"' \
--form 'store_password="YOUR_STORE_PASSWORD"' \
--form 'order_id="YOUR_ORDER_ID"'`;

  const samplePython_v = `import requests
import json

url = "https://staging-apigw-merchant.fast-pay.iq/api/v1/public/pgw/payment/validate"

payload={'store_id': 'YOUR_STORE_ID',
'store_password': 'YOUR_STORE_PASSWORD',
'order_id': 'YOUR_ORDER_ID'}
files=[

]
headers = {
  'Accept': 'application/json',
  'Content-Type': 'application/json'
}

response = requests.request("POST", url, headers=headers, data=payload, files=files)

print(response.text)
`;

  const sampleNode_v = `var axios = require('axios');
var FormData = require('form-data');
var data = new FormData();
data.append('store_id', 'YOUR_STORE_ID');
data.append('store_password', 'YOUR_STORE_PASSWORD');
data.append('order_id', 'YOUR_ORDER_ID');

var config = {
  method: 'post',
  url: 'https://staging-apigw-merchant.fast-pay.iq/api/v1/public/pgw/payment/validate',
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    ...data.getHeaders()
  },
  data : data
};

axios(config)
.then(function (response) {
  console.log(JSON.stringify(response.data));
})
.catch(function (error) {
  console.log(error);
});
`;

  const sampleGo_v = `var headers = {
  'Accept': 'application/json',
  'Content-Type': 'application/json'
};
var request = http.MultipartRequest('POST', Uri.parse('https://staging-apigw-merchant.fast-pay.iq/api/v1/public/pgw/payment/validate'));
request.fields.addAll({
  'store_id': 'YOUR_STORE_ID',
  'store_password': 'YOUR_STORE_PASSWORD',
  'order_id': 'YOUR_ORDER_ID'
});

request.headers.addAll(headers);

http.StreamedResponse response = await request.send();

if (response.statusCode == 200) {
  print(await response.stream.bytesToString());
}
else {
  print(response.reasonPhrase);
}
`;

  const sampleJava_r = `OkHttpClient client = new OkHttpClient().newBuilder()
.build();
MediaType mediaType = MediaType.parse("application/json");
RequestBody body = new MultipartBody.Builder().setType(MultipartBody.FORM)
.addFormDataPart("store_id","YOUR_STORE_ID")
.addFormDataPart("store_password","YOUR_STORE_PASSWORD")
.addFormDataPart("msisdn","+964xxxxxxxxxx")
.addFormDataPart("amount
","250")
.build();
Request request = new Request.Builder()
.url("https://apigw-merchant.fast-pay.iq/api/v1/public/pgw/payment/refund")
.method("POST", body)
.addHeader("Accept", "application/json")
.addHeader("Content-Type", "application/json")
.build();
Response response = client.newCall(request).execute();`;

  const samplePhp_r = `<?php

$curl = curl_init();

curl_setopt_array($curl, array(
  CURLOPT_URL => 'https://apigw-merchant.fast-pay.iq/api/v1/public/pgw/payment/refund',
  CURLOPT_RETURNTRANSFER => true,
  CURLOPT_ENCODING => '',
  CURLOPT_MAXREDIRS => 10,
  CURLOPT_TIMEOUT => 0,
  CURLOPT_FOLLOWLOCATION => true,
  CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
  CURLOPT_CUSTOMREQUEST => 'POST',
  CURLOPT_POSTFIELDS => array('store_id' => 'YOUR_STORE_ID','store_password' => 'YOUR_STORE_PASSWORD','msisdn' => '+964xxxxxxxxxx','amount
' => '250'),
  CURLOPT_HTTPHEADER => array(
    'Accept: application/json',
    'Content-Type: application/json'
  ),
));

$response = curl_exec($curl);

curl_close($curl);
echo $response;
`;

  const sampleCurl_r = `curl --location --request POST 'https://apigw-merchant.fast-pay.iq/api/v1/public/pgw/payment/refund' \
--header 'Accept: application/json' \
--header 'Content-Type: application/json' \
--form 'store_id="YOUR_STORE_ID"' \
--form 'store_password="YOUR_STORE_PASSWORD"' \
--form 'msisdn="+964xxxxxxxxxx"' \
--form 'amount
="250"'`;

  const samplePython_r = `import requests
import json

url = "https://apigw-merchant.fast-pay.iq/api/v1/public/pgw/payment/refund"

payload={'store_id': 'YOUR_STORE_ID',
'store_password': 'YOUR_STORE_PASSWORD',
'msisdn': '+964xxxxxxxxxx',
'amount
': '250'}
files=[

]
headers = {
  'Accept': 'application/json',
  'Content-Type': 'application/json'
}

response = requests.request("POST", url, headers=headers, data=payload, files=files)

print(response.text)
`;

  const sampleNode_r = `var axios = require('axios');
var FormData = require('form-data');
var data = new FormData();
data.append('store_id', 'YOUR_STORE_ID');
data.append('store_password', 'YOUR_STORE_PASSWORD');
data.append('msisdn', '+964xxxxxxxxxx');
data.append('amount\n', '250');

var config = {
  method: 'post',
  url: 'https://apigw-merchant.fast-pay.iq/api/v1/public/pgw/payment/refund',
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    ...data.getHeaders()
  },
  data : data
};

axios(config)
.then(function (response) {
  console.log(JSON.stringify(response.data));
})
.catch(function (error) {
  console.log(error);
});
`;

  const sampleGo_r = `package main

import (
  "fmt"
  "bytes"
  "mime/multipart"
  "net/http"
  "io/ioutil"
)

func main() {

  url := "https://apigw-merchant.fast-pay.iq/api/v1/public/pgw/payment/refund"
  method := "POST"

  payload := &bytes.Buffer{}
  writer := multipart.NewWriter(payload)
  _ = writer.WriteField("store_id", "YOUR_STORE_ID")
  _ = writer.WriteField("store_password", "YOUR_STORE_PASSWORD")
  _ = writer.WriteField("msisdn", "+964xxxxxxxxxx")
  _ = writer.WriteField("amount\n", "250")
  err := writer.Close()
  if err != nil {
    fmt.Println(err)
    return
  }


  client := &http.Client {
  }
  req, err := http.NewRequest(method, url, payload)

  if err != nil {
    fmt.Println(err)
    return
  }
  req.Header.Add("Accept", "application/json")
  req.Header.Add("Content-Type", "application/json")

  req.Header.Set("Content-Type", writer.FormDataContentType())
  res, err := client.Do(req)
  if err != nil {
    fmt.Println(err)
    return
  }
  defer res.Body.Close()

  body, err := ioutil.ReadAll(res.Body)
  if err != nil {
    fmt.Println(err)
    return
  }
  fmt.Println(string(body))
}`;

  const classes = useStyles();
  const { fastPayMenuList, addList } = useContext(MenuContext);
  const { addActiveId, fastPayActiveId } = useContext(ActiveMenuContext);
  let history = useHistory();
  const [activeUseEffect, setActiveUseEffect] = useState(false);
  const topic = fastPayActiveId.id;

  const [tabValue, setTabValue] = useState("1");
  const [tabValue_v, setTabValue_v] = useState("11");
  const [tabValue_r, setTabValue_r] = useState("111");

  const handleChange = (event, newValue) => {
    setTabValue(newValue);
  };
  const handleChange_v = (event, newValue) => {
    setTabValue_v(newValue);
  };
  const handleChange_r = (event, newValue) => {
    setTabValue_r(newValue);
  };

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
      addActiveId({ id: "synopsis" });
    }
  }, []);

  return (
    <div>
      <br />

      <section className={classes.sectionMarginBottom} id="synopsis">
        <p className={classes.title}>Overview</p>
        <hr />
        <p className={classes.detailFontStyle}>
          Imagine you're running an online clothing store called La Reve and
          you're considering FastPay as an additional payment option, alongside
          popular methods like PayPal and VISA. To integrate FastPay into your
          payment system, you first need to become a registered merchant with
          FastPay. This process begins by reaching out to the FastPay Merchant
          Acquisition Team.
        </p>
        <p className={classes.title}>Becoming a FastPay Merchant</p>
        <p className={classes.detailFontStyle}>
          The Merchant Acquisition Team at FastPay will guide you through
          setting up your merchant account. They'll provide you with all the
          necessary details, and once your account is established, La Reve will
          receive an email containing system-generated credentials and
          comprehensive API integration guidelines.
        </p>
        <p className={classes.title}>Initial Access and Security</p>
        <p className={classes.detailFontStyle}>
          For your first login at the merchant web panel (merchant.fast-pay.iq),
          use the provided credentials. You'll then be prompted to update your
          password for enhanced security. After updating, you'll gain access to
          your personalized dashboard. This dashboard is the hub for various
          online merchant activities, including:
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
            <ListItemText primary="Refund Payments: Process customer refunds efficiently." />
          </ListItem>
          <ListItem
            disableRipple={true}
            sx={{ pl: 4 }}
            className={`${classes.ItemStyle}`}
          >
            <ListItemIcon>
              <CircleIcon />
            </ListItemIcon>
            <ListItemText primary="Transaction History: View and manage your store's transaction records.." />
          </ListItem>
          <ListItem
            disableRipple={true}
            sx={{ pl: 4 }}
            className={`${classes.ItemStyle} `}
          >
            <ListItemIcon>
              <CircleIcon />
            </ListItemIcon>
            <ListItemText primary="Store Configuration: Customize settings for your online store." />
          </ListItem>
          <ListItem
            disableRipple={true}
            sx={{ pl: 4 }}
            className={`${classes.ItemStyle} `}
          >
            <ListItemIcon>
              <CircleIcon />
            </ListItemIcon>
            <ListItemText primary="Account Information: Access and update your merchant account details." />
          </ListItem>
        </List>

        <p className={classes.title} style={{ marginTop: 32 }}>
          Configuring Your Store
        </p>
        <p className={classes.detailFontStyle}>
          In the Store Configuration section, you can set up crucial
          store-specific details, including store passwords, success and
          cancellation URLs, failure notification URLs, and Instant Payment
          Notification (IPN) URLs. The fields for your store ID and store URL
          are pre-filled and are set to read-only mode for security purposes.
        </p>
      </section>
      {/* end section  */}
      <section className={classes.sectionMarginBottom} id="how-it-works">
        <p className={classes.title}>
          How It Work -{" "}
          <span className={classes.subTitle} style={{ fontWeight: 400 }}>
            a technical overview of the payment journey
          </span>
        </p>
        <hr />
        <br />
        <img
          src={steps}
          style={{ maxWidth: "70%", display: "block", margin: "auto" }}
        />
        <br />
        <p className={classes.detailFontStyle}>
          The above steps can be categorized in three sections based on the
          development process described below.
        </p>
      </section>
      <section
        className={classes.sectionMarginBottom}
        id="initiation-of-transaction"
      >
        <p className={classes.subTitle}>Transaction Initiation</p>
        <p className={classes.detailFontStyle}>
          <strong>Steps 1 to 3</strong> delineate the commencement of a
          transaction. Upon customer checkout confirmation, the merchant server
          requests a unique transaction URL from the FastPay server. This
          entails submitting the necessary credentials and data for validation.
          Once verified, FastPay issues a Redirect URL to the merchant. The
          merchant system then reroutes the customer to this specific payment
          gateway URL, signaling the start of the payment process.
        </p>
      </section>
      <section
        className={classes.sectionMarginBottom}
        id="handling-payment-notification"
      >
        <p className={classes.subTitle}>Payment Notification Protocol</p>
        <p className={classes.detailFontStyle}>
          <strong>Steps 4 to 7</strong> outline the merchant's protocol for
          managing payment notifications. FastPay dispatches an HTTP POST
          message in the event of a Successful Payment only , known as the
          Instant Payment Notification (IPN) message, to the merchant-designated
          IPN URL. This URL is configurable via the Merchant Web Panel
          (merchant.fast-pay.iq). Upon receipt, the merchant's development team
          is tasked with validating the IPN using FastPay's Transaction
          Validation API to ensure its authenticity and accuracy.
        </p>
      </section>
      <section
        className={classes.sectionMarginBottom}
        id="service-confirmation"
      >
        <p className={classes.subTitle}>Service Confirmation Process</p>
        <p className={classes.detailFontStyle}>
          In <strong>Step 8</strong>, the customer is directed back to the
          merchant's website at one of the predefined URLs: success_url,
          cancel_ur ç on the transaction outcome. Here, the merchant presents
          the appropriate confirmation notification if the transaction is
          successful, or a denial notice in the event of a transaction failure
          or cancellation.
        </p>
      </section>
      <section className={classes.sectionMarginBottom} id="integration-steps">
        <p className={classes.title}>Integration Steps</p>
        <hr />
      </section>
      <section
        className={classes.sectionMarginBottom}
        id="initiate-payment-sub"
      >
        <p className={classes.subTitle}>Step 1: Payment Initiation</p>
        <p className={classes.detailFontStyle}>
          Begin by transmitting your store credentials and order information to
          FastPay to kick off the payment process Grab the returned redirect URL
          and redirect customers to the URL. From there, FastPay handles the
          remainder of the payment journey, ensuring a seamless experience for
          your customers.
        </p>
      </section>
      <section
        className={classes.sectionMarginBottom}
        id="validate-payment-sub"
      >
        <p className={classes.subTitle}>Step 2: Payment Verification</p>
        <p className={classes.detailFontStyle}>
          Once the payment has been processed, FastPay's Payment Gateway (PGW)
          will guide the customer back to your website, landing on a page that
          reflects the payment outcome: successful, failed, or cancelled. It's
          crucial at this stage to verify the payment details using FastPay's
          Validation API. You'll need your store_id, store_password, and the
          order_id to authenticate the transaction.
        </p>
      </section>
      <section
        className={classes.sectionMarginBottom}
        id="update-your-transaction"
      >
        <p className={classes.subTitle}>Step 3: Transaction Update</p>
        <p className={classes.detailFontStyle}>
          Post-verification, you should update the transaction records in your
          database. Typically, the status will reflect 'Success' for completed
          payments. It's rare to encounter statuses other than 'Success', but
          you should be prepared to handle any such instances accordingly.
        </p>
      </section>
      <section
        className={classes.sectionMarginBottom}
        id="enable-most-advanced-IPN"
      >
        <p className={classes.subTitle}>Step 4: Advanced IPN Setup</p>
        <p className={classes.detailFontStyle}>
          For cases where a payment is acknowledged as successful by FastPay,
          yet an issue occurs with your website, connectivity, or the customer's
          network, preventing immediate redirect to your website—set up the
          Instant Payment Notification (IPN) service. This tool will
          automatically send a notification to the IPN URL specified in your
          FastPay Merchant Panel, ensuring your database is informed of the
          payment, even if the customer can't return to your website.
        </p>
        <div className={classes.alertStyle}>
          <p className={classes.subTitle}>Security Measures</p>
          <p className={classes.detailFontStyle}>
            It's imperative to conduct a thorough security check by validating
            each transaction and amount through the validation API.
            Additionally, configure your IPN URL to capture notifications for
            all payments, including those that customers might not return to
            acknowledge on your site.
          </p>
        </div>
      </section>
      <section className={classes.sectionMarginBottom} id="base-url">
        <p className={classes.title}>Base URL</p>
        <hr className={classes.sectionMarginBottom} />

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
      </section>
      <section className={classes.sectionMarginBottom} id="apis">
        <p className={classes.title}>APIs</p>
        <hr />

        <a
          href="https://documenter.getpostman.com/view/19338260/2s9YkkeNKN"
          target="_blank"
          style={{
            color: "rgba(15, 188, 249,1.0)",
            marginTop: "24px",
            display: "block",
          }}
        >
          FastPay Payment APIs - Postman Collection
        </a>
      </section>
    </div>
  );
};

export default WebsiteGuideDetailSide;
