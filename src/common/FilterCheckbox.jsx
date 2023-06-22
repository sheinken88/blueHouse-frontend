import {
  Stack,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
  Checkbox,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { ImageMenuItem } from "./ImageMenuItem";
import { useSelector, useDispatch } from "react-redux";
import React, { useEffect, useState } from "react";
import { fetchSubCategories } from "../state/thunks/categoriesThunks";
import he from "he";

export const FilterCheckbox = ({ category }) => {
  const dispatch = useDispatch();
  const subCategories = useSelector((state) => state.categories.subCategories);

  let subCat = [];
  subCategories.map((subcategory) => {
    if (!subCat.includes(subcategory) && subcategory.parent === category.id) {
      subCat.push(subcategory);
    }
  });

  useEffect(() => {
    dispatch(fetchSubCategories(category.id));
  }, [dispatch]);

  const [checkedItems, setCheckedItems] = useState([]);

  useEffect(() => {
    setCheckedItems(new Array(subCat.length).fill(false));
  }, []);

  const handleCheckboxChange = (index, isChecked) => {
    const updatedCheckedItems = [...checkedItems];
    updatedCheckedItems[index] = isChecked;
    setCheckedItems(updatedCheckedItems);
  };

  const handleParentCheckboxChange = (isChecked) => {
    const updatedCheckedItems = checkedItems.map(() => isChecked);
    setCheckedItems(updatedCheckedItems);
  };

  const getSelectedValues = () => {
    const parentCheckboxId = category.id;
    const selectedSubCategories = subCat
      .filter((subCategory, index) => checkedItems[index])
      .map((subCategory) => subCategory.id);

    return {
      parentCheckboxId,
      selectedSubCategories,
    };
  };

  return (
    <>
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
          <AccordionButton>
            <ImageMenuItem category={category} />
            <Checkbox
              isChecked={checkedItems.every(Boolean)}
              isIndeterminate={
                checkedItems.some(Boolean) && !checkedItems.every(Boolean)
              }
              onChange={(e) => handleParentCheckboxChange(e.target.checked)}
            >
              {he.decode(category.name)}
            </Checkbox>
          </AccordionButton>
          <Stack pl={20} mt={1} spacing={1}>
            {subCat.map((subCategory, index) => (
              <AccordionPanel key={subCategory.id}>
                <Checkbox
                  isChecked={checkedItems[index]}
                  onChange={(e) =>
                    handleCheckboxChange(index, e.target.checked)
                  }
                >
                  {he.decode(subCategory.name)}
                </Checkbox>
              </AccordionPanel>
            ))}
          </Stack>
        </AccordionItem>
      </Accordion>
    </>
  );
};
