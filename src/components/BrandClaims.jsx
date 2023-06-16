import { Box, Text, Wrap, WrapItem, useMediaQuery } from "@chakra-ui/react";
import { BlueLabelsBox } from "../common/BlueLabelsBox";
import blueLabels from "../utils/blue_labels";
import { useState } from "react";

export const BrandClaims = () => {
  const [mobileDesign] = useMediaQuery("(max-width: 425px)");

  const SixBlueLabels = blueLabels.slice(0, 5);
  const AllBlueLabels = blueLabels;
  const [clickMore, setClickMore] = useState(false);

  const handleClickMore = () => {
    setClickMore(true);
  };

  return (
    <Box sx={{ my: 12, color: "primary" }}>
      <Text
        sx={{
          textAlign: "center",
          fontSize: 34,
          fontWeight: "semibold",
        }}
      >
        What we look for brands
      </Text>
      <Text
        sx={{
          textAlign: "center",
          fontSize: 12,
        }}
      >
        Our Blue Labels.
      </Text>
      {mobileDesign ? (
        <Wrap spacing="20px" justify="center" sx={{ my: 7 }}>
          {!clickMore
            ? SixBlueLabels.map((bluelabel) => (
                <WrapItem key={bluelabel.id}>
                  <BlueLabelsBox
                    name={bluelabel.name}
                    color={bluelabel.color}
                  />
                </WrapItem>
              ))
            : AllBlueLabels.map((bluelabel) => (
                <WrapItem key={bluelabel.id}>
                  <BlueLabelsBox
                    key={bluelabel.id}
                    name={bluelabel.name}
                    color={bluelabel.color}
                  />
                </WrapItem>
              ))}
        </Wrap>
      ) : (
        <Wrap spacing="20px" justify="center" sx={{ px: 40, my: 12 }}>
          {!clickMore
            ? SixBlueLabels.map((bluelabel) => (
                <WrapItem key={bluelabel.id}>
                  <BlueLabelsBox
                    name={bluelabel.name}
                    color={bluelabel.color}
                  />
                </WrapItem>
              ))
            : AllBlueLabels.map((bluelabel) => (
                <WrapItem key={bluelabel.id}>
                  <BlueLabelsBox
                    key={bluelabel.id}
                    name={bluelabel.name}
                    color={bluelabel.color}
                  />
                </WrapItem>
              ))}
        </Wrap>
      )}
      <Box onClick={handleClickMore}>
        {!clickMore ? (
          <Text
            sx={{
              textAlign: "center",
              fontSize: 16,
              fontWeight: "semibold",
              textDecoration: "underline",
            }}
          >
            See more
          </Text>
        ) : (
          <></>
        )}
      </Box>
    </Box>
  );
};
