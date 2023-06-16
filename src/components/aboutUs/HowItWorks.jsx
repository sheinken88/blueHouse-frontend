import {
  Box,
  Image,
  Text,
  useMediaQuery,
  VStack,
  Wrap,
} from "@chakra-ui/react";
import Carousel from "react-multi-carousel";
import HowItWorksPicture1 from "../../assets/how_it_works_picture1.svg";
import HowItWorksPicture2 from "../../assets/how_it_works_picture2.svg";
import HowItWorksPicture3 from "../../assets/how_it_works_picture3.svg";
import HowItWorksPicture4 from "../../assets/how_it_works_picture4.svg";

export const HowItWorks = () => {
  const [mobileDesign] = useMediaQuery("(max-width: 425px)");

  const responsive = {
    desktop: {
      breakpoint: { max: 9000, min: 3501 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 3500, min: 0 },
      items: 1,
    },
  };

  return (
    <>
      <Box
        sx={{
          textAlign: "center",
          pt: 10,
          bg: "#D2D7FD",
        }}
      >
        <Text sx={{ fontSize: 30, fontWeight: "bold", color: "primary" }}>
          How it Works
        </Text>
      </Box>
      {mobileDesign ? (
        <Box sx={{ pb: "2rem", bg: "#D2D7FD", pt: 10, alignItems: "center" }}>
          <Carousel
            responsive={responsive}
            removeArrowOnDeviceType={["tablet", "mobile"]}
            keyBoardControl={true}
            infinite={false}
            focusOnSelect={true}
            swipeable={true}
            showDots={true}
          >
            <VStack
              sx={{
                textAlign: "center",
                color: "primary",
                px: "3rem",
              }}
            >
              <Box>
                <Image
                  src={HowItWorksPicture1}
                  sx={{ mb: 4, height: "10rem", width: "10rem" }}
                />
              </Box>
              <Text sx={{ mb: 2, fontWeight: "semibold", fontSize: 15 }}>
                Step 1: Curation of Vendors
              </Text>
              <Text sx={{ mb: "3rem", fontSize: 12 }}>
                Discover products that align with our values of Vegan, Fair &
                Safe working conditions, and Cruelty-Free through our vendor
                curation process. Each seller fills out our Sustainability
                Statement, sharing their production details and challenges.
              </Text>
            </VStack>
            <VStack
              sx={{
                textAlign: "center",
                color: "primary",
                px: "3rem",
              }}
            >
              <Box>
                <Image
                  src={HowItWorksPicture2}
                  sx={{ mb: 4, height: "10rem", width: "10rem" }}
                />
              </Box>
              <Text sx={{ mb: 2, fontWeight: "semibold", fontSize: 15 }}>
                Step 2: Discover and Explore
              </Text>
              <Text sx={{ fontSize: 12 }}>
                Browse our online marketplace to discover a diverse range of
                products from european sellers. Explore different categories or
                use the search engine to find items that interest you.
              </Text>
            </VStack>
            <VStack
              sx={{
                textAlign: "center",
                color: "primary",
                px: "3rem",
              }}
            >
              <Box>
                <Image
                  src={HowItWorksPicture3}
                  sx={{ mb: 4, height: "10rem", width: "10rem" }}
                />
              </Box>
              <Text sx={{ mb: 2, fontWeight: "semibold", fontSize: 15 }}>
                Step 3: Filter and Evaluate
              </Text>
              <Text sx={{ fontSize: 12 }}>
                Use our filtering options to refine your product search. Narrow
                down results based on price range, brands, or our sustainability
                values indicated by the Blue Labels. This helps you make an
                informed decision before making a purchase.
              </Text>
            </VStack>
            <VStack
              sx={{
                textAlign: "center",
                color: "primary",
                px: "3rem",
              }}
            >
              <Box>
                <Image
                  src={HowItWorksPicture4}
                  sx={{ mb: 4, height: "10rem", width: "10rem" }}
                />
              </Box>
              <Text sx={{ mb: 2, fontWeight: "semibold", fontSize: 15 }}>
                Step 4: Secure Purchase & Feedback
              </Text>
              <Text sx={{ fontSize: 12 }}>
                Make secure purchases using trusted payment gateways. Remember,
                if you purchase from multiple sellers, shipping costs may add
                up. Create an account to provide valuable feedback on the
                product or seller, helping our community grow and assisting
                others in their search.
              </Text>
            </VStack>
          </Carousel>
        </Box>
      ) : (
        <Wrap
          spacing="3rem"
          justify="center"
          sx={{ pb: "14rem", bg: "#D2D7FD", pt: 10 }}
        >
          <VStack
            sx={{
              height: "8rem",
              width: "16rem",
              textAlign: "center",
              color: "primary",
            }}
          >
            <Box>
              <Image
                src={HowItWorksPicture1}
                sx={{ mb: 4, height: "140px", width: "140px" }}
              />
            </Box>
            <Text sx={{ mb: 2, fontWeight: "semibold", fontSize: 14 }}>
              Step 1: Curation of Vendors
            </Text>
            <Text sx={{ fontSize: 10 }}>
              Discover products that align with our values of Vegan, Fair & Safe
              working conditions, and Cruelty-Free through our vendor curation
              process. Each seller fills out our Sustainability Statement,
              sharing their production details and challenges.
            </Text>
          </VStack>
          <VStack
            sx={{
              height: "8rem",
              width: "16rem",
              textAlign: "center",
              color: "primary",
            }}
          >
            <Box>
              <Image
                src={HowItWorksPicture2}
                sx={{ mb: 4, height: "140px", width: "140px" }}
              />
            </Box>
            <Text sx={{ mb: 2, fontWeight: "semibold", fontSize: 14 }}>
              Step 2: Discover and Explore
            </Text>
            <Text sx={{ fontSize: 10 }}>
              Browse our online marketplace to discover a diverse range of
              products from european sellers. Explore different categories or
              use the search engine to find items that interest you.
            </Text>
          </VStack>
          <VStack
            sx={{
              height: "8rem",
              width: "16rem",
              textAlign: "center",
              color: "primary",
            }}
          >
            <Box>
              <Image
                src={HowItWorksPicture3}
                sx={{ mb: 4, height: "140px", width: "140px" }}
              />
            </Box>
            <Text sx={{ mb: 2, fontWeight: "semibold", fontSize: 14 }}>
              Step 3: Filter and Evaluate
            </Text>
            <Text sx={{ fontSize: 10 }}>
              Use our filtering options to refine your product search. Narrow
              down results based on price range, brands, or our sustainability
              values indicated by the Blue Labels. This helps you make an
              informed decision before making a purchase.
            </Text>
          </VStack>
          <VStack
            sx={{
              height: "8rem",
              width: "16rem",
              textAlign: "center",
              color: "primary",
            }}
          >
            <Box>
              <Image
                src={HowItWorksPicture4}
                sx={{ mb: 4, height: "140px", width: "140px" }}
              />
            </Box>
            <Text sx={{ mb: 2, fontWeight: "semibold", fontSize: 14 }}>
              Step 4: Secure Purchase & Feedback
            </Text>
            <Text sx={{ fontSize: 10 }}>
              Make secure purchases using trusted payment gateways. Remember, if
              you purchase from multiple sellers, shipping costs may add up.
              Create an account to provide valuable feedback on the product or
              seller, helping our community grow and assisting others in their
              search.
            </Text>
          </VStack>
        </Wrap>
      )}
    </>
  );
};
