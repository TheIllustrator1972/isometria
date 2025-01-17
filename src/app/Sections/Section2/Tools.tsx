"use client";
import { styles } from "@/styles";
import ColumnSelectNormal from "./../../../images/ColumnSelectNormal";
import RowSelectNormal from "./../../../images/RowSelectNormal";
import SingleSelectNormal from "./../../../images/SingleSelectNormal";
import RectangularDragNormal from "./../../../images/RectangularDragNormal";
import SizePicker from "./../../../images/SizePicker";
import FreeDragNormal from "./../../../images/FreeDragNormal";
import InfoIcon from "./../../../images/InfoIcon";
import SavePhoto from "./../../../images/SavePhoto";

import { IconButton, Stack } from "@mui/material";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
import ArrowCircleLeftIcon from "@mui/icons-material/ArrowCircleLeft";
import { useMemo, useState } from "react";
import ToolSection, { ToolConfig } from "./ToolSection";

const toolsConfig: ToolConfig[] = [
  {
    id: 1,
    title: "Tap Tools",
    subtext:
      "Effortlessly build your isometric masterpiece! Select and place shapes with a simple tap to design your grid art in seconds. Precision has never been this easy.",
    images: [
      SingleSelectNormal,
      ColumnSelectNormal,
      RowSelectNormal,
      RectangularDragNormal,
    ],
  },
  {
    id: 2,
    title: "Drag Tools",
    subtext:
      "Isometria's drag tools include Rectangular Drag for aligned grid movement and Free Drag for unrestricted adjustments.",
    images: [FreeDragNormal, RectangularDragNormal],
  },
  {
    id: 3,
    title: "Size Change",
    subtext:
      "The size change tool lets users seamlessly resize elements on the grid, ensuring precise scaling while preserving proportions.",
    images: [SizePicker],
  },
  {
    id: 4,
    title: "Info Button",
    subtext:
      "The info section provides detailed guidance for each tool, offering quick tips and insights to enhance your creative workflow.",
    images: [InfoIcon],
  },
  {
    id: 5,
    title: "Export your art",
    subtext:
      "Export your creations effortlessly in high-quality PNG format, ready to share or showcase.",
    images: [SavePhoto],
  },
];

const classes = {
  container: {
    width: "100%",
    height: "60%",
    justifyContent: "space-between",
    minHeight: "400px",
    "@media (max-width: 1024px)": {
      minHeight: "420px",
    },
    "@media (max-width: 600px)": {
      height: "100%",
      minHeight: "270px",
    },
  },
  leftRightButtonsContianer: { display: "flex", flexDirection: "row", gap: 1 },
  arrowIcon: { fontSize: "30px", color: styles.color.white },
};

const Tools = () => {
  const [currentStep, setCurrentStep] = useState(1);

  const currentConfig: ToolConfig = useMemo(
    () =>
      toolsConfig?.find((config) => config?.id == currentStep) ||
      toolsConfig[0],
    [currentStep]
  );

  return (
    <Stack sx={classes.container}>
      <ToolSection config={currentConfig} />
      <Stack sx={classes.leftRightButtonsContianer}>
        <IconButton
          sx={{ pl: 0 }}
          onClick={() => {
            if (currentStep === 1) {
              setCurrentStep(toolsConfig.length);
            } else {
              setCurrentStep((prev) => prev - 1);
            }
          }}
        >
          <ArrowCircleLeftIcon sx={classes.arrowIcon} />
        </IconButton>
        <IconButton
          onClick={() =>
            setCurrentStep((prev) => (prev % toolsConfig.length) + 1)
          }
        >
          <ArrowCircleRightIcon sx={classes.arrowIcon} />
        </IconButton>
      </Stack>
    </Stack>
  );
};

export default Tools;
