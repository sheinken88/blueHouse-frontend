import * as React from "react";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import { useTheme } from "@mui/material/styles";
import LogoBlueHouse from "../assets/logo_blueHouse_noWording.svg";
import LogoTikTok from "../assets/logo_tikTok.svg";
import LogoFacebook from "../assets/logo_facebook.svg";
import LogoInstagram from "../assets/logo_instagram.svg";
import LogoLinkedIn from "../assets/logo_linkedIn.svg";

export const Footer = () => {
  const theme = useTheme();

  const [openBHMenu, setOpenBHMenu] = React.useState(true);
  const [openSell, setOpenSell] = React.useState(true);
  const [openCustomerService, setOpenCustomerService] = React.useState(true);

  const handleClickBluehouseMenu = () => {
    setOpenBHMenu(!openBHMenu);
  };

  const handleClickSellMenu = () => {
    setOpenSell(!openSell);
  };

  const handleClickCustomerServiceMenu = () => {
    setOpenCustomerService(!openCustomerService);
  };

  return (
    <List
      sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
      component="nav"
      aria-labelledby="nested-list-subheader"
      subheader={
        <div
          style={{
            textAlign: "center",
            justifyContent: "center",
            display: "flex",
            color: "#254787",
            gap: "1rem",
          }}
        >
          <img src={LogoBlueHouse} />
          <h4>Your Conscious Marketplace</h4>
        </div>
      }
    >
      <div style={{ textAlign: "center" }}>
        <img src={LogoTikTok} /> <img src={LogoInstagram} />{" "}
        <img src={LogoFacebook} /> <img src={LogoLinkedIn} />
      </div>
      <ListItemButton onClick={handleClickBluehouseMenu}>
        <ListItemIcon></ListItemIcon>
        <ListItemText
          primary="BLUEHOUSE"
          sx={{
            color: theme.palette.primary.main,
          }}
        />
        {openBHMenu ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={openBHMenu} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 12 }}>
            <ListItemText
              primary="About Us"
              sx={{
                color: theme.palette.primary.main,
              }}
            />
          </ListItemButton>
          <ListItemButton sx={{ pl: 12 }}>
            <ListItemText
              primary="Blue Labels"
              sx={{
                color: theme.palette.primary.main,
              }}
            />
          </ListItemButton>
          <ListItemButton sx={{ pl: 12 }}>
            <ListItemText
              primary="Our Values"
              sx={{
                color: theme.palette.primary.main,
              }}
            />
          </ListItemButton>
          <ListItemButton sx={{ pl: 12 }}>
            <ListItemText
              primary="Store List"
              sx={{
                color: theme.palette.primary.main,
              }}
            />
          </ListItemButton>
          <ListItemButton sx={{ pl: 12 }}>
            <ListItemText
              primary="Blog"
              sx={{
                color: theme.palette.primary.main,
              }}
            />
          </ListItemButton>
          <ListItemButton sx={{ pl: 12 }}>
            <ListItemText
              primary="Our Glossary"
              sx={{
                color: theme.palette.primary.main,
              }}
            />
          </ListItemButton>
        </List>
      </Collapse>
      <ListItemButton onClick={handleClickSellMenu}>
        <ListItemIcon></ListItemIcon>
        <ListItemText
          primary="SELL"
          sx={{
            color: theme.palette.primary.main,
          }}
        />
        {openSell ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={openSell} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 12 }}>
            <ListItemText
              primary="Terms & Conditions"
              sx={{
                color: theme.palette.primary.main,
              }}
            />
          </ListItemButton>
          <ListItemButton sx={{ pl: 12 }}>
            <ListItemText
              primary="Register"
              sx={{
                color: theme.palette.primary.main,
              }}
            />
          </ListItemButton>
          <ListItemButton sx={{ pl: 12 }}>
            <ListItemText
              primary="Contact Us"
              sx={{
                color: theme.palette.primary.main,
              }}
            />
          </ListItemButton>
        </List>
      </Collapse>
      <ListItemButton onClick={handleClickCustomerServiceMenu}>
        <ListItemIcon></ListItemIcon>
        <ListItemText
          primary="CUSTOMER SERVICE"
          sx={{
            color: theme.palette.primary.main,
          }}
        />
        {openCustomerService ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={openCustomerService} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 12 }}>
            <ListItemText
              primary="FAQs"
              sx={{
                color: theme.palette.primary.main,
              }}
            />
          </ListItemButton>
          <ListItemButton sx={{ pl: 12 }}>
            <ListItemText
              primary="Help"
              sx={{
                color: theme.palette.primary.main,
              }}
            />
          </ListItemButton>
          <ListItemButton sx={{ pl: 12 }}>
            <ListItemText
              primary="Return & Refund"
              sx={{
                color: theme.palette.primary.main,
              }}
            />
          </ListItemButton>
          <ListItemButton sx={{ pl: 12 }}>
            <ListItemText
              primary="Shipping"
              sx={{
                color: theme.palette.primary.main,
              }}
            />
          </ListItemButton>
          <ListItemButton sx={{ pl: 12 }}>
            <ListItemText
              primary="Contact Us"
              sx={{
                color: theme.palette.primary.main,
              }}
            />
          </ListItemButton>
        </List>
      </Collapse>
    </List>
  );
};
