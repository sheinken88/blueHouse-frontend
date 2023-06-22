import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Button,
  HStack,
  Text,
  VStack,
  useBreakpointValue,
} from "@chakra-ui/react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Link } from "react-router-dom";
import { PrimaryButton } from "../../common/Buttons";

export const InfoDisplay = ({ product }) => {
  console.log("product: ", product);
  const description = product.description;
  const howIsMadeData = product.meta_data.find(
    (data) => data.key.replace(/[^a-zA-Z]/g, "") === "howismade"
  );
  const howIsMade = howIsMadeData ? howIsMadeData.value : "";
  const productCareData = product.meta_data.find(
    (data) => data.key.replace(/[^a-zA-Z]/g, "") === "productcare"
  );
  const productCare = productCareData ? productCareData.value : "";

  const howToUseData = product.meta_data.find(
    (data) => data.key.replace(/[^a-zA-Z]/g, "") === "howtouse"
  );
  const howToUse = howToUseData ? howToUseData.value : "";

  const sustainabilityData = product.meta_data.find(
    (data) => data.key.replace(/[^a-zA-Z]/g, "") === "sustainability"
  );
  const sustainability = sustainabilityData ? sustainabilityData.value : "";

  const sizeChartData = product.meta_data.find(
    (data) => data.key.replace(/[^a-zA-Z]/g, "") === "sizechart"
  );
  const sizeChart = sizeChartData ? sizeChartData.value : "";

  const returnAndRefundData = product.meta_data.find(
    (data) => data.key.replace(/[^a-zA-Z]/g, "") === "return&refund"
  );
  const returnAndRefund = returnAndRefundData ? returnAndRefundData.value : "";

  const storeName = product.store.shop_name;
  const storeCity = product.store.address.city;
  const storeCountry = product.store.address.country;
  const storeURL = product.store.url;

  const responsive = {
    desktop: {
      breakpoint: { max: 3500, min: 1441 },
      items: 5,
    },
    laptop: {
      breakpoint: { max: 769, min: 1440 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 768, min: 426 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 425, min: 0 },
      items: 2,
    },
  };

  const breakpoint = useBreakpointValue({
    base: "full",
    sm: "full",
    md: "full",
    lg: "50%",
    xl: "50%",
  });

  return (
    <>
      <Accordion allowToggle width={breakpoint}>
        {description && (
          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box
                  as="span"
                  flex="1"
                  textAlign="left"
                  color="primary"
                  fontWeight="bold"
                >
                  DESCRIPTION
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel
              color="primary"
              p={4}
              dangerouslySetInnerHTML={{
                __html: description,
              }}
            ></AccordionPanel>
          </AccordionItem>
        )}

        {howIsMade && (
          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box
                  as="span"
                  flex="1"
                  textAlign="left"
                  color="primary"
                  fontWeight="bold"
                >
                  HOW PRODUCT IS MADE
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel
              pb={4}
              color="primary"
              p={4}
              dangerouslySetInnerHTML={{
                __html: howIsMade,
              }}
            ></AccordionPanel>
          </AccordionItem>
        )}
        {productCare && (
          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box
                  as="span"
                  flex="1"
                  textAlign="left"
                  color="primary"
                  fontWeight="bold"
                >
                  PRODUCT CARE
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel
              pb={4}
              color="primary"
              p={4}
              dangerouslySetInnerHTML={{
                __html: productCare,
              }}
            ></AccordionPanel>
          </AccordionItem>
        )}
        {howToUse && (
          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box
                  as="span"
                  flex="1"
                  textAlign="left"
                  color="primary"
                  fontWeight="bold"
                >
                  HOW TO USE
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel
              pb={4}
              color="primary"
              p={4}
              dangerouslySetInnerHTML={{
                __html: howToUse,
              }}
            ></AccordionPanel>
          </AccordionItem>
        )}
        {sustainability && (
          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box
                  as="span"
                  flex="1"
                  textAlign="left"
                  color="primary"
                  fontWeight="bold"
                >
                  SUSTAINABILITY
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel
              pb={4}
              color="primary"
              p={4}
              dangerouslySetInnerHTML={{
                __html: sustainability,
              }}
            ></AccordionPanel>
          </AccordionItem>
        )}
        {sizeChart && (
          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box
                  as="span"
                  flex="1"
                  textAlign="left"
                  color="primary"
                  fontWeight="bold"
                >
                  SIZE CHART
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel
              pb={4}
              color="primary"
              p={4}
              dangerouslySetInnerHTML={{
                __html: sizeChart,
              }}
            ></AccordionPanel>
          </AccordionItem>
        )}
        {returnAndRefund && (
          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box
                  as="span"
                  flex="1"
                  textAlign="left"
                  color="primary"
                  fontWeight="bold"
                >
                  RETURN & REFUND
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel
              pb={4}
              color="primary"
              p={4}
              dangerouslySetInnerHTML={{
                __html: returnAndRefund,
              }}
            ></AccordionPanel>
          </AccordionItem>
        )}
        {storeName && (
          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box
                  as="span"
                  flex="1"
                  textAlign="left"
                  color="primary"
                  fontWeight="bold"
                >
                  MEET THE STORE
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel
              pb={4}
              color="primary"
              p={4}
              // dangerouslySetInnerHTML={{
              //   __html: returnAndRefund,
              // }}
            >
              <VStack>
                <Text color="primary" fontWeight="bold">
                  {storeName}
                </Text>
                <Text>
                  {storeCity}, {storeCountry}
                </Text>
                <Text
                  textDecoration="underline"
                  color="primary"
                  as={Link}
                  to={storeURL}
                >
                  See store
                </Text>
                <PrimaryButton>Contact Store</PrimaryButton>
              </VStack>
            </AccordionPanel>
          </AccordionItem>
        )}
      </Accordion>
    </>
  );
};
