"use client";
import { IconButton, Stack, Typography } from "@mui/material";
import { sectionStyles } from "../style";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import Image from "next/image";
import { getSection3Styles } from "./style";
import { getImagePath } from "@/app/utils";

const Section3 = () => {
  const classes = getSection3Styles();

  const handleMailtoClick = () => {
    const email = "theillustrator2001@gmail.com";
    const subject = "Isometria";
    const body = "Isometria";
    window.location.href = `mailto:${email}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
  };

  return (
    <Stack sx={sectionStyles.common.container}>
      <Stack sx={classes.container}>
        <Typography sx={classes.connect}>Connect</Typography>
        <Stack sx={classes.contentContainer}>
          <Stack sx={classes.mailIconContainer}>
            <IconButton onClick={handleMailtoClick}>
              <MailOutlineIcon sx={classes.mailIcon} />
            </IconButton>
          </Stack>
          <Stack sx={classes.imagePreview}>
            <Image
              src={getImagePath("/images/MainPreview.png")}
              alt="Isometria Preview"
              layout="intrinsic"
              width={600}
              height={500}
            />
          </Stack>
        </Stack>
        <Typography sx={classes.ccText}>cc Isometria 2025</Typography>
      </Stack>
    </Stack>
  );
};

export default Section3;
