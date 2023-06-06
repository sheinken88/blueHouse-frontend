import {
  Card,
  Stack,
  CardBody,
  CardFooter,
  Heading,
  Image,
  Text,
  useColorModeValue as mode,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import axios from "axios";

export const OpinionCard = ({ reviews }) => {
  console.log(reviews);
  const imageNotFound =
    "https://www.publicdomainpictures.net/pictures/280000/velka/not-found-image-15383864787lu.jpg";
  const [prodURL, setProdURL] = useState("");

  useEffect(() => {
    axios
      .get(`http://localhost:8080/api/products/id/${reviews.product_id}`)
      .then((res) => setProdURL(res.data.images[0].src));
  }, [prodURL]);
  return (
    <Card
      direction={{ base: "column", sm: "row" }}
      overflow="hidden"
      variant="outline"
      border={"none"}
    >
      <Image
        objectFit="cover"
        w={205}
        h={205}
        src={prodURL ? prodURL : imageNotFound}
        alt={reviews.product_name}
      />

      <Stack h={205} m={10}>
        <CardBody>
          <Heading size="md">
            {reviews.reviewer}
            {reviews.verified ? <Text>(verified owner)</Text> : <></>} -{" "}
            {reviews.date_created}
          </Heading>

          <Text
            py="2"
            dangerouslySetInnerHTML={{ __html: reviews.review }}
          ></Text>
        </CardBody>

        <CardFooter></CardFooter>
      </Stack>
    </Card>
  );
};
