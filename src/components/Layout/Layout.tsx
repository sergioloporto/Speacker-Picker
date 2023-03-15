import { useState } from "react";
import { useRouter } from "next/router";
import { Sidebar, SidebarInner } from "./Sidebar/Navbar";
import { pages } from "../../utils/routing";
import { AppBar, Box, IconButton, Toolbar, Typography } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import {
  FlexSpbetwenWidth100,
  LogoContainer,
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
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
      }}
    >
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
                {/* <LogoImage
                  src={logo}
                  alt=" logo"
                  width="120"
                  style={{ margin: "auto" }}
                  priority
                /> */}
                Speaker Picker
              </Box>
              <Box sx={PageTitleAndLogoutBtnContainer}>
                <Typography variant="h6" noWrap component="div">
                  {pageTitle}
                </Typography>
                <SidebarInner onNavbar />
              </Box>
            </Box>
          </Box>
        </Toolbar>
      </AppBar>
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Sidebar
          drawerWidth={240}
          handleDrawerToggle={handleDrawerToggle}
          isMobileOpen={isMobileOpen}
        />

        <Box component="main" sx={MainContainer}>
          {children}
        </Box>
      </Box>
      <Typography sx={{ textAlign: "right" }}>v 1.2.0</Typography>
    </Box>
  );
};
