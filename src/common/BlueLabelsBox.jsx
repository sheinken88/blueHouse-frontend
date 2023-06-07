import { Box, HStack } from "@chakra-ui/react";

export const BlueLabelsBox = ({ name, color }) => {
  const BlueLabel = name;
  const circleColor = color;

  return (
    <HStack
      sx={{
        color: "primary",
        borderWidth: "1px",
        borderColor: circleColor,
        borderRadius: "30px",
        height: "48px",
        px: 5,
        boxShadow: "2xl",
        spacing: "10px",
      }}
    >
      <Box sx={{ bg: circleColor, p: 4, borderRadius: "30px" }} />
      <Box>{BlueLabel}</Box>
    </HStack>
  );
};
