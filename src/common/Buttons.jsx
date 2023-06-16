
import { Button, useStyleConfig } from "@chakra-ui/react";

const PrimaryButton = (props) => {
  const styles = useStyleConfig("Button", { variant: "outline" });

  return (
    <Button
      {...props}
      sx={{
        ...styles,
        bg: "secondary",
        color: "primary",
        borderRadius: "30px",
        height: "48px",
        px: "4rem",
        _hover: {
          bg: "primary",
          color: "secondary",
        },
      }}
    />
  );
};

const SecondaryButton = (props) => {
  const styles = useStyleConfig("Button", { variant: "outline" });

  return (
    <Button
      {...props}
      sx={{
        ...styles,
        bg: "primary",
        color: "secondary",
        borderRadius: "30px",
        height: "48px",
        px: "2rem",
        _hover: {
          bg: "primary",
          color: "secondary",
        },
      }}
    />
  );
};

const AddToCartButton = (props) => {
  const styles = useStyleConfig("Button", { variant: "outline" });

  return (
    <Button
      {...props}
      sx={{
        ...styles,
        bg: "addToCart",
        color: "white",
        borderRadius: "30px",
        height: "48px",
        px: "4rem",
        _hover: {
          bg: "primary",
          color: "secondary",
        },
      }}
    />
  );
};

export { PrimaryButton, SecondaryButton, AddToCartButton };
