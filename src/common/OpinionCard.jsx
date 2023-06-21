import {
  Card,
  CardBody,
  Image,
  Text,
  useColorModeValue as mode,
  Box,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import axios from "axios";
import Rating from "react-rating";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

export const OpinionCard = ({ reviews }) => {
  const imageNotFound =
    "https://www.publicdomainpictures.net/pictures/280000/velka/not-found-image-15383864787lu.jpg";
  const [prodURL, setProdURL] = useState("");

  // useEffect(() => {
  //   axios
  //     .get(
  //       `${import.meta.env.VITE_API_URL}/products/id/${reviews.product_id}`,
  //       { withCredentials: true, credentials: "include" }
  //     )
  //     .then((res) => setProdURL(res.data.images[0].src));
  // }, [prodURL]);

  let date = new Date(reviews.date_created);
  let dateOptions = { month: "long" };
  let month = new Intl.DateTimeFormat("en-US", dateOptions).format(date);
  let day = date.getDate();
  let year = date.getFullYear();

  let dateReview = `${month} ${day}, ${year}`;

  return (
    <Card
      direction={"row"}
      lineHeight={"short"}
      variant="outline"
      border={"none"}
      w={{ base: "900px", md: "1500px" }}
      h={{ base: "116px", md: "205px" }}
      color={"#254787"}
    >
      <Image
        objectFit="cover"
        w={{ base: "116px", md: "205px" }}
        h={{ base: "116px", md: "205px" }}
        src={prodURL ? prodURL : imageNotFound}
        alt={reviews.product_name}
      />

      <CardBody overflow={"hidden"}>
        <Text fontSize={{ base: "13px", md: "20px" }} fontWeight={"semibold"}>
          {reviews.reviewer}
        </Text>

        {reviews.verified ? <Text>(verified owner) - </Text> : <></>}

        <Text fontSize={{ base: "13px", md: "20px" }}>{dateReview}</Text>
        <Box alignItems={"center"} mb={-3}>
          <Rating
            readonly
            stop={reviews.rating}
            initialRating={reviews.rating}
            fullSymbol={
              <FontAwesomeIcon
                icon={faStar}
                // size={{ base: "xs", md: "lg" }}
                style={{ color: "#FDB32B" }}
              />
            }
          />
        </Box>
        <Text
          fontSize={{ base: "13px", md: "20px" }}
          dangerouslySetInnerHTML={{ __html: reviews.review }}
        ></Text>
      </CardBody>
    </Card>
  );
};
