import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { ImageMenuItem } from "./ImageMenuItem";

export const SubItemMenu = ({ category }) => {
  return (
    <Accordion
      sx={{
        mt: 1,
        w: "100%",
        borderColor: "white" /*COLOR DE FONDO DEL FIGMA: "#F8F8F5"*/,
        color: "primary",
      }}
      allowMultiple
    >
      <AccordionItem>
        <h2>
          <AccordionButton>
            <ImageMenuItem category={category} />
            <Box
              pl={10}
              flex="1"
              textAlign="left"
              dangerouslySetInnerHTML={{ __html: category.name }}
            >
              {/* {category.name} */}
            </Box>
            <AccordionIcon sx={{ w: "30%" }} />
          </AccordionButton>
        </h2>
        <AccordionPanel
          as={Link}
          to="/"
          sx={{ fontSize: 12, pb: "2px", pl: 20 }}
        >
          About Us
        </AccordionPanel>
        <AccordionPanel
          as={Link}
          to="/"
          sx={{ fontSize: 12, pb: "2px", pl: 20 }}
        >
          Blue Labels
        </AccordionPanel>

        <AccordionPanel
          as={Link}
          to="/"
          sx={{ fontSize: 12, pb: "2px", pl: 20 }}
        >
          Our Values
        </AccordionPanel>
        <AccordionPanel
          as={Link}
          to="/"
          sx={{ fontSize: 12, pb: "2px", pl: 20 }}
        >
          Store List
        </AccordionPanel>
        <AccordionPanel as={Link} to="/" sx={{ fontSize: 12, pb: 2, pl: 20 }}>
          Blog
        </AccordionPanel>
        <AccordionPanel as={Link} to="/" sx={{ fontSize: 12, pb: 2, pl: 20 }}>
          Our Glossary
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
  );
};
