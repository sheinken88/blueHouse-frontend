import { Image } from "@chakra-ui/react";

export const ImageMenuItem = ({ category }) => {
  const image = category.image?.src;

  return (
    <>
      <Image
        p="1"
        borderRadius="full"
        boxSize="50px"
        src={image || "src/assets/logo_blueHouse.svg"}
        alt={category.name}
      />
    </>
  );
};
