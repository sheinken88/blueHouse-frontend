import Button from "@mui/material/Button";
import { styled } from "@mui/system";

const PrimaryButton = styled(Button)(({ theme }) => ({
  background: theme.palette.secondary.main,
  border: 0,
  borderRadius: 30,
  color: theme.palette.primary.main,
  height: 48,
  padding: "1rem 3rem",
}));

export default PrimaryButton;