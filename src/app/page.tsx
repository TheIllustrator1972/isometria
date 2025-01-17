import { Stack } from "@mui/material";
import Section1 from "./Sections/Section1/Section1";
import Section3 from "./Sections/Section3/Section3";
import Section2 from "./Sections/Section2/Section2";

export default function Home() {
  return (
    <Stack sx={{ width: "100%", display: "flex", boxSizing: "border-box" }}>
      <Section1 />
      <Section2 />
      <Section3 />
    </Stack>
  );
}
