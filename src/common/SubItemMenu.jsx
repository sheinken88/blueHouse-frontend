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
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { fetchSubCategories } from "../state/thunks/categoriesThunks";
import { fetchProductsByCategory } from "../state/thunks/productsThunks";
import he from "he"

export const SubItemMenu = ({ category }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const subCategories = useSelector((state) => state.categories.subCategories);

  useEffect(() => {
    dispatch(fetchSubCategories(category.id));
  }, [dispatch]);

  let subCat = [];
  subCategories.map((subcategory) => {
    if (!subCat.includes(subcategory) && subcategory.parent === category.id) {
      subCat.push(subcategory);
    }
  });

  const handleSubCategorySelector = (event) => {  
    subCategories.map((subcategory)=>{
      if (event.target.innerHTML === subcategory.name) {
        dispatch(fetchProductsByCategory(subcategory.id));
        navigate(`/productdesk/`);
      }
    })
  };

  return (
    <Accordion
      sx={{
        mt: 1,
        w: "100%",
        borderColor: "white",
        color: "primary",
      }}
      allowMultiple
    >
      <AccordionItem>
        <h2>
          <AccordionButton>
            <ImageMenuItem category={category} />
            <Box pl={10} flex="1" textAlign="left">
              {he.decode(category.name)}
            </Box>
            <AccordionIcon sx={{ w: "30%" }} />
          </AccordionButton>
        </h2>
        {subCat.map((subcategory) => (
          <AccordionPanel
            key={category.id}
            onClick={handleSubCategorySelector}
            sx={{ fontSize: 12, pb: "2px", pl: 10 }}
          >
            {subcategory.name}
          </AccordionPanel>
        ))}
      </AccordionItem>
    </Accordion>
  );
};
