import React from "react";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import IconButton from "@mui/material/IconButton";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import CloseIcon from "@mui/icons-material/Close";

export const InfoDialog = ({
  open,
  onClose,
  title,
  badge,
  children,
  maxWidth = "md",
  titleId = "info-dialog-title",
}) => {
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth={maxWidth}
      fullWidth
      fullScreen={fullScreen}
      scroll="paper"
      aria-labelledby={titleId}
    >
      <DialogTitle id={titleId} sx={{ pr: 6, pt: 2.5, pb: 1 }}>
        <Box sx={{ display: "flex", alignItems: "center", gap: 1.25, flexWrap: "wrap" }}>
          <Typography
            component="span"
            sx={{
              color: "#1a1a1a",
              fontSize: { xs: "18px", sm: "20px" },
              fontWeight: 700,
              lineHeight: 1.3,
            }}
          >
            {title}
          </Typography>
          {badge ? (
            <Box
              component="span"
              sx={{
                display: "inline-flex",
                alignItems: "center",
                px: 1,
                py: "2px",
                borderRadius: "999px",
                border: "1px solid #b7e4c7",
                bgcolor: "#e7f8ee",
                color: "#1b7f45",
                fontSize: "11px",
                fontWeight: 700,
                letterSpacing: "0.04em",
                lineHeight: 1.6,
              }}
            >
              {badge}
            </Box>
          ) : null}
        </Box>
        <IconButton
          aria-label="Close dialog"
          onClick={onClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: "#5c6370",
          }}
        >
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      <DialogContent sx={{ pt: 1, pb: 3 }}>{children}</DialogContent>
    </Dialog>
  );
};
