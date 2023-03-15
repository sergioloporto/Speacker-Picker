import Image from "next/image";
import styled from "@emotion/styled";
import { SxProps } from "@mui/material";
import { SIDEBAR_WIDTH } from "./constants";

const calculateWithForSmallDevices = {
  sm: `calc(100% - ${SIDEBAR_WIDTH}px)`,
};

export const FlexSpbetwenWidth100: SxProps = {
  display: "flex",
  justifyContent: "space-between",
  width: "100%",
};

export const LogoContainer: SxProps = {
  minWidth: SIDEBAR_WIDTH - 24,
  display: { xs: "none", sm: "flex" },
  justifyContent: "center",
};

export const PageTitleAndLogoutBtnContainer: SxProps = {
  ...FlexSpbetwenWidth100,
  alignItems: "center",
  paddingLeft: "24px",
};

export const LogoImage = styled(Image)`
  margin: "auto";
`;

export const LogoutIconSx: SxProps = {
  marginY: "auto",
};

export const MainContainer: SxProps = {
  flexGrow: 1,
  p: 3,
  width: calculateWithForSmallDevices,
};
