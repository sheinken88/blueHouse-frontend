import Button from "@mui/material/Button";
import { styled } from "@mui/system";

export const PrimaryButton = styled(Button)(({ theme }) => ({
  background: theme.palette.secondary.main,
  border: 0,
  borderRadius: 30,
  color: theme.palette.primary.main,
  height: 48,
  padding: "1rem 4rem",
  ":hover": {  
    background: theme.palette.primary.main,
    color: theme.palette.secondary.main,
  }

}));

export const SecondaryButton = styled(Button)(({ theme }) => ({
  background: theme.palette.primary.main,
  border: 0,
  borderRadius: 30,
  color: theme.palette.secondary.main,
  height: 48,
  padding: "1rem 2rem",
  ":hover": {  
    background: theme.palette.primary.main,
    color: theme.palette.secondary.main,
  }
}));

export const AddToCartButton = styled(Button)(({ theme }) => ({
  background: theme.palette.addToCart.main,
  border: 0,
  borderRadius: 30,
  color: "white",
  height: 48,
  padding: "1rem 4rem",
  ":hover": {  
    background: theme.palette.primary.main,
    color: theme.palette.secondary.main,
  }
}));

