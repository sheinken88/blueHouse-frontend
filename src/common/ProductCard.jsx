import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

export const ProductCard = (item) => {
  console.log("SOY ITEM", item.item);

  return (
    <Card sx={{ width: 322.1, height: 475.62, border: "none" }}>
      <CardMedia
        component="img"
        height={"321.79"}
        width={"321.79"}
        image={item.item.images[0].src}
        alt={item.item.slug}
      />
      <CardContent>
        <Typography color={"rgba(37, 71, 135, 1)"} height={65}>
          {item.item.name}
        </Typography>
        <Typography
          fontSize={28}
          fontWeight={"bold"}
          color={"rgba(37, 71, 135, 1)"}
        >
          € {item.item.price}
        </Typography>

        <Typography
          fontSize={20}
          fontWeight={"bold"}
          color={"rgba(179, 188, 245, 1)"}
        >
          {item.item.shipping_class}
        </Typography>
      </CardContent>
    </Card>
  );
};
