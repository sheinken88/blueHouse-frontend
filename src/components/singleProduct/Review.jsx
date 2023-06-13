import { useSelector } from "react-redux";
import { useState } from "react";
import { OpinionCard } from "../../common/singleProduct/OpinionCard";
import "react-multi-carousel/lib/styles.css";
import {
  Box,
  Button,
  Center,
  Flex,
  HStack,
  Input,
  Spacer,
  Text,
  Textarea,
} from "@chakra-ui/react";
import { SecondaryButton } from "../../common/Buttons";
import Rating from "react-rating";
import useInput from "../../hooks/useInput.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar as fullStar } from "@fortawesome/free-solid-svg-icons";
import { faStar as emptyStar } from "@fortawesome/free-regular-svg-icons";

export const Review = () => {
  const reviews = useSelector((state) => state.reviews.reviews);
  const twoReviews = reviews.slice(0, 2);
  const moreReviews = reviews.slice(0, 5);

  const [clickMore, setClickMore] = useState(false);
  const handleClickMore = () => {
    setClickMore(true);
  };

  const nameUser = useInput();
  const newReviewText = useInput();
  const newReviewStars = useInput(1);

  const handleMoreStars = (event) => {
    event.preventDefault();
    let newValue;
    if (newReviewStars.value < 5) {
      newValue = parseInt(newReviewStars.value + 1);
      newReviewStars.setValue(newValue);
    }
  };
  const handleLessStars = (event) => {
    event.preventDefault();
    let newValue;
    if (newReviewStars.value > 1) {
      newValue = parseInt(newReviewStars.value - 1);
      newReviewStars.setValue(newValue);
    }
  };

  const handleSubmitReview = (event) => {
    event.preventDefault();
    //EL NOMBRE INGRESADO QUEDA GUARDADO EN nameUser.value
    //EL TEXTO DE LA REVIEW QUEDA GUARDADA EN newReviewText.value
    //LAS ESTRELLAS DE LA REVIEW QUEDAN GUARDADAS EN newReviewStars.value

    //PENDIENTE RESOLVER SI CLIENTE QUIERE DARLE FUNCIONALIDAD AL BOTÓN
  };
  const isLoading = useSelector((state) => state.products.isLoading);
  if (isLoading) {
    return <div>Loading reviews...</div>;
  }

  return (
    <Box sx={{ bg: "#F8F8F5", p: 5 }}>
      <Box my={5}>
        <Flex>
          <Text fontWeight={"bold"} fontSize={"15"} color={"primary"}>
            STORE REVIEW
          </Text>
          <Spacer />
          <Rating
            readonly
            initialRating={"5"}
            fullSymbol={
              <FontAwesomeIcon
                icon={fullStar}
                size="sm"
                style={{ color: "#FDB32B" }}
              />
            }
          />
        </Flex>
      </Box>
      <Box>
        {!clickMore
          ? twoReviews.map((review) => (
              <Center key={review.id}>
                <OpinionCard key={review.id} reviews={review} />
              </Center>
            ))
          : moreReviews.map((review) => (
              <Center key={review.id}>
                <OpinionCard key={review.id} reviews={review} />
              </Center>
            ))}
      </Box>
      <Box onClick={handleClickMore} textAlign={"center"}>
        {!clickMore ? (
          <Button
            sx={{
              bg: "#D2D7FD",
              color: "primary",
              borderRadius: "30px",
              height: "48px",
              px: 10,
              fontWeight: "normal",
              fontSize: "sm",
            }}
          >
            show more
          </Button>
        ) : (
          <></>
        )}
      </Box>
      <Text
        sx={{
          fontWeight: "bold",
          fontSize: "15",
          color: "primary",
          pt: 9,
          pb: 6,
        }}
      >
        LEAVE YOUR REVIEW
      </Text>
      <HStack>
        <Rating
          readonly
          style={{ marginBottom: "10px", paddingTop: "6px" }}
          emptySymbol={
            <FontAwesomeIcon
              icon={emptyStar}
              size="lg"
              style={{ color: "#FDB32B" }}
            />
          }
          fullSymbol={
            <FontAwesomeIcon
              icon={fullStar}
              size="lg"
              style={{ color: "#FDB32B" }}
            />
          }
          initialRating={newReviewStars.value}
        />
        <Button
          sx={{
            bg: "primary",
            color: "secondary",
            borderRadius: "30px",
            fontWeight: "normal",
            fontSize: "sm",
          }}
          onClick={handleLessStars}
        >
          -
        </Button>
        <Button
          sx={{
            bg: "primary",
            color: "secondary",
            borderRadius: "30px",
            fontWeight: "normal",
            fontSize: "sm",
          }}
          onClick={handleMoreStars}
        >
          +
        </Button>
      </HStack>
      <Box textAlign={"center"}>
        <Input
          type="text"
          placeholder="name"
          {...nameUser}
          sx={{
            mb: 2,
            mt: 4,
            color: "#22488B",
            borderRadius: "2rem",
            bg: "white",
          }}
        />
        <Textarea
          type="text"
          placeholder="type your review here"
          {...newReviewText}
          sx={{
            my: 2,
            color: "#22488B",
            borderRadius: "2rem",
            bg: "white",
          }}
        />
        <SecondaryButton
          style={{ margin: "10px" }}
          onClick={handleSubmitReview}
        >
          Submit
        </SecondaryButton>
      </Box>
    </Box>
  );
};
