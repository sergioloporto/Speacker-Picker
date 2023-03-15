import { pages } from "@/utils/routing";
import {
  Box,
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import ListAltIcon from "@mui/icons-material/ListAlt";
import SupervisorAccountIcon from "@mui/icons-material/SupervisorAccount";
import { StyledLink, SidebarInnerStyled } from "./sidebar.styled";
interface SidebarProps {
  handleDrawerToggle?: () => void;
  isMobileOpen: boolean;
  drawerWidth: number;
}

interface MenuItemProps {
  url: string;
  name: string;
  onClickEvt?: () => void;
  sxProps?: {
    display: {
      xs: string;
      sm: string;
    };
  };
}

const MenuIcon = ({ pageName }) => {
  switch (pageName) {
    case "Pending Items":
      return <ListAltIcon />;
    case "Moderators":
      return <SupervisorAccountIcon />;

    default:
      return null;
  }
};

const MenuItem = ({ url, name, onClickEvt, sxProps }: MenuItemProps) => {
  return (
    <ListItem disablePadding sx={sxProps}>
      <StyledLink href={url}>
        <ListItemButton onClick={onClickEvt}>
          <ListItemIcon>
            <MenuIcon pageName={name} />
          </ListItemIcon>
          <ListItemText primary={name} />
        </ListItemButton>
      </StyledLink>
    </ListItem>
  );
};

const SidebarInner = () => {
  return (
    <SidebarInnerStyled>
      <Divider />
      <List sx={{ textDecoration: "none" }}>
        {Object.values(pages).map(({ name, url }) => (
          <MenuItem
            key={url}
            sxProps={undefined}
            url={url}
            name={name}
            onClickEvt={undefined}
          />
        ))}
      </List>
    </SidebarInnerStyled>
  );
};

const Sidebar = (props: SidebarProps) => {
  const { drawerWidth, handleDrawerToggle, isMobileOpen } = props;

  return (
    <Box sx={{ display: "flex" }}>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          variant="temporary"
          open={isMobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          <SidebarInner />
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
              position: "static",
              height: "100vh",
            },
          }}
          open
        >
          <SidebarInner />
        </Drawer>
      </Box>
    </Box>
  );
};

export { Sidebar };
