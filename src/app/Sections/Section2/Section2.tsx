import { Stack, Typography } from "@mui/material";
import { sectionStyles } from "../style";
import Image from "next/image";
import Tools from "./Tools";
import { getSection2Styles } from "./styles";

const Section2 = () => {
  const classes = getSection2Styles();

  return (
    <Stack
      sx={{
        ...sectionStyles.common.container,
        "@media (max-width: 600px)": {
          height: "100%",
        },
      }}
    >
      <Stack sx={classes.container}>
        <Typography sx={classes.title}>
          Explore Isometria&apos;s tools to simplify and elevate your isometric
          art.
        </Typography>
        <Stack sx={classes.contentContainer}>
          <Stack sx={classes.imagePreviewContainer}>
            <Image
              src="/images/iPad_LandScape_Preview.png"
              alt="Isometria Preview"
              layout="intrinsic"
              width={600} // Provide the width you know
              height={500}
            />
          </Stack>
          <Stack sx={classes.toolsSectionContainer}>
            <Tools />
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default Section2;
