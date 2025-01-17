import { styles } from "@/styles";
import { Box, Stack, Typography } from "@mui/material";
import React from "react";

export type ToolConfig = {
  id: number;
  title: string;
  subtext: string;
  images: React.FC[];
};

interface ToolSectionProps {
  config: ToolConfig;
}

const classes = {
  container: {
    width: "80%",
    gap: 2,
    "@media (max-width: 1024px)": {
      width: "100%",
    },
    "@media (max-width: 600px)": {
      width: "100%",
    },
  },
  title: {
    color: styles.color.white,
    fontFamily: "Lato",
    fontWeight: 500,
    fontSize: "36px",
    "@media (max-width: 600px)": {
      fontSize: "24px",
    },
  },
  imagesContainer: { display: "flex", flexDirection: "row", gap: 2 },
  imageContainer: {
    width: "80px",
    height: "80px",
    "@media (max-width: 1024px)": {
      width: "40px",
      height: "40px",
    },
    "@media (max-width: 600px)": {
      width: "40px",
      height: "40px",
    },
  },
  subtext: {
    color: styles.color.white,
    fontFamily: "Lato",
    fontWeight: 300,
    fontSize: "24px",
    "@media (max-width: 600px)": {
      fontSize: "18px",
    },
  },
};

const ToolSection = (props: ToolSectionProps) => {
  const { config } = props;
  return (
    <Stack key={config.title} sx={classes.container}>
      <Typography sx={classes.title}>{config.title}</Typography>
      <Stack sx={classes.imagesContainer}>
        {config?.images?.map((SvgIcon, index) => (
          <Box key={index} sx={classes.imageContainer}>
            <SvgIcon />
          </Box>
        ))}
      </Stack>
      <Typography sx={classes.subtext}>{config.subtext}</Typography>
    </Stack>
  );
};

export default ToolSection;
