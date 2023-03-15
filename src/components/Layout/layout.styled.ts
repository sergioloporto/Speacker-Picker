import { SxProps } from "@mui/material";

export const FlexSpbetwenWidth100: SxProps = {
  display: "flex",
  justifyContent: "space-between",
  width: "100%",
};

export const LogoContainer: SxProps = {
  display: { xs: "none", sm: "flex" },
  justifyContent: "center",
  alignItems: "center",
  whiteSpace: "nowrap",
};

export const PageTitleAndLogoutBtnContainer: SxProps = {
  ...FlexSpbetwenWidth100,
  alignItems: "center",
  paddingLeft: "24px",
};

export const MainContainer: SxProps = {
  flexGrow: 1,
  p: 3,
  display: "flex",
  flexDirection: "column",
  maxWidth: "1000px",
};
