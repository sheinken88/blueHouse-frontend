import {
  Image,
  HStack,
  Text,
  useColorModeValue as mode,
  Box,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import axios from "axios";
import Rating from "react-rating";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar as fullStar } from "@fortawesome/free-solid-svg-icons";
import { faStar as emptyStar } from "@fortawesome/free-regular-svg-icons";

export const OpinionCard = ({ reviews }) => {
  const imageNotFound =
    "https://www.publicdomainpictures.net/pictures/280000/velka/not-found-image-15383864787lu.jpg";
  const [prodURL, setProdURL] = useState("");

  useEffect(() => {
    axios
      .get(
        `${import.meta.env.VITE_API_URL}/products/id/${reviews.product_id}`,
        { withCredentials: true, credentials: "include" }
      )
      .then((res) => setProdURL(res.data.images[0].src));
  }, [prodURL]);

  let date = new Date(reviews.date_created);
  let dateOptions = { month: "long" };
  let month = new Intl.DateTimeFormat("en-US", dateOptions).format(date);
  let day = date.getDate();
  let year = date.getFullYear();

  let dateReview = `${month} ${day}, ${year}`;

  return (
    <Box
      sx={{
        color: "primary",
        borderTop: "1px solid",
        borderColor: "#D3D3D3",
        w: "100%",
        py: 4,
      }}
    >
      <HStack>
        <Text fontWeight={"bold"}>{reviews.reviewer}</Text>
        {reviews.verified ? <Text>(verified owner) - </Text> : <></>}
        <Rating
          readonly
          initialRating={reviews.rating}
          emptySymbol={
            <FontAwesomeIcon
              icon={emptyStar}
              size="sm"
              style={{ color: "#FDB32B", padding: "10px" }}
            />
          }
          fullSymbol={
            <FontAwesomeIcon
              icon={fullStar}
              size="sm"
              style={{ color: "#FDB32B", padding: "10px" }}
            />
          }
        />
      </HStack>
      <Text fontSize="sm">{dateReview}</Text>
      <Box>
        <HStack>
          <Image
            objectFit="cover"
            w={150}
            h={150}
            src={prodURL ? prodURL : imageNotFound}
            alt={reviews.product_name}
          />
          <Text
            sx={{ fontSize: "sm", maxWidth: "60%" }}
            py="2"
            dangerouslySetInnerHTML={{ __html: reviews.review }}
          ></Text>
        </HStack>
      </Box>
    </Box>
  );
};
