import { Box, Stack, Typography } from "@mui/material";
import { sectionStyles } from "../style";
import AppIcon from "../../../images/AppIcon";
import Image from "next/image";
import { getSection1Styles } from "./styles";
import { getImagePath } from "@/app/utils";

const Section1 = () => {
  const classes = getSection1Styles();
  return (
    <Stack sx={sectionStyles.common.container}>
      <Stack sx={classes.container}>
        <Typography sx={classes.appName}>Isometria</Typography>
        <Box sx={classes.appLogo}>
          <AppIcon />
        </Box>
      </Stack>
      <Stack sx={classes.contentContainer}>
        <Stack sx={classes.leftSubsection}>
          <Typography sx={classes.heading}>
            Unleash Your Creativity, One Tile at a Time!
          </Typography>
          <Typography sx={classes.subHeading}>
            Isometria is the ultimate tool for artists, designers, and
            enthusiasts to craft beautiful isometric art effortlessly. Designed
            for iPad, this app combines precision and creativity with powerful
            features like adjustable grid sizes, vibrant color picking, and
            intuitive drawing tools.
          </Typography>
          <Typography sx={classes.comingSoom}>
            Coming Soon on the App Store
          </Typography>
        </Stack>
        <Stack sx={classes.rightSubsection}>
          <Image
            src={getImagePath("/images/MainPreview.png")}
            alt="Isometria Preview"
            layout="intrinsic"
            width={600} // Provide the width you know
            height={500}
          />
        </Stack>
      </Stack>
    </Stack>
  );
};

export default Section1;
