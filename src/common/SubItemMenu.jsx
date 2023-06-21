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
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchSubCategories } from "../state/thunks/categoriesThunks";

export const SubItemMenu = ({ category }) => {
  const dispatch = useDispatch();
  const subCategories = useSelector((state) => state.categories.subCategories);

  useEffect(() => {
    dispatch(fetchSubCategories(category.id));
  }, [dispatch]);

  let categoryName = category.name.split("amp;");
  categoryName = categoryName.join("");

  let subCat = [];
  subCategories.map((subcategory) => {
    if (!subCat.includes(subcategory) && subcategory.parent === category.id) {
      subCat.push(subcategory);
    }
  });

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
            <Box pl={10} flex="1" textAlign="left">
              {categoryName}
            </Box>
            <AccordionIcon sx={{ w: "30%" }} />
          </AccordionButton>
        </h2>
        {subCat.map((subCategory) => (
          <AccordionPanel
            key={category.id}
            as={Link}
            to="/"
            sx={{ fontSize: 12, pb: "2px", pl: 10 }}
          >
            {subCategory.name}
          </AccordionPanel>
        ))}
      </AccordionItem>
    </Accordion>
  );
};
