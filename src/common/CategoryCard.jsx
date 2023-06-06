import { Image, Center, Text } from "@chakra-ui/react";

export const CategoryCard = (category) => {
  console.log(category.category);

  const image = category.category.image
    ? category.category.image.src
    : "src/assets/logo_blueHouse.svg";

  return (
    <div>
      <Center>
        <Image
          borderRadius="full"
          boxSize="118px"
          src={image}
          alt={category.category.name}
        />
      </Center>
      <Center>
        <Text fontSize="lg">{category.category.slug}</Text>
      </Center>
    </div>
  );
};
