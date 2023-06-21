import {
  Box,
  HStack,
} from "@chakra-ui/react";
import { ImageMenuItem } from "./ImageMenuItem";

export const SubItemMenuDesktop = ({ category }) => {
  let categoryName = category.name.split("amp;");
  categoryName = categoryName.join("");

  return (
    <Box
      sx={{
        alignItems: "center",
        borderColor: "white",
        color: "primary",
      }}
    >
      <HStack>
        <ImageMenuItem pl={"1rem"} category={category} />
        <Box pl={"1rem"} flex="1" textAlign="left">
          {categoryName}
        </Box>
      </HStack>
    </Box>
  );
};
