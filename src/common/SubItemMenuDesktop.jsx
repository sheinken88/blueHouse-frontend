import {
  Box,
  HStack,
} from "@chakra-ui/react";
import { ImageMenuItem } from "./ImageMenuItem";
import he from "he"

export const SubItemMenuDesktop = ({ category }) => {

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
        <Box pl={"1rem"} flex="1" textAlign="left" cursor={"pointer"}>
          {he.decode(category.name)}
        </Box>
      </HStack>
    </Box>
  );
};
