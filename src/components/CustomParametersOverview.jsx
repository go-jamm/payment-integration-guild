import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { CopyBlock, dracula } from "react-code-blocks";
import { InfoDialog } from "./InfoDialog";

const SAMPLE_REQUEST = `{
  "storeId": "1000007066_485",
  "storePassword": "Password100@",
  "orderId": "ARONGORD1001",
  "billAmount": 5000,
  "currency": "IQD",
  "callbackUrl": "https://merchant.example/ipn",
  "customParams": {
    "memberId": "12345",
    "sourceChannel": "mobile_app",
    "promoCode": "SAVE10",
    "internalNote": null
  }
}`;

const Mark = ({ children }) => (
  <Box
    component="span"
    sx={{
      bgcolor: "#eef1f4",
      px: "4px",
      borderRadius: "3px",
      fontFamily: "source-code-pro, Menlo, Monaco, Consolas, monospace",
      fontSize: "0.92em",
    }}
  >
    {children}
  </Box>
);

const Token = ({ children }) => (
  <Box
    component="code"
    sx={{
      display: "inline-block",
      mx: "2px",
      px: "5px",
      borderRadius: "4px",
      bgcolor: "#eef1f4",
      fontFamily: "source-code-pro, Menlo, Monaco, Consolas, monospace",
      fontSize: "0.86em",
      color: "#1f2933",
      lineHeight: 1.5,
    }}
  >
    {children}
  </Box>
);

const Callout = ({ title, children }) => (
  <Box
    sx={{
      bgcolor: "#eefaf3",
      border: "1px solid #b7e4c7",
      borderRadius: "10px",
      px: { xs: 1.5, sm: 2 },
      py: 1.5,
      mb: 2.5,
    }}
  >
    <Typography
      component="p"
      sx={{
        m: 0,
        mb: 0.75,
        color: "#1a1a1a",
        fontSize: "15px",
        fontWeight: 700,
      }}
    >
      {title}
    </Typography>
    {children}
  </Box>
);

const bodyTextSx = {
  m: 0,
  color: "#2c2c2c",
  fontSize: "14px",
  lineHeight: 1.65,
};

const keyFormatLimit = (
  <>
    Must match <Token>^[a-zA-Z][a-zA-Z0-9_]*$</Token> (cannot start with{" "}
    <Token>$</Token> or <Token>_</Token>)
  </>
);

const valueTypesLimit = (
  <>
    String, non-negative integer, or <Token>null</Token> only (no booleans,
    arrays, or nested objects)
  </>
);

const stringCharsetLimit = (
  <>
    Letters, digits, and <Token>.</Token> <Token>_</Token> <Token>@</Token>{" "}
    <Token>-</Token> only; no HTML or control characters
  </>
);

const omissionLimit = (
  <>
    If not sent at initiation, <Mark>custom_params</Mark> is omitted from
    notification and API responses (not returned as <Mark>null</Mark>).
  </>
);

const VALIDATION_RULES = [
  {
    rule: "Key names",
    limit:
      "Dynamic — chosen by the merchant (not a predefined schema). Same keys are echoed back in responses.",
  },
  {
    rule: "Maximum keys",
    limit: "4",
  },
  {
    rule: "Key format",
    limit: keyFormatLimit,
  },
  {
    rule: "Key length",
    limit: "Maximum 64 characters",
  },
  {
    rule: "Value types",
    limit: valueTypesLimit,
  },
  {
    rule: "String value length",
    limit: "Maximum 50 characters after trim",
  },
  {
    rule: "String charset",
    limit: stringCharsetLimit,
  },
  {
    rule: "Integer range",
    limit: "0 to 999999999999",
  },
  {
    rule: "Omission",
    limit: omissionLimit,
  },
];

export const CustomParametersOverview = () => {
  return (
    <Box>
      <Typography sx={{ ...bodyTextSx, mb: 2 }}>
        Merchants can attach optional metadata when generating a QR payment. You
        define the keys and values; FastPay does not publish a fixed list of
        allowed key names. Up to four keys per payment are stored with the
        initiation and returned unchanged on payment notification, validation,
        and status when they were supplied at QR generation time.
      </Typography>

      <Callout title="Dynamic keys">
        <Typography sx={bodyTextSx}>
          Any key name is valid if it passes the validation rules below (format,
          length, and count). Sample JSON in this document uses illustrative
          keys only — replace them with names that fit your integration.
        </Typography>
      </Callout>

      <Typography
        component="h3"
        sx={{
          m: 0,
          mb: 1.25,
          color: "#1a1a1a",
          fontSize: "16px",
          fontWeight: 700,
        }}
      >
        Validation rules
      </Typography>

      <TableContainer
        sx={{ mb: 2.5, border: "1px solid #e6e8ec", borderRadius: "8px" }}
      >
        <Table size="small" aria-label="Custom parameter validation rules">
          <TableHead>
            <TableRow sx={{ bgcolor: "#f4f6f8" }}>
              <TableCell
                sx={{
                  width: "28%",
                  color: "#6b7280",
                  fontSize: "12px",
                  fontWeight: 700,
                  letterSpacing: "0.04em",
                  borderBottom: "1px solid #e6e8ec",
                }}
              >
                RULE
              </TableCell>
              <TableCell
                sx={{
                  color: "#6b7280",
                  fontSize: "12px",
                  fontWeight: 700,
                  letterSpacing: "0.04em",
                  borderBottom: "1px solid #e6e8ec",
                }}
              >
                LIMIT
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {VALIDATION_RULES.map((item) => (
              <TableRow key={item.rule}>
                <TableCell
                  sx={{
                    color: "#1f2933",
                    fontSize: "14px",
                    fontWeight: 500,
                    verticalAlign: "top",
                    borderBottom: "1px solid #eef0f3",
                  }}
                >
                  {item.rule}
                </TableCell>
                <TableCell
                  sx={{
                    color: "#2c2c2c",
                    fontSize: "14px",
                    lineHeight: 1.55,
                    borderBottom: "1px solid #eef0f3",
                  }}
                >
                  {item.limit}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <Callout title="JSON field naming">
        <Box
          component="ul"
          sx={{
            m: 0,
            pl: 2.5,
            "& li": {
              mb: 0.5,
              color: "#2c2c2c",
              fontSize: "14px",
              lineHeight: 1.65,
            },
            "& li:last-of-type": { mb: 0 },
          }}
        >
          <li>
            <b> QR Generation request (core-qr):</b> object property{" "}
            <Mark>customParams</Mark> (camelCase).
          </li>
          <li>
            <b>IPN, Validation, and Status:</b> object property{" "}
            <Mark>custom_params</Mark> (snake_case). Keys inside the object keep
            the names you sent at initiation.
          </li>
        </Box>
      </Callout>
      <p>
        <b>
          Example{" "}
          <span style={{ fontWeight: 400 }}>
            {" "}
            <Mark>customParams</Mark>
          </span>{" "}
          (illustrative keys)
        </b>
      </p>
      <Box sx={{ mt: 1.5, "& button": { display: "none" } }}>
        <CopyBlock
          language={"jsx"}
          text={SAMPLE_REQUEST}
          showLineNumbers={true}
          theme={dracula}
          wrapLines={true}
          codeBlock
        />
      </Box>
    </Box>
  );
};

export const CustomParametersDialog = ({ open, onClose }) => {
  return (
    <InfoDialog
      open={open}
      onClose={onClose}
      title="Custom Parameters Overview"
      badge=""
      titleId="custom-parameters-dialog-title"
    >
      <CustomParametersOverview />
    </InfoDialog>
  );
};
