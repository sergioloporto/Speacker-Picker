import { useState } from "react";
import { useRouter } from "next/router";
import { Sidebar } from "./Sidebar/Sidebar";
import { pages } from "../../utils/routing";
import { SIDEBAR_WIDTH } from "./constants";
import {
  AppBar,
  Box,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import logo from "@/assets/logo-rect-white.svg";
import {
  FlexSpbetwenWidth100,
  LogoContainer,
  LogoImage,
  MainContainer,
  PageTitleAndLogoutBtnContainer,
} from "./layout.styled";

export interface LayoutProps {
  children: JSX.Element | JSX.Element[];
}

export const Layout = ({ children }: LayoutProps) => {
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const router = useRouter();

  const handleDrawerToggle = () => {
    setIsMobileOpen(!isMobileOpen);
  };

  const pageTitle = Object.values(pages).find(
    (singlePage) => singlePage?.url === router.asPath
  )?.name;

  return (
    <Box sx={{ display: "flex", flexDirection: "column" }}>
      <AppBar
        position="static"
        sx={{
          width: "100%",
          zIndex: "60",
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Box sx={FlexSpbetwenWidth100}>
            <Box sx={FlexSpbetwenWidth100}>
              <Box sx={LogoContainer}>
                <LogoImage
                  src={logo}
                  alt="Limango logo"
                  width="120"
                  style={{ margin: "auto" }}
                  priority
                />
              </Box>
              <Box sx={PageTitleAndLogoutBtnContainer}>
                <Typography variant="h6" noWrap component="div">
                  {pageTitle}
                </Typography>
              </Box>
            </Box>
          </Box>
        </Toolbar>
      </AppBar>
      <Box sx={{ display: "flex" }}>
        <Sidebar
          drawerWidth={SIDEBAR_WIDTH}
          handleDrawerToggle={handleDrawerToggle}
          isMobileOpen={isMobileOpen}
        />

        <Box
          component="main"
          sx={MainContainer}
        >
          {children}
        </Box>
      </Box>
    </Box>
  );
};
