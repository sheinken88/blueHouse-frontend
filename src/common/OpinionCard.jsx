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

  useEffect(() => {
    axios
      .get(`http://localhost:8080/api/products/id/${reviews.product_id}`)
      .then((res) => setProdURL(res.data.images[0].src));
  }, [prodURL]);

  let date = new Date(reviews.date_created);
  let dateOptions = { month: "long" };
  let month = new Intl.DateTimeFormat("en-US", dateOptions).format(date);
  let day = date.getDate();
  let year = date.getFullYear();

  let dateReview = `${month} ${day}, ${year}`;

  return (
    <Card
      direction={{ base: "column", sm: "row" }}
      overflow="hidden"
      variant="outline"
      border={"none"}
      w={2500}
    >
      <Image
        objectFit="cover"
        w={205}
        h={205}
        src={prodURL ? prodURL : imageNotFound}
        alt={reviews.product_name}
      />
      <Box color={"rgba(37, 71, 135, 1)"}>
        <CardBody h={205} overflow={"hidden"}>
          <Text fontWeight={"bold"}>{reviews.reviewer}</Text>

          {reviews.verified ? <Text>(verified owner) - </Text> : <></>}

          <Text>{dateReview}</Text>
          <Box alignItems={"center"} mt={2}>
            <Rating
              readonly
              stop={reviews.rating}
              initialRating={reviews.rating}
              fullSymbol={
                <FontAwesomeIcon
                  icon={faStar}
                  size="lg"
                  style={{ color: "#FDB32B" }}
                />
              }
            />
          </Box>
          <Text
            py="2"
            dangerouslySetInnerHTML={{ __html: reviews.review }}
          ></Text>
        </CardBody>
      </Box>
    </Card>
  );
};
