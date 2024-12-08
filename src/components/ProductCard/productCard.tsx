"use client";
import React from "react";
import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Stack,
  Typography,
} from "@mui/material";
import Image from "next/image";
import { PRBox, PRTypography, StarBox, TiteTypography } from "./styled";


interface ProductCardProps {
    project: {
      price: string;
      title: string;
      subtitle: string;
      image: string;
    };
  }


  const ProductCard: React.FC<ProductCardProps> = ({ project }) => {
  return (
    <Card sx={{  borderRadius: "0px 0px 8px 8px",bgcolor:"#FFFFFF"}} elevation={0}>
      <Stack>
        <Image
          className="responsive-card"
          style={{ margin: "auto" }}
          src={project.image}
          width={350}
          height={330}
          alt=""
        />
      </Stack>

      <CardContent>
        <TiteTypography variant="h6"> {project.title}</TiteTypography>
        <PRBox>
          <Box >
            <PRTypography variant="subtitle1">{project.subtitle}</PRTypography>
          </Box>{" "}
          <Box >
            <TiteTypography variant="subtitle1"> Rp{project.price}</TiteTypography>
          </Box>{" "}
         
        </PRBox>
       
      </CardContent>
    </Card>
  )
}

export default ProductCard
