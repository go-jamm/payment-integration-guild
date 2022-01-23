import React, { useState, useEffect, useContext } from "react";
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

  tabStyle: {
    background: "rgba(15, 188, 249,0.1)",
  },

  tabTitle: {
    fontWeight: "700 !important",
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
    .url("https://dev-apigw-merchant.deshipay.com/api/v1/public/pgw/payment/initiation")
    .method("POST", body)
    .addHeader("Accept", "application/json")
    .addHeader("Content-Type", "application/json")
    .build();
  Response response = client.newCall(request).execute();
`;

  const samplePhp = `<?php

$curl = curl_init();

curl_setopt_array($curl, array(
  CURLOPT_URL => 'https://dev-apigw-merchant.deshipay.com/api/v1/public/pgw/payment/initiation',
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

  const sampleCurl = `curl --location --request POST 'https://dev-apigw-merchant.deshipay.com/api/v1/public/pgw/payment/initiation' \
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
  
  url = "https://dev-apigw-merchant.deshipay.com/api/v1/public/pgw/payment/initiation"
  
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
    url: 'https://dev-apigw-merchant.deshipay.com/api/v1/public/pgw/payment/initiation',
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
  var request = http.MultipartRequest('POST', Uri.parse('https://dev-apigw-merchant.deshipay.com/api/v1/public/pgw/payment/initiation'));
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
  .url("https://dev-apigw-merchant.deshipay.com/api/v1/public/pgw/payment/validate")
  .method("POST", body)
  .addHeader("Accept", "application/json")
  .addHeader("Content-Type", "application/json")
  .build();
Response response = client.newCall(request).execute();`;

  const samplePhp_v = `<?php

$curl = curl_init();

curl_setopt_array($curl, array(
  CURLOPT_URL => 'https://dev-apigw-merchant.deshipay.com/api/v1/public/pgw/payment/validate',
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

  const sampleCurl_v = `curl --location --request POST 'https://dev-apigw-merchant.deshipay.com/api/v1/public/pgw/payment/validate' \
--header 'Accept: application/json' \
--header 'Content-Type: application/json' \
--form 'store_id="YOUR_STORE_ID"' \
--form 'store_password="YOUR_STORE_PASSWORD"' \
--form 'order_id="YOUR_ORDER_ID"'`;

  const samplePython_v = `import requests
import json

url = "https://dev-apigw-merchant.deshipay.com/api/v1/public/pgw/payment/validate"

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
  url: 'https://dev-apigw-merchant.deshipay.com/api/v1/public/pgw/payment/validate',
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
var request = http.MultipartRequest('POST', Uri.parse('https://dev-apigw-merchant.deshipay.com/api/v1/public/pgw/payment/validate'));
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
        <p className={classes.title}>Synopsis</p>
        <hr />
        <p className={classes.detailFontStyle}>
          Let’s say, <strong>La Reve</strong> is a merchant that sell clothes
          online and want to use <strong>FastPay</strong> as a payment method
          along with other payment options e.g. PayPal, VISA etc. To be eligible
          for accepting payment through <strong>FastPay</strong> gateway, it is
          a prerequisite for <strong>La Reve</strong> to become a merchant of{" "}
          <strong>FastPay</strong> upon contacting the{" "}
          <strong>
            FastPay Merchant Acquisition Team. Merchant Acquisition Team
          </strong>{" "}
          will create a merchant account for <strong>La Reve</strong> along with
          other necessary information. Once the account creation is done,{" "}
          <strong>La Reve</strong> will receive system-generated credentials
          through email along with API integration documentation.
        </p>
        <p className={classes.detailFontStyle}>
          Upon first time successful login to merchant web panel i.e.{" "}
          <strong>merchant.fast-pay.iq</strong> using valid login credentials{" "}
          <strong>La Reve</strong> will be prompted to update their password.
          Once the password update operation is done the system will redirect
          logged in-store user to their dedicated dashboard where they can do
          necessary operations dedicated to online merchants like -
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
            <ListItemText primary="Refund Payment." />
          </ListItem>
          <ListItem
            disableRipple={true}
            sx={{ pl: 4 }}
            className={`${classes.ItemStyle}`}
          >
            <ListItemIcon>
              <CircleIcon />
            </ListItemIcon>
            <ListItemText primary="Transaction History." />
          </ListItem>
          <ListItem
            disableRipple={true}
            sx={{ pl: 4 }}
            className={`${classes.ItemStyle} `}
          >
            <ListItemIcon>
              <CircleIcon />
            </ListItemIcon>
            <ListItemText primary="Store Configuration." />
          </ListItem>
          <ListItem
            disableRipple={true}
            sx={{ pl: 4 }}
            className={`${classes.ItemStyle} `}
          >
            <ListItemIcon>
              <CircleIcon />
            </ListItemIcon>
            <ListItemText primary="Account Information etc." />
          </ListItem>
        </List>
        <p className={classes.detailFontStyle}>
          Clicking on <strong>Store Configuration</strong> will redirect the
          user to the <strong>Store Configuration</strong> page where they can
          set up their store related information like{" "}
          <code>store_password</code> , <code>success_url</code> ,{" "}
          <code>cancel_url</code> , <code>fail_url</code> ,<code>ipn_url</code>{" "}
          .
        </p>
        <p className={classes.detailFontStyle}>
          <code>store_id</code> and <code>store_url</code> fields will be
          pre-filled and available in read-only mode.
        </p>
      </section>
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
          The above steps can be categorised in three sections based on the
          development process described below.
        </p>
      </section>
      <section
        className={classes.sectionMarginBottom}
        id="initiation-of-transaction"
      >
        <p className={classes.subTitle}>Initiation of Transaction:</p>
        <p className={classes.detailFontStyle}>
          The Steps 1, 2 and 3 are used to make request for a new transaction.
          After getting confirmation of checkout from customer, merchant server
          sends a request to FastPay server to get an unique URL to redirect
          customer to. If required credentials and data are valid, then FastPay
          provides a <strong>Redirect URL</strong> to Merchant System. After
          receiving the Redirect URL, Merchant System redirects the customer to
          unique payment gateway URL that is received as a response to the
          initiation request.
        </p>
      </section>
      <section
        className={classes.sectionMarginBottom}
        id="handling-payment-notification"
      >
        <p className={classes.subTitle}>Handling Payment Notification:</p>
        <p className={classes.detailFontStyle}>
          Steps 4 & 5 describes how payment notification should be handled in
          merchant side. For any notification, <strong>FastPay</strong> will
          send <code>HTTP</code> message in <code>POST</code> method called{" "}
          <code>IPN</code> message to the IPN URL which is to be configured by
          the Merchant using <strong>Merchant Web Panel</strong>{" "}
          <code>i.e. merchant.fast-pay.iq.</code> After receiving the message,
          merchant developer must validate the message using{" "}
          <strong>Transaction Validation</strong> API of{" "}
          <strong>FastPay PGW</strong>
        </p>
      </section>
      <section
        className={classes.sectionMarginBottom}
        id="service-confirmation"
      >
        <p className={classes.subTitle}>Service Confirmation:</p>
        <p className={classes.detailFontStyle}>
          At Step 5, <strong>FastPay</strong> will redirect the customer to
          merchant’s website URL i.e. <code>success_url</code> or{" "}
          <code>cancel_url</code> or <code>fail_url</code> based on transaction
          status. At this stage, Merchant will display the notification of
          service confirmation in case of Success, otherwise, service denial in
          case of failure or cancellation of payment.
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
        <p className={classes.subTitle}>Initiate Payment</p>
        <p className={classes.detailFontStyle}>
          Provide Information about your customer and order to{" "}
          <strong>FastPay</strong> along with your store id to initiate the
          payment. Rest of the payment process will be done by{" "}
          <strong>FastPay</strong>
        </p>
      </section>
      <section
        className={classes.sectionMarginBottom}
        id="validate-payment-sub"
      >
        <p className={classes.subTitle}>Validate Payment</p>
        <p className={classes.detailFontStyle}>
          After successfully receiving the payment, <strong>FastPay PGW</strong>{" "}
          will redirect back the customer to the merchant website as per
          Success, Failed or Cancel status.{" "}
          <span style={{ color: "#E74C3C" }}>
            You must validate the order with our validation API using
          </span>{" "}
          <code>store_id</code> , <code>store_password</code> and{" "}
          <code>order_id</code>.
        </p>
      </section>
      <section
        className={classes.sectionMarginBottom}
        id="update-your-transaction"
      >
        <p className={classes.subTitle}>Update your transaction</p>
        <p className={classes.detailFontStyle}>
          After validation of the transaction that you have received, depending
          on the status you have to update your transaction in your Database.
          The status will be{" "}
          <span style={{ color: "#196F3D" }}>
            <strong>Success</strong>
          </span>
          ,{" "}
          <span style={{ color: "#E74C3C" }}>
            {" "}
            <strong>Failed</strong>
          </span>{" "}
          or <strong>Cancelled</strong> depending on payment status.
        </p>
      </section>
      <section
        className={classes.sectionMarginBottom}
        id="enable-most-advanced-IPN"
      >
        <p className={classes.subTitle}>Enable most advanced IPN</p>
        <p className={classes.detailFontStyle}>
          If somehow your consumer pays your payable amount to PGW side and
          FastPay accept it as Success , but your Website/Connectivity/Customer
          Network got downtime and is unable to update the payment at your side
          you can use <strong>IPN</strong>{" "}
          <span style={{ fontWeight: 300, fontStyle: "italic" }}>
            ( Instant Payment Notification )
          </span>{" "}
          . It will send a notification to your provided{" "}
          <strong>IPN URL</strong> in{" "}
          <strong>FastPay Merchant Dashboard</strong> to notify you and your
          database even if your user is unable to return back to your website
        </p>
        <div className={classes.alertStyle}>
          <List component="div" disablePadding>
            <ListItem
              disableRipple={true}
              sx={{ pl: 4 }}
              className={`${classes.alertTitle}`}
            >
              <ListItemText primary="Security Check:" />
            </ListItem>
            <ListItem
              disableRipple={true}
              sx={{ pl: 4 }}
              className={`${classes.alertItem} `}
            >
              <ListItemIcon>
                <CircleIcon />
              </ListItemIcon>
              <ListItemText>
                You must validate your transaction and amount by calling our
                validation API.
              </ListItemText>
            </ListItem>
            <ListItem
              disableRipple={true}
              sx={{ pl: 4 }}
              className={`${classes.alertItem}`}
            >
              <ListItemIcon>
                <CircleIcon />
              </ListItemIcon>
              <ListItemText>
                You must set <strong>IPN URL</strong> to receive notification
                for both returned and missed payments.
              </ListItemText>
            </ListItem>
          </List>
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
      </section>
      <section
        className={classes.sectionMarginBottom}
        id="initiate-payment-api"
      >
        <p
          className={classes.subTitle}
          style={{ marginTop: "16px", marginBottom: "35px" }}
        >
          Initiate Payment API
        </p>
        <TableContainer component={Paper}>
          <Table sx={{ Width: 650 }} aria-label="simple table">
            <TableHead className={classes.tableStyle}>
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

        <p className={classes.tableTitle}>Request Body:</p>
        <TableContainer component={Paper}>
          <Table sx={{ Width: 650 }} aria-label="simple table">
            <TableHead className={classes.tableStyle}>
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
                <TableCell>Merchant Password. e.g. A$Rong001</TableCell>
                <TableCell>Yes</TableCell>
              </TableRow>
              <TableRow
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell>order_id</TableCell>
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
                  <br />
                  <div className={classes.copyBlockStyle}>
                    <CopyBlock
                      language={"jsx"}
                      text={cartSampleJSON}
                      showLineNumbers={true}
                      theme={a11yLight}
                      wrapLines={false}
                      codeBlock
                    />
                  </div>
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
        {/* working  */}
        <p className={classes.tableTitle}>Sample code snippet:</p>
        <Box sx={{ width: "100%", typography: "body1" }}>
          <TabContext value={tabValue}>
            <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
              <TabList
                onChange={handleChange}
                aria-label="lab API tabs example"
                className={classes.tabStyle}
              >
                <Tab label="Java" value="1" className={classes.tabTitle} />
                <Tab label="PHP" value="2" className={classes.tabTitle} />
                <Tab label="cURL" value="3" className={classes.tabTitle} />
                <Tab label="Python" value="4" className={classes.tabTitle} />
                <Tab label="Node" value="5" className={classes.tabTitle} />
                <Tab label="Go" value="6" className={classes.tabTitle} />
              </TabList>
            </Box>
            <TabPanel value="1">
              <div className={classes.copyBlockStyle}>
                <CopyBlock
                  language={"jsx"}
                  text={sampleJava}
                  showLineNumbers={true}
                  theme={dracula}
                  wrapLines={true}
                  codeBlock
                />
              </div>
            </TabPanel>
            <TabPanel value="2">
              <div className={classes.copyBlockStyle}>
                <CopyBlock
                  language={"jsx"}
                  text={samplePhp}
                  showLineNumbers={true}
                  theme={dracula}
                  wrapLines={true}
                  codeBlock
                />
              </div>
            </TabPanel>
            <TabPanel value="3">
              <div className={classes.copyBlockStyle}>
                <CopyBlock
                  language={"jsx"}
                  text={sampleCurl}
                  showLineNumbers={true}
                  theme={dracula}
                  wrapLines={true}
                  codeBlock
                />
              </div>
            </TabPanel>
            <TabPanel value="4">
              <div className={classes.copyBlockStyle}>
                <CopyBlock
                  language={"jsx"}
                  text={samplePython}
                  showLineNumbers={true}
                  theme={dracula}
                  wrapLines={true}
                  codeBlock
                />
              </div>
            </TabPanel>
            <TabPanel value="5">
              <div className={classes.copyBlockStyle}>
                <CopyBlock
                  language={"jsx"}
                  text={sampleNode}
                  showLineNumbers={true}
                  theme={dracula}
                  wrapLines={true}
                  codeBlock
                />
              </div>
            </TabPanel>
            <TabPanel value="6">
              <div className={classes.copyBlockStyle}>
                <CopyBlock
                  language={"jsx"}
                  text={sampleGo}
                  showLineNumbers={true}
                  theme={dracula}
                  wrapLines={true}
                  codeBlock
                />
              </div>
            </TabPanel>
          </TabContext>
        </Box>
        <p className={classes.tableTitle}>Sample Response:</p>
        <div className={classes.copyBlockStyle}>
          <CopyBlock
            language={"jsx"}
            text={sample}
            showLineNumbers={true}
            theme={dracula}
            wrapLines={true}
            codeBlock
          />
        </div>
        <p className={classes.detailFontStyle}>
          If everything works as expected customer needs to be redirected from
          merchant website to Payment Gateway Redirect URL received in response
          to the initiation request. Upon successful redirection customer will
          be landed to a gateway page more or like below where customer can
          authorize the transaction and pay accordingly.
        </p>
        <img
          src={paymentForm}
          alt=""
          style={{ maxWidth: "70%", display: "block", margin: "auto" }}
        />
        <br />
        <p style={{ fontSize: "13px", textAlign: "center", margin: 0 }}>
          Copyright &copy;FastPay.All rights reserved.
        </p>
        <p className={classes.detailFontStyle}>
          Customers will have two options e.i <i>Login to Pay</i> and{" "}
          <i>Scan QR Code</i> Using <strong>FastPay Mobile App</strong> to pay
          against their order. Either way, upon successful completion of payment
          the customer will be redirected to the merchent provided success URL,
          for example -
        </p>
        <p
          className={classes.detailFontStyle}
          style={{ color: "blue", textDecoration: "underline" }}
        >
          https://abcmerchant.com/success?order_id=ABC212121
        </p>
        <p className={classes.detailFontStyle}>
          where ABC212121 is the merchant provided <code>order_id</code> during
          payment initiation request. Validate the transaction using Validation
          API before marking the order as paid
        </p>
        <img
          src={paymentSuccessful}
          alt=""
          style={{ maxWidth: "70%", display: "block", margin: "auto" }}
        />
        <br />
        <p style={{ fontSize: "13px", textAlign: "center", margin: 0 }}>
          Copyright &copy;FastPay.All rights reserved.
        </p>
      </section>
      <section
        className={classes.sectionMarginBottom}
        id="validate-payment-api"
      >
        <p className={classes.subTitle}>Payment Validation API</p>

        <p className={classes.detailFontStyle}>
          It is important to validate the transaction notification for security
          purposes.
        </p>
      </section>
      <section
        className={classes.sectionMarginBottom}
        id="grab-the-notification"
      >
        <p className={classes.subTitle}>Step 1: Grab The Notification</p>
        <p className={classes.detailFontStyle}>
          As IPN URL is already set in the panel, almost all of the payment
          notifications will reach towards IPN URL prior to user redirection to
          the merchant website. So, it requires validation for amount and
          transaction properly to get rid of a fraudulent transaction.
        </p>
        <p className={classes.detailFontStyle}>
          The IPN will send a POST request to your IPN URL with the below data -
        </p>
        <TableContainer component={Paper}>
          <Table sx={{ Width: 650 }} aria-label="simple table">
            <TableHead className={classes.tableStyle}>
              <TableRow>
                <TableCell>Parameters</TableCell>
                <TableCell>Type</TableCell>
                <TableCell>Sample Value</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell>gw_transaction_id</TableCell>
                <TableCell>alphanumeric</TableCell>

                <TableCell>CUL1NUB731</TableCell>
              </TableRow>

              <TableRow
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell>merchant_order_id</TableCell>
                <TableCell>alphanumeric</TableCell>

                <TableCell>LAREVEORD1005</TableCell>
              </TableRow>

              <TableRow
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell>received_amount</TableCell>
                <TableCell>decimal</TableCell>

                <TableCell>5000.00</TableCell>
              </TableRow>
              <TableRow
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell>currency</TableCell>
                <TableCell>string</TableCell>

                <TableCell>IQD</TableCell>
              </TableRow>
              <TableRow
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell>status</TableCell>
                <TableCell>string</TableCell>

                <TableCell>Success</TableCell>
              </TableRow>
              <TableRow
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell>customer_name</TableCell>
                <TableCell>string</TableCell>

                <TableCell>John Doe</TableCell>
              </TableRow>
              <TableRow
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell>customer_mobile_number</TableCell>
                <TableCell>string</TableCell>

                <TableCell>+964xxxxxxxxxx</TableCell>
              </TableRow>
              <TableRow
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell>at</TableCell>
                <TableCell>
                  datetime <i>(Y-m-d H:i:s)</i>
                </TableCell>

                <TableCell>2020-11-26 13:54:01</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </section>
      <section
        className={classes.sectionMarginBottom}
        id="validating-a-payment"
      >
        <p className={classes.subTitle}>Step 2: Validating A Payment</p>
        <p className={classes.detailFontStyle}>
          No matter it’s an IPN notification at your IPN URL or Successful
          Redirection to your Success URL with <code>order_id</code> as URL
          Parameter, it is mandatory to validate a payment using Validation API
          to get rid of fraudulent activities.
        </p>

        <TableContainer component={Paper}>
          <Table sx={{ Width: 650 }} aria-label="simple table">
            <TableHead className={classes.tableStyle}>
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
                <TableCell>/api/v1/public/pgw/payment/validate</TableCell>
                <TableCell> POST</TableCell>
                <TableCell>
                  Accept: application/json
                  <br />
                  Content-Type: application/json
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
        <p className={classes.tableTitle}>Request Body:</p>
        <TableContainer component={Paper}>
          <Table sx={{ Width: 650 }} aria-label="simple table">
            <TableHead className={classes.tableStyle}>
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
                <TableCell>order_id</TableCell>
                <TableCell> alphanumeric (8-32)</TableCell>
                <TableCell>
                  {" "}
                  Merchant Generated Unique Order ID. e.g. ARONGORD1001
                </TableCell>
                <TableCell>Yes</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>

        <p className={classes.tableTitle}>Sample code snippet:</p>
        <Box sx={{ width: "100%", typography: "body1" }}>
          <TabContext value={tabValue_v}>
            <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
              <TabList
                onChange={handleChange_v}
                aria-label="lab API tabs example"
                className={classes.tabStyle}
              >
                <Tab label="Java" value="11" className={classes.tabTitle} />
                <Tab label="PHP" value="22" className={classes.tabTitle} />
                <Tab label="cURL" value="33" className={classes.tabTitle} />
                <Tab label="Python" value="44" className={classes.tabTitle} />
                <Tab label="Node" value="55" className={classes.tabTitle} />
                <Tab label="Go" value="66" className={classes.tabTitle} />
              </TabList>
            </Box>
            <TabPanel value="11">
              <div className={classes.copyBlockStyle}>
                <CopyBlock
                  language={"jsx"}
                  text={sampleJava_v}
                  showLineNumbers={true}
                  theme={dracula}
                  wrapLines={true}
                  codeBlock
                />
              </div>
            </TabPanel>
            <TabPanel value="22">
              <div className={classes.copyBlockStyle}>
                <CopyBlock
                  language={"jsx"}
                  text={samplePhp_v}
                  showLineNumbers={true}
                  theme={dracula}
                  wrapLines={true}
                  codeBlock
                />
              </div>
            </TabPanel>
            <TabPanel value="33">
              <div className={classes.copyBlockStyle}>
                <CopyBlock
                  language={"jsx"}
                  text={sampleCurl_v}
                  showLineNumbers={true}
                  theme={dracula}
                  wrapLines={true}
                  codeBlock
                />
              </div>
            </TabPanel>
            <TabPanel value="44">
              <div className={classes.copyBlockStyle}>
                <CopyBlock
                  language={"jsx"}
                  text={samplePython_v}
                  showLineNumbers={true}
                  theme={dracula}
                  wrapLines={true}
                  codeBlock
                />
              </div>
            </TabPanel>
            <TabPanel value="55">
              <div className={classes.copyBlockStyle}>
                <CopyBlock
                  language={"jsx"}
                  text={sampleNode_v}
                  showLineNumbers={true}
                  theme={dracula}
                  wrapLines={true}
                  codeBlock
                />
              </div>
            </TabPanel>
            <TabPanel value="66">
              <div className={classes.copyBlockStyle}>
                <CopyBlock
                  language={"jsx"}
                  text={sampleGo_v}
                  showLineNumbers={true}
                  theme={dracula}
                  wrapLines={true}
                  codeBlock
                />
              </div>
            </TabPanel>
          </TabContext>
        </Box>

        <p className={classes.tableTitle}>Sample Response:</p>
        <div className={classes.copyBlockStyle}>
          <CopyBlock
            language={"jsx"}
            text={validateSampleData}
            showLineNumbers={true}
            theme={dracula}
            wrapLines={false}
            codeBlock
          />
        </div>
      </section>

      <section className={classes.sectionMarginBottom} id="refund-a-payment">
        <p className={classes.subTitle}>Refund A Payment</p>

        <p className={classes.detailFontStyle}>
          FastPay Merchants can refund the transactions to their customers that
          are generated by the payment receive process. This API will help
          merchants to refund without using a mobile app or web interface, so
          this API does not require a regular AUTH token instead it uses
          STORE_ID and STORE_PASSWORD for authentication. This API also requires
          ORDER_ID to identify the transactions which will be refunded. There
          are other fields required such as recipient mobile number or MSISDN
          and AMOUNT. For each successful full refund both sender or receiver
          will not get any notification.
        </p>
        <p className={`${classes.tableTitle}`}>Initiate Payment API :</p>
        <TableContainer component={Paper}>
          <Table sx={{ Width: 650 }} aria-label="simple table">
            <TableHead className={classes.tableStyle}>
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
                <TableCell>/api/v1/public/pgw/payment/refund</TableCell>
                <TableCell> POST</TableCell>
                <TableCell>
                  Accept: application/json
                  <br />
                  Content-Type: application/json
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>

        <p className={classes.tableTitle}>Request Body:</p>
        <TableContainer component={Paper}>
          <Table sx={{ Width: 650 }} aria-label="simple table">
            <TableHead className={classes.tableStyle}>
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
                <TableCell>Merchant Password. e.g. A$Rong001</TableCell>
                <TableCell>Yes</TableCell>
              </TableRow>
              <TableRow
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell>order_id</TableCell>
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
                <TableCell>msisdn</TableCell>
                <TableCell>string</TableCell>
                <TableCell> Receiver(Customer) Phone Number</TableCell>
                <TableCell>Yes</TableCell>
              </TableRow>
              <TableRow
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell>amount</TableCell>
                <TableCell>decimal</TableCell>
                <TableCell> Amount to be refunded</TableCell>
                <TableCell>Yes</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>

        <p className={classes.tableTitle}>Sample code snippet:</p>
        <Box sx={{ width: "100%", typography: "body1" }}>
          <TabContext value={tabValue_r}>
            <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
              <TabList
                onChange={handleChange_r}
                aria-label="lab API tabs example"
                className={classes.tabStyle}
              >
                <Tab label="Java" value="111" className={classes.tabTitle} />
                <Tab label="PHP" value="222" className={classes.tabTitle} />
                <Tab label="cURL" value="333" className={classes.tabTitle} />
                <Tab label="Python" value="444" className={classes.tabTitle} />
                <Tab label="Node" value="555" className={classes.tabTitle} />
                <Tab label="Go" value="666" className={classes.tabTitle} />
              </TabList>
            </Box>
            <TabPanel value="111">
              <div className={classes.copyBlockStyle}>
                <CopyBlock
                  language={"jsx"}
                  text={sampleJava_r}
                  showLineNumbers={true}
                  theme={dracula}
                  wrapLines={true}
                  codeBlock
                />
              </div>
            </TabPanel>
            <TabPanel value="222">
              <div className={classes.copyBlockStyle}>
                <CopyBlock
                  language={"jsx"}
                  text={samplePhp_r}
                  showLineNumbers={true}
                  theme={dracula}
                  wrapLines={true}
                  codeBlock
                />
              </div>
            </TabPanel>
            <TabPanel value="333">
              <div className={classes.copyBlockStyle}>
                <CopyBlock
                  language={"jsx"}
                  text={sampleCurl_r}
                  showLineNumbers={true}
                  theme={dracula}
                  wrapLines={true}
                  codeBlock
                />
              </div>
            </TabPanel>
            <TabPanel value="444">
              <div className={classes.copyBlockStyle}>
                <CopyBlock
                  language={"jsx"}
                  text={samplePython_r}
                  showLineNumbers={true}
                  theme={dracula}
                  wrapLines={true}
                  codeBlock
                />
              </div>
            </TabPanel>
            <TabPanel value="555">
              <div className={classes.copyBlockStyle}>
                <CopyBlock
                  language={"jsx"}
                  text={sampleNode_r}
                  showLineNumbers={true}
                  theme={dracula}
                  wrapLines={true}
                  codeBlock
                />
              </div>
            </TabPanel>
            <TabPanel value="666">
              <div className={classes.copyBlockStyle}>
                <CopyBlock
                  language={"jsx"}
                  text={sampleGo_r}
                  showLineNumbers={true}
                  theme={dracula}
                  wrapLines={true}
                  codeBlock
                />
              </div>
            </TabPanel>
          </TabContext>
        </Box>

        <p className={classes.tableTitle}>Sample Response: </p>
        <div className={classes.copyBlockStyle}>
          <CopyBlock
            language={"jsx"}
            text={initiatePaymentSampleData}
            showLineNumbers={true}
            theme={dracula}
            wrapLines={false}
            codeBlock
          />
        </div>
      </section>

      <section className={classes.sectionMarginBottom} id="refund-validation">
        <p className={classes.subTitle}>Refund Validation</p>
        <p className={classes.detailFontStyle}>
          Merchant can refund their transaction and check the status of your
          refund using ORDER_ID. API returns a boolean response based on
          validation status TRUE or FALSE, true means refund done, false means
          not refunded yet.
        </p>
        <p className={classes.tableTitle}>Request Endpoint:</p>
        <TableContainer component={Paper}>
          <Table sx={{ Width: 650 }} aria-label="simple table">
            <TableHead className={classes.tableStyle}>
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
                <TableCell>
                  /api/v1/public/pgw/payment/refund/validation
                </TableCell>
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

        <p className={classes.tableTitle}>Request Body:</p>
        <TableContainer component={Paper}>
          <Table sx={{ Width: 650 }} aria-label="simple table">
            <TableHead className={classes.tableStyle}>
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
                <TableCell>order_id</TableCell>
                <TableCell> alphanumeric (8-32)</TableCell>
                <TableCell>
                  {" "}
                  Merchant Generated Unique Order ID. e.g. ARONGORD1001
                </TableCell>
                <TableCell>Yes</TableCell>
              </TableRow>
            </TableBody>
          </Table>
          <br />{" "}
        </TableContainer>

        <p className={classes.tableTitle}>Sample Response:</p>
        <div className={classes.copyBlockStyle}>
          <CopyBlock
            language={"jsx"}
            text={refundValidationSampleData}
            showLineNumbers={true}
            theme={dracula}
            wrapLines={true}
            codeBlock
          />
        </div>
        <br />
        <br />
        <div className={classes.alertStyle}>
          <List component="div" disablePadding>
            <ListItem
              disableRipple={true}
              sx={{ pl: 4 }}
              className={`${classes.alertTitle}`}
            >
              <ListItemText primary="Security Check:" />
            </ListItem>
            <ListItem
              disableRipple={true}
              sx={{ pl: 4 }}
              className={`${classes.alertItem} `}
            >
              <ListItemIcon>
                <CircleIcon />
              </ListItemIcon>
              <ListItemText primary="Track your order by transaction ID and check it in your database for existence." />
            </ListItem>
            <ListItem
              disableRipple={true}
              sx={{ pl: 4 }}
              className={`${classes.alertItem}`}
            >
              <ListItemIcon>
                <CircleIcon />
              </ListItemIcon>
              <ListItemText primary="Must validate amount and incoming amount from your Database." />
            </ListItem>
            <ListItem
              disableRipple={true}
              sx={{ pl: 4 }}
              className={`${classes.alertItem} `}
            >
              <ListItemIcon>
                <CircleIcon />
              </ListItemIcon>
              <ListItemText primary="Check for the status - Success, Failed, Cancel to update your order status." />
            </ListItem>
          </List>
        </div>
      </section>
    </div>
  );
};

export default WebsiteGuideDetailSide;
