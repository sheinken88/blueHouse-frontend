import { AppBar, Toolbar, IconButton, Typography, InputBase, Grid } from '@mui/material';
import { styled } from '@mui/system';
import { Search as SearchIcon, AccountCircle, ShoppingCart } from '@mui/icons-material';
import { Menu as MenuIcon } from '@mui/icons-material';
import logo_blueHouse from "../assets/logo_blueHouse.svg";
import { useTheme } from '@mui/material/styles';


const ShippingBar = styled(AppBar)(({ theme }) => ({
  backgroundColor: theme.palette.secondary.main,
  color: theme.palette.primary.main,
  padding: theme.spacing(1),
  textAlign: "center"
}));



const NavBar = styled(AppBar)(({ theme }) => ({
  backgroundColor: "#FFFFFF",
  color: theme.palette.primary.main,
  width: "100"
}));

const NavBarContainer = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
});

const SearchContainer = styled('div')({
  position: "relative",
  marginLeft: 0,
  marginBottom: "1rem",
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-start",
  width: "100%",
});

const SearchIconWrapper = styled('div')({
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-start",
  paddingLeft: "0.5rem",
  cursor: "pointer"

});

const StyledInputBase = styled(InputBase)({
  color: "inherit",
  width: "80%", 
  borderRadius: "2rem", 
  border: '1px solid',
  borderColor: "white", 
  boxShadow: `inset 0 0 3px gray`, 
  paddingLeft: "2.5rem", 
});

export const Navbar = () => {
  const theme = useTheme()

  return (

      <div>
        <ShippingBar position="static">
          <Typography sx={{color: theme.palette.primary.main}}>Free Shipping over €35</Typography>
        </ShippingBar>
        <NavBar position="static">
          <NavBarContainer>
          <a href="/" style={{ textDecoration: 'none', cursor: 'pointer' }}>
            <img src={logo_blueHouse} alt="Logo" />
          </a>
            <div>
              <IconButton color="inherit"><AccountCircle /></IconButton>
              <IconButton color="inherit"><ShoppingCart /></IconButton>
              <IconButton color="inherit"><MenuIcon /></IconButton>
            </div>
          </NavBarContainer>
          <Grid marginLeft="2.5rem" container justify="center" alignItems="center">

            <SearchContainer>
            <SearchIconWrapper>
            <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="What are you looking for?"
              inputProps={{ 'aria-label': 'search' }}
            />
          </SearchContainer>

          </Grid>
        </NavBar>
      </div>
    );

}
